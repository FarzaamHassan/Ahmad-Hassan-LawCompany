// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useLanguage } from '../hooks/LanguageContext';
// import { Menu, X } from 'lucide-react';

// export default function Nav({ onContactClick }) {
//     const [scrolled, setScrolled] = useState(false);
//     const [menuOpen, setMenuOpen] = useState(false);
//     const { lang, toggleLang, t } = useLanguage();

//     useEffect(() => {
//         const handleScroll = () => setScrolled(window.scrollY > 50);
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <motion.nav 
//             className={`navbar ${scrolled ? 'scrolled' : ''}`}
//             initial={{ y: -100 }}
//             animate={{ y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//             <div className="container nav-container">
//                 <div className="logo">AHMAD <span>HASSAN</span></div>
                
//                 <div className="nav-links">
//                     <a href="#about">{t('nav-about')}</a>
//                     <a href="#services">{t('nav-services')}</a>
//                     <a href="#portfolio">{t('nav-portfolio')}</a>
//                     <button className="lang-switch" onClick={toggleLang} aria-label="Toggle language">
//                         <span className={lang === 'en' ? 'active' : ''}>ENG</span>
//                         <span className={lang === 'zh' ? 'active' : ''}>中文</span>
//                     </button>
//                     <button onClick={onContactClick} className="btn btn-primary">{t('nav-contact')}</button>
//                 </div>

//                 <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
//                     {menuOpen ? <X size={28} /> : <Menu size={28} />}
//                 </button>
                
//                 <AnimatePresence>
//                     {menuOpen && (
//                         <motion.div 
//                             className="mobile-menu active"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                         >
//                             <button className="lang-switch" style={{ marginBottom: '2rem', transform: 'scale(1.2)' }} onClick={toggleLang}>
//                                 <span className={lang === 'en' ? 'active' : ''}>ENG</span>
//                                 <span className={lang === 'zh' ? 'active' : ''}>中文</span>
//                             </button>
//                             <a href="#about" className="mobile-link" onClick={() => setMenuOpen(false)}>{t('nav-about')}</a>
//                             <a href="#services" className="mobile-link" onClick={() => setMenuOpen(false)}>{t('nav-services')}</a>
//                             <a href="#portfolio" className="mobile-link" onClick={() => setMenuOpen(false)}>{t('nav-portfolio')}</a>
//                             <button className="btn btn-primary mt-4" onClick={() => { setMenuOpen(false); onContactClick(); }}>{t('nav-contact')}</button>
//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//             </div>
//         </motion.nav>
//     );
// }
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/LanguageContext';
import { Menu, X } from 'lucide-react';

export default function Nav({ onContactClick }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { lang, setLang, toggleLang, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Function to handle switching across multiple languages (en -> zh -> ar)
    const handleLanguageSwitch = () => {
        if (typeof setLang === 'function') {
            if (lang === 'en') setLang('zh');
            else if (lang === 'zh') setLang('ar');
            else setLang('en');
        } else {
            toggleLang();
        }
    };

    return (
        <motion.nav 
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="container nav-container">
                <div className="logo">AHMAD <span>HASSAN</span></div>
                
                <div className="nav-links">
                    <a href="#about">{t('nav-about')}</a>
                    <a href="#services">{t('nav-services')}</a>
                    <a href="#practice-areas">{t('nav-practice-areas') || 'Practice Areas'}</a>
                    <a href="#portfolio">{t('nav-portfolio')}</a>
                    <a href="#international-clients">{t('nav-international-clients') || 'International Clients'}</a>
                    
                    <button 
                        className="lang-switch" 
                        onClick={handleLanguageSwitch} 
                        aria-label="Toggle language"
                    >
                        <span className={lang === 'en' ? 'active' : ''}>ENG</span>
                        <span className={lang === 'zh' ? 'active' : ''}>中文</span>
                        <span className={lang === 'ar' ? 'active' : ''}>عربي</span>
                    </button>
                    
                    <button onClick={onContactClick} className="btn btn-primary">{t('nav-contact')}</button>
                </div>

                <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
                
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div 
                            className="mobile-menu active"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <button 
                                className="lang-switch" 
                                style={{ marginBottom: '2rem', transform: 'scale(1.2)' }} 
                                onClick={handleLanguageSwitch}
                            >
                                <span className={lang === 'en' ? 'active' : ''}>ENG</span>
                                <span className={lang === 'zh' ? 'active' : ''}>中文</span>
                                <span className={lang === 'ar' ? 'active' : ''}>عربي</span>
                            </button>
                            
                            <a href="#about" className="mobile-link" onClick={() => setMenuOpen(false)}>{t('nav-about')}</a>
                            <a href="#services" className="mobile-link" onClick={() => setMenuOpen(false)}>{t('nav-services')}</a>
                            <a href="#practice-areas" className="mobile-link" onClick={() => setMenuOpen(false)}>{t('nav-practice-areas') || 'Practice Areas'}</a>
                            <a href="#portfolio" className="mobile-link" onClick={() => setMenuOpen(false)}>{t('nav-portfolio')}</a>
                            <a href="#international-clients" className="mobile-link" onClick={() => setMenuOpen(false)}>{t('nav-international-clients') || 'International Clients'}</a>
                            <button className="btn btn-primary mt-4" onClick={() => { setMenuOpen(false); onContactClick(); }}>{t('nav-contact')}</button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}