const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const rootPages = fs.readdirSync(root)
  .filter((name) => name.endsWith('.html'))
  .map((name) => path.join(root, name));
const blogPages = fs.readdirSync(path.join(root, 'blogs'))
  .filter((name) => name.endsWith('.html'))
  .map((name) => path.join(root, 'blogs', name));

const revisionDate = '2026-09-11';

const urls = [...rootPages, ...blogPages].map((file) => {
  const html = fs.readFileSync(file, 'utf8');
  const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/i) || [])[1];
  if (!canonical) throw new Error(`Geen canonical gevonden in ${path.relative(root, file)}`);
  const relativeFile = path.relative(root, file).replace(/\\/g, '/');
  const isBlog = relativeFile.startsWith('blogs/');
  const name = path.basename(file);

  let priority = '0.5';
  if (name === 'index.html') priority = '1.0';
  else if (name === 'blog.html' || name === 'over-ons.html') priority = '0.8';
  else if (isBlog && name === 'blog-hypotheek-belgie-nederlander.html') priority = '0.9';
  else if (isBlog) priority = '0.7';
  else if (['privacybeleid.html', 'cookiebeleid.html', 'algemene-voorwaarden.html'].includes(name)) priority = '0.3';

  return { canonical, lastmod: revisionDate, priority };
}).sort((a, b) => a.canonical.localeCompare(b.canonical));

const escapeXml = (value) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ canonical, lastmod, priority }) => `  <url>
    <loc>${escapeXml(canonical)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(root, 'sitemap.xml'), sitemap);
console.log(`Sitemap bijgewerkt met ${urls.length} pagina's.`);
