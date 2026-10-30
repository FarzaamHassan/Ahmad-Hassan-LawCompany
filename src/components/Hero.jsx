import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="hero" id="home">
            <div className="hero-background"></div>
            <motion.div 
                className="container hero-content"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <div className="badge">{t('hero-badge')} <span className="glow-dot"></span></div>
                <h1>{t('hero-title')}</h1>
                <p className="sub-headline" style={{ marginBottom: '1.5rem', fontWeight: '600', color: 'var(--accent-gold)' }}>
                    {t('hero-subtitle')}
                </p>
                <p className="hero-intro text-muted" style={{ maxWidth: '700px', margin: '0 auto 3rem auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
                    {t('hero-intro')}
                </p>
                
                <div className="hero-cta">
                    <a href="#portfolio" className="btn btn-primary">{t('hero-btn-portfolio')}</a>
                    <a href="#contact" className="btn btn-outline">{t('hero-btn-contact')}</a>
                </div>
            </motion.div>

            <motion.div 
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span>Scroll</span>
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </motion.div>
        </section>
    );
}
