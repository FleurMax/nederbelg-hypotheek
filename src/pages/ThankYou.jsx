import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Home, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#F8FAFC',
            padding: '80px 20px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background decorative elements */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '400px',
                height: '400px',
                background: 'var(--c-green)',
                filter: 'blur(150px)',
                opacity: 0.1,
                borderRadius: '50%',
                zIndex: 0
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                left: '-5%',
                width: '400px',
                height: '400px',
                background: 'var(--c-green)',
                filter: 'blur(150px)',
                opacity: 0.1,
                borderRadius: '50%',
                zIndex: 0
            }}></div>

            <motion.div 
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    maxWidth: '800px',
                    width: '100%',
                    background: 'white',
                    padding: '60px 40px',
                    borderRadius: '48px',
                    boxShadow: '0 40px 100px rgba(0,0,0,0.06)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 1
                }}
            >
                {/* Success Icon Group */}
                <div style={{ position: 'relative', width: 'fit-content', margin: '0 auto 40px' }}>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                        style={{
                            background: 'var(--c-green)',
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 20px 40px color-mix(in srgb, var(--c-green) 30%, transparent)',
                        }}
                    >
                        <CheckCircle size={60} color="white" />
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        style={{
                            position: 'absolute',
                            top: -10,
                            right: -20,
                            background: '#FFD700',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            boxShadow: '0 10px 20px rgba(255, 215, 0, 0.2)',
                            fontSize: '14px',
                            fontWeight: '800',
                            color: 'var(--c-navy)'
                        }}
                    >
                        <Sparkles size={16} /> Succes!
                    </motion.div>
                </div>

                {/* Text Content */}
                <h1 style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '48px',
                    fontWeight: '800',
                    color: 'var(--c-navy)',
                    marginBottom: '20px',
                    letterSpacing: '-2px'
                }}>
                    Bedankt voor je aanvraag
                </h1>
                
                <p style={{
                    fontSize: '20px',
                    color: '#475569',
                    maxWidth: '600px',
                    margin: '0 auto 40px',
                    lineHeight: '1.6',
                    fontWeight: '500'
                }}>
                    We hebben je bericht in goede orde ontvangen. Onze hypotheekadviseur neemt binnen <strong>24 uur</strong> (tijdens werkdagen) contact met je op om je mogelijkheden te bespreken.
                </p>

                {/* Important info box */}
                <div style={{
                    background: '#F8FAFC',
                    padding: '24px',
                    borderRadius: '24px',
                    border: '1px solid #E2E8F0',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '20px',
                    marginBottom: '50px',
                    textAlign: 'left'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <div style={{ background: 'white', padding: '10px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
                            <Phone size={20} color="var(--c-green)" />
                        </div>
                        <div>
                            <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Bel ons direct</div>
                            <div style={{ fontSize: '15px', color: 'var(--c-navy)', fontWeight: '800' }}>+32/484.928.247</div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <div style={{ background: 'white', padding: '10px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
                            <MessageCircle size={20} color="var(--c-whatsapp)" />
                        </div>
                        <div>
                            <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Of via WhatsApp</div>
                            <div style={{ fontSize: '15px', color: 'var(--c-navy)', fontWeight: '800' }}>Snel antwoord</div>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: 'var(--c-navy)',
                                color: 'white',
                                padding: '18px 36px',
                                borderRadius: '18px',
                                border: 'none',
                                fontSize: '17px',
                                fontWeight: '800',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                            }}
                        >
                            <Home size={20} /> terug naar Home
                        </motion.button>
                    </Link>
                    
                    <a href="/blog" style={{ textDecoration: 'none' }}>
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: 'white',
                                color: 'var(--c-navy)',
                                padding: '18px 36px',
                                borderRadius: '18px',
                                border: '2px solid #E2E8F0',
                                fontSize: '17px',
                                fontWeight: '800',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                transition: 'all 0.2s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--c-green)'}
                            onMouseOut={(e) => e.currentTarget.style.borderColor = '#E2E8F0'}
                        >
                            Bekijk onze blogs <ArrowRight size={20} />
                        </motion.button>
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default ThankYou;
