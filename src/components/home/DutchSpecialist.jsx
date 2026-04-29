import React from 'react';
import { motion } from 'framer-motion';

const DutchSpecialist = () => {
    const items = [
        {
            icon: '📱',
            title: 'Bereikbaar op de momenten dat jij ons nodig hebt',
            desc: 'De huizenmarkt staat nooit stil, en wij ook niet. Voor dringende zaken zoals een last-minute bod of cruciale vragen over je dossier zijn wij ook op zaterdag en zondag bereikbaar via WhatsApp. Jouw droomhuis wacht immers niet tot maandagochtend.'
        },
        {
            icon: '🇧🇪',
            title: 'Gespecialiseerd in Nederlanders die naar België verhuizen',
            desc: 'Wij kennen alle voorwaarden van de Belgische kredietgevers en weten meteen welke banken geschikt zijn voor jouw dossier. Dat geeft ons én jou de zekerheid dat we gericht en efficiënt te werk gaan.'
        },
        {
            icon: '🎯',
            title: 'Ook voor nipt haalbare dossiers',
            desc: 'Is je dossier net aan de grens van haalbaarheid? Geen probleem. Wij gaan actief in gesprek met de kredietgever om je dossier toch door te krijgen. Dankzij onze ervaring kunnen we het verschil maken bij beslissingen die net op het randje liggen.'
        },
        {
            icon: '📜',
            title: 'Attest koopzekerheid',
            desc: 'Als Nederlandse koper in België kan een verkoper twijfelen of je lening rondkomt. Met ons Attest Koopzekerheid laat je direct zien dat je financieel solide bent. Het attest wordt persoonlijk opgesteld voor jouw situatie en geeft de verkoper direct vertrouwen dat je hypotheek haalbaar is. Zo wordt je bod serieus genomen, sta je sterker tijdens de onderhandelingen en vergroot je je kans dat je zonder stress je droomwoning koopt.'
        }
    ];

    return (
        <section style={{
            padding: '120px 0',
            background: 'var(--c-bg-light)',
            overflow: 'hidden'
        }}>
            <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 24px' }}>
                
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-end', 
                    gap: '40px',
                    marginBottom: '52px'
                }} className="section-header-flex">
                    <div style={{ flex: 1 }}>
                        <div style={{
                            color: 'var(--c-primary)',
                            fontSize: '13px',
                            fontWeight: '800',
                            letterSpacing: '1.5px',
                            marginBottom: '16px',
                            textTransform: 'uppercase'
                        }}>
                            WAAROM NEDERBELG
                        </div>
                        <h2 style={{
                            fontFamily: 'var(--font-outfit)',
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: '900',
                            color: 'var(--c-navy)',
                            lineHeight: '1.1',
                            letterSpacing: '-1px',
                            marginBottom: '0'
                        }}>
                            Niet zomaar een Belgische hypotheekadviseur:<br />
                            <span style={{ color: 'var(--c-primary)' }}>wij begrijpen Nederlandse kopers.</span>
                        </h2>
                    </div>
                </div>

                <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '20px'
                }} className="specialist-grid">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            style={{
                                background: 'white',
                                padding: '32px',
                                borderRadius: '24px',
                                border: '1px solid var(--c-border)',
                                boxShadow: 'var(--shadow-sm)',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                            whileHover={{ y: -5, boxShadow: 'var(--shadow)', borderColor: 'var(--c-primary)' }}
                        >
                            <div style={{ 
                                background: 'var(--c-primary-light)', 
                                width: '52px', 
                                height: '52px', 
                                borderRadius: '14px', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                fontSize: '24px',
                                marginBottom: '20px'
                            }}>
                                {item.icon}
                            </div>
                            
                            <h3 style={{ 
                                fontSize: '20px', 
                                fontWeight: '800', 
                                color: 'var(--c-navy)', 
                                marginBottom: '12px', 
                                fontFamily: 'var(--font-outfit)', 
                                lineHeight: '1.2' 
                            }}>
                                {item.title}
                            </h3>
                            
                            <p style={{ 
                                fontSize: '15px', 
                                lineHeight: '1.6', 
                                color: 'var(--c-text-muted)', 
                                fontWeight: '500',
                                margin: 0
                            }}>
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DutchSpecialist;
