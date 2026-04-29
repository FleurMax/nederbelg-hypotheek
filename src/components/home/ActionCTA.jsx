import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';

const ActionCTA = () => {
    return (
        <section style={{
            background: '#F8FAFC',
            padding: '30px 20px',
            borderTop: '1px solid #E2E8F0',
            borderBottom: '1px solid #E2E8F0'
        }}>
            <div style={{
                maxWidth: 'var(--container-max)',
                margin: '0 auto'
            }}>
                <div className="cta-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '24px',
                    marginBottom: '24px'
                }}>
                    {/* WhatsApp Action */}
                    <div className="cta-card" style={{
                        background: 'white',
                        padding: '16px 28px',
                        borderRadius: '20px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '20px',
                        border: '1px solid rgba(0,0,0,0.02)'
                    }}>
                        <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--c-text-muted)', margin: 0, textAlign: 'left' }}>
                            Heb je een <br /> snelle vraag?
                        </h3>
                        <a
                            href="https://wa.me/32495326101"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                background: 'var(--c-green)',
                                color: 'white',
                                padding: '12px 24px',
                                borderRadius: '100px',
                                fontWeight: '800',
                                fontSize: '15px',
                                textDecoration: 'none',
                                transition: 'all 0.2s',
                                boxShadow: '0 4px 12px color-mix(in srgb, var(--c-green) 20%, transparent)',
                                whiteSpace: 'nowrap'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-1px)';
                                e.currentTarget.style.boxShadow = '0 6px 15px color-mix(in srgb, var(--c-green) 30%, transparent)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 12px color-mix(in srgb, var(--c-green) 20%, transparent)';
                            }}
                        >
                            <MessageCircle size={20} fill="currentColor" />
                            Laat gratis berekenen wat je kan lenen
                        </a>
                    </div>

                    {/* Calendly Action */}
                    <div className="cta-card" style={{
                        background: 'white',
                        padding: '16px 28px',
                        borderRadius: '20px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '20px',
                        border: '1px solid rgba(0,0,0,0.02)'
                    }}>
                        <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--c-text-muted)', margin: 0, textAlign: 'left' }}>
                            Wil je weten wat <br /> je kunt lenen?
                        </h3>
                        <a
                            href="https://calendly.com/nederbelg-hypotheek/45min"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                background: 'var(--c-navy)',
                                color: 'white',
                                padding: '12px 24px',
                                borderRadius: '100px',
                                fontWeight: '800',
                                fontSize: '15px',
                                textDecoration: 'none',
                                transition: 'all 0.2s',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                whiteSpace: 'nowrap'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-1px)';
                                e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.15)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                            }}
                        >
                            <Calendar size={20} />
                            Plan een gratis videogesprek
                        </a>
                    </div>
                </div>

                <p style={{
                    textAlign: 'center',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#94a3b8',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    Gratis, vrijblijvend en volledig afgestemd op Nederlanders die in België een huis willen kopen.
                </p>
            </div>
        </section>
    );
};

export default ActionCTA;
