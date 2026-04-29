import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, User, Check, Sparkles } from 'lucide-react';

const ContactForm = () => {
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        const formData = new FormData(form);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => {
                setLoading(false);
                if (typeof window.gtag_report_conversion === 'function') {
                    window.gtag_report_conversion();
                }
                navigate('/bedankt');
            })
            .catch((error) => {
                console.error("Netlify Form Submission Error:", error);
                setLoading(false);
                alert("Er is iets misgegaan bij het verzenden. Probeer het later opnieuw.");
            });
    };

    return (
        <section id="contact" style={{
            padding: '120px 0',
            background: 'white',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 24px' }}>
                <div style={{
                    background: 'var(--c-navy)',
                    borderRadius: '40px',
                    padding: '80px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '80px',
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 40px 100px rgba(15, 23, 42, 0.2)'
                }} className="contact-cta-card">
                    
                    {/* Background Decorative Elements */}
                    <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'var(--c-primary)', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.3 }}></div>
                    <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '200px', height: '200px', background: 'var(--c-orange)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.2 }}></div>

                    {/* Left Side: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ position: 'relative', zIndex: 2 }}
                    >
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(255,255,255,0.1)',
                            color: 'white',
                            padding: '6px 16px',
                            borderRadius: '100px',
                            fontSize: '13px',
                            fontWeight: '700',
                            marginBottom: '24px',
                            border: '1px solid rgba(255,255,255,0.2)'
                        }}>
                            CONTACT
                        </div>

                        <h2 style={{
                            fontFamily: 'var(--font-outfit)',
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: '900',
                            color: 'white',
                            lineHeight: '1.1',
                            letterSpacing: '-1px',
                            marginBottom: '24px'
                        }}>
                            Hoe kunnen we je verder helpen?
                        </h2>
                        
                        <p style={{
                            fontSize: '18px',
                            color: 'rgba(255,255,255,0.7)',
                            fontWeight: '500',
                            lineHeight: '1.6',
                            marginBottom: '32px'
                        }}>
                            Twijfel je over je mogelijkheden of heb je vragen over een hypotheek? Praat direct met onze hypotheekadviseur!
                        </p>

                        <div style={{ display: 'grid', gap: '16px', marginBottom: '40px' }}>
                            {[
                                'Persoonlijk advies, afgestemd op jouw situatie',
                                'Direct duidelijkheid over wat jij kunt lenen in België',
                                '100% gratis en volledig vrijblijvend',
                                'Ondersteuning bij iedere stap, zodat jij zorgeloos je woning kunt kopen'
                            ].map((text, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ 
                                        background: 'var(--c-primary)', 
                                        borderRadius: '50%', 
                                        width: '24px', 
                                        height: '24px', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center', 
                                        flexShrink: 0 
                                    }}>
                                        <Check size={14} color="white" strokeWidth={3} />
                                    </div>
                                    <span style={{ fontSize: '15px', color: 'white', fontWeight: '500' }}>{text}</span>
                                </div>
                            ))}
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ background: 'rgba(255,255,255,0.1)', width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <Phone size={18} color="white" />
                                </div>
                                <div>
                                    <div style={{ fontSize: '11px', fontWeight: '800', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Bellen</div>
                                    <div style={{ fontSize: '15px', fontWeight: '800', color: 'white' }}>+32 495 32 61 01</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ background: 'rgba(255,255,255,0.1)', width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <Mail size={18} color="white" />
                                </div>
                                <div>
                                    <div style={{ fontSize: '11px', fontWeight: '800', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Email</div>
                                    <div style={{ fontSize: '15px', fontWeight: '800', color: 'white' }}>info@nederbelghypotheek.be</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{
                            background: 'white',
                            padding: '48px',
                            borderRadius: '32px',
                            position: 'relative',
                            zIndex: 2,
                            boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
                        }}
                    >
                        <form 
                            name="contact" 
                            method="POST" 
                            data-netlify="true" 
                            netlify-honeypot="bot-field"
                            onSubmit={handleSubmit}
                            style={{ display: 'grid', gap: '20px' }}
                        >
                            <input type="hidden" name="form-name" value="contact" />
                            <p hidden><label><input name="bot-field" /></label></p>
                            
                            <div style={{ display: 'grid', gap: '8px' }}>
                                <label style={{ fontSize: '14px', fontWeight: '800', color: 'var(--c-navy)' }}>Naam</label>
                                <input
                                    type="text"
                                    name="naam"
                                    required
                                    placeholder="Hoe mogen we je noemen?"
                                    style={{
                                        width: '100%',
                                        padding: '14px 18px',
                                        borderRadius: '12px',
                                        border: '1px solid var(--c-border)',
                                        fontSize: '15px',
                                        fontWeight: '500',
                                        outline: 'none',
                                        background: 'var(--c-bg-light)'
                                    }}
                                />
                            </div>

                            <div style={{ display: 'grid', gap: '8px' }}>
                                <label style={{ fontSize: '14px', fontWeight: '800', color: 'var(--c-navy)' }}>E-mailadres</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Op welk mailadres kunnen we je bereiken?"
                                    style={{
                                        width: '100%',
                                        padding: '14px 18px',
                                        borderRadius: '12px',
                                        border: '1px solid var(--c-border)',
                                        fontSize: '15px',
                                        fontWeight: '500',
                                        outline: 'none',
                                        background: 'var(--c-bg-light)'
                                    }}
                                />
                            </div>

                            <div style={{ display: 'grid', gap: '8px' }}>
                                <label style={{ fontSize: '14px', fontWeight: '800', color: 'var(--c-navy)' }}>Telefoonnummer</label>
                                <input
                                    type="tel"
                                    name="telefoon"
                                    placeholder="Voor een snelle vraag of toelichting."
                                    style={{
                                        width: '100%',
                                        padding: '14px 18px',
                                        borderRadius: '12px',
                                        border: '1px solid var(--c-border)',
                                        fontSize: '15px',
                                        fontWeight: '500',
                                        outline: 'none',
                                        background: 'var(--c-bg-light)'
                                    }}
                                />
                            </div>

                            <div style={{ display: 'grid', gap: '8px' }}>
                                <label style={{ fontSize: '14px', fontWeight: '800', color: 'var(--c-navy)' }}>Bericht</label>
                                <textarea
                                    name="bericht"
                                    required
                                    placeholder="Waar kunnen we je vandaag mee helpen?"
                                    style={{
                                        width: '100%',
                                        padding: '14px 18px',
                                        borderRadius: '12px',
                                        border: '1px solid var(--c-border)',
                                        fontSize: '15px',
                                        fontWeight: '500',
                                        outline: 'none',
                                        background: 'var(--c-bg-light)',
                                        minHeight: '100px',
                                        resize: 'none'
                                    }}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                style={{
                                    background: 'var(--c-primary)',
                                    color: 'white',
                                    padding: '16px',
                                    borderRadius: '12px',
                                    border: 'none',
                                    fontSize: '16px',
                                    fontWeight: '800',
                                    cursor: loading ? 'not-allowed' : 'pointer',
                                    marginTop: '10px',
                                    boxShadow: '0 10px 20px rgba(0, 85, 204, 0.2)',
                                    transition: 'all 0.2s'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                {loading ? 'Verzenden...' : 'Verzenden'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
