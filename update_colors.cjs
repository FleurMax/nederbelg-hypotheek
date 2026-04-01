const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), filelist)
      : filelist.concat(path.join(dir, file));
  });
  return filelist;
}

const files = walkSync('./src').filter(f => f.endsWith('.jsx') || f.endsWith('.css'));

files.forEach(file => {
  if (file.includes('ThemeSwitcher.jsx')) return; // handled separately
  
  let content = fs.readFileSync(file, 'utf8');

  // Replace base hex colors, but NOT when preceded by `--c-xyz: `
  content = content.replace(/(?<!--c-[a-z-]+:\s*)#0F212E/gi, 'var(--c-navy)');
  content = content.replace(/(?<!--c-[a-z-]+:\s*)#1A2C38/gi, 'var(--c-navy-light)');
  content = content.replace(/(?<!--c-[a-z-]+:\s*)#2F4553/gi, 'var(--c-blue-accent)');
  content = content.replace(/(?<!--c-[a-z-]+:\s*)#00E676/gi, 'var(--c-green)');
  content = content.replace(/(?<!--c-[a-z-]+:\s*)#00C853/gi, 'var(--c-green-hover)');
  content = content.replace(/(?<!--c-[a-z-]+:\s*)#F97316/gi, 'var(--c-orange)');
  content = content.replace(/(?<!--c-[a-z-]+:\s*)#25D366/gi, 'var(--c-green)'); // whatsapp 
  content = content.replace(/(?<!--c-[a-z-]+:\s*)#3B82F6/gi, 'var(--c-orange)'); // calendly

  // Replace rgba strings with color-mix
  // rgba(0, 230, 118, 0.2) -> color-mix(in srgb, var(--c-green) 20%, transparent)
  content = content.replace(/rgba\(\s*0\s*,\s*230\s*,\s*118\s*,\s*([\d.]+)\s*\)/g, (match, p1) => {
      const pct = Math.round(parseFloat(p1) * 100);
      return `color-mix(in srgb, var(--c-green) ${pct}%, transparent)`;
  });
  content = content.replace(/rgba\(\s*15\s*,\s*33\s*,\s*46\s*,\s*([\d.]+)\s*\)/g, (match, p1) => {
      const pct = Math.round(parseFloat(p1) * 100);
      return `color-mix(in srgb, var(--c-navy) ${pct}%, transparent)`;
  });
  content = content.replace(/rgba\(\s*249\s*,\s*115\s*,\s*22\s*,\s*([\d.]+)\s*\)/g, (match, p1) => {
      const pct = Math.round(parseFloat(p1) * 100);
      return `color-mix(in srgb, var(--c-orange) ${pct}%, transparent)`;
  });
  content = content.replace(/rgba\(\s*37\s*,\s*211\s*,\s*102\s*,\s*([\d.]+)\s*\)/g, (match, p1) => {
      const pct = Math.round(parseFloat(p1) * 100);
      return `color-mix(in srgb, var(--c-green) ${pct}%, transparent)`;
  });
  content = content.replace(/rgba\(\s*59\s*,\s*130\s*,\s*246\s*,\s*([\d.]+)\s*\)/g, (match, p1) => {
      const pct = Math.round(parseFloat(p1) * 100);
      return `color-mix(in srgb, var(--c-orange) ${pct}%, transparent)`;
  });

  fs.writeFileSync(file, content);
  console.log('Updated with variables:', file);
});
