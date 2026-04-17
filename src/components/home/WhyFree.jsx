import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Banknote, Info } from 'lucide-react';

const WhyFree = () => {
    return (
        <section id="kosteloos-advies" style={{
            padding: '70px 20px',
            background: '#F8FAFC',
            overflow: 'hidden'
        }}>
            <div className="why-free-grid" style={{
                maxWidth: 'var(--container-max)',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
                gap: '80px',
                alignItems: 'center'
            }}>

                {/* Image side */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative' }}
                >
                    <div style={{
                        borderRadius: '40px',
                        overflow: 'hidden',
                        boxShadow: '0 40px 80px rgba(0,0,0,0.1)',
                        border: '10px solid white',
                        background: 'white'
                    }}>
                        <img
                            src="/images/pic2.jpg"
                            alt="Waarom gratis?"
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block'
                            }}
                        />
                    </div>
                    {/* Decorative element */}
                    <div style={{
                        position: 'absolute',
                        top: '-20px',
                        left: '-20px',
                        width: '100px',
                        height: '100px',
                        background: 'color-mix(in srgb, var(--c-green) 10%, transparent)',
                        borderRadius: '50%',
                        zIndex: -1
                    }}></div>
                </motion.div>

                {/* Text side */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'color-mix(in srgb, var(--c-orange) 10%, transparent)',
                        color: '#365314',
                        padding: '8px 20px',
                        borderRadius: '100px',
                        fontSize: '12px',
                        fontWeight: '800',
                        marginBottom: '24px',
                        border: '1px solid color-mix(in srgb, var(--c-orange) 20%, transparent)',
                        letterSpacing: '0.5px'
                    }}>
                        <Info size={14} color="var(--c-orange)" /> HOE HET WERKT
                    </div>

                    <h2 style={{
                        fontFamily: 'var(--font-outfit)',
                        fontSize: '44px',
                        fontWeight: '800',
                        lineHeight: '1.2',
                        marginBottom: '28px',
                        color: 'var(--c-navy)',
                        letterSpacing: '-1.5px'
                    }}>
                        Waarom onze begeleiding voor jou <span style={{ color: 'var(--c-green)' }}>100% gratis</span> is
                    </h2>

                    <div style={{
                        fontSize: '17px',
                        lineHeight: '1.6',
                        color: '#475569',
                        marginBottom: '32px',
                        fontWeight: '500'
                    }}>
                        <p style={{ marginBottom: '20px' }}>
                            In België werkt hypotheekadvies anders dan in Nederland. Wij worden rechtstreeks door de bank vergoed via een commissie op het leenbedrag. De bank betaalt ons voor het aanleveren van een compleet en kwalitatief kredietdossier.
                        </p>
                        <p style={{ marginBottom: '24px' }}>
                            Daardoor kunnen wij jou van begin tot eind begeleiden zonder dat dit jou iets kost. De bank rekent deze vergoeding niet door in jouw rente of voorwaarden, waardoor jij volledig gratis profiteert van onze expertise én begeleiding.
                        </p>

                        <div style={{ marginBottom: '28px' }}>
                            <p style={{ fontWeight: '700', color: 'var(--c-navy)', marginBottom: '16px', fontSize: '16px' }}>
                                Tijdens onze begeleiding krijg je onder andere antwoord op vragen zoals:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '10px' }}>
                                {[
                                    'Is mijn woonproject financieel haalbaar?',
                                    'Hoeveel kan ik lenen en welke kosten komen erbij kijken?',
                                    'Hoeveel betaal ik maandelijks terug?',
                                    'Welke rentevoet kan ik verwachten?',
                                    'Bij welke bank krijg ik de beste voorwaarden?'
                                ].map((q, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: '#475569' }}>
                                        <div style={{ background: 'var(--c-green)', borderRadius: '50%', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '3px', flexShrink: 0 }}>
                                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'white' }} />
                                        </div>
                                        <span>{q}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p style={{
                            fontWeight: '600',
                            color: 'var(--c-navy)',
                            fontSize: '17px',
                            lineHeight: '1.6',
                            padding: '24px',
                            background: 'white',
                            borderRadius: '20px',
                            borderLeft: '5px solid var(--c-green)',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                        }}>
                            Met onze begeleiding word je volledig ontzorgd. Wij stellen een optimaal dossier samen, vergelijken banken en zorgen dat je lening onder de beste voorwaarden wordt geregeld. Zo kun jij met een gerust hart je droomwoning kopen in België.
                        </p>
                    </div>

                    {/* Safe/No cost block removed */}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyFree;
