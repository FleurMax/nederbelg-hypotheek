import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppWidget from './components/layout/WhatsAppWidget';
import Home from './pages/Home';
import ThankYou from './pages/ThankYou';
import AlgemeneVoorwaarden from './pages/AlgemeneVoorwaarden';
import PrivacyBeleid from './pages/PrivacyBeleid';
import Cookiebeleid from './pages/Cookiebeleid';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';

const App = () => {
  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <TopBar />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bedankt" element={<ThankYou />} />
            <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaarden />} />
            <Route path="/privacy-beleid" element={<PrivacyBeleid />} />
            <Route path="/cookiebeleid" element={<Cookiebeleid />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppWidget />
      </div>
    </BrowserRouter>
  );
};

export default App;
