# Nederbelg Hypotheek

Statische website voor [nederbelghypotheek.be](https://nederbelghypotheek.be), gepubliceerd via Netlify.

## Inhoud

- `index.html` — homepage en hypotheekcheck
- `blog.html` — blogoverzicht met alle artikelen in gelijke kaarten
- `blogs/` — 23 afzonderlijke blogartikelen
- `privacybeleid.html`, `cookiebeleid.html`, `algemene-voorwaarden.html` — juridische pagina's
- `sitemap.xml` en `robots.txt` — zoekmachinebestanden
- `logo/` — logo's, favicons en sociale afbeelding
- `netlify.toml` — build- en domeinredirects
- `NETLIFY-DNS-EN-GOOGLE-HANDLEIDING.md` — stappen die handmatig in Netlify en Google moeten gebeuren

## Lokaal controleren

```text
npm run check
npm run build
```

De build werkt eerst de SEO-metadata, Article-schema's, het blogoverzicht en de sitemap bij. Daarna controleert hij interne links, canonicals, social metadata, structured data, robots en de volledigheid van de sitemap. Alleen publieke websitebestanden komen in `dist/` terecht.

## Publicatie

Een push naar de gekoppelde productiebranch op GitHub start automatisch een Netlify-deploy. Het hoofddomein is `https://nederbelghypotheek.be` zonder `www`. De extra handmatige domein- en Search Console-stappen staan in `NETLIFY-DNS-EN-GOOGLE-HANDLEIDING.md`.

## Contactinstellingen

- WhatsApp: `https://wa.me/32495326101`
- E-mail: `info@nederbelghypotheek.be`
- KBO: `BE0716.875.332`

Laat wijzigingen aan de juridische teksten altijd toetsen door een bevoegde jurist.
