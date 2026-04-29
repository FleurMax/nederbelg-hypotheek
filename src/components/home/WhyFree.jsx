import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Info } from 'lucide-react';

const WhyFree = () => {
    return (
        <section id="kosteloos-advies" style={{
            padding: '120px 0',
            background: 'white',
            overflow: 'hidden'
        }}>
            <div style={{
                maxWidth: '900px',
                margin: '0 auto',
                padding: '0 24px',
                textAlign: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{
                        color: 'var(--c-primary)',
                        fontSize: '13px',
                        fontWeight: '800',
                        letterSpacing: '1.5px',
                        marginBottom: '16px',
                        textTransform: 'uppercase'
                    }}>
                        HOE HET WERKT
                    </div>

                    <h2 style={{
                        fontFamily: 'var(--font-outfit)',
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: '900',
                        lineHeight: '1.1',
                        color: 'var(--c-navy)',
                        letterSpacing: '-1px',
                        marginBottom: '28px'
                    }}>
                        Waarom onze begeleiding voor jou <span style={{ color: 'var(--c-primary)' }}>100% gratis</span> is
                    </h2>

                    <div style={{
                        fontSize: '18px',
                        lineHeight: '1.7',
                        color: 'var(--c-text-muted)',
                        fontWeight: '500'
                    }}>
                        <p style={{ marginBottom: '24px' }}>
                            In België werkt hypotheekadvies anders dan in Nederland. Wij worden rechtstreeks door de bank vergoed via een commissie op het leenbedrag. De bank betaalt ons voor het aanleveren van een compleet en kwalitatief kredietdossier.
                        </p>
                        <p style={{ marginBottom: '32px' }}>
                            Daardoor kunnen wij jou van begin tot eind begeleiden zonder dat dit jou iets kost. De bank rekent deze vergoeding niet door in jouw rente of voorwaarden, waardoor jij volledig gratis profiteert van onze expertise én begeleiding.
                        </p>

                        <div style={{ 
                            background: 'var(--c-bg-light)', 
                            padding: '40px', 
                            borderRadius: '32px',
                            border: '1px solid var(--c-border)',
                            marginBottom: '40px',
                            textAlign: 'left'
                        }}>
                            <p style={{ fontWeight: '800', color: 'var(--c-navy)', marginBottom: '24px', fontSize: '18px' }}>
                                Tijdens onze begeleiding krijg je onder andere antwoord op vragen zoals:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
                                {[
                                    'Is mijn woonproject financieel haalbaar?',
                                    'Hoeveel kan ik lenen en welke kosten komen erbij kijken?',
                                    'Hoeveel betaal ik maandelijks terug?',
                                    'Welke rentevoet kan ik verwachten?',
                                    'Bij welke bank krijg ik de beste voorwaarden?'
                                ].map((q, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--c-text-muted)' }}>
                                        <div style={{ 
                                            background: 'var(--c-primary-light)', 
                                            borderRadius: '50%', 
                                            width: '28px', 
                                            height: '28px', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center', 
                                            flexShrink: 0 
                                        }}>
                                            <Check size={14} color="var(--c-primary)" strokeWidth={3} />
                                        </div>
                                        <span>{q}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p style={{
                            fontWeight: '700',
                            color: 'var(--c-navy)',
                            fontSize: '18px',
                            lineHeight: '1.6',
                            padding: '32px',
                            background: 'rgba(0, 85, 204, 0.03)',
                            borderRadius: '24px',
                            borderLeft: '4px solid var(--c-primary)',
                        }}>
                            Met onze begeleiding word je volledig ontzorgd. Wij stellen een optimaal dossier samen, vergelijken banken en zorgen dat je lening onder de beste voorwaarden wordt geregeld. Zo kun jij met een gerust hart je droomwoning kopen in België.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyFree;
