const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const rootPages = fs.readdirSync(root)
  .filter((name) => name.endsWith('.html'))
  .map((name) => path.join(root, name));
const blogPages = fs.readdirSync(path.join(root, 'blogs'))
  .filter((name) => name.endsWith('.html'))
  .map((name) => path.join(root, 'blogs', name));

const urls = [...rootPages, ...blogPages].map((file) => {
  const html = fs.readFileSync(file, 'utf8');
  const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/i) || [])[1];
  if (!canonical) throw new Error(`Geen canonical gevonden in ${path.relative(root, file)}`);
  const published = (html.match(/"datePublished"\s*:\s*"([^"]+)"/i) || [])[1];
  return { canonical, lastmod: published || '2026-09-05' };
}).sort((a, b) => a.canonical.localeCompare(b.canonical));

const escapeXml = (value) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ canonical, lastmod }) => `  <url>
    <loc>${escapeXml(canonical)}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(root, 'sitemap.xml'), sitemap);
console.log(`Sitemap bijgewerkt met ${urls.length} pagina's.`);
