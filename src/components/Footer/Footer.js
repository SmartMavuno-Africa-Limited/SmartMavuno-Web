import React from "react";
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <>
            <div style={{ backgroundColor: '#4CAF50', paddingTop: '89px', paddingBottom: '90px' }}>
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
                                <a href="mailto:info@smartmavuno.africa" className={styles.email}>
                                    <FontAwesomeIcon icon={faEnvelope} /> info@smartmavuno.africa
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
            <div style={{ backgroundColor: '#2b2b2b', borderTop: 'solid 1px #707070' }}>
                <p className={styles.bottom}>Copyright © 2022. All right reserved</p>
            </div>
        </>
    )
}

export default Footer;
