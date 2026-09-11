const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const pages = [
  ...fs.readdirSync(root).filter((name) => name.endsWith('.html')).map((name) => path.join(root, name)),
  ...fs.readdirSync(path.join(root, 'blogs')).filter((name) => name.endsWith('.html')).map((name) => path.join(root, 'blogs', name)),
];

const footerText = 'Nederbelg Hypotheek is een specialistische informatiebron voor Nederlanders die een woning in België willen kopen of financieren met Nederlands inkomen.';

for (const file of pages) {
  let html = fs.readFileSync(file, 'utf8');
  const blogHref = html.includes('<a href="/blog.html">Blog</a>') ? '/blog.html' : 'blog.html';
  const aboutHref = blogHref.startsWith('/') ? '/over-ons.html' : 'over-ons.html';

  if (!html.includes(`href="${aboutHref}"`)) {
    const blogLink = `<a href="${blogHref}">Blog</a>`;
    const replacement = `${blogLink}\n      <a href="${aboutHref}">Over ons</a>`;
    if (!html.includes(blogLink)) {
      throw new Error(`Geen Blog-link gevonden in ${path.relative(root, file)}`);
    }
    html = html.replaceAll(blogLink, replacement);
  }

  if (!html.includes(footerText)) {
    const footerStart = html.indexOf('<footer>');
    const firstFooterParagraph = html.slice(footerStart).match(/<p style="margin-top:16px; max-width:36ch;[^>]*>[\s\S]*?<\/p>/i);
    if (!firstFooterParagraph || footerStart === -1) {
      throw new Error(`Geen geschikte footerbeschrijving gevonden in ${path.relative(root, file)}`);
    }
    const sourceParagraph = `<p class="footer-source" style="margin-top:12px; max-width:36ch; color:#A9B8D2; font-size:14px; line-height:1.6;">${footerText}</p>`;
    const absoluteStart = footerStart + firstFooterParagraph.index;
    const absoluteEnd = absoluteStart + firstFooterParagraph[0].length;
    html = html.slice(0, absoluteEnd) + `\n      ${sourceParagraph}` + html.slice(absoluteEnd);
  }

  html = html.replace(
    /<li><a href="([^"\n]*blog\.html)">Blog<\/a>\s*<a href="([^"\n]*over-ons\.html)">Over ons<\/a><\/li>/g,
    '<li><a href="$1">Blog</a></li>\n        <li><a href="$2">Over ons</a></li>',
  );

  fs.writeFileSync(file, html);
}

console.log(`Navigatie en footer bijgewerkt in ${pages.length} pagina's.`);
