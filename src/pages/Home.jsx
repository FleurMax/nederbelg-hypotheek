import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/home/Hero';
// import ActionCTA from '../components/home/ActionCTA';
import Steps from '../components/home/Steps';
import WhyFree from '../components/home/WhyFree';
import DutchSpecialist from '../components/home/DutchSpecialist';
import FAQ from '../components/home/FAQ';
import Testimonials from '../components/home/Testimonials';
import ContactForm from '../components/home/ContactForm';

const Home = () => {
    const { hash } = useLocation();

    useEffect(() => {
        document.title = "Huis kopen in België als Nederlander? Gratis hypotheekadvies";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', 'Als Nederlander een huis kopen in België? Wij berekenen wat je kunt lenen met een Nederlands inkomen en begeleiden je hypotheekaanvraag. 100% gratis.');
        }

        if (hash) {
            const targetId = hash.substring(1); // remove # 
            // Give 100ms for everything to render
            const timer = setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
            return () => clearTimeout(timer);
        } else {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    }, [hash]);

    return (
        <div className="home-page">
            <Hero />
            {/* <ActionCTA /> */}
            <div id="hoe-wij-helpen">
                <Steps />
            </div>
            <div id="kosteloos-advies">
                <WhyFree />
            </div>
            <DutchSpecialist />
            <FAQ />
            <Testimonials />
            <div id="contact">
                <ContactForm />
            </div>
        </div>
    );
};

export default Home;
