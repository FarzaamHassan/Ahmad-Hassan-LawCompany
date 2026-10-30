import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/LanguageContext';
import { ChevronLeft, ChevronRight, ExternalLink, ShieldCheck, Briefcase, Award, X } from 'lucide-react';

export default function Portfolio() {
    const { t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(3);
    const [isPaused, setIsPaused] = useState(false);
    const [selectedCase, setSelectedCase] = useState(null);
    const containerRef = useRef(null);

    const items = [
        {
            key: '1',
            img: "/portfolio-changan.png",
            client: "Changan Automobile (Shenzhen) & Master Changan",
            jurisdiction: "China / Pakistan",
            highlights: ["PSX & SECP Compliance", "Cross-Border Joint Venture", "FDI Structuring"]
        },
        {
            key: '2',
            img: "/portfolio-dayi.png",
            client: "Shandong Dayi Biotechnology Co., Ltd.",
            jurisdiction: "China / Pakistan",
            highlights: ["Market Entry Structuring", "SECP Corporate Incorporation", "Regulatory Clearances"]
        },
        {
            key: '3',
            img: "/portfolio-nalibat.png",
            client: "Nali Bat Battery & XM Solar SMC Pvt Ltd",
            jurisdiction: "Pakistan / International",
            highlights: ["FBR Tax Exemption Quotas", "Clean Tech Import Regulatory", "SRO Structuring"]
        },
        {
            key: '4',
            img: "/portfolio-china-booster.png",
            client: "China Booster Plastic Manufacturing",
            jurisdiction: "China / Pakistan",
            highlights: ["High-Stakes Commercial Litigation", "Industrial Asset Protection", "High Court Injunctions"]
        },
        {
            key: '5',
            img: "/portfolio-petrolor.png",
            client: "Petrolor Oil Field Services Co.",
            jurisdiction: "Sino-Pak Energy Sector",
            highlights: ["Energy Concession Contracts", "Customs Clearance & Equipment", "Petroleum Ministry Compliance"]
        },
        {
            key: '6',
            img: "/portfolio-ev-plant.png",
            client: "Sino-Pak EV Clean Mobility Consortium",
            jurisdiction: "China / Pakistan",
            highlights: ["CKD/SKD Assembly Licensing", "Lithium Battery Certification", "National EV Policy Exemptions"]
        },
        {
            key: '7',
            img: "/portfolio-ipo.png",
            client: "Cross-Border Industrial Issuers",
            jurisdiction: "Pakistan Stock Exchange (PSX)",
            highlights: ["IPO Prospectus Legal Opinion", "Book Building Due Diligence", "Sponsor Shareholding Governance"]
        },
        {
            key: '8',
            img: "/portfolio-mining.png",
            client: "Balochistan Mineral Exploration Enterprises",
            jurisdiction: "Balochistan / China",
            highlights: ["Mining Lease Due Diligence", "State-Owned JV Agreements", "Strategic Minerals Export Clearance"]
        },
        {
            key: '9',
            img: "/portfolio-capital-markets.png",
            client: "CPEC Engineering & Infrastructure Group",
            jurisdiction: "CPEC Special Economic Zones",
            highlights: ["Commercial Debt Documentation", "SBP FX Regulatory Approvals", "Cross-Border Sovereign Security"]
        }
    ];

    // Responsive cards-per-view calculation
    const updateCardsPerView = useCallback(() => {
        const width = window.innerWidth;
        if (width <= 640) setCardsPerView(1);
        else if (width <= 1024) setCardsPerView(2);
        else setCardsPerView(3);
    }, []);

    useEffect(() => {
        updateCardsPerView();
        window.addEventListener('resize', updateCardsPerView);
        return () => window.removeEventListener('resize', updateCardsPerView);
    }, [updateCardsPerView]);

    const maxIndex = Math.max(0, items.length - cardsPerView);

    // Keep currentIndex within bounds if resize changes cardsPerView
    useEffect(() => {
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [cardsPerView, maxIndex, currentIndex]);

    // Autoplay functionality with pause-on-hover
    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        }, 4500);

        return () => clearInterval(timer);
    }, [isPaused, maxIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    const goToSlide = (idx) => {
        setCurrentIndex(Math.min(idx, maxIndex));
    };

    return (
        <section 
            className="section-padding portfolio-section-white" 
            id="portfolio"
            aria-label="Portfolio & Featured Showcases"
        >
            <div className="container" ref={containerRef}>
                {/* Header with Title and Control Buttons */}
                <div className="portfolio-header-container">
                    <motion.div 
                        className="portfolio-title-group"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="portfolio-badge">
                            <ShieldCheck size={16} className="text-amber-600" />
                            <span>Verified Track Record</span>
                        </div>
                        <h2 className="section-title text-slate-900">
                            {t('port-title') || 'My Featured Showcases'}
                        </h2>
                        <p className="section-subtitle text-slate-600">
                            {t('port-subtitle') || 'Explore landmark cross-border transactions, regulatory victories, and corporate milestones.'}
                        </p>
                    </motion.div>

                    {/* Navigation Buttons */}
                    <div className="portfolio-nav-buttons">
                        <button 
                            onClick={prevSlide}
                            className="portfolio-arrow-btn"
                            aria-label="Previous showcase"
                            title="Previous showcase"
                        >
                            <ChevronLeft size={22} />
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="portfolio-arrow-btn"
                            aria-label="Next showcase"
                            title="Next showcase"
                        >
                            <ChevronRight size={22} />
                        </button>
                    </div>
                </div>

                {/* Carousel Viewport */}
                <div 
                    className="portfolio-carousel-wrapper"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                >
                    <motion.div 
                        className="portfolio-track"
                        animate={{ x: `-${currentIndex * (100 / cardsPerView)}%` }}
                        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {items.map((item) => (
                            <div 
                                key={item.key} 
                                className="portfolio-slide-item"
                                style={{ flex: `0 0 ${100 / cardsPerView}%` }}
                            >
                                <div className="portfolio-white-card">
                                    {/* Image Container with Luxury Overlay */}
                                    <div className="portfolio-img-box">
                                        <img 
                                            src={item.img} 
                                            alt={t(`port-${item.key}-title`)} 
                                            loading="lazy"
                                            className="portfolio-real-image"
                                        />
                                        <div className="portfolio-cat-pill">
                                            <span>{t(`port-${item.key}-cat`)}</span>
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="portfolio-card-body">
                                        <div className="portfolio-client-tag">
                                            <Briefcase size={14} className="text-amber-700" />
                                            <span>{item.client}</span>
                                        </div>

                                        <h3 className="portfolio-item-title">
                                            {t(`port-${item.key}-title`)}
                                        </h3>

                                        <p className="portfolio-item-desc">
                                            {t(`port-${item.key}-desc`)}
                                        </p>

                                        {/* Highlights list */}
                                        <div className="portfolio-highlights">
                                            {item.highlights.map((hl, hIdx) => (
                                                <span key={hIdx} className="portfolio-highlight-tag">
                                                    ✓ {hl}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Footer Info with CTA */}
                                        <div className="portfolio-card-bottom">
                                            <div className="portfolio-meta">
                                                <span className="meta-label">{t(`port-${item.key}-val`)}</span>
                                                <span className="meta-value">{t(`port-${item.key}-val-num`)}</span>
                                            </div>

                                            <button 
                                                onClick={() => setSelectedCase(item)}
                                                className="portfolio-view-btn"
                                                aria-label={`View full details of ${t(`port-${item.key}-title`)}`}
                                            >
                                                <span>Case Summary</span>
                                                <ExternalLink size={15} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Pagination Controls & Counter */}
                <div className="portfolio-footer-controls">
                    <div className="portfolio-dots-row">
                        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goToSlide(idx)}
                                className={`portfolio-page-dot ${idx === currentIndex ? 'active' : ''}`}
                                aria-label={`Go to slide page ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <div className="portfolio-counter-pill">
                        <Award size={14} className="text-amber-600 mr-1.5" />
                        <span>
                            {String(currentIndex + 1).padStart(2, '0')} / {String(maxIndex + 1).padStart(2, '0')} Pages
                        </span>
                    </div>
                </div>
            </div>

            {/* Case Details Modal */}
            <AnimatePresence>
                {selectedCase && (
                    <motion.div 
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCase(null)}
                    >
                        <motion.div 
                            className="modal-content portfolio-modal-white"
                            initial={{ y: 40, scale: 0.96, opacity: 0 }}
                            animate={{ y: 0, scale: 1, opacity: 1 }}
                            exit={{ y: 20, scale: 0.96, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                className="modal-close"
                                onClick={() => setSelectedCase(null)}
                                aria-label="Close modal"
                            >
                                <X size={20} />
                            </button>

                            <div className="portfolio-modal-header">
                                <span className="portfolio-modal-badge">
                                    {t(`port-${selectedCase.key}-cat`)}
                                </span>
                                <h3>{t(`port-${selectedCase.key}-title`)}</h3>
                                <p className="text-amber-700 font-medium text-sm">
                                    {selectedCase.client} • {selectedCase.jurisdiction}
                                </p>
                            </div>

                            <div className="portfolio-modal-img">
                                <img 
                                    src={selectedCase.img} 
                                    alt={t(`port-${selectedCase.key}-title`)} 
                                />
                            </div>

                            <div className="portfolio-modal-body">
                                <h4>Case Overview & Legal Mandate</h4>
                                <p className="text-slate-700 leading-relaxed mb-4">
                                    {t(`port-${selectedCase.key}-desc`)}
                                </p>

                                <h4>Key Regulatory & Advisory Execution</h4>
                                <ul className="portfolio-modal-list">
                                    {selectedCase.highlights.map((hl, idx) => (
                                        <li key={idx}>
                                            <span className="text-amber-600 font-bold mr-2">▪</span>
                                            {hl}: Addressed through rigorous statutory review, corporate structuring, and governmental liaison under Pakistani corporate legislation.
                                        </li>
                                    ))}
                                </ul>

                                <div className="portfolio-modal-footer">
                                    <div>
                                        <span className="block text-xs uppercase tracking-wider text-slate-500 font-bold">
                                            {t(`port-${selectedCase.key}-val`)}
                                        </span>
                                        <span className="text-base font-bold text-slate-900">
                                            {t(`port-${selectedCase.key}-val-num`)}
                                        </span>
                                    </div>
                                    <button 
                                        className="btn btn-primary"
                                        onClick={() => {
                                            setSelectedCase(null);
                                            const contactSection = document.getElementById('contact');
                                            if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        Inquire About Similar Mandate
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
