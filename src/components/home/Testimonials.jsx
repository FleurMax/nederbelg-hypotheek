import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

const TestimonialCard = ({ name, location, text }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
            background: 'white',
            borderRadius: '24px',
            padding: '32px',
            border: '1px solid var(--c-border)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            position: 'relative'
        }}
    >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '2px' }}>
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />)}
            </div>
            <div style={{
                fontSize: '11px',
                fontWeight: '800',
                color: 'var(--c-green)',
                background: 'rgba(0, 196, 140, 0.1)',
                padding: '4px 10px',
                borderRadius: '100px',
                textTransform: 'uppercase'
            }}>
                Geverifieerde koper
            </div>
        </div>

        <p style={{
            fontSize: '15px',
            lineHeight: '1.7',
            color: 'var(--c-text-muted)',
            fontWeight: '500',
            margin: 0,
            flex: 1
        }}>
            "{text}"
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
            <div style={{
                width: '40px',
                height: '40px',
                background: 'var(--c-bg-light)',
                color: 'var(--c-navy)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '800',
                fontSize: '14px',
                border: '1px solid var(--c-border)'
            }}>
                {name.charAt(0)}
            </div>
            <div>
                <h4 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--c-navy)', margin: 0 }}>{name}</h4>
                <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--c-text-light)' }}>{location}</span>
            </div>
        </div>
    </motion.div>
);

const Testimonials = () => {
    const reviews = [
        {
            name: "Sandra",
            location: "Eindhoven",
            text: "Ik dacht dat een huis kopen in België ingewikkeld zou zijn, maar alles werd stap voor stap duidelijk uitgelegd. Dankzij hun begeleiding heb ik mijn droomhuis gevonden én mijn krediet binnen no-time geregeld!"
        },
        {
            name: "Sophie",
            location: "Maastricht",
            text: "Het verschil zit in hun kennis en persoonlijke begeleiding. Ze hebben me stap voor stap geholpen bij het uitbrengen van mijn bod én het regelen van de financiering, zonder stress."
        },
        {
            name: "Bas",
            location: "Tilburg",
            text: "Ik was bang voor het juridische gedoe bij een bod in België, maar zij hebben alles duidelijk en veilig begeleid. Dankzij hen heb ik mijn droomhuis zonder stress gekocht."
        },
        {
            name: "Jasper",
            location: "Breda",
            text: "Als Nederlander wist ik niet dat een bod in België direct bindend was. Het team heeft eerst mijn budget berekend en me daarna geholpen met de juiste opschortende voorwaarde. Hypotheek was snel geregeld!"
        }
    ];

    return (
        <section style={{
            padding: '120px 0',
            background: 'white',
            overflow: 'hidden'
        }}>
            <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 24px' }}>
                
                {/* Header with Score Card */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 0.8fr',
                    gap: '40px',
                    alignItems: 'center',
                    marginBottom: '64px'
                }} className="section-header-grid">
                    <div>
                        <div style={{
                            color: 'var(--c-primary)',
                            fontSize: '13px',
                            fontWeight: '800',
                            letterSpacing: '1.5px',
                            marginBottom: '16px',
                            textTransform: 'uppercase'
                        }}>
                            KLANTENVERHALEN
                        </div>
                        <h2 style={{
                            fontFamily: 'var(--font-outfit)',
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: '900',
                            color: 'var(--c-navy)',
                            lineHeight: '1.1',
                            letterSpacing: '-1px',
                            margin: 0
                        }}>
                            Wat zeggen onze klanten over ons?
                        </h2>
                    </div>

                    <div style={{
                        background: 'var(--c-bg-light)',
                        borderRadius: '24px',
                        padding: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '24px',
                        border: '1px solid var(--c-border)'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '48px', fontWeight: '900', color: 'var(--c-navy)', fontFamily: 'var(--font-outfit)', lineHeight: '1' }}>4.9</div>
                            <div style={{ fontSize: '12px', fontWeight: '800', color: 'var(--c-text-muted)', marginTop: '4px' }}>REVIEW SCORE</div>
                        </div>
                        <div style={{ width: '1px', height: '40px', background: 'var(--c-border)' }}></div>
                        <div>
                            <div style={{ display: 'flex', gap: '2px', marginBottom: '4px' }}>
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />)}
                            </div>
                            <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--c-navy)' }}>Gebaseerd op 87 reviews</div>
                        </div>
                    </div>
                </div>

                {/* Reviews Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '24px'
                }} className="reviews-grid">
                    {reviews.map((review, idx) => (
                        <TestimonialCard key={idx} {...review} />
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '48px' }}>
                    <a href="#" style={{ 
                        fontSize: '15px', 
                        fontWeight: '800', 
                        color: 'var(--c-primary)', 
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        Bekijk alle reviews op Google <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
