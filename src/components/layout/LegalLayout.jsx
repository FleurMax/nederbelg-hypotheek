import React from 'react';
import { Link } from 'react-router-dom';

const LegalLayout = ({ title, children }) => {
    return (
        <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
            {/* Header */}
            <div style={{ background: 'var(--c-navy)', padding: '60px 20px 40px', textAlign: 'center' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '30px' }}>
                        <img
                            src="/images/logo.png"
                            alt="Logo"
                            style={{ height: '85px', width: 'auto' }}
                        />
                    </div>
                    <Link to="/" style={{
                        color: 'var(--c-green)',
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontWeight: '700',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        marginBottom: '20px'
                    }}>
                        ← Terug naar homepage
                    </Link>
                    <h1 style={{
                        fontFamily: 'var(--font-outfit)',
                        fontSize: '48px',
                        fontWeight: '800',
                        color: 'white',
                        letterSpacing: '-1.5px',
                        marginBottom: '12px'
                    }}>
                        {title}
                    </h1>
                    <p style={{ color: '#B1BAD3', fontWeight: '500', fontSize: '16px' }}>
                        Nederbelg Hypotheek — Laatst bijgewerkt: januari 2025
                    </p>
                </div>
            </div>

            {/* Content */}
            <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 20px 100px' }}>
                <div style={{
                    background: 'white',
                    borderRadius: '24px',
                    padding: '60px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                    border: '1px solid rgba(0,0,0,0.04)'
                }}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export const LegalSection = ({ title, children }) => (
    <div style={{ marginBottom: '40px' }}>
        <h2 style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '22px',
            fontWeight: '800',
            color: 'var(--c-navy)',
            marginBottom: '16px',
            borderBottom: '2px solid #F1F5F9',
            paddingBottom: '12px'
        }}>
            {title}
        </h2>
        <div style={{
            fontSize: '16px',
            color: '#475569',
            lineHeight: '1.8',
            fontWeight: '500'
        }}>
            {children}
        </div>
    </div>
);

export default LegalLayout;
