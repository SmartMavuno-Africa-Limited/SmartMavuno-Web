import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faHandHoldingHeart, faUsers, faChartLine } from '@fortawesome/free-solid-svg-icons';
import styles from './AboutUsHome.module.css';

const AboutUsHome = () => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introSection}>
        <div className={styles.introHeader}>
          <h2 className={styles.introTitle}>Empowering the Future of African Agriculture</h2>
          <p className={styles.introSubtitle}>
            At Smart Mavuno, we're dedicated to transforming agriculture by empowering youths and vulnerable women 
            with the tools, resources, and opportunities they need to thrive in farming.
          </p>
        </div>

        <div className={styles.missionGrid}>
          {/* Youth Empowerment Card */}
          <div className={styles.missionCard}>
            <div className={styles.cardIcon}>
              <FontAwesomeIcon icon={faSeedling} />
            </div>
            <h3 className={styles.cardTitle}>Youth in Agriculture</h3>
            <p className={styles.cardContent}>
              We're inspiring and supporting the next generation of farmers through innovative programs that 
              make agriculture attractive, profitable, and sustainable for young people across Africa.
            </p>
            <div className={styles.cardFeatures}>
              <div className={styles.feature}>
                <FontAwesomeIcon icon={faChartLine} className={styles.featureIcon} />
                <span>Career development programs</span>
              </div>
              <div className={styles.feature}>
                <FontAwesomeIcon icon={faUsers} className={styles.featureIcon} />
                <span>Youth farming cooperatives</span>
              </div>
            </div>
          </div>

          {/* Women Empowerment Card */}
          <div className={styles.missionCard}>
            <div className={styles.cardIcon}>
              <FontAwesomeIcon icon={faHandHoldingHeart} />
            </div>
            <h3 className={styles.cardTitle}>Women in Farming</h3>
            <p className={styles.cardContent}>
              We're committed to empowering vulnerable women by providing access to resources, training, 
              and support systems that enable them to succeed in agriculture and achieve economic independence.
            </p>
            <div className={styles.cardFeatures}>
              <div className={styles.feature}>
                <FontAwesomeIcon icon={faUsers} className={styles.featureIcon} />
                <span>Women-led farming initiatives</span>
              </div>
              <div className={styles.feature}>
                <FontAwesomeIcon icon={faChartLine} className={styles.featureIcon} />
                <span>Economic empowerment programs</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.solutionsSection}>
          <h3 className={styles.solutionsTitle}>Our Empowerment Solutions</h3>
          
          <div className={styles.solutionsGrid}>
            <div className={styles.solutionItem}>
              <div className={styles.solutionContent}>
                <h4 className={styles.solutionName}>Insured Financing</h4>
                <p className={styles.solutionDescription}>
                  Access to affordable loans with insurance protection, specifically designed for 
                  youth and women farmers to mitigate risks and encourage investment in agriculture.
                </p>
              </div>
              <div className={styles.solutionStats}>
                <span className={styles.statNumber}>65%</span>
                <span className={styles.statLabel}>Women beneficiaries</span>
              </div>
            </div>

            <div className={styles.solutionItem}>
              <div className={styles.solutionContent}>
                <h4 className={styles.solutionName}>Digital Marketplace</h4>
                <p className={styles.solutionDescription}>
                  A platform that connects young and women farmers directly with buyers, ensuring 
                  fair prices and eliminating intermediaries that traditionally reduce profits.
                </p>
              </div>
              <div className={styles.solutionStats}>
                <span className={styles.statNumber}>78%</span>
                <span className={styles.statLabel}>Youth participation</span>
              </div>
            </div>

            <div className={styles.solutionItem}>
              <div className={styles.solutionContent}>
                <h4 className={styles.solutionName}>Training & Mentorship</h4>
                <p className={styles.solutionDescription}>
                  Comprehensive programs that provide the knowledge and skills needed for successful 
                  farming, from modern techniques to business management and market access.
                </p>
              </div>
              <div className={styles.solutionStats}>
                <span className={styles.statNumber}>2,500+</span>
                <span className={styles.statLabel}>People trained</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsHome;