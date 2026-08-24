# Nederbelg Hypotheek — Logo & Media-pakket

Alle logo-varianten voor gebruik op de website, in e-mailhandtekeningen en op social media.

## SVG (schaalbaar, gebruik overal waar mogelijk)
- `logo-mark.svg` — hoofdvariant (blauwe tegel, wit huis, oranje deur)
- `logo-mark-invert.svg` — inverted (witte tegel, navy huis) — voor op donkere achtergrond
- `logo-mark-white.svg` — monochroom wit silhouet — voor op elke donkere kleur
- `logo-mark-navy.svg` — monochroom navy silhouet — voor op licht
- `logo-full.svg` — mark + wordmerk (horizontaal)
- `logo-full-white.svg` — mark + wordmerk in wit (voor donkere achtergrond)
- `og-image.svg` — social preview (1200×630)
- `linkedin-cover.svg` — LinkedIn banner (1584×396)

## PNG (transparante achtergrond)
- `logo-mark-32.png`, `-64.png`, `-128.png`, `-192.png`, `-256.png`, `-512.png`, `-1024.png` — mark in oplopende resoluties
- `logo-mark-invert-512.png`, `logo-mark-white-512.png`, `logo-mark-navy-512.png` — mono-varianten
- `logo-full.png` (960 px breed) — mark + wordmerk
- `logo-full-white.png` (960 px breed) — voor donkere achtergrond

## Website-icons
- `favicon.ico` — 16+32 px multi-res favicon
- `favicon-16.png`, `logo-mark-32.png` — losse PNG-favicons
- `apple-touch-icon.png` — 180×180 voor iOS home-screen
- `android-chrome-192.png`, `android-chrome-512.png` — PWA icons

## Social media
- `social-avatar-400.jpg`, `social-avatar-800.jpg` — vierkante avatar (Instagram, LinkedIn profielfoto, Facebook page-avatar)
- `og-image.png` en `og-image.jpg` — social preview 1200×630 (Facebook, LinkedIn, Twitter/X)
- `linkedin-cover.png` en `linkedin-cover.jpg` — LinkedIn-company-page banner

## Facebook cover
- `facebook-cover.jpg` en `facebook-cover.png` — 1702×630 (2× retina, aanbevolen upload)
- `facebook-cover-851x315.png` — exacte native Facebook-grootte
- `facebook-cover.svg` — schaalbare broncode
Upload direct in Facebook → "Coverfoto bijwerken". Alle tekst en het logo staan
binnen de veilige zone, dus het staat perfect op zowel desktop als mobiel.

## Waar plaats je wat op de website?
Zet in de `<head>` van je site (nadat je de bestanden op je server hebt geüpload):
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/logo-mark-32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192.png">
<meta property="og:image" content="https://www.nederbelghypotheek.be/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

## Kleurcodes (huisstijl)
- Merk-navy: `#0F3D91`
- Accent-oranje: `#F26722`
- Wit: `#FFFFFF`
- Dieper navy (achtergrond): `#0A1A33`
- Zeer licht blauw: `#EEF3FB`
