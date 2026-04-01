import React from 'react';
import LegalLayout, { LegalSection } from '../components/layout/LegalLayout';

const PrivacyBeleid = () => {
    return (
        <LegalLayout title="Privacy Beleid">
            <LegalSection title="1. Wie zijn wij?">
                <p>Nederbelg Hypotheek is een onafhankelijk hypotheekadviseur gespecialiseerd in het begeleiden van Nederlanders bij de aankoop van een woning in België. Wij zijn verantwoordelijk voor de verwerking van uw persoonsgegevens zoals beschreven in dit privacybeleid.</p>
                <div style={{ marginTop: '12px', background: '#F8FAFC', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--c-green)' }}>
                    <p><strong>Nederbelg Hypotheek</strong></p>
                    <p>Camille D'Havestraat 43, 9040 Gent, België</p>
                    <p>BTW: BE 0000.000.000</p>
                </div>
            </LegalSection>

            <LegalSection title="2. Welke gegevens verwerken wij?">
                <p>Wij verwerken de volgende categorieën persoonsgegevens:</p>
                <ul style={{ marginLeft: '20px', marginTop: '12px', display: 'grid', gap: '8px' }}>
                    <li><strong>Identificatiegegevens:</strong> naam, adres, e-mailadres, telefoonnummer</li>
                    <li><strong>Financiële gegevens:</strong> inkomen, uitgaven, spaargeld, schulden</li>
                    <li><strong>Arbeidsgegevens:</strong> werkgever, arbeidscontract, functie</li>
                    <li><strong>Kredietgegevens:</strong> krediethistoriek, betalingsgedrag</li>
                    <li><strong>Woninggegevens:</strong> gewenste aankoopprijs, locatie voorkeur</li>
                </ul>
            </LegalSection>

            <LegalSection title="3. Waarom verwerken wij uw gegevens?">
                <p>Wij verwerken uw persoonsgegevens voor de volgende doeleinden:</p>
                <ul style={{ marginLeft: '20px', marginTop: '12px', display: 'grid', gap: '8px' }}>
                    <li>Het uitvoeren van onze dienstverlening als hypotheekadviseur</li>
                    <li>Het indienen van een kredietaanvraag bij Belgische banken</li>
                    <li>Het bijhouden van onze administratie en boekhouding</li>
                    <li>Het naleven van wettelijke verplichtingen</li>
                    <li>Het versturen van relevante informatie over onze diensten (met uw toestemming)</li>
                </ul>
            </LegalSection>

            <LegalSection title="4. Grondslag voor verwerking">
                <p>Wij verwerken uw gegevens op basis van:</p>
                <ul style={{ marginLeft: '20px', marginTop: '12px', display: 'grid', gap: '8px' }}>
                    <li><strong>Uitvoering van overeenkomst:</strong> om onze diensten te kunnen leveren</li>
                    <li><strong>Wettelijke verplichting:</strong> voor anti-witwascontroles en andere verplichtingen</li>
                    <li><strong>Toestemming:</strong> voor marketingcommunicatie</li>
                    <li><strong>Gerechtvaardigd belang:</strong> voor de verbetering van onze diensten</li>
                </ul>
            </LegalSection>

            <LegalSection title="5. Bewaartermijnen">
                <p>Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk. De bewaartermijnen zijn:</p>
                <ul style={{ marginLeft: '20px', marginTop: '12px', display: 'grid', gap: '8px' }}>
                    <li>Klantendossiers: 10 jaar na afloop van de dienstverlening (wettelijke verplichting)</li>
                    <li>Contactformuliergegevens: 2 jaar</li>
                    <li>Marketinggegevens: tot intrekking toestemming</li>
                </ul>
            </LegalSection>

            <LegalSection title="6. Delen met derden">
                <p>Wij delen uw gegevens uitsluitend met:</p>
                <ul style={{ marginLeft: '20px', marginTop: '12px', display: 'grid', gap: '8px' }}>
                    <li>Belgische kredietverstrekkers (voor de kredietaanvraag)</li>
                    <li>Notarissen (voor de akte)</li>
                    <li>Onze boekhouder (voor administratieve verplichtingen)</li>
                </ul>
                <p style={{ marginTop: '12px' }}>Wij verkopen uw gegevens nooit aan derden voor commerciële doeleinden.</p>
            </LegalSection>

            <LegalSection title="7. Uw rechten">
                <p>U heeft de volgende rechten met betrekking tot uw persoonsgegevens:</p>
                <ul style={{ marginLeft: '20px', marginTop: '12px', display: 'grid', gap: '8px' }}>
                    <li><strong>Recht op inzage:</strong> u kunt opvragen welke gegevens wij over u bewaren</li>
                    <li><strong>Recht op correctie:</strong> u kunt onjuiste gegevens laten corrigeren</li>
                    <li><strong>Recht op verwijdering:</strong> u kunt verzoeken uw gegevens te verwijderen</li>
                    <li><strong>Recht op bezwaar:</strong> u kunt bezwaar maken tegen de verwerking</li>
                    <li><strong>Recht op overdraagbaarheid:</strong> u kunt uw gegevens opvragen in een leesbaar formaat</li>
                </ul>
                <p style={{ marginTop: '12px' }}>Neem contact op via <strong>info@nederbelghypotheek.nl</strong> om uw rechten uit te oefenen.</p>
            </LegalSection>

            <LegalSection title="8. Klacht indienen">
                <p>Heeft u een klacht over onze verwerking van uw persoonsgegevens? Dan kunt u een klacht indienen bij de Gegevensbeschermingsautoriteit (GBA) via <strong>www.gegevensbeschermingsautoriteit.be</strong>.</p>
            </LegalSection>
        </LegalLayout>
    );
};

export default PrivacyBeleid;
