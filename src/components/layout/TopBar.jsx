import React from 'react';
import { Check, Phone } from 'lucide-react';

const TopBar = () => {
    return (
        <div className="topbar-container" style={{
            background: 'var(--c-navy)',
            color: 'white',
            padding: '10px 0',
            fontSize: '13px',
            fontWeight: '600'
        }}>
            <div className="topbar-inner" style={{
                maxWidth: '1300px',
                margin: '0 auto',
                padding: '0 20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div className="usp-list" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignItems: 'center'
                }}>
                    <div className="usp-item" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Check size={14} color="var(--c-green)" strokeWidth={3} />
                        100% gratis
                    </div>
                    <div className="usp-item" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Check size={14} color="var(--c-green)" strokeWidth={3} />
                        Persoonlijk advies
                    </div>
                    <div className="usp-item" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Check size={14} color="var(--c-green)" strokeWidth={3} />
                        Onafhankelijk
                    </div>
                    <div className="usp-item" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Check size={14} color="var(--c-green)" strokeWidth={3} />
                        Binnen 2 uur antwoord
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
