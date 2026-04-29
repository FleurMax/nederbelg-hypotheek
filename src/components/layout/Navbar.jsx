import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Menu, X, MessageCircle } from 'lucide-react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { label: 'Home', href: '/#home' },
        { label: 'Hoe wij helpen', href: '/#hoe-wij-helpen' },
        { label: 'Gratis advies', href: '/#kosteloos-advies' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/#contact' },
    ];

    return (
        <header style={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--c-border)',
            position: 'fixed',
            top: '40px',
            left: 0,
            right: 0,
            zIndex: 1000,
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            transition: 'all 0.3s ease'
        }}>
            <nav style={{
                maxWidth: 'var(--container-max)',
                margin: '0 auto',
                padding: '0 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
            }}>
                {/* Logo Area */}
                <a href="/" style={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    gap: '12px'
                }}>
                    <img
                        src="/images/logo.png"
                        alt="Nederbelg Hypotheek Logo"
                        style={{ height: '60px', width: 'auto' }}
                    />
                </a>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="nav-menu">
                    <ul style={{
                        display: 'flex',
                        gap: '8px',
                        listStyle: 'none',
                        margin: 0,
                        padding: 0
                    }}>
                        {navLinks.map(link => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    style={{
                                        color: 'var(--c-text-muted)',
                                        textDecoration: 'none',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        padding: '8px 16px',
                                        borderRadius: '8px',
                                        transition: 'all 0.2s'
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.color = 'var(--c-primary)';
                                        e.target.style.background = 'var(--c-primary-light)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.color = 'var(--c-text-muted)';
                                        e.target.style.background = 'transparent';
                                    }}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a 
                        href="https://wa.me/32495326101" 
                        onClick={() => {
                            if (typeof window.gtag_report_conversion === 'function') {
                                window.gtag_report_conversion();
                            }
                        }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'var(--c-primary)',
                            color: 'white',
                            padding: '12px 24px',
                            borderRadius: '10px',
                            fontSize: '14px',
                            fontWeight: '700',
                            textDecoration: 'none',
                            boxShadow: '0 4px 14px rgba(0, 85, 204, 0.25)',
                            transition: 'all 0.2s'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.background = 'var(--c-primary-hover)';
                            e.currentTarget.style.transform = 'translateY(-1px)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.background = 'var(--c-primary)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <Smartphone size={16} /> WhatsApp
                    </a>
                </div>

                {/* Mobile Actions */}
                <div style={{ display: 'none', alignItems: 'center', gap: '12px' }} className="mobile-nav-actions">
                    <a 
                        href="https://wa.me/32495326101" 
                        onClick={() => {
                            if (typeof window.gtag_report_conversion === 'function') {
                                window.gtag_report_conversion();
                            }
                        }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: '#25D366',
                            color: 'white',
                            width: '44px',
                            height: '44px',
                            borderRadius: '12px',
                            textDecoration: 'none',
                            boxShadow: '0 4px 12px rgba(37, 211, 102, 0.2)'
                        }}
                        aria-label="WhatsApp"
                    >
                        <MessageCircle size={24} fill="white" color="white" />
                    </a>

                    <button
                        className="hamburger-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{
                            display: 'none',
                            background: 'var(--c-bg-light)',
                            border: '1px solid var(--c-border)',
                            cursor: 'pointer',
                            width: '44px',
                            height: '44px',
                            borderRadius: '12px',
                            color: 'var(--c-navy)',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMenuOpen(false)}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(15, 23, 42, 0.4)',
                                backdropFilter: 'blur(4px)',
                                zIndex: 1999
                            }}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: '-100%' }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                background: 'white',
                                zIndex: 2000,
                                padding: '80px 24px 40px',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <div style={{ 
                                position: 'absolute',
                                top: '20px',
                                left: '24px',
                                right: '24px',
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center', 
                                marginBottom: '0' 
                            }}>
                                <div style={{ fontSize: '20px', fontWeight: '900', color: 'var(--c-navy)', fontFamily: 'var(--font-outfit)' }}>NederBelg</div>
                                <button 
                                    onClick={() => setMenuOpen(false)}
                                    style={{ background: 'var(--c-bg-light)', border: 'none', padding: '8px', borderRadius: '8px', cursor: 'pointer' }}
                                >
                                    <X size={24} color="var(--c-navy)" />
                                </button>
                            </div>

                            <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0', display: 'grid', gap: '8px' }}>
                                {navLinks.map(link => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            onClick={() => setMenuOpen(false)}
                                            style={{
                                                color: 'var(--c-navy)',
                                                textDecoration: 'none',
                                                fontSize: '16px',
                                                fontWeight: '800',
                                                display: 'block',
                                                padding: '12px 16px',
                                                borderRadius: '10px',
                                                background: 'transparent',
                                                transition: 'all 0.2s'
                                            }}
                                            onMouseOver={(e) => e.target.style.background = 'var(--c-bg-light)'}
                                            onMouseOut={(e) => e.target.style.background = 'transparent'}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div style={{ marginTop: '16px' }}>
                                <a 
                                    href="https://wa.me/32495326101"
                                    onClick={() => setMenuOpen(false)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '10px',
                                        background: 'var(--c-primary)',
                                        color: 'white',
                                        padding: '16px',
                                        borderRadius: '12px',
                                        fontSize: '16px',
                                        fontWeight: '800',
                                        textDecoration: 'none',
                                        width: '100%'
                                    }}
                                >
                                    <Smartphone size={20} /> WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
