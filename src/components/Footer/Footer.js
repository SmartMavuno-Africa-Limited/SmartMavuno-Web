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
                            <h4>Services</h4>
                            <ul className={styles.footerLinks}>
                                <li><a href="/financing">Financing</a></li>
                                <li><a href="https://marketplace.smartmavuno.com/">Marketplace</a></li>
                                <li><a href="/community">Community</a></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className={styles.footerColumn}>
                            <h4>Contact</h4>
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

                {/* Copyright */}
                <div className={styles.copyright}>
                    <p>© 2025 SmartMavuno. Powered by Novatra Consultancies.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;