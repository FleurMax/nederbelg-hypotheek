import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Search } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        slug: 'vlaamse-registratierechten-en-notariskosten',
        date: '05/01/2026',
        image: '/images/blog_1.jpg',
        category: 'Belgische wetgeving',
        title: 'Huis kopen in België: alles over de Vlaamse registratierechten en notariskosten',
        excerpt: 'Voor veel Nederlanders is de overstap naar Vlaanderen financieel erg aantrekkelijk, zeker nu de Vlaamse overheid de registratierechten heeft verlaagd naar slechts 2% voor de enige eigen woning.',
    },
    {
        id: 2,
        slug: 'hypotheekrenteaftrek-belgie-2026',
        date: '20/01/2026',
        image: '/images/blog_2.jpg',
        category: 'Belastingen',
        title: 'Hypotheekrenteaftrek in België: zo profiteer je in 2026 van het beste van twee werelden',
        excerpt: 'Wonen in een riante Belgische woning, maar profiteren van de Nederlandse belastingteruggave? Voor veel Nederlanders die de grens oversteken is dit in 2026 nog steeds de realiteit.',
    },
    {
        id: 3,
        slug: 'verzekeringen-belgie-2026',
        date: '28/01/2026',
        image: '/images/blog_3.jpg',
        category: 'Verzekeringen',
        title: 'Een huis kopen in België: alles over de (verplichte) verzekeringen in 2026',
        excerpt: 'Wie in Nederland een huis koopt, is gewend aan de opstalverzekering en de overlijdensrisicoverzekering. In België krijg je te maken met de brandverzekering en de schuldsaldoverzekering.',
    },
    {
        id: 4,
        slug: 'waarom-makelaar-gratis-belgie',
        date: '05/02/2026',
        image: '/images/blog_4.jpg',
        category: 'Hypotheekadvies',
        title: 'Hypotheekadvies: Waarom is een makelaar in België \'gratis\' en betaal je in Nederland duizenden euro\'s?',
        excerpt: 'Als je in Nederland een hypotheek afsluit, ben je gewend aan de factuur van de hypotheekadviseur. Groot is dan ook de verbazing van Nederlanders die ontdekken dat een hypotheekmakelaar in België gratis is.',
    },
    {
        id: 5,
        slug: 'zzp-lenen-belgie',
        date: '15/02/2026',
        image: '/images/blog_5.jpg',
        category: 'ZZP & Ondernemen',
        title: 'Lenen als ZZP\'er in België: een huis kopen als ondernemer is wél mogelijk',
        excerpt: 'Veel zelfstandigen denken dat het krijgen van een hypotheek in België een onmogelijke opgave is. Niets is minder waar. In 2026 rollen Belgische banken de rode loper uit voor gezonde ondernemingen.',
    },
    {
        id: 6,
        slug: 'woning-zoeken-belgie-tips',
        date: '25/02/2026',
        image: '/images/blog_6.jpg',
        category: 'Woningmarkt',
        title: 'Hoe zoek je een woning in België? De beste tips voor Nederlanders',
        excerpt: 'Wie vanuit Nederland de grens oversteekt, merkt het meteen: de Belgische huizenmarkt is minder gecentraliseerd dan de Nederlandse. Hier lees je hoe je het slim aanpakt.',
    },
];

const NewsletterCard = () => (
    <div className="newsletter-card" style={{
        background: 'var(--c-navy)',
        borderRadius: '20px',
        padding: '40px 32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        minHeight: '420px',
        boxSizing: 'border-box',
    }}>
        <h3 style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '28px',
            fontWeight: '800',
            color: 'white',
            lineHeight: '1.2',
            marginBottom: '16px',
            letterSpacing: '-0.5px'
        }}>
            Ontvang informatie die past bij jouw plan
        </h3>
        <p style={{ color: '#B1BAD3', fontSize: '15px', fontWeight: '500', marginBottom: '28px', lineHeight: '1.6' }}>
            Meld je aan voor onze nieuwsbrief en ontvang tips en nieuws over de Belgische huizenmarkt.
        </p>
        <input
            type="email"
            placeholder="jouw@email.be"
            style={{
                background: 'white',
                border: 'none',
                borderRadius: '12px',
                padding: '14px 18px',
                fontSize: '15px',
                marginBottom: '12px',
                outline: 'none',
                color: 'var(--c-navy)',
                fontWeight: '500',
                fontFamily: 'var(--font-inter)',
                width: '100%',
                boxSizing: 'border-box',
            }}
        />
        <button style={{
            background: 'var(--c-green)',
            border: 'none',
            borderRadius: '12px',
            padding: '14px',
            fontSize: '15px',
            fontWeight: '800',
            color: 'var(--c-navy)',
            cursor: 'pointer',
            fontFamily: 'var(--font-outfit)',
            width: '100%',
            transition: 'opacity 0.2s'
        }}
            onMouseOver={e => e.currentTarget.style.opacity = '0.9'}
            onMouseOut={e => e.currentTarget.style.opacity = '1'}
        >
            Aanmelden
        </button>
    </div>
);

const BlogCard = ({ post }) => (
    <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
        <div className="blog-card" style={{
            background: 'white',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            border: '1px solid rgba(0,0,0,0.05)',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.2s, box-shadow 0.2s',
        }}
            onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)';
            }}
            onMouseOut={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
            }}
        >
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'var(--c-green)',
                    color: 'var(--c-navy)',
                    padding: '4px 12px',
                    borderRadius: '100px',
                    fontSize: '12px',
                    fontWeight: '800',
                    letterSpacing: '0.3px'
                }}>
                    {post.category}
                </div>
            </div>
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94A3B8', fontSize: '13px', fontWeight: '600', marginBottom: '12px' }}>
                    <Calendar size={13} />
                    {post.date}
                </div>
                <h3 style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '18px',
                    fontWeight: '800',
                    color: 'var(--c-navy)',
                    lineHeight: '1.35',
                    marginBottom: '12px',
                    letterSpacing: '-0.3px'
                }}>
                    {post.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#64748b', fontWeight: '500', lineHeight: '1.7', flex: 1, marginBottom: '20px' }}>
                    {post.excerpt}
                </p>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--c-navy)',
                    fontWeight: '800',
                    fontSize: '14px',
                }}>
                    Lees verder <ArrowRight size={16} color="var(--c-green)" />
                </div>
            </div>
        </div>
    </Link>
);

const Blog = () => {
    const [search, setSearch] = useState('');

    React.useEffect(() => {
        document.title = "Blog en nieuws over Belgische hypotheken | Nederbelg Hypotheek";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', 'Lees alles over de Belgische huizenmarkt, hypotheekrenteaftrek voor Nederlanders en meer op onze blog.');
        }
    }, []);

    const filtered = blogPosts.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase())
    );

    // Build grid: insert newsletter card after card 2 (index 2)
    const renderGrid = () => {
        const items = [];
        for (let i = 0; i < filtered.length; i++) {
            items.push(
                <div key={filtered[i].id} style={{ display: 'flex', flexDirection: 'column' }}>
                    <BlogCard post={filtered[i]} />
                </div>
            );
            if (i === 1) {
                items.push(
                    <div key="newsletter">
                        <NewsletterCard />
                    </div>
                );
            }
        }
        return items;
    };

    return (
        <div className="blog-page" style={{ background: '#F8FAFC', minHeight: '100vh' }}>
            {/* Header */}
            <div className="blog-hero" style={{ background: 'var(--c-navy)', padding: '80px 20px 60px', textAlign: 'center' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'color-mix(in srgb, var(--c-green) 10%, transparent)',
                        color: 'var(--c-green)',
                        padding: '6px 18px',
                        borderRadius: '100px',
                        fontSize: '12px',
                        fontWeight: '800',
                        letterSpacing: '1px',
                        marginBottom: '20px'
                    }}>
                        KENNIS & TIPS
                    </div>
                    <h1 className="blog-title" style={{
                        fontFamily: 'var(--font-outfit)',
                        fontSize: '56px',
                        fontWeight: '800',
                        color: 'white',
                        letterSpacing: '-2px',
                        marginBottom: '16px'
                    }}>
                        Blog en nieuws
                    </h1>
                    <p style={{ color: '#B1BAD3', fontSize: '18px', fontWeight: '500', maxWidth: '600px', margin: '0 auto 36px' }}>
                        Alles wat je moet weten over een hypotheek in België met een Nederlands inkomen.
                    </p>

                    {/* Search */}
                    <div style={{ position: 'relative', maxWidth: '500px', margin: '0 auto' }}>
                        <Search size={18} color="#94A3B8" style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)' }} />
                        <input
                            type="text"
                            placeholder="Zoek een artikel..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '16px 20px 16px 50px',
                                borderRadius: '100px',
                                border: 'none',
                                background: 'white',
                                fontSize: '15px',
                                fontWeight: '500',
                                outline: 'none',
                                fontFamily: 'var(--font-inter)',
                                color: 'var(--c-navy)',
                                boxSizing: 'border-box',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="blog-container" style={{ maxWidth: '1300px', margin: '0 auto', padding: '60px 20px 100px' }}>
                <div className="blog-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '28px',
                    alignItems: 'start'
                }}>
                    {renderGrid()}
                </div>
                {filtered.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '80px 0', color: '#94A3B8', fontSize: '18px', fontWeight: '600' }}>
                        Geen artikelen gevonden voor "{search}".
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;
export { blogPosts };
