import React from 'react';
import { motion } from 'framer-motion';
import { Clock, GraduationCap, Target, AlertTriangle, ShieldCheck } from 'lucide-react';

const DutchSpecialist = () => {
    return (
        <section style={{
            padding: '70px 20px',
            background: 'white',
            overflow: 'hidden'
        }}>
            <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', textAlign: 'center', marginBottom: '60px' }}>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontFamily: 'var(--font-outfit)',
                        fontSize: '44px',
                        fontWeight: '800',
                        lineHeight: '1.2',
                        color: 'var(--c-navy)',
                        letterSpacing: '-1.5px',
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}>
                    Niet zomaar een Belgische hypotheekadviseur: <br />
                    <span style={{ color: 'var(--c-green)' }}>wij begrijpen Nederlandse kopers.</span>
                </motion.h2>
            </div>

            <div className="specialist-grid" style={{
                maxWidth: 'var(--container-max)',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
                gap: '80px',
                alignItems: 'center'
            }}>
                {/* Text side */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{ display: 'grid', gap: '32px' }}>
                        {/* Point 1 */}
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <div style={{ background: 'color-mix(in srgb, var(--c-green) 10%, transparent)', width: '48px', height: '48px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <Clock size={24} color="var(--c-green)" />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '19px', fontWeight: '800', color: 'var(--c-navy)', marginBottom: '8px' }}>Bereikbaar op de momenten dat jij ons nodig hebt</h3>
                                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6', fontWeight: '500' }}>
                                    De huizenmarkt staat nooit stil, en wij ook niet. Voor dringende zaken zoals een last-minute bod of cruciale vragen over je dossier zijn wij ook op zaterdag en zondag bereikbaar via WhatsApp. Jouw droomhuis wacht immers niet tot maandagochtend.
                                </p>
                            </div>
                        </div>

                        {/* Point 2 */}
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <div style={{ background: 'color-mix(in srgb, var(--c-green) 10%, transparent)', width: '48px', height: '48px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <Target size={24} color="var(--c-green)" />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '19px', fontWeight: '800', color: 'var(--c-navy)', marginBottom: '8px' }}>Gespecialiseerd in Nederlanders die naar België verhuizen</h3>
                                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6', fontWeight: '500' }}>
                                    Wij kennen alle voorwaarden van de Belgische kredietgevers en weten meteen welke banken geschikt zijn voor jouw dossier. Dat geeft ons én jou de zekerheid dat we gericht en efficiënt te werk gaan.
                                </p>
                            </div>
                        </div>

                        {/* Point 3 */}
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <div style={{ background: 'color-mix(in srgb, var(--c-green) 10%, transparent)', width: '48px', height: '48px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <AlertTriangle size={24} color="var(--c-green)" />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '19px', fontWeight: '800', color: 'var(--c-navy)', marginBottom: '8px' }}>Ook voor nipt haalbare dossiers</h3>
                                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6', fontWeight: '500' }}>
                                    Is je dossier net aan de grens van haalbaarheid? Geen probleem. Wij gaan actief in gesprek met de kredietgever om je dossier toch door te krijgen. Dankzij onze ervaring kunnen we het verschil maken bij beslissingen die net op het randje liggen.
                                </p>
                            </div>
                        </div>

                        {/* Point 4 */}
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <div style={{ background: 'color-mix(in srgb, var(--c-green) 10%, transparent)', width: '48px', height: '48px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <ShieldCheck size={24} color="var(--c-green)" />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '19px', fontWeight: '800', color: 'var(--c-navy)', marginBottom: '8px' }}>Attest koopzekerheid</h3>
                                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6', fontWeight: '500' }}>
                                    Als Nederlandse koper in België kan een verkoper twijfelen of je lening rondkomt. Met ons Attest Koopzekerheid laat je direct zien dat je financieel solide bent. Het attest wordt persoonlijk opgesteld voor jouw situatie en geeft de verkoper direct vertrouwen dat je hypotheek haalbaar is. Zo wordt je bod serieus genomen, sta je sterker tijdens de onderhandelingen en vergroot je je kans dat je zonder stress je droomwoning koopt.
                                </p>
                            </div>
                        </div>
                    </div>


                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ width: '100%' }}
                >
                    <div style={{
                        borderRadius: '40px',
                        overflow: 'hidden',
                        boxShadow: '0 40px 80px rgba(0,0,0,0.1)',
                        border: '10px solid white',
                        background: 'white',
                        width: '100%'
                    }}>
                        <img
                            src="/images/dutch_specialist.jpg"
                            alt="Nederlands Hypotheek Specialisten"
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block'
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DutchSpecialist;
