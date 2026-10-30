import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import '../floating.css';

export default function ContactModal({ isOpen, onClose }) {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !contact || !message) {
            alert('Please fill in all fields.');
            return;
        }

        const formattedText = `Hello Ahmad Hassan,\n\nMy name is: ${name}\nContact Info: ${contact}\n\nMessage:\n${message}`;
        const whatsappUrl = `https://wa.me/923134382949?text=${encodeURIComponent(formattedText)}`;
        
        window.open(whatsappUrl, '_blank');
        
        // Reset form fields
        setName('');
        setContact('');
        setMessage('');
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content contact-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Close modal">
                    <X size={20} />
                </button>
                
                <div>
                    <h3 style={{ paddingRight: 0, marginBottom: '5px' }}>Start a Conversation</h3>
                    <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '2rem' }}>
                        Please fill in the form below and it will open in WhatsApp to contact us.
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div className="contact-form-group">
                            <label className="contact-form-label" htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                className="contact-form-input" 
                                placeholder="Your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="contact-form-group">
                            <label className="contact-form-label" htmlFor="contact">Contact Information</label>
                            <input 
                                type="text" 
                                id="contact" 
                                className="contact-form-input" 
                                placeholder="Email address or Phone number"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                required
                            />
                        </div>

                        <div className="contact-form-group">
                            <label className="contact-form-label" htmlFor="message">Message</label>
                            <textarea 
                                id="message" 
                                className="contact-form-textarea" 
                                placeholder="How can we help you?"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="btn btn-primary" 
                            style={{ width: '100%', marginTop: '1rem', display: 'flex', gap: '10px', textTransform: 'uppercase' }}
                        >
                            <span>Send Message via WhatsApp</span>
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
