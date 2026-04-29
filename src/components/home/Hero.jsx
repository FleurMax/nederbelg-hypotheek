import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Video, MessageCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" style={{
            background: 'white',
            padding: '180px 0 80px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{
                maxWidth: 'var(--container-max)',
                margin: '0 auto',
                padding: '0 24px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '80px',
                alignItems: 'center'
            }} className="hero-container">

                {/* Left Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'var(--c-primary-light)',
                        color: 'var(--c-primary)',
                        padding: '6px 14px',
                        borderRadius: '100px',
                        fontSize: '13px',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '24px'
                    }}>
                        <div style={{ width: '6px', height: '6px', background: 'var(--c-primary)', borderRadius: '50%' }}></div>
                        100% ONAFHANKELIJK ADVIES
                    </div>

                    <h1 style={{
                        fontFamily: 'var(--font-outfit)',
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: '900',
                        lineHeight: '1.1',
                        color: 'var(--c-navy)',
                        letterSpacing: '-0.03em',
                        marginBottom: '24px'
                    }}>
                        Jouw droomhuis in België,<br />
                        <span style={{ color: 'var(--c-primary)' }}>
                            gefinancierd met een Nederlands inkomen.
                        </span>
                    </h1>

                    <p style={{
                        fontSize: '18px',
                        lineHeight: '1.7',
                        color: 'var(--c-text-muted)',
                        marginBottom: '36px',
                        maxWidth: '600px',
                        fontWeight: '500'
                    }}>
                        Wil je een woning in België kopen met een Nederlands inkomen? Wij berekenen wat je kunt lenen, begeleiden je bij de aankoop en regelen je hypotheek – volledig gratis.
                    </p>

                    <div style={{ display: 'grid', gap: '16px', marginBottom: '40px' }}>
                        {[
                            { label: 'Actief in heel België', desc: 'wij begeleiden je bij de aankoop van elke woning, waar in België deze ook staat.' },
                            { label: 'Zekerheid over je budget', desc: 'We analyseren je inkomsten en berekenen je maximale leencapaciteit, zodat je precies weet wat je budget is voordat je aan je zoektocht begint.' },
                            { label: 'Begeleiding bij aankoop en hypotheek', desc: 'heb je je droomwoning gevonden? Wij helpen je met het juiste bod en de voorwaarden, vergelijken alle banken en regelen je hypotheek volledig voor je.' },
                            { label: 'Begeleiding vanop afstand', desc: 'we regelen alles zoveel mogelijk online.' }
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px' }}>
                                <div style={{ marginTop: '3px', color: 'var(--c-primary)', background: 'var(--c-primary-light)', padding: '2px', borderRadius: '4px' }}>
                                    <Check size={14} strokeWidth={4} />
                                </div>
                                <div style={{ lineHeight: '1.5' }}>
                                    <strong style={{ color: 'var(--c-navy)', fontWeight: '800' }}>{item.label} – </strong>
                                    <span style={{ fontWeight: '500', color: 'var(--c-text-muted)' }}>{item.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
                        <a
                            href="https://wa.me/32495326101"
                            onClick={() => {
                                if (typeof window.gtag_report_conversion === 'function') {
                                    window.gtag_report_conversion();
                                }
                            }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                background: 'var(--c-primary)',
                                color: 'white',
                                padding: '16px 32px',
                                borderRadius: '12px',
                                fontSize: '16px',
                                fontWeight: '800',
                                textDecoration: 'none',
                                boxShadow: '0 8px 20px rgba(0, 85, 204, 0.2)',
                                transition: 'all 0.2s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            Laat gratis berekenen wat je kan lenen
                        </a>
                        <a
                            href="https://calendly.com/nederbelg-hypotheek/45min"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                background: 'white',
                                color: 'var(--c-primary)',
                                border: '2px solid var(--c-primary)',
                                padding: '14px 32px',
                                borderRadius: '12px',
                                fontSize: '16px',
                                fontWeight: '800',
                                textDecoration: 'none',
                                transition: 'all 0.2s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.background = 'var(--c-primary-light)'}
                            onMouseOut={(e) => e.currentTarget.style.background = 'white'}
                        >
                            <Video size={18} /> Plan een gratis videogesprek
                        </a>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
                        {[
                            '100% gratis',
                            'Persoonlijk advies',
                            'Onafhankelijk',
                            'Binnen 2 uur antwoord'
                        ].map((usp, i) => (
                            <div key={usp} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '700', color: 'var(--c-text-muted)' }}>
                                <div style={{ width: '24px', height: '24px', background: 'var(--c-bg-light)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-primary)' }}>
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                {usp}
                                {i < 3 && <div style={{ width: '1px', height: '12px', background: 'var(--c-border)', marginLeft: '12px' }} className="usp-sep"></div>}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side: Visual */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative' }}
                    className="hero-visual"
                >
                    <div style={{
                        background: 'white',
                        borderRadius: '28px',
                        border: '1px solid var(--c-border)',
                        boxShadow: '0 30px 80px rgba(15, 23, 42, 0.08)',
                        overflow: 'hidden',
                        position: 'relative',
                        zIndex: 2
                    }}>
                        <div style={{ background: 'var(--c-primary)', padding: '32px' }}>
                            <div style={{ fontSize: '11px', fontWeight: '800', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Uw berekening</div>
                            <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '24px', fontWeight: '800', color: 'white' }}>Hypotheek Simulatie 2026</div>
                        </div>

                        <div style={{ padding: '32px' }}>
                            <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
                                <div style={{ flex: 1, background: 'var(--c-bg-light)', padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
                                    <div style={{ fontSize: '28px', fontWeight: '900', color: 'var(--c-primary)', fontFamily: 'var(--font-outfit)' }}>3,42%</div>
                                    <div style={{ fontSize: '11px', color: 'var(--c-text-light)', fontWeight: '700', marginTop: '4px', textTransform: 'uppercase' }}>Vaste Rente</div>
                                </div>
                                <div style={{ flex: 1, background: 'var(--c-bg-light)', padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
                                    <div style={{ fontSize: '28px', fontWeight: '900', color: 'var(--c-navy)', fontFamily: 'var(--font-outfit)' }}>25 jr</div>
                                    <div style={{ fontSize: '11px', color: 'var(--c-text-light)', fontWeight: '700', marginTop: '4px', textTransform: 'uppercase' }}>Looptijd</div>
                                </div>
                            </div>

                            <div style={{ marginBottom: '24px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--c-text-muted)', fontWeight: '700', marginBottom: '8px' }}>
                                    <span>Leningbedrag</span>
                                    <span style={{ color: 'var(--c-navy)' }}>€ 345.000</span>
                                </div>
                                <div style={{ height: '6px', background: 'var(--c-bg-light)', borderRadius: '10px', overflow: 'hidden' }}>
                                    <div style={{ width: '80%', height: '100%', background: 'linear-gradient(90deg, var(--c-primary), #4d8bff)', borderRadius: '10px' }}></div>
                                </div>
                            </div>

                            <div style={{ height: '1px', background: 'var(--c-border)', margin: '24px 0' }}></div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--c-text-muted)' }}>Geschatte maandlast</div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '32px', fontWeight: '900', color: 'var(--c-navy)', fontFamily: 'var(--font-outfit)', lineHeight: '1' }}>€ 1.148</div>
                                    <div style={{ fontSize: '11px', color: 'var(--c-text-light)', fontWeight: '700', marginTop: '4px' }}>Netto per maand</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: 'var(--c-bg-light)', padding: '16px', textAlign: 'center', borderTop: '1px solid var(--c-border)' }}>
                            <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--c-text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                <Check size={16} color="var(--c-green)" /> Direct online resultaat
                            </div>
                        </div>
                    </div>

                    {/* Floating Badges */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            position: 'absolute',
                            top: '-20px',
                            right: '20px',
                            zIndex: 3,
                            background: 'white',
                            padding: '12px 20px',
                            borderRadius: '16px',
                            boxShadow: 'var(--shadow)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            border: '1px solid var(--c-border)'
                        }}
                    >
                        <div style={{ width: '8px', height: '8px', background: 'var(--c-green)', borderRadius: '50%', boxShadow: '0 0 0 4px rgba(0, 196, 140, 0.2)' }}></div>
                        <span style={{ fontSize: '13px', fontWeight: '800', color: 'var(--c-navy)' }}>Adviseur online</span>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        style={{
                            position: 'absolute',
                            bottom: '40px',
                            left: '-30px',
                            zIndex: 3,
                            background: 'white',
                            padding: '16px 24px',
                            borderRadius: '16px',
                            boxShadow: 'var(--shadow)',
                            border: '1px solid var(--c-border)'
                        }}
                        className="hero-rating-badge"
                    >
                        <div style={{ display: 'flex', gap: '2px', color: '#f59e0b', marginBottom: '4px' }}>
                            {[1, 2, 3, 4, 5].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                        </div>
                        <div style={{ fontSize: '18px', fontWeight: '900', color: 'var(--c-navy)', fontFamily: 'var(--font-outfit)' }}>4.9 / 5.0</div>
                        <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--c-text-light)', textTransform: 'uppercase', marginTop: '2px' }}>87 Reviews</div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
