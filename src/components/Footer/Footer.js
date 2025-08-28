import React, { useState } from "react";
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
            // Here you would typically send the email to your backend
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    return (
        <footer className={styles.footer}>
            {/* Newsletter Section */}
            <div className={styles.newsletterSection}>
                <div className={styles.newsletterContainer}>
                    <div className={styles.newsletterContent}>
                        <h3>Stay Updated with SmartMavuno</h3>
                        <p>Subscribe to our newsletter for the latest updates, farming tips, and exclusive offers</p>
                        
                        {subscribed ? (
                            <div className={styles.successMessage}>
                                <span>🎉 Thank you for subscribing!</span>
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                                <div className={styles.inputGroup}>
                                    <FontAwesomeIcon icon={faEnvelope} className={styles.inputIcon} />
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className={styles.newsletterInput}
                                    />
                                    <button type="submit" className={styles.subscribeButton}>
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className={styles.mainFooter}>
                <div className={styles.footerContainer}>
                    <div className={styles.footerGrid}>
                        {/* Company Info */}
                        <div className={styles.footerColumn}>
                            <div className={styles.logoSection}>
                                <h3 className={styles.logo}>SmartMavuno</h3>
                                <p className={styles.tagline}>Transforming African Agriculture</p>
                            </div>
                            <p className={styles.description}>
                                Empowering farmers through technology, innovation, and sustainable agricultural practices across Africa.
                            </p>
                            <div className={styles.socialLinks}>
                                <a href="https://www.facebook.com/profile.php?id=100089102720769&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="https://www.linkedin.com/company/smartmavuno" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="https://www.instagram.com/smartmavuno?igsh=MTRhZHUzcXBseHlhaQ==" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="https://x.com/SmartMavuno" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </div>
                        </div>

                        {/* Services */}
                        <div className={styles.footerColumn}>
                            <h4 className={styles.columnTitle}>Our Services</h4>
                            <ul className={styles.footerList}>
                                <li><a href="/loans">Agricultural Financing</a></li>
                                <li><a href="https://marketplace.smartmavuno.com/">Produce Marketplace</a></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className={styles.footerColumn}>
                            <h4 className={styles.columnTitle}>Contact Us</h4>
                            <div className={styles.contactInfo}>
                                <div className={styles.contactItem}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.contactIcon} />
                                    <span>00100, Ruiru, Kenya</span>
                                </div>
                                <div className={styles.contactItem}>
                                    <FontAwesomeIcon icon={faEnvelope} className={styles.contactIcon} />
                                    <a href="mailto:info@smartmavuno.com">info@smartmavuno.com</a>
                                </div>
                                <div className={styles.contactItem}>
                                    <FontAwesomeIcon icon={faPhone} className={styles.contactIcon} />
                                    <a href="tel:+254707687930">(254) 707687930</a>
                                </div>
                            </div>
                        </div>

                        {/* Opening Hours */}
                        <div className={styles.footerColumn}>
                            <h4 className={styles.columnTitle}>Opening Hours</h4>
                            <div className={styles.hoursInfo}>
                                <div className={styles.hoursItem}>
                                    <FontAwesomeIcon icon={faClock} className={styles.hoursIcon} />
                                    <div>
                                        <p>Monday - Saturday</p>
                                        <p className={styles.hours}>8:00 AM - 5:00 PM</p>
                                    </div>
                                </div>
                                <div className={styles.hoursItem}>
                                    <FontAwesomeIcon icon={faClock} className={styles.hoursIcon} />
                                    <div>
                                        <p>Sunday</p>
                                        <p className={styles.hoursClosed}>Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className={styles.mapSection}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0326800961316!2d36.96723357490446!3d-1.1370512988520536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3fe19f5f648f%3A0x9b81ca2e7b1f2813!2sSmartMavuno!5e0!3m2!1sen!2ske!4v1740404004996!5m2!1sen!2ske" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    title="Location Map of SmartMavuno"
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className={styles.map}
                ></iframe>
            </div>

            {/* Copyright Section */}
            <div className={styles.copyrightSection}>
                <div className={styles.copyrightContainer}>
                    <p>Copyright © 2025 SmartMavuno. All rights reserved.</p>
                
                    <p>Powered  by Novatra Consultancies Limited</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;