const fs = require('fs');
const path = require('path');

require('./scripts/update-article-seo');
require('./scripts/update-blog-index');
require('./scripts/generate-sitemap');
require('./scripts/validate-site');

const distDir = path.join(__dirname, 'dist');
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

const publicDirectories = ['blogs', 'logo'];
const publicRootExtensions = new Set(['.html', '.xml', '.txt', '.ico', '.png', '.jpg', '.svg']);

for (const item of fs.readdirSync(__dirname, { withFileTypes: true })) {
  const isPublicDirectory = item.isDirectory() && publicDirectories.includes(item.name);
  const isPublicRootFile = item.isFile() && publicRootExtensions.has(path.extname(item.name).toLowerCase());
  if (!isPublicDirectory && !isPublicRootFile) continue;

  const src = path.join(__dirname, item.name);
  const dest = path.join(distDir, item.name);
  fs.cpSync(src, dest, { recursive: true });
}

console.log('Build successful: files copied to dist/');
