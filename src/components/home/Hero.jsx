import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Video, MessageCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" style={{
            background: '#F8FAFC',
            minHeight: 'auto',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            paddingTop: '60px',
            paddingBottom: '80px',
            overflow: 'hidden'
        }}>
            <div className="hero-main-container" style={{
                maxWidth: 'var(--container-max)',
                margin: '0 auto',
                padding: '0 20px',
                width: '100%',
                zIndex: 1
            }}>
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-card"
                >
                    {/* Left Side: Content */}
                    <div className="hero-content-side" style={{
                        padding: '80px 60px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        position: 'relative',
                        zIndex: 2
                    }}>
                        <h1 className="hero-title" style={{
                            fontFamily: 'var(--font-outfit)',
                            fontSize: '56px',
                            fontWeight: '800',
                            lineHeight: '1.05',
                            marginBottom: '24px',
                            letterSpacing: '-2.5px',
                            color: 'var(--c-navy)'
                        }}>
                            Jouw droomhuis in België,<br />
                            <span style={{ color: 'var(--c-green)' }}>gefinancierd met een Nederlands inkomen.</span>
                        </h1>

                        <div className="hero-description" style={{
                            fontSize: '18px',
                            lineHeight: '1.6',
                            color: '#475569',
                            marginBottom: '40px',
                            maxWidth: '620px',
                            fontWeight: '500'
                        }}>
                            <p>
                                Wil je een woning in België kopen met een Nederlands inkomen? Wij berekenen wat je kunt lenen, begeleiden je bij de aankoop en regelen je hypotheek – volledig gratis.
                            </p>
                        </div>

                        {/* Checklist items in the hero */}
                        <div className="hero-checklist" style={{ display: 'grid', gap: '16px', marginBottom: '40px' }}>
                            {[
                                { label: 'Actief in heel België', desc: 'wij begeleiden je bij de aankoop van elke woning, waar in België deze ook staat.' },
                                { label: 'Zekerheid over je budget', desc: 'We analyseren je inkomsten en berekenen je maximale leencapaciteit, zodat je precies weet wat je budget is voordat je aan je zoektocht begint.' },
                                { label: 'Begeleiding bij aankoop en hypotheek', desc: 'heb je je droomwoning gevonden? Wij helpen je met het juiste bod en de voorwaarden, vergelijken alle banken en regelen je hypotheek volledig voor je.' },
                                { label: 'Begeleiding vanop afstand', desc: 'we regelen alles zoveel mogelijk online.' }
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px' }}>
                                    <div style={{ lineHeight: '1.4' }}>
                                        <strong style={{ display: 'inline', color: 'var(--c-navy)', fontWeight: '800' }}>{item.label} – </strong>
                                        <span style={{ fontWeight: '500', color: '#475569' }}>{item.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="hero-actions" style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            gap: '16px',
                            marginBottom: '0px'
                        }}>
                            <motion.a
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                href="https://wa.me/32484928247"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '12px',
                                    background: 'var(--c-green)',
                                    color: 'white',
                                    padding: '18px 32px',
                                    borderRadius: '16px',
                                    fontSize: '17px',
                                    fontWeight: '800',
                                    textDecoration: 'none',
                                    boxShadow: '0 10px 20px color-mix(in srgb, var(--c-green) 20%, transparent)',
                                }}
                            >
                                <MessageCircle size={22} fill="currentColor" /> Laat gratis berekenen wat je kan lenen
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                href="https://calendly.com/nederbelg-hypotheek/45min"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '12px',
                                    background: 'var(--c-navy)',
                                    color: 'white',
                                    padding: '18px 32px',
                                    borderRadius: '16px',
                                    fontSize: '17px',
                                    fontWeight: '800',
                                    textDecoration: 'none',
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                                }}
                            >
                                <Video size={22} /> Plan een gratis videogesprek
                            </motion.a>
                        </div>
                    </div>

                    {/* Right Side: Image with blending transition */}
                    <div className="hero-image-side" style={{
                        position: 'relative',
                        overflow: 'hidden',
                        height: '100%'
                    }}>
                        <img 
                            src="/images/hero.jpg" 
                            alt="Belgian Dream House" 
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center center',
                                display: 'block'
                            }} 
                        />
                        {/* Soft blended "overgang" between content and image */}
                        <div className="hero-image-overlay" style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to right, white 0%, rgba(255,255,255,0.8) 5%, transparent 25%)',
                            zIndex: 1
                        }}></div>
                        
                        {/* Rating floating element - Refined with avatars */}
                        <div className="hero-rating-tag" style={{
                            position: 'absolute',
                            bottom: '30px',
                            right: '30px',
                            zIndex: 3,
                            background: 'rgba(255,255,255,0.95)',
                            backdropFilter: 'blur(10px)',
                            padding: '12px 20px',
                            borderRadius: '24px',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
                            border: '1px solid rgba(255,255,255,0.6)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px'
                        }}>
                            {/* Overlapping Avatars */}
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                {[
                                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
                                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
                                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
                                    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
                                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
                                ].map((url, i) => (
                                    <div key={i} style={{
                                        width: '38px',
                                        height: '38px',
                                        borderRadius: '50%',
                                        border: '2px solid white',
                                        overflow: 'hidden',
                                        marginLeft: i === 0 ? 0 : '-14px',
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                                        zIndex: 5 - i
                                    }}>
                                        <img src={url} alt="Customer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                ))}
                            </div>

                            {/* Stars and Score Column */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ display: 'flex', gap: '2px' }}>
                                        {[1, 2, 3, 4, 5].map((_, i) => (
                                            <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                                        ))}
                                    </div>
                                    <span style={{ fontWeight: '900', color: 'var(--c-navy)', fontSize: '18px', fontFamily: 'var(--font-outfit)' }}>4.8</span>
                                </div>
                                <div style={{ 
                                    fontSize: '11px', 
                                    fontWeight: '800', 
                                    color: 'var(--c-text-muted)', 
                                    letterSpacing: '0.05em',
                                    fontFamily: 'var(--font-outfit)',
                                    marginTop: '-2px'
                                }}>
                                    KLANTTEVREDENHEID
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
