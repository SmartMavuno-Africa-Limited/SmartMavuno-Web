import React from "react";
import styles from './AboutUsHome.module.css';

const AboutUsHome = () =>{
    return(
        <>
            <div className={`container ${styles.contain}`}>
                <div className="row">
                    <div className="col-md-12">
                        <p data-aos="slide-left" className={styles.heading}>Empowering Farmers with Smart and Accessible Solutions</p>
                        <div data-aos="zoom-in">
                            <p className={styles.content}>
                                SmartMavuno is dedicated to transforming the agricultural landscape with cutting-edge solutions tailored for farmers. 
                                Our team, equipped with over 20 years of combined experience in agri-tech, aims to bridge the gap between traditional farming and modern digital tools. 
                                We provide an intuitive platform that offers farm management, market insights, and productivity tools, all accessible to farmers of any scale. 
                                Whether you're looking to optimize your yield, access new markets, or manage resources efficiently, SmartMavuno is here to support your journey towards sustainable and profitable farming.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Impact Section */}
                <div className="row">
                    <div className="col-md-3">
                        <div className={styles.impactBox}>
                            <h4>About Us</h4>
                            <p>Learn more about our mission and how we’re revolutionizing agriculture.</p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className={styles.impactBox}>
                            <h4>Our Impact</h4>
                            <p>Explore the tangible impact we’ve had on farmers and communities.</p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className={styles.impactBox}>
                            <h4>Our Community</h4>
                            <p>Discover how we’re fostering a thriving farming community.</p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className={styles.impactBox}>
                            <h4>Join Us</h4>
                            <p>Become part of the change by joining our vibrant farming network.</p>
                        </div>
                    </div>
                </div>

                {/* Custom Join Community Button */}
                <div data-aos='zoom-in' style={{ textAlign: 'center' }}>
                    <div className={styles.joinCommunityBtn}>
                        JOIN COMMUNITY
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUsHome;
