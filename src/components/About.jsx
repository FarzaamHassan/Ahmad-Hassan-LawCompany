import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/LanguageContext';
import { Scale, GraduationCap, Briefcase } from 'lucide-react';

export default function About() {
    const { t } = useLanguage();

    return (
        <section className="section-padding" id="about">
            <div className="container">
                <div className="about-grid">
                    
                    <motion.div 
                        className="about-image-wrapper"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="image-border-glow"></div>
                        <img src="/ahmad-hassan-about.jpg" alt="Ahmad Hassan Adv" className="about-image" />
                        
                        <div className="experience-badge">
                            <div className="badge-content">
                                <span className="badge-title">{t('about-exp-title')}</span>
                                <span className="badge-org">{t('about-exp-val')}</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="about-text"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="section-title">{t('about-title')} <span className="text-muted">Adv.</span></h2>
                        <h3 className="section-subtitle text-muted">{t('about-subtitle')}</h3>
                        
                        <p>{t('about-p1')}</p>
                        <p>{t('about-p2')}</p>

                        <div className="mt-4">
                            <div className="credential-item">
                                <div className="credential-icon"><Briefcase size={24} /></div>
                                <div>
                                    <strong>Managing Partner</strong>
                                    <p className="text-muted">The Law Nexus (Jan 2023 — Present)</p>
                                </div>
                            </div>
                            <div className="credential-item">
                                <div className="credential-icon"><GraduationCap size={24} /></div>
                                <div>
                                    <strong>LLB Hon's • Law</strong>
                                    <p className="text-muted">Punjab University (Jan 2016 — Jan 2021)</p>
                                </div>
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
