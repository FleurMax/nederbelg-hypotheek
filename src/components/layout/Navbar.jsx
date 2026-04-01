import React, { useState } from 'react';
import { Smartphone, Menu, X } from 'lucide-react';

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
            background: 'white',
            borderBottom: '1px solid rgba(0,0,0,0.06)',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            boxShadow: '0 2px 20px rgba(0,0,0,0.05)'
        }}>
            <nav style={{
                maxWidth: '1300px',
                margin: '0 auto',
                padding: '0 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '80px',
            }}>
                {/* Fixed Logo using the new PNG */}
                <a href="/" style={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    height: '100%'
                }}>
                    <img
                        src="/images/logo.png"
                        alt="Nederbelg Hypotheek Logo"
                        style={{ height: '70px', width: 'auto' }}
                    />
                </a>

                {/* Right Aligned Container for Links and Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginLeft: 'auto' }}>
                    {/* Desktop Nav Links */}
                    <ul className="nav-menu" style={{
                        display: 'flex',
                        gap: '36px',
                        fontWeight: '700',
                        fontSize: '15px',
                        listStyle: 'none',
                        margin: 0,
                        padding: 0
                    }}>
                        {navLinks.map(link => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }}
                                    onMouseOver={(e) => e.target.style.color = 'var(--c-navy)'}
                                    onMouseOut={(e) => e.target.style.color = '#64748b'}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Actions */}
                    <div className="nav-actions" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        gap: '4px'
                    }}>

                        <a href="https://wa.me/32484928247" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '14px',
                            fontWeight: '700',
                            color: 'white',
                            background: 'var(--c-whatsapp)',
                            padding: '10px 22px',
                            borderRadius: '100px',
                            textDecoration: 'none',
                            boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
                        }}>
                            <Smartphone size={16} color="white" /> WhatsApp
                        </a>
                    </div>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className="hamburger-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '8px',
                        color: 'var(--c-navy)'
                    }}
                    aria-label="Menu openen"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div style={{
                    background: 'white',
                    borderTop: '1px solid #F1F5F9',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}>
                    {navLinks.map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            style={{
                                padding: '14px 12px',
                                fontSize: '16px',
                                fontWeight: '700',
                                color: 'var(--c-navy)',
                                textDecoration: 'none',
                                borderRadius: '12px',
                                border: '1px solid transparent',
                                transition: 'all 0.2s'
                            }}
                            onMouseOver={(e) => { e.currentTarget.style.background = '#F8FAFC'; e.currentTarget.style.borderColor = '#E2E8F0'; }}
                            onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; }}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div style={{ borderTop: '1px solid #F1F5F9', marginTop: '8px', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>

                        <a href="https://wa.me/32484928247" style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            fontSize: '15px',
                            fontWeight: '700',
                            color: 'white',
                            background: 'var(--c-whatsapp)',
                            padding: '14px',
                            borderRadius: '12px',
                            textDecoration: 'none',
                            boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
                        }}>
                            <Smartphone size={16} color="white" /> WhatsApp
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
