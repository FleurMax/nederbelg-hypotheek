const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const blogDir = path.join(root, 'blogs');
const socialImage = 'https://nederbelghypotheek.be/logo/og-image.jpg';
const modifiedDate = '2026-09-05';

const optimized = {
  'blog-belgische-bank-nederlands-inkomen-beoordeling.html': {
    title: 'Nederlands inkomen bij Belgische banken | Nederbelg Hypotheek',
    description: 'Belgische banken beoordelen Nederlands loon anders. Ontdek welke inkomsten meetellen, welke documenten nodig zijn en hoe je je hypotheekdossier versterkt.',
  },
  'blog-belgische-personenbelasting-nederlanders.html': {
    title: 'Belgische personenbelasting voor Nederlanders | Nederbelg Hypotheek',
    description: 'Wonen in België als Nederlander? Lees hoe de Belgische personenbelasting, gemeentebelasting en het belastingverdrag dubbele heffing voorkomen.',
  },
  'blog-bod-uitbrengen-belgie.html': {
    title: 'Bod uitbrengen in België als Nederlander | Nederbelg Hypotheek',
    description: 'Een bod in België is na aanvaarding bindend. Lees hoe bieden, de opschortende voorwaarde en het compromis werken en hoe je jezelf beschermt.',
  },
  'blog-bouwgrond-kopen-belgie-zelf-bouwen.html': {
    title: 'Bouwgrond kopen in België: complete gids | Nederbelg Hypotheek',
    description: 'Bouwgrond kopen in België? Lees over bestemming, registratierechten, vergunningen, nutsvoorzieningen en financiering in schijven.',
  },
  'blog-erfbelasting-woning-nalaten-belgie.html': {
    title: 'Erfbelasting op een woning in België | Nederbelg Hypotheek',
    description: 'Lees hoe de Belgische erfbelasting op een woning werkt, welke regionale verschillen gelden en waarom tijdige successieplanning belangrijk is.',
  },
  'blog-hoeveel-kun-je-lenen-belgie.html': {
    title: 'Hoeveel kun je lenen in België? | Nederbelg Hypotheek',
    description: 'Hoeveel kun je lenen in België? Woonquote, quotiteit en residueel inkomen uitgelegd, met rekenvoorbeelden voor Nederlandse kopers.',
  },
  'blog-kosten-koper-belgie-compleet-overzicht.html': {
    title: 'Kosten koper in België: compleet overzicht | Nederbelg Hypotheek',
    description: 'Alle bijkomende kosten bij een huis in België: registratierechten, notariskosten, kredietakte, schatting, verzekeringen en bankkosten.',
  },
  'blog-kosten-levensonderhoud-belgie-nederland.html': {
    title: 'Levensonderhoud België vs. Nederland | Nederbelg Hypotheek',
    description: 'Is België duurder dan Nederland? Vergelijk boodschappen, energie, horeca en woonlasten voor een realistisch beeld van je maandbudget.',
  },
  'blog-meest-gestelde-vragen-kopen-belgie.html': {
    title: 'Huis kopen in België: 10 vragen | Nederbelg Hypotheek',
    description: 'Tien antwoorden over een huis kopen in België: lenen, belasting, spaargeld, bieden, zorgverzekering en meer voor Nederlandse kopers.',
  },
  'blog-notaris-belgie-rol-en-keuze.html': {
    title: 'Notaris in België: rol, kosten en keuze | Nederbelg Hypotheek',
    description: 'Wat doet een Belgische notaris bij de aankoop, wat kost het en waarom kies je zelf een notaris? Heldere uitleg voor Nederlandse kopers.',
  },
  'blog-overwaarde-nederlandse-woning-belgie.html': {
    title: 'Nederlandse overwaarde gebruiken in België | Nederbelg Hypotheek',
    description: 'Je Nederlandse overwaarde inzetten voor een woning in België? Lees hoe eigen inbreng, verkoop en financiering over de grens samenhangen.',
  },
  'blog-tweede-verblijf-investeringspand-belgie.html': {
    title: 'Tweede verblijf kopen in België | Nederbelg Hypotheek',
    description: 'Een tweede woning of investeringspand in België kopen? Lees over registratierechten, financiering, jaarlijkse belastingen en verhuurregels.',
  },
  'blog-vlaanderen-of-wallonie-waar-kopen.html': {
    title: 'Vlaanderen of Wallonië: waar kopen? | Nederbelg Hypotheek',
    description: 'Vlaanderen of Wallonië? Vergelijk taal, woningprijzen, registratierechten en voorzieningen en kies het Belgische gewest dat bij je past.',
  },
};

const monthFallbacks = {
  'januari 2026': '2026-01-01',
  'augustus 2026': '2026-08-01',
  'september 2026': '2026-09-01',
};

for (const name of fs.readdirSync(blogDir).filter((file) => file.endsWith('.html'))) {
  const file = path.join(blogDir, name);
  let html = fs.readFileSync(file, 'utf8');
  const settings = optimized[name];

  if (settings) {
    html = html
      .replace(/<title>[\s\S]*?<\/title>/i, `<title>${settings.title}</title>`)
      .replace(/<meta name="description" content="[^"]*">/i, `<meta name="description" content="${settings.description}">`)
      .replace(/<meta property="og:title" content="[^"]*">/i, `<meta property="og:title" content="${settings.title}">`)
      .replace(/<meta property="og:description" content="[^"]*">/i, `<meta property="og:description" content="${settings.description}">`)
      .replace(/<meta name="twitter:title" content="[^"]*">/i, `<meta name="twitter:title" content="${settings.title}">`)
      .replace(/<meta name="twitter:description" content="[^"]*">/i, `<meta name="twitter:description" content="${settings.description}">`);
  }

  const match = (expression, fallback = '') => (html.match(expression) || [])[1] || fallback;
  const title = match(/<title>([\s\S]*?)<\/title>/i).replace(/\s*·\s*Nederbelg Hypotheek\s*$/i, '');
  const headline = match(/<h1>([\s\S]*?)<\/h1>/i).replace(/<[^>]+>/g, '').trim() || title;
  const description = match(/<meta name="description" content="([^"]+)"/i);
  const canonical = match(/<link rel="canonical" href="([^"]+)"/i);
  const existingSchema = match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  let publishedDate = '';

  if (existingSchema) {
    try {
      publishedDate = JSON.parse(existingSchema).datePublished || '';
    } catch {
      throw new Error(`Ongeldige bestaande JSON-LD in ${name}`);
    }
  }
  if (!publishedDate) {
    const visibleMonth = match(/<div class="meta">[\s\S]*?<span>([^<]+2026)<\/span>[\s\S]*?<\/div>/i).trim().toLowerCase();
    publishedDate = monthFallbacks[visibleMonth] || modifiedDate;
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: socialImage,
    inLanguage: 'nl',
    datePublished: publishedDate,
    dateModified: modifiedDate,
    author: { '@type': 'Organization', name: 'Nederbelg Hypotheek', url: 'https://nederbelghypotheek.be' },
    publisher: {
      '@type': 'Organization',
      name: 'Nederbelg Hypotheek',
      url: 'https://nederbelghypotheek.be',
      logo: { '@type': 'ImageObject', url: 'https://nederbelghypotheek.be/logo/logo-mark-512.png' },
    },
    mainEntityOfPage: canonical,
  };
  const schemaTag = `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n  </script>`;

  if (existingSchema) {
    html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, schemaTag);
  } else {
    html = html.replace('</head>', `  ${schemaTag}\n</head>`);
  }

  fs.writeFileSync(file, html);
}

console.log(`SEO en Article-schema bijgewerkt voor ${fs.readdirSync(blogDir).filter((file) => file.endsWith('.html')).length} artikelen.`);
