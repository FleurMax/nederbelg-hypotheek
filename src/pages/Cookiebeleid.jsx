import React from 'react';
import LegalLayout, { LegalSection } from '../components/layout/LegalLayout';

const Cookiebeleid = () => {
    return (
        <LegalLayout title="Cookiebeleid">
            <LegalSection title="1. Wat zijn cookies?">
                <p>Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u onze website bezoekt. Ze helpen ons de website goed te laten functioneren, uw ervaring te verbeteren en inzicht te krijgen in hoe onze website wordt gebruikt.</p>
            </LegalSection>

            <LegalSection title="2. Welke cookies gebruiken wij?">
                <div style={{ display: 'grid', gap: '20px', marginTop: '8px' }}>
                    <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--c-green)' }}>
                        <h3 style={{ fontFamily: 'var(--font-outfit)', fontSize: '16px', fontWeight: '800', color: 'var(--c-navy)', marginBottom: '8px' }}>
                            Noodzakelijke cookies
                        </h3>
                        <p>Deze cookies zijn essentieel voor het functioneren van de website. Zonder deze cookies kan de website niet correct werken. U kunt deze cookies niet weigeren.</p>
                    </div>
                    <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--c-orange)' }}>
                        <h3 style={{ fontFamily: 'var(--font-outfit)', fontSize: '16px', fontWeight: '800', color: 'var(--c-navy)', marginBottom: '8px' }}>
                            Analytische cookies
                        </h3>
                        <p>Wij gebruiken Google Analytics om inzicht te krijgen in hoe bezoekers onze website gebruiken. Deze informatie helpt ons de website te verbeteren. De gegevens worden geanonimiseerd verwerkt.</p>
                    </div>
                    <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--c-orange)' }}>
                        <h3 style={{ fontFamily: 'var(--font-outfit)', fontSize: '16px', fontWeight: '800', color: 'var(--c-navy)', marginBottom: '8px' }}>
                            Marketingcookies
                        </h3>
                        <p>Deze cookies worden gebruikt om bezoekers te volgen voor advertentiedoeleinden. We kunnen retargeting-campagnes inzetten via platforms zoals Google Ads of Facebook. U kunt hiervoor uw toestemming intrekken.</p>
                    </div>
                </div>
            </LegalSection>

            <LegalSection title="3. Cookieoverzicht">
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '12px', fontSize: '14px' }}>
                        <thead>
                            <tr style={{ background: 'var(--c-navy)', color: 'white' }}>
                                <th style={{ padding: '12px 16px', textAlign: 'left', borderRadius: '8px 0 0 0' }}>Cookie</th>
                                <th style={{ padding: '12px 16px', textAlign: 'left' }}>Type</th>
                                <th style={{ padding: '12px 16px', textAlign: 'left' }}>Doel</th>
                                <th style={{ padding: '12px 16px', textAlign: 'left', borderRadius: '0 8px 0 0' }}>Bewaartijd</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { name: '_ga', type: 'Analytisch', doel: 'Google Analytics tracking', tijd: '2 jaar' },
                                { name: '_gid', type: 'Analytisch', doel: 'Google Analytics sessie', tijd: '24 uur' },
                                { name: 'cookieconsent', type: 'Noodzakelijk', doel: 'Cookie voorkeur opslaan', tijd: '1 jaar' },
                            ].map((row, idx) => (
                                <tr key={idx} style={{ background: idx % 2 === 0 ? '#F8FAFC' : 'white' }}>
                                    <td style={{ padding: '12px 16px', fontFamily: 'monospace', color: 'var(--c-navy)', fontWeight: '700' }}>{row.name}</td>
                                    <td style={{ padding: '12px 16px', color: '#475569' }}>{row.type}</td>
                                    <td style={{ padding: '12px 16px', color: '#475569' }}>{row.doel}</td>
                                    <td style={{ padding: '12px 16px', color: '#475569' }}>{row.tijd}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </LegalSection>

            <LegalSection title="4. Cookies beheren">
                <p>U kunt uw cookievoorkeuren op elk moment aanpassen via de instellingen van uw browser. Let op: het uitschakelen van bepaalde cookies kan de functionaliteit van onze website beïnvloeden.</p>
                <ul style={{ marginLeft: '20px', marginTop: '12px', display: 'grid', gap: '8px' }}>
                    <li><strong>Chrome:</strong> Instellingen → Privacy en beveiliging → Cookies</li>
                    <li><strong>Firefox:</strong> Opties → Privacy en beveiliging → Cookies</li>
                    <li><strong>Safari:</strong> Voorkeuren → Privacy → Cookies</li>
                    <li><strong>Edge:</strong> Instellingen → Privacy → Cookies</li>
                </ul>
            </LegalSection>

            <LegalSection title="5. Contact">
                <p>Heeft u vragen over ons cookiebeleid? Neem contact met ons op via <strong>info@nederbelghypotheek.be</strong>.</p>
            </LegalSection>
        </LegalLayout>
    );
};

export default Cookiebeleid;
