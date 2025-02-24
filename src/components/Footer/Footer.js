import React from "react";
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <>
            {/* Newsletter Section */}
            <div className={styles.newsletterContainer}>
                <div className={styles.newsletterContent}>
                    <p className={styles.newsletterText}>
                        Subscribe to our newsletter to get <br />
                        our updates and recommendations.
                    </p>
                    <div className={styles.newsletterInputContainer}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className={styles.newsletterInput}
                        />
                        <button
                            className={styles.subscribeButton}
                            onClick={() => (window.location.href = "mailto:info@smartmavuno.com")}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#2b2b2b', paddingTop: '89px', paddingBottom: '90px' }}>
                <div className="container">
                    <div className="row">
                        {/* Column 1 - SmartMavuno Information */}
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.logo}>SmartMavuno</p>
                            <p className={styles.text}>Agritech StartUp</p>
                            <p className={styles.text}>Kenya, East-Africa, Africa</p>
                            <div className={styles.social_logo}>
                                {/* Social Media Links with FontAwesome Icons */}
                                <a href="https://www.facebook.com/profile.php?id=100089102720769&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                                </a>
                                <a href="https://www.linkedin.com/company/smartmavuno" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                                </a>
                                <a href="https://www.instagram.com/smartmavuno?igsh=MTRhZHUzcXBseHlhaQ==" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                                </a>
                                <a href="https://x.com/SmartMavuno" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
                                </a>
                            </div>
                        </div>

                        {/* Column 2 - Services */}
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Services</p>
                            <p className={styles.text}>Land Leasing</p>
                            <p className={styles.text}>Agricultural Financing</p>
                            <p className={styles.text}>Produce Marketplace</p>
                        </div>

                        {/* Column 3 - Head Office */}
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Head Office</p>
                            <p className={styles.text}>
                                <a href="https://www.google.com/maps?q=Ruiru, Kenya" target="_blank" rel="noopener noreferrer">
                                    00100, Ruiru, Kenya
                                </a>
                            </p>
                            <p className={styles.text}>
                                <a href="mailto:info@smartmavuno.com" className={styles.email}>
                                    <FontAwesomeIcon icon={faEnvelope} /> info@smartmavuno.com
                                </a>
                            </p>
                            <p className={styles.text}>
                                <a href="tel:+254707687930" className={styles.phone}>
                                    <FontAwesomeIcon icon={faPhone} /> (254) 707687930
                                </a>
                            </p>
                        </div>

                        {/* Column 4 - Opening Hours */}
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Opening Hour</p>
                            <p className={styles.text}>Mon - Sat : 8:00 - 17:00</p>
                            <p className={styles.text}>Sun : Closed</p>
                        </div>
                    </div>
                </div>
            </div>


{/* Embedded Map Section */}
<div style={{ marginTop: '20px', textAlign: 'center' }}>
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0326800961316!2d36.96723357490446!3d-1.1370512988520536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3fe19f5f648f%3A0x9b81ca2e7b1f2813!2sSmartMavuno!5e0!3m2!1sen!2ske!4v1740404004996!5m2!1sen!2ske" 
        width="100%" 
        height="300" 
        style={{ border: 0 }} 
        title="Location Map of SmartMavuno"
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
</div>



            <div style={{ backgroundColor: '#28501C', borderTop: 'solid 1px #707070' }}>
                <p className={styles.bottom}>Copyright © 2025. All right reserved</p>
            </div>
        </>
    );
};

export default Footer;
