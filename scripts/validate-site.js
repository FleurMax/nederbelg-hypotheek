const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const htmlFiles = [
  ...fs.readdirSync(root).filter((name) => name.endsWith('.html')).map((name) => path.join(root, name)),
  ...fs.readdirSync(path.join(root, 'blogs')).filter((name) => name.endsWith('.html')).map((name) => path.join(root, 'blogs', name)),
];
const errors = [];
const canonicals = new Map();

const get = (html, expression) => (html.match(expression) || [])[1];
const resolveLocalLink = (sourceFile, href) => {
  const clean = decodeURIComponent(href.split('#')[0].split('?')[0]);
  if (!clean || /^(https?:|mailto:|tel:|javascript:)/i.test(clean)) return null;
  return path.normalize(clean.startsWith('/')
    ? path.join(root, clean.slice(1))
    : path.join(path.dirname(sourceFile), clean));
};

for (const file of htmlFiles) {
  const relative = path.relative(root, file);
  const html = fs.readFileSync(file, 'utf8');
  const title = get(html, /<title>([\s\S]*?)<\/title>/i);
  const description = get(html, /<meta name="description" content="([^"]+)"/i);
  const canonical = get(html, /<link rel="canonical" href="([^"]+)"/i);
  const ogUrl = get(html, /<meta property="og:url" content="([^"]+)"/i);
  const ogImage = get(html, /<meta property="og:image" content="([^"]+)"/i);
  const twitterUrl = get(html, /<meta name="twitter:url" content="([^"]+)"/i);
  const twitterImage = get(html, /<meta name="twitter:image" content="([^"]+)"/i);

  if (!title) errors.push(`${relative}: title ontbreekt`);
  if (!description) errors.push(`${relative}: meta description ontbreekt`);
  if (!canonical) errors.push(`${relative}: canonical ontbreekt`);
  if (canonical && canonical.includes('://www.')) errors.push(`${relative}: canonical bevat www`);
  if (canonical && ogUrl !== canonical) errors.push(`${relative}: og:url wijkt af van canonical`);
  if (canonical && twitterUrl !== canonical) errors.push(`${relative}: twitter:url wijkt af van canonical`);
  if (!ogImage || ogImage.includes('://www.')) errors.push(`${relative}: og:image ontbreekt of bevat www`);
  if (!twitterImage || twitterImage.includes('://www.')) errors.push(`${relative}: twitter:image ontbreekt of bevat www`);
  if (canonical) {
    if (canonicals.has(canonical)) errors.push(`${relative}: dubbele canonical met ${canonicals.get(canonical)}`);
    canonicals.set(canonical, relative);
  }

  if (relative.startsWith(`blogs${path.sep}`)) {
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
    let articleSchema;
    for (const schema of schemas) {
      try {
        const parsed = JSON.parse(schema[1]);
        if (['Article', 'BlogPosting'].includes(parsed['@type'])) articleSchema = parsed;
      } catch (error) {
        errors.push(`${relative}: ongeldige JSON-LD (${error.message})`);
      }
    }
    if (!articleSchema) errors.push(`${relative}: Article-schema ontbreekt`);
    if (articleSchema && articleSchema.mainEntityOfPage !== canonical) errors.push(`${relative}: Article-schema wijkt af van canonical`);
    if (articleSchema && articleSchema.image !== ogImage) errors.push(`${relative}: Article-schema gebruikt niet dezelfde afbeelding`);
    if (articleSchema && (!articleSchema.datePublished || !articleSchema.dateModified)) errors.push(`${relative}: publicatie- of wijzigingsdatum ontbreekt in Article-schema`);
  }

  for (const link of html.matchAll(/href="([^"]+)"/gi)) {
    const target = resolveLocalLink(file, link[1]);
    if (!target) continue;
    const exists = fs.existsSync(target) || fs.existsSync(`${target}.html`) || fs.existsSync(path.join(target, 'index.html'));
    if (!exists) errors.push(`${relative}: kapotte interne link ${link[1]}`);
  }
}

const blogIndex = fs.readFileSync(path.join(root, 'blog.html'), 'utf8');
const articleFiles = fs.readdirSync(path.join(root, 'blogs')).filter((name) => name.endsWith('.html'));
for (const article of articleFiles) {
  if (!blogIndex.includes(`href="blogs/${article}"`)) errors.push(`blog.html: artikel ontbreekt in overzicht: ${article}`);
}
const cardArea = (blogIndex.match(/<!-- BLOG_CARDS_START -->([\s\S]*?)<!-- BLOG_CARDS_END -->/) || [])[1] || '';
if ((cardArea.match(/class="blog-card(?:\s|")/g) || []).length !== articleFiles.length) errors.push('blog.html: aantal kaarten wijkt af van aantal artikelen');
if (/<svg|<img/i.test(cardArea)) errors.push('blog.html: artikelkaarten bevatten nog iconen of afbeeldingen');

const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
for (const canonical of canonicals.keys()) {
  if (!sitemap.includes(`<loc>${canonical}</loc>`)) errors.push(`sitemap.xml: URL ontbreekt: ${canonical}`);
}
if ((sitemap.match(/<loc>/g) || []).length !== canonicals.size) errors.push('sitemap.xml: aantal URLs wijkt af van aantal canonicals');

const robots = fs.readFileSync(path.join(root, 'robots.txt'), 'utf8');
if (!robots.includes('Sitemap: https://nederbelghypotheek.be/sitemap.xml')) errors.push('robots.txt: correcte sitemapverwijzing ontbreekt');
for (const crawler of ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'Google-Extended', 'PerplexityBot', 'ClaudeBot', 'Claude-Web', 'anthropic-ai', 'Applebot-Extended', 'Bytespider', 'CCBot', 'cohere-ai']) {
  if (!robots.includes(`User-agent: ${crawler}\nAllow: /`)) errors.push(`robots.txt: toestemming ontbreekt voor ${crawler}`);
}

const footerSource = 'Nederbelg Hypotheek is een specialistische informatiebron voor Nederlanders die een woning in België willen kopen of financieren met Nederlands inkomen.';
for (const file of htmlFiles) {
  const relative = path.relative(root, file);
  const html = fs.readFileSync(file, 'utf8');
  if (!html.includes(footerSource)) errors.push(`${relative}: footerbrontekst ontbreekt`);
  if (!/href="\/?over-ons\.html"/.test(html)) errors.push(`${relative}: link naar Over ons ontbreekt`);
  if (/96%/i.test(html)) errors.push(`${relative}: verwijderde 96%-claim is nog aanwezig`);
}

const homepage = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const faqSection = (homepage.match(/<section id="faq"[\s\S]*?<section id="contact">/i) || [])[0] || '';
const visibleFaqCount = (faqSection.match(/<details class="reveal"/g) || []).length;
const faqScripts = [...homepage.matchAll(/<script type="application\/ld\+json">\s*([\s\S]*?)<\/script>/gi)];
let faqSchema;
for (const entry of faqScripts) {
  try {
    const parsed = JSON.parse(entry[1]);
    if (parsed['@type'] === 'FAQPage') faqSchema = parsed;
  } catch (error) {
    errors.push(`index.html: ongeldige FAQ JSON-LD (${error.message})`);
  }
}
if (visibleFaqCount !== 19) errors.push(`index.html: verwacht 19 zichtbare FAQ-vragen, vond ${visibleFaqCount}`);
if (!faqSchema || faqSchema.mainEntity?.length !== 19) errors.push('index.html: FAQ-schema bevat niet precies 19 vragen');
if (!blogIndex.includes('class="blog-card blog-card--pillar" href="blogs/blog-hypotheek-belgie-nederlander.html"')) errors.push('blog.html: uitgelichte pillar-pagina ontbreekt');
if ((sitemap.match(/<changefreq>monthly<\/changefreq>/g) || []).length !== canonicals.size) errors.push('sitemap.xml: changefreq ontbreekt bij een of meer URLs');
if ((sitemap.match(/<priority>[\d.]+<\/priority>/g) || []).length !== canonicals.size) errors.push('sitemap.xml: prioriteit ontbreekt bij een of meer URLs');

if (fs.existsSync(path.join(root, 'extra_blog'))) errors.push('extra_blog bestaat nog; artikelen horen uitsluitend in blogs');

if (errors.length) {
  console.error(`Sitecontrole mislukt (${errors.length}):\n- ${errors.join('\n- ')}`);
  process.exit(1);
}

console.log(`Sitecontrole geslaagd: ${htmlFiles.length} pagina's, ${articleFiles.length} blogartikelen en ${canonicals.size} sitemap-URLs.`);
