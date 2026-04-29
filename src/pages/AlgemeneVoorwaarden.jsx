import React from 'react';
import LegalLayout, { LegalSection } from '../components/layout/LegalLayout';

const AlgemeneVoorwaarden = () => {
    return (
        <LegalLayout title="Algemene Voorwaarden">
            <LegalSection title="1. Toepasselijkheid">
                <p>Deze algemene voorwaarden zijn van toepassing op alle diensten die Nederbelg Hypotheek aanbiedt aan haar klanten. Door gebruik te maken van onze diensten gaat u akkoord met deze voorwaarden.</p>
            </LegalSection>

            <LegalSection title="2. Dienstverlening">
                <p>Nederbelg Hypotheek treedt op als onafhankelijk hypotheekadviseur voor Nederlanders die een woning wensen te kopen in België. Onze dienstverlening omvat:</p>
                <ul style={{ marginLeft: '20px', marginTop: '12px', display: 'grid', gap: '8px' }}>
                    <li>Analyse van uw financiële mogelijkheden</li>
                    <li>Vergelijking van Belgische kredietverstrekkers</li>
                    <li>Begeleiding bij de kredietaanvraag</li>
                    <li>Ondersteuning bij het uitbrengen van een bod</li>
                    <li>Begeleiding tot aan de notarisakte</li>
                </ul>
            </LegalSection>

            <LegalSection title="3. Kosteloze dienstverlening">
                <p>Onze dienstverlening is volledig kosteloos voor de klant. Wij worden vergoed door de kredietverstrekker via een commissie op het toegekende kredietbedrag. Dit heeft geen invloed op het rentetarief dat u bij de bank ontvangt.</p>
            </LegalSection>

            <LegalSection title="4. Verplichtingen van de klant">
                <p>U bent verplicht alle relevante en correcte informatie te verstrekken die noodzakelijk is voor de uitvoering van onze diensten. Dit omvat onder meer inkomensgegevens, uitgaven, schulden en andere financiële verplichtingen. Onjuiste informatie kan leiden tot problemen bij de kredietaanvraag.</p>
            </LegalSection>

            <LegalSection title="5. Aansprakelijkheid">
                <p>Nederbelg Hypotheek is niet aansprakelijk voor schade die voortvloeit uit:</p>
                <ul style={{ marginLeft: '20px', marginTop: '12px', display: 'grid', gap: '8px' }}>
                    <li>Onjuiste of onvolledige informatie verstrekt door de klant</li>
                    <li>Beslissingen van kredietverstrekkers</li>
                    <li>Wijzigingen in wet- of regelgeving</li>
                    <li>Overmacht of omstandigheden buiten onze controle</li>
                </ul>
            </LegalSection>

            <LegalSection title="6. Vertrouwelijkheid">
                <p>Alle informatie die u aan ons verstrekt, wordt vertrouwelijk behandeld. Wij delen uw gegevens uitsluitend met derden voor zover dit noodzakelijk is voor de uitvoering van onze diensten, en alleen met uw toestemming.</p>
            </LegalSection>

            <LegalSection title="7. Toepasselijk recht">
                <p>Op deze algemene voorwaarden is Belgisch recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter te Gent.</p>
            </LegalSection>

            <LegalSection title="8. Contact">
                <p>Heeft u vragen over deze algemene voorwaarden? Neem dan contact met ons op:</p>
                <div style={{ marginTop: '12px', background: '#F8FAFC', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--c-green)' }}>
                    <p><strong>Nederbelg Hypotheek</strong></p>
                    <p>Camille D'Havestraat 43, 9040 Gent</p>
                    <p>E-mail: info@nederbelghypotheek.be</p>
                    <p>Telefoon: +32 495 32 61 01</p>
                </div>
            </LegalSection>
        </LegalLayout>
    );
};

export default AlgemeneVoorwaarden;
