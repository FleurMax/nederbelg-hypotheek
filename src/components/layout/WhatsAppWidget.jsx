import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppWidget = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Show the button after a short delay
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        // Show the popup message after 3 seconds
        const popupTimer = setTimeout(() => {
            setShowPopup(true);
        }, 4000);

        return () => {
            clearTimeout(timer);
            clearTimeout(popupTimer);
        };
    }, []);

    return (
        <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 1000, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '15px' }}>
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="whatsapp-popup"
                        style={{
                            background: 'white',
                            padding: '15px 20px',
                            borderRadius: '18px',
                            boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                            maxWidth: '240px', // Slightly narrower to take up less width
                            position: 'relative',
                            border: '1px solid rgba(0,0,0,0.05)',
                        }}
                    >
                        {/* Little speech bubble tail */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-8px',
                            right: '20px',
                            width: '16px',
                            height: '16px',
                            background: 'white',
                            transform: 'rotate(45deg)',
                            borderBottom: '1px solid rgba(0,0,0,0.05)',
                            borderRight: '1px solid rgba(0,0,0,0.05)',
                            zIndex: -1
                        }}></div>
                        <button
                            onClick={() => setShowPopup(false)}
                            style={{ position: 'absolute', top: '8px', right: '8px', background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}
                        >
                            <X size={14} />
                        </button>
                        <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--c-navy)', margin: 0, paddingRight: '15px' }}>
                            Hoi! 👋 Heb je een vraag over een hypotheek in België?
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {isVisible && (
                <motion.a
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://wa.me/32484928247"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="floating-whatsapp"
                    style={{
                        width: '64px',
                        height: '64px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '32px',
                        margin: 0
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                </motion.a>
            )}
        </div>
    );
};

export default WhatsAppWidget;
