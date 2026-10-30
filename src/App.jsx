import React, { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import InternationalClients from './components/InternationalClients';
import PracticeAreas from './components/PracticeAreas';
import Footer from './components/Footer';
import ContactFloating from './components/ContactFloating';
import ContactModal from './components/ContactModal';


function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-amber-100 selection:text-amber-900">
      <Nav onContactClick={openContact} />
      <main>
        <Hero />
        <About />
        <Services />

        {/* Structured Container for Expandable Legal Highlights */}
       
        <Portfolio />
        <InternationalClients />
        <PracticeAreas />
      </main>

      <Footer onContactClick={openContact} />
      <ContactFloating />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
}

export default App;