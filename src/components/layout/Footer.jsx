import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--c-navy)',
            color: 'white',
            padding: '80px 20px 40px 20px',
            borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
            <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
                <div className="footer-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '40px',
                    marginBottom: '60px'
                }}>
                    {/* Sitemap */}
                    <div>
                        <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '24px', fontFamily: 'var(--font-outfit)' }}>Sitemap</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '12px' }}>
                            {[
                                { label: 'Homepage', href: '/#home' },
                                { label: 'Hoe wij helpen', href: '/#hoe-wij-helpen' },
                                { label: 'Gratis advies', href: '/#kosteloos-advies' },
                                { label: 'Blog', href: '/blog' },
                            ].map(item => (
                                <li key={item.label}>
                                    <a href={item.href} style={{ color: '#B1BAD3', textDecoration: 'none', fontSize: '15px', fontWeight: '500', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#B1BAD3'}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '24px', fontFamily: 'var(--font-outfit)' }}>Contact</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '16px' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#B1BAD3', fontSize: '15px' }}>
                                <Mail size={16} color="var(--c-green)" /> info@nederbelghypotheek.be
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#B1BAD3', fontSize: '15px' }}>
                                <Phone size={16} color="var(--c-green)" /> +32/484.928.247
                            </li>
                            <li style={{ display: 'flex', alignItems: 'start', gap: '10px', color: '#B1BAD3', fontSize: '15px' }}>
                                <MapPin size={16} color="var(--c-green)" style={{ marginTop: '4px', flexShrink: 0 }} />
                                <div>Camille D'Havestraat 43<br />9040 Gent</div>
                            </li>
                            <li>
                                <a href="/#contact" style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    color: 'var(--c-green)',
                                    textDecoration: 'none',
                                    fontSize: '15px',
                                    fontWeight: '800',
                                    marginTop: '8px'
                                }}>
                                    Maak een afspraak <ExternalLink size={14} />
                                </a>
                            </li>
                        </ul>
                    </div>


                    {/* Overige links */}
                    <div>
                        <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '24px', fontFamily: 'var(--font-outfit)' }}>Overige links</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '12px' }}>
                            <li>
                                <Link to="/algemene-voorwaarden" style={{ color: '#B1BAD3', textDecoration: 'none', fontSize: '15px', fontWeight: '500', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#B1BAD3'}>Algemene voorwaarden</Link>
                            </li>
                            <li>
                                <Link to="/privacy-beleid" style={{ color: '#B1BAD3', textDecoration: 'none', fontSize: '15px', fontWeight: '500', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#B1BAD3'}>Privacy beleid</Link>
                            </li>
                            <li>
                                <Link to="/cookiebeleid" style={{ color: '#B1BAD3', textDecoration: 'none', fontSize: '15px', fontWeight: '500', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#B1BAD3'}>Cookiebeleid</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    paddingTop: '40px',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'var(--c-text-muted)',
                    fontSize: '14px',
                    fontWeight: '500',
                    flexWrap: 'wrap',
                    gap: '12px'
                }}>
                    <p>© {new Date().getFullYear()} Nederbelg Hypotheek. Alle rechten voorbehouden.</p>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        Ontwikkeld voor <span style={{ color: '#B1BAD3', fontWeight: '700' }}>Nederlanders in België</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
