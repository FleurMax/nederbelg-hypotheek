import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Calendar, ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import { blogPosts } from './Blog';

const blogContent = {
    'vlaamse-registratierechten-en-notariskosten': {
        body: [
            { type: 'lead', text: 'Voor veel Nederlanders is de overstap naar Vlaanderen financieel erg aantrekkelijk, zeker nu de Vlaamse overheid de registratierechten (de Vlaamse overdrachtsbelasting) heeft verlaagd naar slechts 2% voor de enige eigen woning.' },
            { type: 'h2', text: 'De 2% regel: Wat moet je weten?' },
            { type: 'p', text: 'Als je je eerste en enige huis koopt om er zelf te gaan wonen, betaal je over de aankoopsom slechts 2% belasting, dit noemen we de registratierechten. Dit tarief geldt alleen voor natuurlijke personen die de woning in volle eigendom kopen. Het is een enorme stimulans voor wie de grens oversteekt, maar er zit een belangrijke voorwaarde aan vast: de woonplicht.' },
            { type: 'p', text: 'Waar je vroeger alleen de intentie hoefde te hebben om er te gaan wonen, moet je je vanaf 2026 ook echt op het adres domiciliëren (inschrijven) en er minstens één jaar onafgebroken blijven wonen binnen de twee jaar na aankoop van de woning.' },
            { type: 'h2', text: 'De overige notariskosten' },
            { type: 'p', text: 'Naast de 2% registratierechten krijg je te maken met het ereloon van de notaris en de administratieve kosten voor de akte. Reken voor het ereloon op gemiddeld 1% van de koopprijs (dit percentage daalt naarmate de prijs stijgt). Alles bij elkaar moet je in Vlaanderen rekening houden met ongeveer 5% aan totale aankoopkosten bovenop de koopprijs van je woning.' },
            { type: 'h2', text: 'Waarom dit voor Nederlanders belangrijk is' },
            { type: 'p', text: 'In Nederland kun je de kosten koper soms nog meefinancieren. In België moet je deze kosten altijd met eigen spaargeld betalen. Omdat wij gespecialiseerd zijn in grensoverschrijdende verhuizingen, berekenen wij exact hoeveel eigen vermogen je nodig hebt voor de notaris, zodat je niet voor verrassingen komt te staan bij de sleuteloverdracht.' },
        ]
    },
    'hypotheekrenteaftrek-belgie-2026': {
        body: [
            { type: 'lead', text: 'Wonen in een riante Belgische woning, maar ondertussen profiteren van de Nederlandse belastingteruggave? Voor veel Nederlanders die de grens oversteken, klinkt dit als een sprookje, maar in 2026 is het nog steeds de realiteit voor de zogenaamde \'grensarbeider\'.' },
            { type: 'h2', text: 'De 90%-regel: Jouw ticket naar belastingvoordeel' },
            { type: 'p', text: 'Om in Nederland recht te houden op aftrekposten terwijl je over de grens woont, moet je door de Belastingdienst worden aangemerkt als een \'kwalificerend buitenlands belastingplichtige\'. De belangrijkste voorwaarde hiervoor is dat je minstens 90% van je wereldwijde inkomen in Nederland verdient en daar belasting over betaalt.' },
            { type: 'p', text: 'Voldoe je aan deze eis? Dan mag je de rente van je Belgische hypotheek in je Nederlandse belastingaangifte (Box 1) aftrekken. In 2026 is het maximale aftrekpercentage vastgesteld op 37,56%. Dit betekent dat de Nederlandse fiscus flink meebetaalt aan jouw Belgische woongenot.' },
            { type: 'h2', text: 'Nieuw in 2026: Minder bureaucratie' },
            { type: 'p', text: 'Een grote frustratie voor \'Nederbelgen\' was jarenlang de verplichte inkomensverklaring die door de Belgische belastingdienst ondertekend moest worden. Sinds 1 januari 2026 is deze eis versoepeld. Je hoeft niet langer vooraf een fysiek ondertekend formulier uit België te overleggen; je moet simpelweg desgevraagd kunnen aantonen (bijvoorbeeld met loonstroken of aanslagen) dat je aan de 90%-eis voldoet. Dit bespaart een hoop administratieve rompslomp en vertraging bij je aangifte.' },
            { type: 'h2', text: 'Waarom dit een \'no-brainer\' is' },
            { type: 'p', text: 'In Vlaanderen is de zogenaamde \'Woonbonus\' (het Belgische equivalent van renteaftrek) voor nieuwe leningen al enkele jaren afgeschaft. Als je echter in Nederland werkt, heb je een unieke voorsprong: lagere netto maandlasten, een hogere leencapaciteit en je bouwt vermogen op terwijl de Nederlandse fiscus de rente voor zijn rekening neemt.' },
            { type: 'h2', text: 'Let op de kleine lettertjes' },
            { type: 'p', text: 'Niet elke situatie is gelijk. Heb je een partner die in België werkt? Of verdien je een deel van je inkomen als zelfstandige over de grens? Dan kan de 90%-grens in gevaar komen. Wij zijn gespecialiseerd in het begeleiden van Nederlanders bij deze grensoverschrijdende financieringen en zorgen ervoor dat je dossier zo wordt opgebouwd dat je geen euro aan belastingvoordeel laat liggen.' },
        ]
    },
    'verzekeringen-belgie-2026': {
        body: [
            { type: 'lead', text: 'Wie in Nederland een huis koopt, is gewend aan de opstalverzekering en de overlijdensrisicoverzekering. Steek je de grens over naar België? Dan krijg je te maken met de brandverzekering en de schuldsaldoverzekering.' },
            { type: 'p', text: 'Hoewel ze wettelijk niet altijd \'verplicht\' zijn vanuit de overheid, stelt de bank ze in 2026 vrijwel altijd als keiharde voorwaarde voor je hypotheek. Hier lees je wat je als Nederlander moet weten om niet voor verrassingen te staan.' },
            { type: 'h2', text: '1. De Brandverzekering: Meer dan alleen vuur' },
            { type: 'p', text: 'In België noemen we de opstalverzekering een \'brandverzekering\'. Sinds 2026 zijn de voorwaarden in Vlaanderen verder aangescherpt om consumenten beter te beschermen tegen extreme weersomstandigheden. De bank is het onderpand. Daarom eisen zij dat je een brandverzekering afsluit die de volledige herbouwwaarde van het pand dekt. Naast brand ben je in België standaard verzekerd voor waterschade, glasbreuk, stormschade en natuurrampen.' },
            { type: 'h2', text: '2. De Schuldsaldoverzekering: Dé Belgische levensverzekering' },
            { type: 'p', text: 'Dit is de Belgische variant van de overlijdensrisicoverzekering (ORV), maar met een specifieke focus op je hypotheek. Als jij of je partner komt te overlijden vóórdat de lening is afbetaald, keert de verzekering een bedrag uit aan de bank om de restschuld direct af te lossen. Zo kan de langstlevende partner in de woning blijven wonen zonder financiële zorgen.' },
            { type: 'p', text: 'Je kunt kiezen voor een dekking van 50/50 (beide partners voor de helft verzekerd) of 100/100 (volledige dekking voor beiden). In 2026 kijken banken hier strenger naar: een goede dekking is vaak een voorwaarde voor een lagere rentevoet.' },
            { type: 'h2', text: 'De "Koppelverkoop": Korting op je rente' },
            { type: 'p', text: 'In België zie je vaak dat banken je een aanzienlijke korting geven op je hypotheekrente als je zowel je brandverzekering als je schuldsaldoverzekering bij hen afsluit. Let op: hoewel dit op papier voordelig lijkt door de lagere rente, kan de premie van de verzekering bij de bank soms hoger liggen dan bij een onafhankelijke verzekeraar. Wij helpen je om de rekensom te maken.' },
            { type: 'h2', text: 'Waarom dit voor jou belangrijk is' },
            { type: 'p', text: 'Als Nederlander die naar België verhuist, is het afsluiten van deze verzekeringen een essentieel onderdeel van je dossier. Zonder een bewijs van de schuldsaldoverzekering en de brandverzekering zal de notaris de definitieve akte niet verlijden en krijg je dus de sleutels niet. Wij begeleiden je bij het vergelijken van deze verzekeringen zodat ze naadloos aansluiten op jouw situatie.' },
        ]
    },
    'waarom-makelaar-gratis-belgie': {
        body: [
            { type: 'lead', text: 'Als je in Nederland een hypotheek afsluit, ben je gewend aan de factuur van de hypotheekadviseur. Groot is dan ook de verbazing van veel Nederlanders als ze in België ontdekken dat een hypotheekmakelaar hen geen cent kost.' },
            { type: 'h2', text: 'Nederland: Het provisieverbod' },
            { type: 'p', text: 'Sinds 2013 geldt er in Nederland een zogenaamd provisieverbod voor complexe financiële producten zoals hypotheken. De overheid wilde hiermee voorkomen dat adviseurs een bepaalde bank zouden aanraden puur omdat die bank hen de hoogste beloning (provisie) betaalde. Sindsdien betaal jij als klant de adviseur rechtstreeks, zodat hij volledig onafhankelijk in jouw belang kan handelen. Transparant, maar wel een flinke kostenpost die je vaak met eigen geld moet betalen — vaak ergens tussen de €2.500 en €3.500.' },
            { type: 'h2', text: 'België: De bank betaalt de rekening' },
            { type: 'p', text: 'In België werkt het systeem nog op de traditionele manier. Een hypotheekmakelaar krijgt zijn vergoeding namelijk rechtstreeks van de bank waar de lening wordt afgesloten. Jij krijgt als klant geen factuur voor het adviesgesprek of het dossierbeheer.' },
            { type: 'p', text: 'In België is het wettelijk vastgelegd dat de makelaar de commissie die hij van de bank krijgt, niet mag doorrekenen in jouw rentevoet. Je krijgt dus bij de makelaar exact hetzelfde (of vaak zelfs een beter) tarief dan wanneer je zelf bij die bank naar binnen zou stappen. De makelaar is bovendien verplicht om in het dossier precies te vermelden hoeveel hij van de bank ontvangt.' },
            { type: 'h2', text: 'Waarom is een makelaar dan toch onafhankelijk?' },
            { type: 'p', text: 'Hoewel de makelaar door de bank wordt betaald, is zijn grootste belang dat jouw dossier wordt goedgekeurd. Omdat een makelaar met tientallen verschillende banken samenwerkt, zal hij altijd zoeken naar de bank die het beste past bij jouw specifieke situatie. Als bank A je weigert, heeft hij er alle belang bij om je bij bank B of C binnen te krijgen. Zijn \'loon\' krijgt hij immers pas als de deal rond is.' },
            { type: 'h2', text: 'De win-win voor de Nederlandse koper' },
            { type: 'p', text: 'Voor Nederlanders die naar België verhuizen is dit een enorme meevaller. Je hebt al genoeg kosten (denk aan de 10% eigen inleg en de notariskosten). Het feit dat je voor professionele begeleiding bij je grensoverschrijdende hypotheek geen extra factuur krijgt, scheelt direct duizenden euro\'s in je budget.' },
        ]
    },
    'zzp-lenen-belgie': {
        body: [
            { type: 'lead', text: 'Veel zelfstandigen (ZZP\'ers) denken dat het krijgen van een hypotheek in België een onmogelijke opgave is. \'De bank wil zekerheid en als ondernemer heb je dat niet,\' is een veelgehoorde fabel. Niets is minder waar.' },
            { type: 'h2', text: 'De 2-jaars regel: Bewijs je succes' },
            { type: 'p', text: 'Waar een werknemer in loondienst vaak genoeg heeft aan een vast contract, kijkt de Belgische bank bij een ondernemer naar de resultaten uit het verleden. De meeste banken vragen om de jaarcijfers van de afgelopen twee tot drie volledige boekjaren. De trend in 2026: heb je een kortere historie maar wel een ijzersterk orderboek of een sector met toekomstperspectief? Dan zijn er steeds vaker mogelijkheden om op basis van één afgesloten boekjaar toch een lening te krijgen.' },
            { type: 'h2', text: 'Netto winst vs. Bruto omzet' },
            { type: 'p', text: 'Een veelgemaakte fout bij de berekening is kijken naar de omzet. De bank kijkt echter puur naar het netto belastbaar inkomen (na aftrek van bedrijfskosten en sociale bijdragen). Tip: optimaliseer je boekhouding niet té hard vlak voordat je een huis koopt. Veel kosten aftrekken is fiscaal slim, maar een lager netto inkomen betekent ook dat je minder kunt lenen.' },
            { type: 'h2', text: 'Nederlandse ZZP\'er in België? Geen probleem.' },
            { type: 'p', text: 'Werk je als Nederlandse ZZP\'er voor Nederlandse opdrachtgevers, maar wil je in België wonen? Dat kan prima. Wel vereist dit een specialistische aanpak bij de bank. Wij zorgen ervoor dat jouw Nederlandse cijfers worden \'vertaald\' naar Belgische standaarden, zodat de bankdirecteur direct ziet dat je een solide klant bent.' },
            { type: 'h2', text: 'Waarom een makelaar voor jou het verschil maakt' },
            { type: 'p', text: 'Als ondernemer ben je vaak een \'special case\' voor een standaard bankbediende. Wij kennen de banken die ervaring hebben met ondernemers en weten precies welke ratio\'s zij hanteren. Wij presenteren jouw dossier niet als een risico, maar als een kans voor de bank.' },
        ]
    },
    'woning-zoeken-belgie-tips': {
        body: [
            { type: 'lead', text: 'Wie vanuit Nederland de grens overstreekt, merkt het meteen: de Belgische huizenmarkt is minder gecentraliseerd dan de Nederlandse (waar Funda alles beheerst). In België zijn er verschillende grote platformen die je dagelijks in de gaten moet houden.' },
            { type: 'h2', text: 'De belangrijkste vastgoedwebsites in België' },
            { type: 'p', text: 'Immoweb.be is de onbetwiste marktleider. Hier vind je het grootste aanbod van zowel particulieren als makelaars. Maak een account aan en stel een zoekfilter in — zo krijg je direct een melding zodra er een woning online komt die aan jouw wensen voldoet.' },
            { type: 'p', text: 'Zimmo.be is het tweede grootste platform en is populair vanwege de \'prijshistoriek\' die ze bij panden tonen. Zo kun je zien of een woning al langer te koop staat of onlangs in prijs is verlaagd. Immoscoop.be is een initiatief van lokale makelaars en heeft veel woningen exclusief voordat ze op de andere grote sites komen.' },
            { type: 'h2', text: 'Woning gevonden? Neem geen risico bij het bod!' },
            { type: 'p', text: 'Heb je een huis gevonden waar je hart sneller van gaat kloppen? Wacht dan nog even met het uitbrengen van een bod. Zoals je weet, is een bod in België direct bindend. Er is geen weg terug zonder zware financiële gevolgen.' },
            { type: 'p', text: 'Zodra je een pand op het oog hebt, contacteer ons direct: wij rekenen uit of het huis binnen jouw financiële bereik ligt, formuleren het bod met de juiste opschortende voorwaarden en geven strategisch advies over de vraagprijs.' },
            { type: 'h2', text: 'Klaar om te zoeken?' },
            { type: 'p', text: 'Heb je een linkje van een woning die je bevalt? Stuur ons de link door en we kijken direct met je mee naar de mogelijkheden!' },
        ]
    },
};

const ContentBlock = ({ block }) => {
    switch (block.type) {
        case 'lead':
            return <p style={{ fontSize: '19px', lineHeight: '1.8', color: '#334155', fontWeight: '600', marginBottom: '28px', borderLeft: '4px solid var(--c-green)', paddingLeft: '20px' }}>{block.text}</p>;
        case 'h2':
            return <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '24px', fontWeight: '800', color: 'var(--c-navy)', marginTop: '40px', marginBottom: '16px', letterSpacing: '-0.5px' }}>{block.text}</h2>;
        case 'p':
            return <p style={{ fontSize: '16px', lineHeight: '1.85', color: 'var(--c-text-muted)', fontWeight: '500', marginBottom: '20px' }}>{block.text}</p>;
        default:
            return null;
    }
};

const BlogDetail = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);
    const content = blogContent[slug];
    const currentIndex = blogPosts.findIndex(p => p.slug === slug);
    const prev = blogPosts[currentIndex - 1];
    const next = blogPosts[currentIndex + 1];

    React.useEffect(() => {
        if (post) {
            document.title = `${post.title} | Nederbelg Hypotheek`;
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute('content', post.excerpt);
            }
        }
    }, [post]);

    if (!post || !content) {
        return (
            <div style={{ textAlign: 'center', padding: '100px 20px' }}>
                <h2 style={{ fontFamily: 'var(--font-outfit)', color: 'var(--c-navy)' }}>Artikel niet gevonden</h2>
                <Link to="/blog" style={{ color: 'var(--c-green)', fontWeight: '700' }}>← Terug naar blog</Link>
            </div>
        );
    }

    return (
        <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
            {/* Hero */}
            <div className="blog-detail-hero" style={{ position: 'relative', height: '480px', overflow: 'hidden' }}>
                <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, color-mix(in srgb, var(--c-navy) 30%, transparent) 0%, color-mix(in srgb, var(--c-navy) 85%, transparent) 100%)' }} />
                <div className="blog-hero-content" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '60px', maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--c-green)', color: 'var(--c-navy)', padding: '5px 14px', borderRadius: '100px', fontSize: '12px', fontWeight: '800', marginBottom: '16px', alignSelf: 'flex-start' }}>
                        {post.category}
                    </div>
                    <h1 className="blog-detail-title" style={{ fontFamily: 'var(--font-outfit)', fontSize: '42px', fontWeight: '800', color: 'white', lineHeight: '1.15', letterSpacing: '-1.5px', marginBottom: '16px', maxWidth: '750px' }}>
                        {post.title}
                    </h1>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.7)', fontSize: '14px', fontWeight: '600' }}>
                        <Calendar size={14} /> {post.date}
                    </div>
                </div>
            </div>

            {/* Breadcrumb */}
            <div style={{ background: 'white', borderBottom: '1px solid #E2E8F0', padding: '16px 20px' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600' }}>
                    <Link to="/" style={{ color: 'var(--c-text-muted)', textDecoration: 'none' }}>Home</Link>
                    <span style={{ color: '#CBD5E1' }}>›</span>
                    <Link to="/blog" style={{ color: 'var(--c-text-muted)', textDecoration: 'none' }}>Blog en nieuws</Link>
                    <span style={{ color: '#CBD5E1' }}>›</span>
                    <span style={{ color: 'var(--c-navy)' }}>{post.title.substring(0, 40)}...</span>
                </div>
            </div>

            {/* Content */}
            <div className="blog-detail-container" style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 20px 40px' }}>
                <div className="blog-content-box" style={{ background: 'white', borderRadius: '28px', padding: '60px', boxShadow: '0 10px 40px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.04)' }}>
                    {content.body.map((block, i) => <ContentBlock key={i} block={block} />)}
                </div>

                {/* CTA */}
                <div style={{ background: 'var(--c-navy)', borderRadius: '24px', padding: '50px', marginTop: '40px', textAlign: 'center' }}>
                    <h3 style={{ fontFamily: 'var(--font-outfit)', fontSize: '28px', fontWeight: '800', color: 'white', marginBottom: '12px', letterSpacing: '-0.5px' }}>
                        Klaar om de stap te zetten?
                    </h3>
                    <p style={{ color: '#B1BAD3', fontSize: '16px', fontWeight: '500', marginBottom: '28px', maxWidth: '500px', margin: '0 auto 28px' }}>
                        Plan een gratis adviesgesprek en ontdek wat jij kunt lenen met een Nederlands inkomen in België.
                    </p>
                    <a href="https://wa.me/32484928247" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '10px',
                        background: 'var(--c-green)', color: 'var(--c-navy)', padding: '16px 32px',
                        borderRadius: '12px', fontWeight: '800', fontSize: '16px', textDecoration: 'none',
                        transition: 'opacity 0.2s'
                    }}
                        onMouseOver={e => e.currentTarget.style.opacity = '0.9'}
                        onMouseOut={e => e.currentTarget.style.opacity = '1'}
                    >
                        <MessageCircle size={20} /> Gratis gesprek plannen
                    </a>
                </div>

                {/* Prev / Next */}
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', marginTop: '40px', flexWrap: 'wrap' }}>
                    {prev ? (
                        <Link to={`/blog/${prev.slug}`} style={{
                            flex: 1, minWidth: '0', background: 'white', borderRadius: '16px', padding: '24px',
                            textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '14px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.04)',
                            transition: 'box-shadow 0.2s'
                        }}
                            onMouseOver={e => e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.12)'}
                            onMouseOut={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'}
                        >
                            <ArrowLeft size={20} color="var(--c-green)" style={{ flexShrink: 0 }} />
                            <div>
                                <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: '700', marginBottom: '4px' }}>VORIG ARTIKEL</div>
                                <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--c-navy)', lineHeight: '1.4' }}>{prev.title.substring(0, 60)}...</div>
                            </div>
                        </Link>
                    ) : <div style={{ flex: 1 }} />}
                    {next ? (
                        <Link to={`/blog/${next.slug}`} style={{
                            flex: 1, minWidth: '0', background: 'white', borderRadius: '16px', padding: '24px',
                            textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '14px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.04)',
                            textAlign: 'right', transition: 'box-shadow 0.2s'
                        }}
                            onMouseOver={e => e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.12)'}
                            onMouseOut={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'}
                        >
                            <div>
                                <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: '700', marginBottom: '4px' }}>VOLGEND ARTIKEL</div>
                                <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--c-navy)', lineHeight: '1.4' }}>{next.title.substring(0, 60)}...</div>
                            </div>
                            <ArrowRight size={20} color="var(--c-green)" style={{ flexShrink: 0 }} />
                        </Link>
                    ) : <div style={{ flex: 1 }} />}
                </div>

                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--c-text-muted)', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
                        <ArrowLeft size={16} /> Terug naar alle artikelen
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
