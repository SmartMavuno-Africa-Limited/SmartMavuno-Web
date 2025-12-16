import React, { useState } from "react";
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setEmail('');
            // Handle subscription
        }
    };

    return (
        <footer className={styles.footer}>
            {/* Desktop Only - Hide on mobile */}
            <div className={styles.desktopOnly}>
                {/* Newsletter */}
                <div className={styles.newsletter}>
                    <h3>Stay Updated</h3>
                    <p>Get farming tips & updates</p>
                    <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                        <input
                            type="email"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.newsletterInput}
                        />
                        <button type="submit" className={styles.subscribeButton}>
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Main Footer */}
                <div className={styles.mainFooter}>
                    <div className={styles.footerGrid}>
                        {/* Company */}
                        <div className={styles.footerColumn}>
                            <h3 className={styles.logo}>SmartMavuno</h3>
                            <p className={styles.tagline}>Empowering African Agriculture</p>
                            <div className={styles.socialLinks}>
                                <a href="https://www.facebook.com/profile.php?id=100089102720769&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="https://www.linkedin.com/company/smartmavuno" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="https://www.instagram.com/smartmavuno?igsh=MTRhZHUzcXBseHlhaQ==" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="https://x.com/SmartMavuno" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </div>
                        </div>

                        {/* Links */}
                        <div className={styles.footerColumn}>
                            <h4>Quick Links</h4>
                            <ul className={styles.footerLinks}>
                                <li><a href="/">Home</a></li>
                                <li><a href="/financing">Financing</a></li>
                                <li><a href="/community">Community</a></li>
                                <li><a href="https://marketplace.smartmavuno.com/">Marketplace</a></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className={styles.footerColumn}>
                            <h4>Contact Us</h4>
                            <div className={styles.contactInfo}>
                                <div className={styles.contactItem}>
                                    <FontAwesomeIcon icon={faPhone} />
                                    <a href="tel:+254707687930">+254 707 687930</a>
                                </div>
                                <div className={styles.contactItem}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <a href="mailto:info@smartmavuno.com">info@smartmavuno.com</a>
                                </div>
                                <div className={styles.contactItem}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    <span>Ruiru, Kenya</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className={styles.mapSection}>
                    <h4>Our Location</h4>
                    <div className={styles.mapWrapper}>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0326800961316!2d36.96723357490446!3d-1.1370512988520536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3fe19f5f648f%3A0x9b81ca2e7b1f2813!2sSmartMavuno!5e0!3m2!1sen!2ske!4v1740404004996!5m2!1sen!2ske" 
                            width="100%" 
                            height="250" 
                            style={{ border: 0 }} 
                            title="SmartMavuno Location"
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className={styles.map}
                        ></iframe>
                    </div>
                </div>

                {/* Copyright */}
                <div className={styles.copyright}>
                    <p>© 2025 SmartMavuno. Powered by Novatra Consultancies Limited.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;