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

    // Prevent body scrolling when mobile menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    const handleLanguageSwitch = () => {
        if (typeof setLang === 'function') {
            if (lang === 'en') setLang('zh');
            else if (lang === 'zh') setLang('ar');
            else setLang('en');
        } else {
            toggleLang();
        }
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <motion.nav 
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="container nav-container">
                <a href="#home" className="logo" onClick={handleLinkClick}>
                    AHMAD <span>HASSAN</span>
                </a>
                
                {/* Desktop Navigation Links */}
                <div className="nav-links">
                    <a href="#about">{t('nav-about')}</a>
                    <a href="#services">{t('nav-services')}</a>
                    <a href="#practice-areas">{t('nav-practice-areas') || 'Practice Areas'}</a>
                    <a href="#portfolio">{t('nav-portfolio')}</a>
                    <a href="#international-clients">{t('nav-international-clients') || 'International Clients'}</a>
                    
                    <div 
                        className="lang-switch" 
                        onClick={handleLanguageSwitch} 
                        role="group"
                        aria-label="Toggle language"
                    >
                        <span 
                            className={lang === 'en' ? 'active' : ''}
                            onClick={(e) => { e.stopPropagation(); setLang('en'); }}
                        >ENG</span>
                        <span 
                            className={lang === 'zh' ? 'active' : ''}
                            onClick={(e) => { e.stopPropagation(); setLang('zh'); }}
                        >中文</span>
                        <span 
                            className={lang === 'ar' ? 'active' : ''}
                            onClick={(e) => { e.stopPropagation(); setLang('ar'); }}
                        >عربي</span>
                    </div>
                    
                    <button onClick={onContactClick} className="btn btn-primary">{t('nav-contact')}</button>
                </div>

                {/* Mobile Top Navbar Controls (Always visible directly on mobile navbar!) */}
                <div className="nav-mobile-controls">
                    <div 
                        className="lang-switch lang-switch-mobile" 
                        onClick={handleLanguageSwitch} 
                        role="group"
                        aria-label="Toggle language"
                    >
                        <span 
                            className={lang === 'en' ? 'active' : ''}
                            onClick={(e) => { e.stopPropagation(); setLang('en'); }}
                        >ENG</span>
                        <span 
                            className={lang === 'zh' ? 'active' : ''}
                            onClick={(e) => { e.stopPropagation(); setLang('zh'); }}
                        >中文</span>
                        <span 
                            className={lang === 'ar' ? 'active' : ''}
                            onClick={(e) => { e.stopPropagation(); setLang('ar'); }}
                        >عربي</span>
                    </div>

                    <button 
                        className="mobile-menu-btn" 
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                    >
                        {menuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer Overlay with dedicated Header & Close (X) button */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div 
                        className="mobile-menu active"
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.25 }}
                    >
                        <div className="mobile-menu-header">
                            <a href="#home" className="logo" onClick={handleLinkClick}>
                                AHMAD <span>HASSAN</span>
                            </a>
                            <div className="mobile-menu-header-actions">
                                <div 
                                    className="lang-switch lang-switch-mobile" 
                                    onClick={handleLanguageSwitch}
                                    role="group"
                                >
                                    <span 
                                        className={lang === 'en' ? 'active' : ''}
                                        onClick={(e) => { e.stopPropagation(); setLang('en'); }}
                                    >ENG</span>
                                    <span 
                                        className={lang === 'zh' ? 'active' : ''}
                                        onClick={(e) => { e.stopPropagation(); setLang('zh'); }}
                                    >中文</span>
                                    <span 
                                        className={lang === 'ar' ? 'active' : ''}
                                        onClick={(e) => { e.stopPropagation(); setLang('ar'); }}
                                    >عربي</span>
                                </div>
                                <button 
                                    className="mobile-menu-close-btn" 
                                    onClick={() => setMenuOpen(false)}
                                    aria-label="Close navigation"
                                >
                                    <X size={26} />
                                </button>
                            </div>
                        </div>

                        <div className="mobile-menu-links">
                            <a href="#about" className="mobile-link" onClick={handleLinkClick}>
                                {t('nav-about')}
                            </a>
                            <a href="#services" className="mobile-link" onClick={handleLinkClick}>
                                {t('nav-services')}
                            </a>
                            <a href="#practice-areas" className="mobile-link" onClick={handleLinkClick}>
                                {t('nav-practice-areas') || 'Practice Areas'}
                            </a>
                            <a href="#portfolio" className="mobile-link" onClick={handleLinkClick}>
                                {t('nav-portfolio')}
                            </a>
                            <a href="#international-clients" className="mobile-link" onClick={handleLinkClick}>
                                {t('nav-international-clients') || 'International Clients'}
                            </a>
                            <button 
                                className="btn btn-primary mt-2" 
                                style={{ width: '100%', maxWidth: '280px' }}
                                onClick={() => { setMenuOpen(false); onContactClick(); }}
                            >
                                {t('nav-contact')}
                            </button>
                        </div>

                        <div className="mobile-menu-footer">
                            <div className="mobile-menu-contact-info">
                                <span>WhatsApp: +92 313 4382949</span>
                                <span>WeChat: +92 320 0040595</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
