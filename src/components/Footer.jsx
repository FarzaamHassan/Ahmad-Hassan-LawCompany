import React from 'react';
import { useLanguage } from '../hooks/LanguageContext';
import { 
    Mail, 
    Phone, 
    MapPin, 
    Clock, 
    ExternalLink, 
    ShieldCheck, 
    MessageSquare, 
    ChevronRight,
    CheckCircle2
} from 'lucide-react';

export default function Footer({ onContactClick }) {
    const { t } = useLanguage();

    const practiceLinks = [
        { label: t('nav-about') || 'About Counsel', href: '#about' },
        { label: t('nav-services') || 'Services Nexus', href: '#services' },
        { label: t('nav-practice-areas') || 'Practice Areas', href: '#practice-areas' },
        { label: t('nav-portfolio') || 'Featured Showcases', href: '#portfolio' },
        { label: t('nav-international-clients') || 'International Clients', href: '#international-clients' }
    ];

    const mapQueryUrl = "https://www.google.com/maps/search/?api=1&query=Ishaq+Tailor+Building,+New+Anarkali,+Lahore,+Pakistan";
    const mapEmbedUrl = "https://maps.google.com/maps?q=Ishaq+Tailor+Building,+New+Anarkali,+Lahore,+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed";

    return (
        <footer className="footer" id="contact" aria-label="Footer & Chambers Directory">
            <div className="container">
                {/* Executive CTA Card */}
                <div className="footer-cta">
                    <div className="footer-cta-text">
                        <span className="footer-cta-badge">
                            <ShieldCheck size={15} />
                            <span>Sino-Pak Corporate Legal Counsel</span>
                        </span>
                        <h2>{t('footer-title')}</h2>
                        <p className="footer-cta-sub">
                            {t('footer-subtitle') || 'Partner with Ahmad Hassan Adv. for strategic corporate legal advisory, regulatory licensing, and cross-border transactions.'}
                        </p>
                    </div>

                    <div className="footer-cta-actions">
                        <button onClick={onContactClick} className="btn btn-primary">
                            <span>{t('footer-btn')}</span>
                        </button>
                        <a 
                            href="https://wa.me/923134382949" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-outline footer-whatsapp-btn"
                        >
                            <MessageSquare size={16} className="text-emerald-600" />
                            <span>{t('footer-whatsapp') || 'WhatsApp Chat'}</span>
                        </a>
                    </div>
                </div>

                {/* 4-Column Main Footer Grid */}
                <div className="footer-main-grid">
                    {/* Column 1: Identity & Credentials */}
                    <div className="footer-col footer-col-about">
                        <div className="logo footer-logo">
                            AHMAD <span>HASSAN</span> <span className="adv-tag">Adv.</span>
                        </div>
                        <div className="footer-org-title">
                            The Law Nexus • Managing Partner
                        </div>
                        <p className="footer-about-text">
                            {t('footer-about-text') || 'Premier corporate and commercial law practice in Pakistan specializing in Sino-Pak foreign investment, SECP compliance, PSX listing, CPEC projects, and high-stakes dispute resolution.'}
                        </p>

                        <div className="footer-trust-tags">
                            <span className="footer-trust-tag">
                                <CheckCircle2 size={13} className="text-amber-600" />
                                <span>Advocate High Court</span>
                            </span>
                            <span className="footer-trust-tag">
                                <CheckCircle2 size={13} className="text-amber-600" />
                                <span>Punjab Bar Council</span>
                            </span>
                            <span className="footer-trust-tag">
                                <CheckCircle2 size={13} className="text-amber-600" />
                                <span>CPEC Cross-Border Specialist</span>
                            </span>
                        </div>
                    </div>

                    {/* Column 2: Navigation & Key Practice Links */}
                    <div className="footer-col footer-col-nav">
                        <h4 className="footer-col-title">
                            {t('footer-nav-title') || 'Practice Navigation'}
                        </h4>
                        <ul className="footer-nav-list">
                            {practiceLinks.map((item, idx) => (
                                <li key={idx}>
                                    <a href={item.href} className="footer-nav-link">
                                        <ChevronRight size={14} className="link-arrow" />
                                        <span>{item.label}</span>
                                    </a>
                                </li>
                            ))}
                            <li>
                                <button 
                                    onClick={onContactClick} 
                                    className="footer-nav-link footer-nav-btn-link"
                                >
                                    <ChevronRight size={14} className="link-arrow" />
                                    <span>{t('nav-contact') || 'Direct Consultation'}</span>
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact & Working Hours */}
                    <div className="footer-col footer-col-contact">
                        <h4 className="footer-col-title">
                            {t('footer-contact-title') || 'Direct Contact'}
                        </h4>
                        <div className="footer-contact-items">
                            <div className="footer-contact-item">
                                <div className="footer-contact-icon">
                                    <Mail size={16} />
                                </div>
                                <div className="footer-contact-details">
                                    <span className="footer-detail-label">Email Legal Inquiries</span>
                                    <a href="mailto:thelawnexus95@gmail.com" className="footer-detail-val">
                                        thelawnexus95@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="footer-contact-item">
                                <div className="footer-contact-icon">
                                    <Phone size={16} />
                                </div>
                                <div className="footer-contact-details">
                                    <span className="footer-detail-label">Call & WhatsApp Hotline</span>
                                    <a href="https://wa.me/923134382949" target="_blank" rel="noopener noreferrer" className="footer-detail-val">
                                        +92 313 4382949
                                    </a>
                                </div>
                            </div>

                            <div className="footer-contact-item">
                                <div className="footer-contact-icon">
                                    <MessageSquare size={16} />
                                </div>
                                <div className="footer-contact-details">
                                    <span className="footer-detail-label">WeChat Corporate ID</span>
                                    <span className="footer-detail-val">
                                        +92 320 0040595
                                    </span>
                                </div>
                            </div>

                            <div className="footer-contact-item">
                                <div className="footer-contact-icon">
                                    <Clock size={16} />
                                </div>
                                <div className="footer-contact-details">
                                    <span className="footer-detail-label">
                                        {t('footer-hours-label') || 'Office Hours'}
                                    </span>
                                    <span className="footer-detail-val">
                                        {t('footer-hours-val') || 'Mon – Fri: 09:00 AM – 06:00 PM'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Location & Small Map Box */}
                    <div className="footer-col footer-col-map">
                        <h4 className="footer-col-title">
                            {t('footer-chambers-title') || 'Chambers Location'}
                        </h4>

                        <div className="footer-address-card">
                            <div className="footer-address-header">
                                <span className="footer-address-badge">
                                    <MapPin size={13} className="text-amber-700" />
                                    <span>{t('footer-address-city') || 'Lahore, Pakistan'}</span>
                                </span>
                            </div>
                            <div className="footer-address-building">
                                <strong>{t('footer-address-building') || 'Ishaq Tailor Building, New Anarkali'}</strong>
                            </div>
                            <p className="footer-address-sub">
                                High Court & Commercial Legal District
                            </p>
                        </div>

                        {/* Interactive Small Map Box */}
                        <div className="footer-small-map-box">
                            <iframe
                                title="Chambers Location Map"
                                src={mapEmbedUrl}
                                width="100%"
                                height="135"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="footer-map-iframe"
                            />
                            <a
                                href={mapQueryUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-map-overlay-btn"
                                aria-label="Open location in Google Maps"
                            >
                                <MapPin size={13} className="text-amber-600" />
                                <span>{t('footer-directions') || 'Open in Google Maps'}</span>
                                <ExternalLink size={12} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Row */}
                <div className="footer-bottom">
                    <div className="footer-copy-text">
                        {t('footer-copy')}
                    </div>

                    <div className="social-links">
                        <button 
                            onClick={onContactClick} 
                            className="social-icon" 
                            aria-label="Email Contact Form"
                            title="Send Legal Inquiry"
                        >
                            <Mail size={18} />
                        </button>
                        <a 
                            href="https://wa.me/923134382949" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-icon" 
                            aria-label="WhatsApp Hotline"
                            title="Chat on WhatsApp"
                        >
                            <MessageSquare size={18} />
                        </a>
                        <a 
                            href="tel:+923134382949" 
                            className="social-icon" 
                            aria-label="Call Direct Phone"
                            title="Call Counsel"
                        >
                            <Phone size={18} />
                        </a>
                        <a 
                            href={mapQueryUrl}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="social-icon" 
                            aria-label="Google Maps Location"
                            title="View Office on Google Maps"
                        >
                            <MapPin size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}