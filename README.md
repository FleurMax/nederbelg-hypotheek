# Nederbelg Hypotheek — website (DEFINITIEVE LEVERING)

Deze map bevat alle bestanden om live te gaan. Upload de volledige inhoud van deze map
naar de root van je webserver — de bestandsnamen en mappenstructuur zijn al correct.

## Structuur

```
/                                      → root van je website
├── index.html                         → homepage
├── blog.html                          → blog-index
├── blog-vlaamse-registratierechten-en-notariskosten.html
├── blog-hypotheekrenteaftrek-belgie-2026.html
├── privacybeleid.html
├── cookiebeleid.html
├── algemene-voorwaarden.html
└── logo/                              → 41 logo- en beeldbestanden
    └── hero-photo.jpg                 → LET OP: nodig voor de hero-foto
```

## Status van de juridische pagina's

- ✓ KBO-nummer BE0716.875.332 ingevuld (AV + privacybeleid)
- ✓ GEEN FSMA-vermeldingen — de teksten stellen expliciet dat Nederbelg Hypotheek
  géén kredietmakelaar/kredietbemiddelaar is en enkel contactgegevens doorgeeft
  aan een samenwerkende erkende hypotheekmakelaar
- ✓ Lead-verzamelings-model volledig uitgeschreven in AV §5 en privacybeleid §1/§3/§5
- ✓ Privacy-toestemmingsregels onder beide formulieren op de homepage
- → AANBEVOLEN: laat AV + privacybeleid + cookiebeleid vóór livegang toetsen door
  een jurist. De teksten zijn zorgvuldig opgesteld maar zijn standaardteksten.

## Nog te doen door jou (2 dingen)

### 1. Netlify Forms (Automatisch gekoppeld)
De twee formulieren (wizard in de hero + lead-formulier onderaan) zijn volledig
geconfigureerd voor Netlify Forms (`lead-aanvraag` en `hypotheekcheck-wizard`).
Zodra de site op Netlify staat, komen alle aanvragen direct binnen in je
Netlify dashboard onder het tabblad **Forms**, en kun je optioneel e-mailnotificaties instellen.

### 2. Oude Netlify-canonical fixen
Als je oude site op nederbelg-hypotheek.netlify.app nog live is: zet daar een
301-redirect naar https://www.nederbelghypotheek.be/. De canonical-tags in deze
nieuwe bestanden staan al goed.

## Favicons & social — voeg toe aan de <head> van index.html

```html
<link rel="icon" type="image/x-icon" href="/logo/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/logo/logo-mark-32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/logo/apple-touch-icon.png">
<meta property="og:image" content="https://www.nederbelghypotheek.be/logo/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

## Social media assets (in /logo/)

- `facebook-cover.jpg` — Facebook-omslagfoto (1702×630, safe-zone-proof)
- `linkedin-cover.jpg` — LinkedIn-bedrijfsbanner (1584×396)
- `og-image.jpg` — link-preview bij het delen van je site (1200×630)
- `social-avatar-400.jpg` / `-800.jpg` — vierkante profielfoto's
- `logo-vertical.png` — verticaal logo voor visitekaartjes/print
- `logo-full.png` — horizontaal logo met wordmerk

## Huisstijl

- Merk-navy: `#0F3D91` · CTA-oranje: `#F26722` · Diep navy: `#0A1A33`
- Licht blauw (secties): `#EEF3FB` / `#F2F6FD`
- Fonts (Google Fonts): **Fraunces** (hero-titel, sectie-koppen, logo-wordmerk),
  **Archivo** (sub-koppen), **Inter** (body)
- Logo: dak-lijnen-symbool in navy tegel; wordmerk "Nederbelg" navy + "Hypotheek"
  oranje italic (Fraunces)

## WhatsApp

Overal gekoppeld aan https://wa.me/32495326101 — bij nummerwijziging: zoek en
vervang die string in alle .html-bestanden.

Succes met de livegang! 🚀
