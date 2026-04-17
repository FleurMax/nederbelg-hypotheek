import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div style={{
            marginBottom: '16px',
            background: 'white',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: isOpen ? '0 15px 30px rgba(0,0,0,0.06)' : '0 4px 10px rgba(0,0,0,0.02)',
            border: isOpen ? '1px solid var(--c-green)' : '1px solid rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease'
        }}>
            <button
                onClick={onClick}
                style={{
                    width: '100%',
                    padding: '24px 30px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    outline: 'none'
                }}
            >
                <span style={{
                    fontSize: '18px',
                    fontWeight: '800',
                    color: 'var(--c-navy)',
                    fontFamily: 'var(--font-outfit)',
                    paddingRight: '20px'
                }}>
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ color: isOpen ? 'var(--c-green)' : 'var(--c-text-muted)', flexShrink: 0 }}
                >
                    <ChevronDown size={24} />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div style={{
                            padding: '0 30px 24px 30px',
                            fontSize: '16px',
                            lineHeight: '1.7',
                            color: '#475569',
                            fontWeight: '500'
                        }}>
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "Kan ik een Belgische hypotheek krijgen met een Nederlands inkomen?",
            answer: "Ja dat kan zeker, maar het is maatwerk. Niet elke Belgische bank accepteert een buitenlands inkomen en de voorwaarden zijn streng. Het succes van je aanvraag valt of staat met de juiste voorbereiding. Omdat banken extra kritisch kijken naar buitenlands inkomen heb je een gespecialiseerde kredietmakelaar nodig. Wij weten precies welke banken jouw inkomen aanvaarden en hoe we een dossier moeten samenstellen dat direct wordt goedgekeurd."
        },
        {
            question: "Wat zijn de belangrijkste verschillen tussen een Nederlandse en Belgische hypotheek?",
            answer: "Het grootste verschil is de verplichte aflossing. In België wordt een hypotheek bijna altijd volledig terugbetaald, meestal via een maandelijkse annuïteit (een combinatie van kapitaal en interest). Terwijl aflossingsvrije hypotheken in Nederland nog voorkomen, zijn deze bij Belgische banken vrijwel niet verkrijgbaar. Je bouwt in België dus vanaf dag één direct eigen vermogen op in je woning."
        },
        {
            question: "Hoeveel spaargeld heb ik écht nodig?",
            answer: "In België kun je de bijkomende kosten (zoals registratierechten en notariskosten, m.a.w. kosten koper) niet meefinancieren in je hypotheek. Dit bedrag moet je dus volledig uit eigen zak betalen. Daarnaast verwachten Belgische banken vaak een eigen inbreng van ongeveer 10% op de aankoopprijs van de woning. Maatwerk is hierbij essentieel: wij maken een gedetailleerde berekening van de totale kosten zodat je niet voor verrassingen komt te staan bij de notaris."
        },
        {
            question: "Kan ik zomaar een bod uitbrengen op een woning?",
            answer: "Opgelet: in België is een bod direct bindend. Zodra de verkoper je bod accepteert zit je aan de koop vast. Je hebt in België namelijk geen wettelijke bedenktijd zoals in Nederland. Om te voorkomen dat je vastzit aan een woning die je niet kunt betalen, berekenen wij je budget vooraf tot in de puntjes. Ook helpen we je bij het opnemen van een opschortende voorwaarde voor financiering. Dit is een extra veiligheid in je bod die ervoor zorgt dat de koop zonder boete vervalt als de bank je lening toch zou weigeren."
        },
        {
            question: "Hoe snel krijg ik de sleutels van de woning?",
            answer: "Reken in België op gemiddeld 3 tot 4 maanden. Deze termijn kan in overleg langer zijn, maar vrijwel nooit korter. Waarom dit zo lang duurt? De notaris is wettelijk verplicht om uitgebreid onderzoek te doen naar de woning. Denk aan stedenbouwkundige vergunningen, bodemattesten en eventuele schulden van de verkoper. Pas als al dit papierwerk 100% in orde is, mag de akte getekend worden en krijg je de sleutels."
        },
        {
            question: "Kan ik renovatiekosten meelenen?",
            answer: "Het meelenen van renovatiekosten bovenop je hypotheek is zeker mogelijk, maar je moet er wel rekening mee houden dat de bank dit bedrag pas vrijgeeft zodra je de gemaakte kosten met facturen of offertes kunt bewijzen. Daarnaast hangt het van de specifieke bank en het energielabel van de woning af of je verplicht bent om te renoveren."
        },
        {
            question: "Hoe zit het met de Nederlandse hypotheekrenteaftrek?",
            answer: "Als je in België woont en in Nederland werkt (en daar minstens 90% van je inkomen verdient) kun je onder bepaalde voorwaarden worden aangemerkt als “kwalificerend buitenlands belastingplichtige”. In dat geval kun je de hypotheekrente van je Belgische woning in Nederland aftrekken."
        },
        {
            question: "Waar betaal ik belasting als ik in België woon maar in Nederland werk?",
            answer: "In de basis betaal je inkomstenbelasting in het land waar je werkt (Nederland). Echter, omdat je in België woont, moet je daar je wereldinkomen aangeven. Dankzij het belastingverdrag tussen Nederland en België wordt voorkomen dat je dubbel belasting betaalt, maar je betaalt in België vaak nog wel aanvullende gemeentebelasting."
        }
    ];

    return (
        <section style={{ padding: '70px 20px', background: '#F8FAFC' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: 'var(--c-green)', marginBottom: '16px' }}>
                        <HelpCircle size={24} />
                        <span style={{ fontWeight: '800', fontSize: '14px', letterSpacing: '1px' }}>HULPCENTRUM</span>
                    </div>
                    <h2 style={{
                        fontFamily: 'var(--font-outfit)',
                        fontSize: '48px',
                        fontWeight: '800',
                        color: 'var(--c-navy)',
                        marginBottom: '20px',
                        letterSpacing: '-1.5px'
                    }}>
                        Veelgestelde vragen
                    </h2>
                    <p style={{ fontSize: '18px', color: 'var(--c-text-muted)', fontWeight: '500' }}>
                        Alles wat je moet weten over verhuizen naar en financieren in België.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
