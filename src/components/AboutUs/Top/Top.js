import React from "react";
import styles from './Top.module.css';

const Top = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headerSection}>
                <h1 className={styles.mainTitle}>SmartMavuno</h1>
                <p className={styles.subHeading}>
                    Finance. Markets. Future
                </p>
            </div>

            <div className={styles.servicesSection}>
                <div className={styles.servicesGrid}>
                    <div className={styles.serviceCard}>
                        <h4 className={styles.serviceName}>Financing</h4>
                        <p className={styles.serviceDescription}>
                            Insured loans for farmers
                        </p>
                    </div>
                    
                    <div className={styles.serviceCard}>
                        <h4 className={styles.serviceName}>Marketplace</h4>
                        <p className={styles.serviceDescription}>
                            Connect farmers with buyers
                        </p>
                    </div>
                    
                    <div className={styles.serviceCard}>
                        <h4 className={styles.serviceName}>Weather</h4>
                        <p className={styles.serviceDescription}>
                            Climate data and forecasts
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.statsSection}>
                <div className={styles.statCard}>
                    <span className={styles.statNumber}>5,000</span>
                    <span className={styles.statLabel}>Farmers</span>
                </div>
                <div className={styles.statCard}>
                    <span className={styles.statNumber}>10</span>
                    <span className={styles.statLabel}>Counties</span>
                </div>
            </div>
        </div>
    )
}

export default Top;