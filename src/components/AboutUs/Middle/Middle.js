import React from "react";
import styles from './Middle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faHandHoldingUsd, faStore, faChartLine, faUsers, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const Middle = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`container ${styles.contain}`}>
        <div className={styles.headerSection}>
          <p data-aos='fade-down' data-aos-offset="170" className={styles.mainHead}>Transforming Agriculture Through Innovation</p>
        </div>

        <div className={styles.servicesGrid}>
          <div data-aos='fade-right' data-aos-offset="170" className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={faShieldAlt} className={styles.icon} />
              <div className={styles.iconDecoration}></div>
            </div>
            <h3 className={styles.head}>Insured Financing</h3>
            <p className={styles.content}>
              Access affordable agricultural loans backed by insurance protection against crop failure and unforeseen circumstances. 
              Our partnerships with financial institutions ensure farmers can invest in their operations with confidence and financial security.
            </p>
            <ul className={styles.featureList}>
              <li><FontAwesomeIcon icon={faHandHoldingUsd} /> Low-interest loans</li>
              <li><FontAwesomeIcon icon={faShieldAlt} /> Crop insurance protection</li>
              <li><FontAwesomeIcon icon={faChartLine} /> Flexible repayment terms</li>
            </ul>
          </div>

          <div data-aos='fade-left' data-aos-offset="170" className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={faStore} className={styles.icon} />
              <div className={styles.iconDecoration}></div>
            </div>
            <h3 className={styles.head}>Digital Marketplace</h3>
            <p className={styles.content}>
              Connect directly with buyers through our digital platform, eliminating intermediaries and ensuring fair prices for your produce. 
              Our marketplace also provides storage solutions to help manage inventory and reduce post-harvest losses.
            </p>
            <ul className={styles.featureList}>
              <li><FontAwesomeIcon icon={faUsers} /> Direct buyer connections</li>
              <li><FontAwesomeIcon icon={faSyncAlt} /> Inventory management</li>
              <li><FontAwesomeIcon icon={faChartLine} /> Market price analytics</li>
            </ul>
          </div>
        </div>

        <div data-aos='fade-up' data-aos-offset="170" className={styles.statsSection}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>5000+</span>
            <span className={styles.statLabel}>Farmers Empowered</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>$2M+</span>
            <span className={styles.statLabel}>Transactions Processed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Middle;