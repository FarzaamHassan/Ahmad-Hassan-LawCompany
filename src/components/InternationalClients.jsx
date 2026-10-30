import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/LanguageContext';
import { Globe2, Building, ShieldCheck, MapPin, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';

export default function InternationalClients() {
    const { t } = useLanguage();

    const clients = [
        {
            id: 'changan',
            name: "Changan Automobile Investment Co., Ltd.",
            origin: "Shenzhen, China",
            flag: "🇨🇳",
            sector: "Automotive & Electric Vehicles",
            region: "China",
            mandate: "Joint Venture structuring, PSX capital market listing, and foreign investment protection.",
            regulators: ["SECP", "PSX", "Board of Investment (BOI)"],
            status: "Active Corporate Retainer"
        },
        {
            id: 'dayi',
            name: "Shandong Dayi Biotechnology Co., Ltd.",
            origin: "Shandong, China",
            flag: "🇨🇳",
            sector: "Biotechnology & Agricultural Inputs",
            region: "China",
            mandate: "Market entry, SECP foreign branch registration, and regulatory product clearances.",
            regulators: ["SECP", "Ministry of National Food Security", "FBR"],
            status: "Cross-Border Market Entry"
        },
        {
            id: 'xmsolar',
            name: "XM Solar Energy SMC Pvt. Ltd.",
            origin: "Singapore / Global",
            flag: "🇸🇬",
            sector: "Solar Photovoltaic & Inverter Systems",
            region: "Asia-Pacific",
            mandate: "Import tax exemptions, customs classification under Customs Act 1969, and AEDB clearances.",
            regulators: ["FBR", "Customs Appraisement", "AEDB"],
            status: "Tax & Customs Structuring"
        },
        {
            id: 'nalibat',
            name: "Nali Bat Technology Limited",
            origin: "Hong Kong SAR",
            flag: "🇭🇰",
            sector: "Lithium-Ion Storage & Clean Tech",
            region: "China",
            mandate: "Concessional SRO quota allocation, battery import classification, and SEZ benefits.",
            regulators: ["EDB", "Customs", "Ministry of Industries"],
            status: "Industrial Concessions"
        },
        {
            id: 'chinabooster',
            name: "China Booster Heavy Industrial Plastics",
            origin: "Guangdong, China",
            flag: "🇨🇳",
            sector: "Polymer & Industrial Manufacturing",
            region: "China",
            mandate: "High Court commercial litigation, asset defense, and contract dispute arbitration.",
            regulators: ["High Court of Sindh/Lahore", "Customs Tribunal"],
            status: "Commercial Dispute Defense"
        },
        {
            id: 'petrolor',
            name: "Petrolor Oil Field Services Co.",
            origin: "Dubai, United Arab Emirates",
            flag: "🇦🇪",
            sector: "Oil, Gas & Energy Infrastructure",
            region: "Middle East",
            mandate: "Upstream exploration legal advisory, drilling rig equipment importation, and regulatory compliance.",
            regulators: ["DGPC", "Ministry of Energy", "FBR Inland Revenue"],
            status: "Energy Exploration Counsel"
        },
        {
            id: 'sinohydro',
            name: "CPEC Hydropower & Infrastructure Consortium",
            origin: "Beijing, China",
            flag: "🇨🇳",
            sector: "Hydropower & Heavy Engineering",
            region: "China",
            mandate: "EPC contract review, State Bank of Pakistan foreign currency approvals, and local labor compliance.",
            regulators: ["State Bank of Pakistan (SBP)", "NEPRA", "PPIB"],
            status: "CPEC Infrastructure Project"
        },
        {
            id: 'eurasiaminerals',
            name: "Eurasia Mineral Exploration Group",
            origin: "Almaty, Kazakhstan / Central Asia",
            flag: "🇰🇿",
            sector: "Copper, Lithium & Mineral Extraction",
            region: "Central Asia",
            mandate: "Balochistan mining lease concession due diligence and provincial mineral development pacts.",
            regulators: ["Balochistan Mines Dept", "DGMM", "Ministry of Commerce"],
            status: "Mineral Concession Joint Venture"
        },
        {
            id: 'silkroadcapital',
            name: "Silk Road Trade & Capital Advisors",
            origin: "Frankfurt, Germany",
            flag: "🇩🇪",
            sector: "Private Equity & Cross-Border M&A",
            region: "Europe",
            mandate: "Cross-border mergers, competition commission clearances, and bilateral treaty protection.",
            regulators: ["Competition Commission of Pakistan", "SECP", "BOI"],
            status: "M&A Regulatory Structuring"
        }
    ];

    const [activeClient, setActiveClient] = useState(clients[0]);
    const [selectedRegion, setSelectedRegion] = useState('All');

    const regions = ['All', 'China', 'Middle East', 'Asia-Pacific', 'Central Asia', 'Europe'];

    const filteredClients = selectedRegion === 'All' 
        ? clients 
        : clients.filter(c => c.region === selectedRegion);

    // Split into 2 rows for infinite ticker effect
    const row1 = [...clients, ...clients];
    const row2 = [...clients.slice().reverse(), ...clients.slice().reverse()];

    return (
        <section 
            className="section-padding international-clients-section" 
            id="international-clients"
            aria-label="International Clients and Global Reach"
        >
            <div className="container">
                {/* Header */}
                <motion.div 
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="intl-badge-pill">
                        <Globe2 size={16} className="text-amber-700" />
                        <span>{t('intl-badge') || 'Global Cross-Border Reach'}</span>
                    </div>
                    <h2 className="section-title text-slate-900 mt-2">
                        {t('intl-title') || 'International Clients & Partners'}
                    </h2>
                    <p className="section-subtitle text-slate-600 max-w-2xl mx-auto">
                        {t('intl-subtitle') || 'Trusted corporate counsel for state-owned enterprises, multinational conglomerates, and international investors expanding across Pakistan and Central Asia.'}
                    </p>
                </motion.div>

                {/* Region Filter Buttons */}
                <div className="intl-regions-bar">
                    {regions.map((reg) => (
                        <button
                            key={reg}
                            onClick={() => setSelectedRegion(reg)}
                            className={`intl-region-btn ${selectedRegion === reg ? 'active' : ''}`}
                        >
                            {reg === 'All' ? '🌐 All Jurisdictions' : reg}
                        </button>
                    ))}
                </div>

                {/* Dual Infinite Stream Marquee Carousel (Different Approach from Standard Grids) */}
                <div className="intl-marquee-container">
                    {/* Stream 1 - Left to Right */}
                    <div className="intl-marquee-stream stream-left">
                        <div className="intl-marquee-track">
                            {row1.map((c, idx) => (
                                <button
                                    key={`r1-${idx}`}
                                    onClick={() => setActiveClient(c)}
                                    className={`intl-client-pill ${activeClient.id === c.id ? 'selected' : ''}`}
                                    aria-label={`Select client ${c.name}`}
                                >
                                    <span className="intl-pill-flag">{c.flag}</span>
                                    <div className="intl-pill-text">
                                        <span className="intl-pill-name">{c.name}</span>
                                        <span className="intl-pill-sector">{c.sector}</span>
                                    </div>
                                    <ArrowRight size={14} className="intl-pill-arrow" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Stream 2 - Right to Left */}
                    <div className="intl-marquee-stream stream-right">
                        <div className="intl-marquee-track reverse">
                            {row2.map((c, idx) => (
                                <button
                                    key={`r2-${idx}`}
                                    onClick={() => setActiveClient(c)}
                                    className={`intl-client-pill ${activeClient.id === c.id ? 'selected' : ''}`}
                                    aria-label={`Select client ${c.name}`}
                                >
                                    <span className="intl-pill-flag">{c.flag}</span>
                                    <div className="intl-pill-text">
                                        <span className="intl-pill-name">{c.name}</span>
                                        <span className="intl-pill-sector">{c.sector}</span>
                                    </div>
                                    <ArrowRight size={14} className="intl-pill-arrow" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Active Client Spotlight Card (Interactive Deep Dive) */}
                <div className="intl-spotlight-wrapper">
                    <motion.div 
                        key={activeClient.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                        className="intl-spotlight-card"
                    >
                        <div className="intl-spotlight-top">
                            <div className="intl-spotlight-badge">
                                <span className="text-2xl mr-2">{activeClient.flag}</span>
                                <div>
                                    <span className="text-xs uppercase font-bold tracking-wider text-amber-700 block">
                                        Client Jurisdiction & Origin
                                    </span>
                                    <span className="text-sm font-semibold text-slate-700 flex items-center gap-1">
                                        <MapPin size={13} className="text-amber-600" />
                                        {activeClient.origin}
                                    </span>
                                </div>
                            </div>

                            <span className="intl-status-badge">
                                <ShieldCheck size={14} className="text-emerald-600 mr-1" />
                                {activeClient.status}
                            </span>
                        </div>

                        <div className="intl-spotlight-main">
                            <h3 className="intl-spotlight-title">
                                {activeClient.name}
                            </h3>
                            <p className="intl-spotlight-desc">
                                {activeClient.mandate}
                            </p>

                            <div className="intl-regulators-group">
                                <span className="text-xs font-bold uppercase text-slate-500 tracking-wider block mb-2">
                                    Regulatory Liaisons & Frameworks Handled:
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {activeClient.regulators.map((reg, rIdx) => (
                                        <span key={rIdx} className="intl-reg-tag">
                                            <CheckCircle size={12} className="text-amber-600 mr-1" />
                                            {reg}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="intl-spotlight-action">
                            <a 
                                href="#contact"
                                className="btn btn-primary"
                                style={{ fontSize: '0.85rem', padding: '0.6rem 1.6rem' }}
                            >
                                <span>Request Cross-Border Consultation</span>
                                <ExternalLink size={14} className="ml-1.5" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
