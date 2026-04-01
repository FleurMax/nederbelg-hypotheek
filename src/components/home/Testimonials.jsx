import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, location, text }) => (
    <div style={{
        background: 'white',
        borderRadius: '24px',
        padding: '32px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
        position: 'relative',
        boxSizing: 'border-box',
    }}>
        <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
            <img
                src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
                alt="Google"
                style={{ width: '18px', opacity: 0.8 }}
            />
        </div>

        <div style={{ marginBottom: '20px', flex: 1 }}>
            <div style={{ display: 'flex', gap: '2px', marginBottom: '14px' }}>
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="var(--c-orange)" color="var(--c-orange)" />)}
            </div>
            <p style={{
                fontSize: '15px',
                lineHeight: '1.7',
                color: '#475569',
                fontWeight: '500',
                fontStyle: 'italic',
                margin: 0
            }}>
                "{text}"
            </p>
        </div>

        <div>
            <div style={{ height: '1px', background: '#E2E8F0', marginBottom: '16px' }}></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                    width: '38px',
                    height: '38px',
                    background: 'color-mix(in srgb, var(--c-green) 10%, transparent)',
                    color: 'var(--c-green)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '800',
                    fontSize: '14px',
                    flexShrink: 0
                }}>
                    {name.charAt(0)}
                </div>
                <div>
                    <h4 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--c-navy)', margin: 0 }}>{name}</h4>
                    <span style={{ fontSize: '13px', fontWeight: '700', color: '#64748b' }}>{location}</span>
                </div>
            </div>
        </div>
    </div>
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
        },
        {
            name: "Stephanie",
            location: "Eindhoven",
            text: "Ik twijfelde of ik genoeg eigen geld had. Na een fijn gesprek kreeg ik een exact overzicht. Door de constante begeleiding wist ik precies wat er bij de notaris ging gebeuren."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    /* Auto-scroll removed as requested */

    const itemsPerView = isMobile ? 1 : 3;

    return (
        <section style={{
            padding: '80px 0',
            background: 'var(--c-navy)',
            position: 'relative'
        }}>
            <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 20px' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: 'var(--c-green)', marginBottom: '16px' }}>
                        <div style={{ display: 'flex', gap: '2px' }}>
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="var(--c-green)" color="var(--c-green)" />)}
                        </div>
                        <span style={{ fontWeight: '800', fontSize: '14px', letterSpacing: '1px' }}>GEMIDDELD EEN 9,2</span>
                    </div>
                    <h2 style={{
                        fontFamily: 'var(--font-outfit)',
                        fontSize: '48px',
                        fontWeight: '800',
                        color: 'white',
                        marginBottom: '20px',
                        letterSpacing: '-1.5px'
                    }}>
                        Wat vinden onze klanten?
                    </h2>
                    <p style={{
                        fontSize: '18px',
                        color: '#B1BAD3',
                        fontWeight: '500',
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}>
                        Supertrots op de meer dan 500 Nederlanders die we al hebben begeleid bij het kopen van hun huis in België.
                    </p>
                </div>

                {/* Carousel */}
                <div style={{ overflow: 'hidden', width: '100%' }}>
                    <motion.div
                        animate={{ x: `-${activeIndex * (100 / itemsPerView)}%` }}
                        transition={{ type: 'spring', stiffness: 120, damping: 22 }}
                        style={{ display: 'flex', width: '100%' }}
                    >
                        {/* Duplicate reviews to allow seamless loop */}
                        {[...reviews, ...reviews.slice(0, itemsPerView)].map((review, idx) => (
                            <div
                                key={idx}
                                style={{
                                    flex: `0 0 ${100 / itemsPerView}%`,
                                    padding: `0 ${isMobile ? 0 : 12}px`,
                                    boxSizing: 'border-box',
                                }}
                            >
                                <TestimonialCard {...review} />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Dots */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '36px' }}>
                    {reviews.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            style={{
                                width: activeIndex === idx ? '24px' : '8px',
                                height: '8px',
                                borderRadius: '4px',
                                background: activeIndex === idx ? 'var(--c-green)' : 'rgba(255,255,255,0.2)',
                                border: 'none',
                                cursor: 'pointer',
                                padding: 0,
                                transition: 'all 0.3s ease'
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
