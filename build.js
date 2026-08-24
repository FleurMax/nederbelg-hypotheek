const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

const items = fs.readdirSync(__dirname);
for (const item of items) {
  if (['dist', '.git', 'node_modules', '.agents', '.system_generated'].includes(item)) continue;
  const src = path.join(__dirname, item);
  const dest = path.join(distDir, item);
  fs.cpSync(src, dest, { recursive: true });
}

console.log('Build successful: files copied to dist/');
