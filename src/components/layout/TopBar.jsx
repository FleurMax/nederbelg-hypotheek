import React from 'react';
import { Check, Phone } from 'lucide-react';

const TopBar = () => {
    return (
        <div style={{
            background: 'var(--c-navy)',
            color: 'white',
            padding: '0',
            height: '40px',
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '0.03em',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1001,
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div style={{
                maxWidth: 'var(--container-max)',
                margin: '0 auto',
                padding: '0 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px'
            }} className="topbar-inner">
                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }} className="usp-list">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Check size={14} color="var(--c-primary)" strokeWidth={4} />
                        100% gratis
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Check size={14} color="var(--c-primary)" strokeWidth={4} />
                        Persoonlijk advies
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Check size={14} color="var(--c-primary)" strokeWidth={4} />
                        Onafhankelijk
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Check size={14} color="var(--c-primary)" strokeWidth={4} />
                        Binnen 2 uur antwoord
                    </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="topbar-phone">
                    <a href="tel:+32495326101" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Phone size={14} color="var(--c-primary)" />
                        +32 495 32 61 01
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
