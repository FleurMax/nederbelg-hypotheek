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
if ((cardArea.match(/class="blog-card"/g) || []).length !== articleFiles.length) errors.push('blog.html: aantal kaarten wijkt af van aantal artikelen');
if (/<svg|<img/i.test(cardArea)) errors.push('blog.html: artikelkaarten bevatten nog iconen of afbeeldingen');

const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
for (const canonical of canonicals.keys()) {
  if (!sitemap.includes(`<loc>${canonical}</loc>`)) errors.push(`sitemap.xml: URL ontbreekt: ${canonical}`);
}
if ((sitemap.match(/<loc>/g) || []).length !== canonicals.size) errors.push('sitemap.xml: aantal URLs wijkt af van aantal canonicals');

const robots = fs.readFileSync(path.join(root, 'robots.txt'), 'utf8');
if (!robots.includes('Sitemap: https://nederbelghypotheek.be/sitemap.xml')) errors.push('robots.txt: correcte sitemapverwijzing ontbreekt');

if (fs.existsSync(path.join(root, 'extra_blog'))) errors.push('extra_blog bestaat nog; artikelen horen uitsluitend in blogs');

if (errors.length) {
  console.error(`Sitecontrole mislukt (${errors.length}):\n- ${errors.join('\n- ')}`);
  process.exit(1);
}

console.log(`Sitecontrole geslaagd: ${htmlFiles.length} pagina's, ${articleFiles.length} blogartikelen en ${canonicals.size} sitemap-URLs.`);
