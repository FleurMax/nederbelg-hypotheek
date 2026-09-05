# Netlify, DNS en Google: nog handmatig uit te voeren

De websitecode is aangepast voor `https://nederbelghypotheek.be` zonder `www`. De code stuurt het `.nl`-domein permanent door, bevat een sitemap en robotsbestand en gebruikt overal dezelfde canonieke URL's. De onderstaande stappen vragen toegang tot Netlify en Google en kunnen daarom niet vanuit de websitecode worden afgerond.

## 1. Hoofddomein in Netlify instellen

1. Open in Netlify het project van Nederbelg Hypotheek.
2. Ga naar **Domain management** → **Production domains**.
3. Controleer dat `nederbelghypotheek.be` aan dit project is gekoppeld.
4. Open **Options** bij `nederbelghypotheek.be` en kies **Set as primary domain** als het nog niet het hoofddomein is.
5. Laat `www.nederbelghypotheek.be` als alternatief domein gekoppeld. Netlify stuurt `www` dan automatisch door naar het hoofddomein. De websitecode bevat hiervoor ook een expliciete 301-regel.

Netlify-documentatie: [meerdere domeinen en een primair domein beheren](https://docs.netlify.com/domains/manage-domains/manage-multiple-domains/).

## 2. `nederbelghypotheek.nl` permanent doorsturen

1. Ga in hetzelfde Netlify-project naar **Domain management** → **Production domains**.
2. Voeg `nederbelghypotheek.nl` toe als **domain alias** als het domein daar nog niet staat.
3. Zorg dat ook `www.nederbelghypotheek.nl` als alias beschikbaar is.
4. Laat de DNS-records van beide namen naar dit Netlify-project wijzen. Bij Netlify DNS wordt dit normaal automatisch gekoppeld; bij een externe DNS-provider volg je de waarden die Netlify bij het domein toont.
5. Na de eerstvolgende geslaagde deploy sturen de regels in `netlify.toml` elke pagina met een **301-redirect** door naar dezelfde pagina op `https://nederbelghypotheek.be`.

Belangrijk: een domeinredirect werkt alleen als het `.nl`-domein aan hetzelfde Netlify-project is toegewezen. Zie [Netlify: domain-level redirects](https://docs.netlify.com/manage/routing/redirects/redirect-options/#domain-level-redirects) en [een domain alias toevoegen](https://docs.netlify.com/manage/domains/configure-domains/add-a-domain-alias/).

## 3. `nederbelg-hypotheek.nl` uitschakelen

De websitecode stuurt dit domein voorlopig met een 301 door naar de `.be`, zodat er nu al geen duplicate content meer wordt aangeboden. De wens is om het domein daarna niet meer door te sturen, maar echt buiten gebruik te stellen.

1. Verwijder `nederbelg-hypotheek.nl` en `www.nederbelg-hypotheek.nl` bij **Production domains** van het Netlify-project.
2. Open daarna de DNS-zone van dit domein.
3. Verwijder alleen de webrecords voor `@` en `www` die naar Netlify of deze website wijzen (A, AAAA, CNAME, ALIAS of NETLIFY-records).
4. Laat het domein wel geregistreerd en verlengen als je wilt voorkomen dat iemand anders het overneemt.
5. Verwijder geen MX-records of andere mailrecords als er e-mail op dit domein wordt gebruikt.

Resultaat: het domein toont geen kopie van de site meer. Controleer vooraf zorgvuldig dat je het domein met koppelteken bewerkt.

## 4. Google Search Console verifiëren via Netlify DNS

1. Open [Google Search Console](https://search.google.com/search-console/).
2. Voeg een nieuwe **Domeinproperty** toe met alleen `nederbelghypotheek.be` (zonder `https://` en zonder `www`).
3. Kies verificatie met een **TXT-record**.
4. Open in Netlify via het teamoverzicht **Domains**, kies `nederbelghypotheek.be` en open de DNS-records.
5. Voeg een nieuw record toe met deze waarden:

   - Type: `TXT`
   - Naam/host: `@` (of leeg als Netlify dat zo toont)
   - Waarde: `google-site-verification=RpSqJNb_t-5lAFeRJYACK8SRbPt9c3FYz_2HQlWIxWI`
   - TTL: standaardwaarde laten staan

6. Sla het record op en klik daarna in Search Console op **Verifiëren**. DNS kan tijd nodig hebben; probeer later opnieuw als Google het record niet meteen ziet.
7. Laat het TXT-record ook na een geslaagde verificatie staan. Google controleert het eigendom later opnieuw.

Google-documentatie: [site-eigendom verifiëren met DNS](https://support.google.com/webmasters/answer/9008080) en [een domeinproperty toevoegen](https://support.google.com/webmasters/answer/34592).

## 5. Sitemap indienen en indexering controleren

1. Open de geverifieerde property `nederbelghypotheek.be` in Search Console.
2. Ga naar **Sitemaps**.
3. Vul `sitemap.xml` in en klik op **Verzenden**.
4. Controleer na verwerking of alle pagina's zonder fouten worden gelezen.
5. Gebruik **URL-inspectie** voor de homepage, de blogpagina en enkele nieuwe artikelen. Vraag alleen indexering aan als Google een pagina nog niet kent.

De sitemap staat live op `https://nederbelghypotheek.be/sitemap.xml`; `robots.txt` verwijst er automatisch naar.

## 6. Bezoekersaantallen bekijken

Search Console toont vooral vertoningen en klikken vanuit Google Zoeken, niet alle websitebezoekers. Voor totale bezoekers is Netlify Project Analytics de eenvoudigste optie zonder extra code of cookie-script:

1. Open het Netlify-project.
2. Ga naar **Metrics** → **Project Analytics**.
3. Kies **Enable Analytics** als het nog niet actief is.
4. Bekijk daar pageviews, unieke bezoekers en populaire pagina's.

Volgens [Netlify Project Analytics](https://docs.netlify.com/manage/monitoring/project-analytics/overview) wordt dit aan de serverkant gemeten en is geen extra websitecode nodig. Als je later Google Analytics 4 wilt gebruiken, is eerst een GA4-meet-ID en een passende cookietoestemming nodig; stuur dan de meet-ID door voordat die code wordt toegevoegd.

## Eindcontrole na DNS-wijzigingen

Controleer in een privévenster:

- `https://nederbelghypotheek.be` opent rechtstreeks.
- `https://www.nederbelghypotheek.be` gaat permanent naar de versie zonder `www`.
- `https://nederbelghypotheek.nl/test` gaat naar `https://nederbelghypotheek.be/test`.
- `nederbelg-hypotheek.nl` toont de site niet meer.
- `https://nederbelghypotheek.be/robots.txt` en `/sitemap.xml` openen.
- Search Console meldt dat het TXT-record is gevonden en de sitemap is verwerkt.
