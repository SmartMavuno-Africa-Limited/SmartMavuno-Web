import React from "react";
import styles from './Top.module.css';

const Top = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headerSection}>
                <div className={styles.titleContainer}>
                    <p data-aos='fade-down' className={styles.preTitle}>Welcome to</p>
                    <h1 data-aos='fade-down' data-aos-delay="100" className={styles.mainTitle}>SmartMavuno</h1>
                    <div data-aos='fade-up' data-aos-delay="200" className={styles.accentLine}></div>
                </div>
                
                <p data-aos='fade-up' data-aos-delay="300" className={styles.subHeading}>
                    Transforming Agriculture Through Digital Innovation
                </p>
                
                <p data-aos='fade-up' data-aos-delay="400" data-aos-offset='80' className={styles.content}>
                    Smart Mavuno is a pioneering agritech platform dedicated to empowering African farmers with 
                    innovative digital solutions that enhance productivity, sustainability, and profitability.
                </p>
            </div>

            {/* Our Story Box */}
            <div data-aos='fade-up' data-aos-delay="500" className={styles.ourStoryBox}>
                <div className={styles.storyHeader}>
                    <div className={styles.sectionLabel}>Our Story</div>
                    <h2 className={styles.storyTitle}>
                        Empowering Farmers,<br />Shaping the Future of Agriculture
                    </h2>
                </div>
                
                <div className={styles.storyContent}>
                    <p className={styles.storyText}>
                        Founded in 2022, Smart Mavuno is a trailblazing agritech startup with a vision to 
                        revolutionize the agricultural landscape across Africa. Our mission is to empower 
                        farmers by providing cutting-edge tools and technology that address their most 
                        pressing challenges.
                    </p>
                    
                    <div className={styles.servicesSection}>
                        <h3 className={styles.servicesTitle}>Our Core Solutions</h3>
                        
                        <div className={styles.servicesGrid}>
                            <div className={styles.serviceCard}>
                                <div className={styles.serviceHeader}>
                                    <div className={styles.serviceNumber}>01</div>
                                    <h4 className={styles.serviceName}>Insured Financing</h4>
                                </div>
                                <p className={styles.serviceDescription}>
                                    Connecting farmers with financial institutions for insured agricultural loans with 
                                    flexible terms and protection against unforeseen circumstances.
                                </p>
                            </div>
                            
                            <div className={styles.serviceCard}>
                                <div className={styles.serviceHeader}>
                                    <div className={styles.serviceNumber}>02</div>
                                    <h4 className={styles.serviceName}>Digital Marketplace</h4>
                                </div>
                                <p className={styles.serviceDescription}>
                                    Direct connection between farmers and buyers with fair pricing, transparent 
                                    transactions, and reduced intermediary costs.
                                </p>
                            </div>
                            
                            <div className={styles.serviceCard}>
                                <div className={styles.serviceHeader}>
                                    <div className={styles.serviceNumber}>03</div>
                                    <h4 className={styles.serviceName}>Weather Intelligence</h4>
                                </div>
                                <p className={styles.serviceDescription}>
                                    Accurate forecasts and climate data to optimize planting, irrigation, and 
                                    harvesting decisions while mitigating risks.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div data-aos='fade-up' data-aos-delay="600" className={styles.statsSection}>
                <div className={styles.statItem}>
                    <span className={styles.statNumber}>2,000+</span>
                    <span className={styles.statLabel}>Farmers Empowered</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statNumber}>15+</span>
                    <span className={styles.statLabel}>Regions Served</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statNumber}>98%</span>
                    <span className={styles.statLabel}>Satisfaction Rate</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statNumber}>$5M+</span>
                    <span className={styles.statLabel}>Transactions Facilitated</span>
                </div>
            </div>

            {/* Mission Statement */}
            <div data-aos='fade-up' data-aos-delay="700" className={styles.missionSection}>
    <div className={styles.missionContent}>
        <h2 className={styles.missionTitle}>Our Commitment to Kenyan Agriculture</h2>
        <p className={styles.missionStatement}>
            We are dedicated to transforming Kenya’s agricultural landscape by empowering farmers with 
            access to the right tools, resources, and markets to achieve sustainable growth. Through innovation, 
            collaboration, and technology, we’re building a resilient and prosperous future for Kenyan agriculture.
        </p>
        <div className={styles.missionAccent}></div>
    </div>
</div>

        </div>
    )
}

export default Top;