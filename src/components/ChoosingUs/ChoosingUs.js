import React from "react";
import { FaCogs, FaHeadset, FaHandsHelping, FaShieldAlt, FaLandmark,  FaCloudUploadAlt, FaHandshake } from 'react-icons/fa'; 

import styles from './ChoosingUs.module.css';

const ChoosingUs = () => {
    return (
        <div style={{ backgroundColor: '#fff1e5' }}>
            <div className="container overflow-hidden">
                <p data-aos='slide-right' data-aos-offset="220" className={styles.heading}>Why Choose SmartMavuno?</p>
                <p data-aos='slide-left' className={styles.sub_text}>Driving sustainable farming solutions and contributing to a better tomorrow.</p>
                <div className={`row ${styles.sub}`}>
                    {/* Expertise & Innovation */}
                    <div data-aos='fade-right' className="col-md-4">
                        <div className={styles.containerBox}>
                            <FaCogs size={40} color="#4CAF50" />
                            <p className={styles.logo_head}>Expertise & Innovation</p>
                            <p className={styles.logo_text}>With years of experience in AgriTech, we provide farmers with cutting-edge tools and insights to boost productivity, cut costs, and make farming smarter and more sustainable.</p>
                        </div>
                    </div>

                    {/* Real-Time Support & Communication */}
                    <div data-aos='fade' className="col-md-4">
                        <div className={styles.containerBox}>
                            <FaHeadset size={40} color="#4CAF50" />
                            <p className={styles.logo_head}>Real-Time Support & Communication</p>
                            <p className={styles.logo_text}>From up-to-the-minute weather updates to tailored farming advice, we keep you informed and supported every step of the way, making SmartMavuno a trusted partner in your farming journey.</p>
                        </div>
                    </div>

                    {/* Donation Basket: Ending Hunger Together */}
                    <div data-aos='fade-left' className="col-md-4">
                        <div className={styles.containerBox}>
                            <FaHandsHelping size={40} color="#4CAF50" />
                            <p className={styles.logo_head}>Donation Basket: Ending Hunger Together</p>
                            <p className={styles.logo_text}>Through our Donation Basket initiative, we help fight hunger by supporting communities in need, creating a bridge between farmers and those facing food insecurity as we work toward zero hunger goals.</p>
                        </div>
                    </div>
                </div>

                {/* New Reasons for Choosing SmartMavuno */}
                <div className={`row ${styles.sub}`}>
                    {/* Insured Loans */}
                    <div data-aos='fade-right' className="col-md-4">
                        <div className={styles.containerBox}>
                            <FaShieldAlt size={40} color="#4CAF50" />
                            <p className={styles.logo_head}>Insured Loans for Farmers</p>
                            <p className={styles.logo_text}>We offer insured loans to farmers, helping you access the capital needed to scale your farm without the stress of financial risk. Your loan is protected, so you can focus on growth.</p>
                        </div>
                    </div>

                    {/* Secure Land Rights */}
                    <div data-aos='fade' className="col-md-4">
                        <div className={styles.containerBox}>
                            <FaLandmark size={40} color="#4CAF50" />
                            <p className={styles.logo_head}>Secure Land Rights</p>
                            <p className={styles.logo_text}>With SmartMavuno, we help ensure that your land rights are secure through digital records and verification systems. Your property is safe, and you can make decisions with confidence.</p>
                        </div>
                    </div>

                    {/* Digital Record Keeping & Reporting */}
                    <div data-aos='fade-left' className="col-md-4">
                        <div className={styles.containerBox}>
                            <FaCloudUploadAlt size={40} color="#4CAF50" />
                            <p className={styles.logo_head}>Digital Record Keeping & Reporting</p>
                            <p className={styles.logo_text}>Our platform makes it easy to keep track of your farm's progress with real-time data analytics, digital reports, and easy-to-use dashboards, helping you make informed decisions.</p>
                        </div>
                    </div>
                </div>

                <div className={`row ${styles.sub}`}>
                    {/* Partnership & Collaboration */}
                    <div data-aos='fade-right' className="col-md-4">
                        <div className={styles.containerBox}>
                            <FaHandshake size={40} color="#4CAF50" />
                            <p className={styles.logo_head}>Partnership & Collaboration</p>
                            <p className={styles.logo_text}>Join our network of farmers and collaborators. We facilitate partnerships with other businesses, NGOs, and government bodies to bring more resources, training, and opportunities to your farm.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChoosingUs;
