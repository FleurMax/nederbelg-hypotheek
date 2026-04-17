import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Home, Landmark, FileText, ArrowRight } from 'lucide-react';

const Steps = () => {
    const steps = [
        {
            id: '1',
            title: 'Gratis adviesgesprek',
            description: 'Samen doen we een eerste (online) gesprek om je mogelijkheden te verkennen. We lichten je toe hoe je in België een huis kan kopen, hoeveel je kan lenen en onder welke voorwaarden.',
            icon: <MessageSquare size={28} color="var(--c-green)" />,
        },
        {
            id: '2',
            title: 'Huizenjacht & bod',
            description: 'Je weet wat je kan lenen en wat je budget is. Heb je een woning gevonden? Wij begeleiden je bij het uitbrengen van een veilig en correct bod.',
            icon: <Home size={28} color="var(--c-green)" />,
        },
        {
            id: '3',
            title: 'Kredietaanvraag',
            description: 'Bod aanvaard? Wij bekijken samen welke Belgische bank het beste bij jou past en vergelijken de grootste banken voor de beste voorwaarden. Zo regelen wij je hypotheek volledig voor jou.',
            icon: <Landmark size={28} color="var(--c-green)" />,
        },
        {
            id: '4',
            title: 'Naar de notaris',
            description: 'Proficiat, je krediet is goedgekeurd! Nu hoef je alleen nog naar de notaris te gaan om te tekenen. Daarna krijg je de sleutels en kun je direct aan je verhuisplannen beginnen.',
            icon: <FileText size={28} color="var(--c-green)" />,
        }
    ];

    return (
        <section id="hoe-wij-helpen" style={{ padding: '70px 20px', background: 'white' }}>
            <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 style={{
                        fontFamily: 'var(--font-outfit)',
                        fontSize: '48px',
                        fontWeight: '800',
                        color: 'var(--c-navy)',
                        marginBottom: '20px'
                    }}>
                        Stap voor stap naar jouw woning in België
                    </h2>
                    <div style={{ width: '80px', height: '6px', background: 'var(--c-green)', margin: '0 auto', borderRadius: '10px' }}></div>
                </div>

                <div className="steps-row" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'stretch',
                    gap: '15px'
                }}>
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    background: '#F8FAFC',
                                    padding: '40px 24px',
                                    borderRadius: '32px',
                                    flex: 1,
                                    position: 'relative',
                                    zIndex: 2,
                                    border: '1px solid rgba(0,0,0,0.03)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}
                            >
                                <div style={{
                                    width: '70px',
                                    height: '70px',
                                    background: 'white',
                                    borderRadius: '22px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '24px',
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
                                }}>
                                    {step.icon}
                                </div>

                                <div style={{
                                    fontSize: '14px',
                                    fontWeight: '900',
                                    color: 'var(--c-green)',
                                    marginBottom: '8px',
                                    fontFamily: 'var(--font-outfit)'
                                }}>
                                    {step.id}.
                                </div>

                                <h3 style={{
                                    fontSize: '18px',
                                    fontWeight: '800',
                                    color: 'var(--c-navy)',
                                    marginBottom: '16px',
                                    fontFamily: 'var(--font-outfit)',
                                    lineHeight: '1.2'
                                }}>
                                    {step.title}
                                </h3>

                                <p style={{
                                    fontSize: '14px',
                                    lineHeight: '1.6',
                                    color: 'var(--c-text-muted)',
                                    fontWeight: '500',
                                    margin: 0
                                }}>
                                    {step.description}
                                </p>
                            </motion.div>

                            {/* Arrow indicator between steps */}
                            {index < steps.length - 1 && (
                                <div className="steps-arrow" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--c-green)',
                                    opacity: 0.4
                                }}>
                                    <ArrowRight size={32} strokeWidth={3} />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Steps;
