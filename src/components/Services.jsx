import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/LanguageContext';
import { Pickaxe, Leaf, CarFront, Zap, Ship, Calculator, Lightbulb, LineChart, Gavel, Building2, X } from 'lucide-react';

export default function Services() {
    const { t } = useLanguage();
    const [selectedService, setSelectedService] = useState(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedService) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [selectedService]);

    const services = [
        { icon: Building2, key: 'incorp', number: '01' },
        { icon: Calculator, key: 'tax', number: '02' },
        { icon: CarFront, key: 'ev', number: '03' },
        { icon: Leaf, key: 'fertilizer', number: '04' },
        { icon: Ship, key: 'customs', number: '05' },
        { icon: Pickaxe, key: 'mining', number: '06' },
        { icon: Zap, key: 'energy', number: '07' },
        { icon: Lightbulb, key: 'ip', number: '08' },
        { icon: LineChart, key: 'psx', number: '09' },
        { icon: Gavel, key: 'litigation', number: '10' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="section-padding" id="services">
            <div className="container">
                <motion.div 
                    className="text-center mb-5"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">{t('services-title')}</h2>
                    <p className="section-subtitle">{t('services-subtitle')}</p>
                </motion.div>

                <motion.div 
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {services.map((srv, idx) => (
                        <motion.div 
                            key={idx} 
                            className="glass-card service-card" 
                            variants={itemVariants}
                            onClick={() => setSelectedService(srv)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <srv.icon size={40} className="card-icon" />
                                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'rgba(15, 23, 42, 0.15)' }}>{srv.number}</span>
                            </div>
                            <h3>{t(`srv-${srv.key}-title`)}</h3>
                            <p className="text-muted">{t(`srv-${srv.key}-desc`)}</p>
                            <span style={{ display: 'block', marginTop: '15px', color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '600' }}>Read More →</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedService && (
                    <motion.div 
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedService(null)}
                    >
                        <motion.div 
                            className="modal-content"
                            initial={{ y: 50, scale: 0.95, opacity: 0 }}
                            animate={{ y: 0, scale: 1, opacity: 1 }}
                            exit={{ y: 20, scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modal-close" onClick={() => setSelectedService(null)}>
                                <X size={30} />
                            </button>
                            <selectedService.icon size={50} style={{ color: 'var(--accent-gold)', marginBottom: '20px' }} />
                            <h3>{t(`srv-${selectedService.key}-title`)}</h3>
                            <pre>{t(`srv-${selectedService.key}-full`)}</pre>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
