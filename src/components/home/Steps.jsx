import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Home, Landmark, FileText, ArrowRight } from 'lucide-react';

const Steps = () => {
    const steps = [
        {
            id: '1',
            title: 'Gratis adviesgesprek',
            description: 'Samen doen we een eerste (online) gesprek om je mogelijkheden te verkennen. We lichten je toe hoe je in België een huis kan kopen, hoeveel je kan lenen en onder welke voorwaarden.',
        },
        {
            id: '2',
            title: 'Huizenjacht & bod',
            description: 'Je weet wat je kan lenen en wat je budget is. Heb je een woning gevonden? Wij begeleiden je bij het uitbrengen van een veilig en correct bod.',
        },
        {
            id: '3',
            title: 'Kredietaanvraag',
            description: 'Bod aanvaard? Wij bekijken samen welke Belgische bank het beste bij jou past en vergelijken de grootste banken voor de beste voorwaarden. Zo regelen wij je hypotheek volledig voor jou.',
        },
        {
            id: '4',
            title: 'Naar de notaris',
            description: 'Proficiat, je krediet is goedgekeurd! Nu hoef je alleen nog naar de notaris te gaan om te tekenen. Daarna krijg je de sleutels en kun je direct aan je verhuisplannen beginnen.',
        }
    ];

    return (
        <section id="hoe-wij-helpen" style={{ padding: '120px 0', background: 'var(--c-bg-light)' }}>
            <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 24px' }}>
                
                {/* Header Grid */}
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1.2fr 1fr', 
                    gap: '40px', 
                    alignItems: 'flex-end',
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
                            HOE HET WERKT
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
                            Stap voor stap naar jouw woning in België
                        </h2>
                    </div>
                    <p style={{
                        fontSize: '18px',
                        lineHeight: '1.6',
                        color: 'var(--c-text-muted)',
                        fontWeight: '500',
                        margin: 0
                    }}>
                        Wij begeleiden je bij elke stap van het proces. Van het eerste budgetplan tot de uiteindelijke sleuteloverdracht bij de notaris.
                    </p>
                </div>

                {/* Steps Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2px',
                    background: 'var(--c-border)',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid var(--c-border)',
                    boxShadow: 'var(--shadow-sm)'
                }} className="steps-grid">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                background: 'white',
                                padding: '40px 32px',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                            }}
                        >
                            <div style={{
                                width: '44px',
                                height: '44px',
                                background: index === 0 ? 'var(--c-primary)' : 'var(--c-primary-light)',
                                color: index === 0 ? 'white' : 'var(--c-primary)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '24px',
                                fontSize: '18px',
                                fontWeight: '800',
                                fontFamily: 'var(--font-outfit)'
                            }}>
                                {step.id}
                            </div>

                            <h3 style={{
                                fontSize: '20px',
                                fontWeight: '800',
                                color: 'var(--c-navy)',
                                marginBottom: '12px',
                                fontFamily: 'var(--font-outfit)',
                                lineHeight: '1.2'
                            }}>
                                {step.title}
                            </h3>

                            <p style={{
                                fontSize: '15px',
                                lineHeight: '1.7',
                                color: 'var(--c-text-muted)',
                                fontWeight: '500',
                                margin: 0
                            }}>
                                {step.description}
                            </p>

                            {index < steps.length - 1 && (
                                <div className="step-arrow-v2" style={{
                                    position: 'absolute',
                                    top: '40px',
                                    right: '-14px',
                                    width: '28px',
                                    height: '28px',
                                    background: 'white',
                                    border: '1px solid var(--c-border)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    zIndex: 10,
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                                }}>
                                    <ArrowRight size={14} color="var(--c-primary)" strokeWidth={3} />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Steps;
