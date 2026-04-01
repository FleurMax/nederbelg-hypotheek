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
            padding: '70px 20px',
            background: 'white',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
                <div className="contact-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.2fr',
                    gap: '80px',
                    alignItems: 'start'
                }}>
                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{
                            fontFamily: 'var(--font-outfit)',
                            fontSize: '48px',
                            fontWeight: '800',
                            color: 'var(--c-navy)',
                            marginBottom: '20px',
                            letterSpacing: '-1.5px'
                        }}>
                            Hoe kunnen we je verder helpen?
                        </h2>
                        <p style={{
                            fontSize: '18px',
                            color: '#475569',
                            fontWeight: '600',
                            lineHeight: '1.5',
                            marginBottom: '24px'
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
                                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                    <div style={{ background: 'var(--c-green)', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}>
                                        <Check size={14} color="white" strokeWidth={4} />
                                    </div>
                                    <span style={{ fontSize: '16px', color: '#475569', fontWeight: '500', lineHeight: '1.4' }}>{text}</span>
                                </div>
                            ))}
                        </div>

                        <div style={{ display: 'grid', gap: '20px', padding: '24px', background: '#F8FAFC', borderRadius: '20px', border: '1px solid #E2E8F0' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{ background: 'white', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                    <Phone size={18} color="var(--c-green)" />
                                </div>
                                <div style={{ fontSize: '15px', fontWeight: '800', color: 'var(--c-navy)' }}>+32/484.928.247</div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{ background: 'white', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                    <Mail size={18} color="var(--c-green)" />
                                </div>
                                <div style={{ fontSize: '15px', fontWeight: '800', color: 'var(--c-navy)' }}>info@nederbelghypotheek.nl</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        className="contact-form-card"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{
                            background: '#F8FAFC',
                            padding: '50px',
                            borderRadius: '32px',
                            border: '1px solid rgba(0,0,0,0.05)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                            minHeight: '520px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: submitted ? 'center' : 'flex-start'
                        }}
                    >
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                style={{ textAlign: 'center' }}
                            >
                                <div style={{ 
                                    background: 'var(--c-green)', 
                                    width: '80px', 
                                    height: '80px', 
                                    borderRadius: '50%', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    margin: '0 auto 24px',
                                    boxShadow: '0 10px 25px color-mix(in srgb, var(--c-green) 30%, transparent)'
                                }}>
                                    <Sparkles size={40} color="white" />
                                </div>
                                <h3 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--c-navy)', marginBottom: '16px', fontFamily: 'var(--font-outfit)' }}>
                                    Bedankt voor je aanvraag!
                                </h3>
                                <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.6', maxWidth: '320px', margin: '0 auto 30px' }}>
                                    We hebben je bericht ontvangen en nemen binnen 24 uur contact met je op om de mogelijkheden te bespreken.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    style={{
                                        background: 'transparent',
                                        border: '2px solid var(--c-navy)',
                                        color: 'var(--c-navy)',
                                        padding: '12px 24px',
                                        borderRadius: '12px',
                                        fontWeight: '800',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Nog een bericht sturen
                                </button>
                            </motion.div>
                        ) : (
                            <form 
                                name="contact" 
                                method="POST" 
                                data-netlify="true" 
                                netlify-honeypot="bot-field"
                                onSubmit={handleSubmit}
                                style={{ display: 'grid', gap: '24px' }}
                            >
                                <input type="hidden" name="form-name" value="contact" />
                                <p hidden><label>Don't fill this out if you're human: <input name="bot-field" /></label></p>
                                
                                <div style={{ display: 'grid', gap: '8px' }}>
                                    <label style={{ fontSize: '14px', fontWeight: '800', color: 'var(--c-navy)', marginLeft: '4px' }}>Naam</label>
                                    <div style={{ position: 'relative' }}>
                                        <User size={18} color="#94a3b8" style={{ position: 'absolute', left: '16px', top: '16px' }} />
                                        <input
                                            type="text"
                                            name="naam"
                                            required
                                            placeholder="Hoe mogen we je noemen?"
                                            style={{
                                                width: '100%',
                                                padding: '16px 16px 16px 48px',
                                                borderRadius: '14px',
                                                border: '2px solid #E2E8F0',
                                                fontSize: '15px',
                                                fontWeight: '500',
                                                outline: 'none',
                                                transition: 'border-color 0.2s'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = 'var(--c-green)'}
                                            onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                                        />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gap: '8px' }}>
                                    <label style={{ fontSize: '14px', fontWeight: '800', color: 'var(--c-navy)', marginLeft: '4px' }}>E-mailadres</label>
                                    <div style={{ position: 'relative' }}>
                                        <Mail size={18} color="#94a3b8" style={{ position: 'absolute', left: '16px', top: '16px' }} />
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="Op welk mailadres kunnen we je bereiken?"
                                            style={{
                                                width: '100%',
                                                padding: '16px 16px 16px 48px',
                                                borderRadius: '14px',
                                                border: '2px solid #E2E8F0',
                                                fontSize: '15px',
                                                fontWeight: '500',
                                                outline: 'none',
                                                transition: 'border-color 0.2s'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = 'var(--c-green)'}
                                            onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                                        />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gap: '8px' }}>
                                    <label style={{ fontSize: '14px', fontWeight: '800', color: 'var(--c-navy)', marginLeft: '4px' }}>Telefoonnummer</label>
                                    <div style={{ position: 'relative' }}>
                                        <Phone size={18} color="#94a3b8" style={{ position: 'absolute', left: '16px', top: '16px' }} />
                                        <input
                                            type="tel"
                                            name="telefoon"
                                            placeholder="Voor een snelle vraag of toelichting."
                                            style={{
                                                width: '100%',
                                                padding: '16px 16px 16px 48px',
                                                borderRadius: '14px',
                                                border: '2px solid #E2E8F0',
                                                fontSize: '15px',
                                                fontWeight: '500',
                                                outline: 'none',
                                                transition: 'border-color 0.2s'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = 'var(--c-green)'}
                                            onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                                        />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gap: '8px' }}>
                                    <label style={{ fontSize: '14px', fontWeight: '800', color: 'var(--c-navy)', marginLeft: '4px' }}>Bericht</label>
                                    <textarea
                                        name="bericht"
                                        required
                                        placeholder="Waar kunnen we je vandaag mee helpen?"
                                        style={{
                                            width: '100%',
                                            padding: '16px',
                                            borderRadius: '14px',
                                            border: '2px solid #E2E8F0',
                                            fontSize: '15px',
                                            fontWeight: '500',
                                            outline: 'none',
                                            minHeight: '120px',
                                            transition: 'border-color 0.2s',
                                            resize: 'vertical'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--c-green)'}
                                        onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={loading}
                                    style={{
                                        background: 'var(--c-navy)',
                                        color: 'white',
                                        padding: '18px',
                                        borderRadius: '14px',
                                        border: 'none',
                                        fontSize: '16px',
                                        fontWeight: '800',
                                        cursor: loading ? 'not-allowed' : 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '12px',
                                        marginTop: '8px',
                                        opacity: loading ? 0.7 : 1,
                                        boxShadow: '0 10px 20px color-mix(in srgb, var(--c-navy) 15%, transparent)'
                                    }}
                                >
                                    <Send size={20} fill="var(--c-green)" color="var(--c-green)" />
                                    {loading ? 'Verzenden...' : 'Verzenden'}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
