import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import '../floating.css';

// Custom WeChat SVG Icon
const WeChatIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 16 16" 
        className="contact-icon-small"
        style={{ color: '#07C160', fill: 'currentColor' }}
        width="24"
        height="24"
    >
        <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.32.32 0 0 0-.12.366l.218.81a.6.6 0 0 1 .029.117.166.166 0 0 1-.162.162.2.2 0 0 1-.092-.03l-1.057-.61a.5.5 0 0 0-.256-.074.5.5 0 0 0-.142.021 5.7 5.7 0 0 1-1.576.22M9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.6.6 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.63.63 0 0 0 .098.356"/>
        <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.5.5 0 0 0-.032.14.19.19 0 0 0 .193.193q.06 0 .111-.029l1.268-.733a.6.6 0 0 1 .308-.088q.088 0 .171.025a6.8 6.8 0 0 0 1.625.26 4.5 4.5 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02l.15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826m4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0m3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0"/>
    </svg>
);

// Custom WhatsApp SVG Icon
const WhatsAppIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 16 16" 
        className="contact-icon-small"
        style={{ color: '#25D366', fill: 'currentColor' }}
        width="24"
        height="24"
    >
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
    </svg>
);

function ContactFloating() {
    const [isOpen, setIsOpen] = useState(false);
    const [showQR, setShowQR] = useState(false);
    const [copied, setCopied] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const openWhatsApp = () => {
        window.open("https://wa.me/923134382949", "_blank");
        setIsOpen(false);
    };

    const openWeChat = () => {
        setShowQR(true);
        setIsOpen(false);
    };

    const closeQR = () => {
        setShowQR(false);
        setCopied(false);
    };

    const copyPhoneNumber = () => {
        navigator.clipboard.writeText("+8613027656666");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            {/* Floating Button and Menu */}
            <div className="contact-floating-container">
                {isOpen && (
                    <div className="contact-menu">
                        <button onClick={openWeChat} className="contact-menu-item wechat-btn">
                            <WeChatIcon />
                            <span>WeChat</span>
                        </button>
                        <button onClick={openWhatsApp} className="contact-menu-item whatsapp-btn">
                            <WhatsAppIcon />
                            <span>WhatsApp</span>
                        </button>
                    </div>
                )}
                
                <button 
                    onClick={toggleMenu}
                    className={`contact-float-btn ${isOpen ? 'active' : ''}`}
                    aria-label="Contact Options"
                >
                    {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
                </button>
            </div>

            {/* WeChat QR Modal */}
            {showQR && (
                <div className="modal-overlay" onClick={closeQR}>
                    <div className="modal-content qr-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeQR}>
                            <X size={20} />
                        </button>
                        <div className="text-center">
                            <h3 style={{ paddingRight: 0, marginBottom: '10px' }}>Add me on WeChat</h3>
                            <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                                Scan the QR code or search using the phone number below
                            </p>
                            
                            <div style={{ 
                                display: 'flex', 
                                gap: '20px', 
                                justifyContent: 'center', 
                                flexWrap: 'wrap',
                                margin: '0 auto 1.5rem auto',
                                maxWidth: '440px'
                            }}>
                                <div style={{ maxWidth: '200px', flex: '1 1 180px' }}>
                                    <img src="/wechat-qr.png" alt="WeChat QR Code 1" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }} />
                                </div>
                                <div style={{ maxWidth: '200px', flex: '1 1 180px' }}>
                                    <img src="/wechat-qr-2.png" alt="WeChat QR Code 2" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }} />
                                </div>
                            </div>

                            <div style={{ 
                                display: 'inline-flex', 
                                alignItems: 'center', 
                                gap: '12px', 
                                background: 'rgba(255,255,255,0.03)', 
                                border: '1px solid var(--glass-border)', 
                                padding: '10px 20px', 
                                borderRadius: '30px'
                            }}>
                                <span style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.95rem' }}>+86 130 2765 6666</span>
                                <button 
                                    onClick={copyPhoneNumber}
                                    style={{
                                        background: 'var(--accent-gold)',
                                        color: '#050608',
                                        border: 'none',
                                        padding: '6px 14px',
                                        borderRadius: '20px',
                                        fontSize: '0.75rem',
                                        fontWeight: '700',
                                        cursor: 'pointer',
                                        transition: 'var(--transition-fast)'
                                    }}
                                >
                                    {copied ? 'Copied!' : 'Copy'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ContactFloating;
