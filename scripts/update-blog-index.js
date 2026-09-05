const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const blogDir = path.join(root, 'blogs');
const indexPath = path.join(root, 'blog.html');

const decodeEntities = (value) => value
  .replace(/&amp;/g, '&')
  .replace(/&#39;/g, "'")
  .replace(/&quot;/g, '"');

const articles = fs.readdirSync(blogDir)
  .filter((name) => name.endsWith('.html'))
  .map((name) => {
    const html = fs.readFileSync(path.join(blogDir, name), 'utf8');
    const match = (expression, fallback = '') => (html.match(expression) || [])[1] || fallback;
    const metaParts = [...match(/<div class="meta">([\s\S]*?)<\/div>/i).matchAll(/<span>([\s\S]*?)<\/span>/gi)]
      .map((item) => decodeEntities(item[1].replace(/<[^>]+>/g, '').trim()));

    return {
      name,
      title: match(/<h1>([\s\S]*?)<\/h1>/i).replace(/<[^>]+>/g, '').trim(),
      description: match(/<meta name="description" content="([^"]*)"/i),
      category: decodeEntities(match(/<span class="page-eyebrow">([\s\S]*?)<\/span>/i).replace(/<[^>]+>/g, '').trim()),
      date: match(/"datePublished"\s*:\s*"([^"]+)"/i, '1970-01-01'),
      meta: metaParts.join(' · '),
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title, 'nl'));

const escapeAttribute = (value) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
const escapeText = (value) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const cards = articles.map((article) => `      <a class="blog-card" href="blogs/${article.name}">
        <span class="blog-card-meta">${escapeText(article.category)} · ${escapeText(article.meta)}</span>
        <h2>${escapeText(article.title)}</h2>
        <p>${escapeText(article.description)}</p>
        <span class="blog-card-read">Lees het artikel →</span>
      </a>`).join('\n');

const replacement = `<section class="blog-section">
  <div class="wrap">
    <div class="blog-grid">
<!-- BLOG_CARDS_START -->
${cards}
<!-- BLOG_CARDS_END -->
    </div>
  </div>
</section>

`;

let index = fs.readFileSync(indexPath, 'utf8');
const startMarker = '<!-- BLOG_CARDS_START -->';
const endMarker = '<!-- BLOG_CARDS_END -->';
const markerStart = index.indexOf(startMarker);
const markerEnd = index.indexOf(endMarker);

if (markerStart !== -1 && markerEnd > markerStart) {
  index = index.slice(0, markerStart) + `${startMarker}\n${cards}\n${endMarker}` + index.slice(markerEnd + endMarker.length);
} else {
  const firstSection = index.indexOf('<section class="prose">');
  const ctaSection = index.indexOf('<section class="cta-band">');
  if (firstSection === -1 || ctaSection === -1 || firstSection >= ctaSection) {
    throw new Error('Kon het bestaande blogoverzicht niet vinden.');
  }
  index = index.slice(0, firstSection) + replacement + index.slice(ctaSection);
}
fs.writeFileSync(indexPath, index);

console.log(`Blogoverzicht bijgewerkt met ${articles.length} artikelen.`);
