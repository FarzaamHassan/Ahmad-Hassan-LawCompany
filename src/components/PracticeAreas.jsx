import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/LanguageContext';
import { 
    Building2, 
    TrendingUp, 
    BarChart3, 
    Zap, 
    Ship, 
    Pill, 
    FileText, 
    Globe,
    ArrowRight,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

export default function PracticeAreas() {
    const { t } = useLanguage();
    const [currentPage, setCurrentPage] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(4);
    const [isDragging, setIsDragging] = useState(false);
    const trackRef = useRef(null);

    const practiceAreas = [
        {
            icon: <Building2 className="pa-icon" size={28} />,
            titleKey: 'pa-1-title',
            descKey: 'pa-1-desc'
        },
        {
            icon: <TrendingUp className="pa-icon" size={28} />,
            titleKey: 'pa-2-title',
            descKey: 'pa-2-desc'
        },
        {
            icon: <BarChart3 className="pa-icon" size={28} />,
            titleKey: 'pa-3-title',
            descKey: 'pa-3-desc'
        },
        {
            icon: <Zap className="pa-icon" size={28} />,
            titleKey: 'pa-4-title',
            descKey: 'pa-4-desc'
        },
        {
            icon: <Ship className="pa-icon" size={28} />,
            titleKey: 'pa-5-title',
            descKey: 'pa-5-desc'
        },
        {
            icon: <Pill className="pa-icon" size={28} />,
            titleKey: 'pa-6-title',
            descKey: 'pa-6-desc'
        },
        {
            icon: <FileText className="pa-icon" size={28} />,
            titleKey: 'pa-7-title',
            descKey: 'pa-7-desc'
        },
        {
            icon: <Globe className="pa-icon" size={28} />,
            titleKey: 'pa-8-title',
            descKey: 'pa-8-desc'
        }
    ];

    // Responsive cards per view
    const updateCardsPerView = useCallback(() => {
        const width = window.innerWidth;
        if (width <= 480) setCardsPerView(1);
        else if (width <= 768) setCardsPerView(2);
        else if (width <= 1100) setCardsPerView(3);
        else setCardsPerView(4);
    }, []);

    useEffect(() => {
        updateCardsPerView();
        window.addEventListener('resize', updateCardsPerView);
        return () => window.removeEventListener('resize', updateCardsPerView);
    }, [updateCardsPerView]);

    const totalPages = Math.ceil(practiceAreas.length / cardsPerView);

    // Clamp currentPage when cardsPerView changes
    useEffect(() => {
        if (currentPage >= totalPages) {
            setCurrentPage(Math.max(0, totalPages - 1));
        }
    }, [totalPages, currentPage]);

    const goToPage = (page) => {
        setCurrentPage(Math.max(0, Math.min(page, totalPages - 1)));
    };

    const handleDragEnd = (_, info) => {
        const threshold = 50;
        if (info.offset.x < -threshold && currentPage < totalPages - 1) {
            goToPage(currentPage + 1);
        } else if (info.offset.x > threshold && currentPage > 0) {
            goToPage(currentPage - 1);
        }
        setTimeout(() => setIsDragging(false), 100);
    };

    // Get visible cards for current page
    const startIndex = currentPage * cardsPerView;
    const visibleCards = practiceAreas.slice(startIndex, startIndex + cardsPerView);

    return (
        <section className="section-padding" id="practice-areas">
            <div className="container">
                {/* Header with navigation arrows */}
                <motion.div 
                    className="pa-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="pa-header-text">
                        <h2 className="section-title">{t('pa-title') || 'Practice Areas'}</h2>
                        <p className="section-subtitle">{t('pa-subtitle') || "End-to-end legal support across Pakistan's key regulatory bodies."}</p>
                    </div>

                    {totalPages > 1 && (
                        <div className="pa-nav-arrows">
                            <button 
                                className={`pa-nav-btn ${currentPage === 0 ? 'disabled' : ''}`}
                                onClick={() => goToPage(currentPage - 1)}
                                disabled={currentPage === 0}
                                aria-label="Previous"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button 
                                className={`pa-nav-btn ${currentPage === totalPages - 1 ? 'disabled' : ''}`}
                                onClick={() => goToPage(currentPage + 1)}
                                disabled={currentPage === totalPages - 1}
                                aria-label="Next"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    )}
                </motion.div>

                {/* Carousel track */}
                <div className="pa-carousel-viewport" ref={trackRef}>
                    <motion.div
                        className="pa-carousel-track"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.15}
                        onDragStart={() => setIsDragging(true)}
                        onDragEnd={handleDragEnd}
                        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentPage}
                                className="pa-carousel-page"
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -40 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {visibleCards.map((item, index) => {
                                    const globalIndex = startIndex + index;
                                    return (
                                        <motion.div 
                                            key={globalIndex}
                                            className="pa-card"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.06 }}
                                            whileHover={{ y: -6 }}
                                        >
                                            <div className="pa-card-accent" />
                                            <div className="pa-card-content">
                                                <div className="pa-icon-wrapper">
                                                    {item.icon}
                                                </div>
                                                <h3 className="pa-card-title">{t(item.titleKey)}</h3>
                                                <p className="pa-card-desc">{t(item.descKey)}</p>
                                            </div>
                                            <div className="pa-card-footer">
                                                <span className="pa-card-number">
                                                    {String(globalIndex + 1).padStart(2, '0')}
                                                </span>
                                                <ArrowRight className="pa-arrow" size={18} />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* Dot indicators */}
                {totalPages > 1 && (
                    <div className="pa-dots">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                className={`pa-dot ${i === currentPage ? 'active' : ''}`}
                                onClick={() => goToPage(i)}
                                aria-label={`Go to page ${i + 1}`}
                            />
                        ))}
                        <span className="pa-page-indicator">
                            {String(currentPage + 1).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
                        </span>
                    </div>
                )}
            </div>
        </section>
    );
}