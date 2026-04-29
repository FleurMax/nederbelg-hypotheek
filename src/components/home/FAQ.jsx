import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div style={{
            marginBottom: '12px',
            background: 'white',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid var(--c-border)',
            boxShadow: isOpen ? 'var(--shadow)' : 'var(--shadow-sm)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
            <button
                onClick={onClick}
                style={{
                    width: '100%',
                    padding: '24px 32px',
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
                    paddingRight: '20px',
                    lineHeight: '1.3'
                }}>
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ 
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: isOpen ? 'var(--c-primary)' : 'var(--c-bg-light)',
                        color: isOpen ? 'white' : 'var(--c-navy)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0 
                    }}
                >
                    <ChevronDown size={18} strokeWidth={3} />
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
                            padding: '0 32px 32px 32px',
                            fontSize: '16px',
                            lineHeight: '1.7',
                            color: 'var(--c-text-muted)',
                            fontWeight: '500'
                        }}>
                            <div style={{ height: '1px', background: 'var(--c-border)', marginBottom: '24px' }}></div>
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
        <section style={{ padding: '120px 0', background: 'var(--c-bg-light)' }}>
            <div style={{ maxWidth: '840px', margin: '0 auto', padding: '0 24px' }}>
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <div style={{
                        color: 'var(--c-primary)',
                        fontSize: '13px',
                        fontWeight: '800',
                        letterSpacing: '1.5px',
                        marginBottom: '16px',
                        textTransform: 'uppercase'
                    }}>
                        HULPCENTRUM
                    </div>
                    <h2 style={{
                        fontFamily: 'var(--font-outfit)',
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: '900',
                        color: 'var(--c-navy)',
                        lineHeight: '1.1',
                        letterSpacing: '-1px',
                        marginBottom: '20px'
                    }}>
                        Veelgestelde vragen
                    </h2>
                    <p style={{ 
                        fontSize: '18px', 
                        lineHeight: '1.6',
                        color: 'var(--c-text-muted)', 
                        fontWeight: '500',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
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
