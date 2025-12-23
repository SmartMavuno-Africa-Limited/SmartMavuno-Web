import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './AboutUsHome.module.css';

const AboutUsHome = () => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introSection}>
        <div className={styles.introHeader}>
          <h2 className={styles.introTitle}>Transforming Agriculture</h2>
          <p className={styles.introSubtitle}>
            Empowering youth & women farmers across Africa
          </p>
        </div>

        <div className={styles.missionGrid}>
          {/* Youth Empowerment Card */}
          <div className={styles.missionCard}>
            <div className={styles.cardIcon}>
              <FontAwesomeIcon icon={faSeedling} />
            </div>
            <h3 className={styles.cardTitle}>Youth in Agriculture</h3>
            <div className={styles.cardStats}>
              <span className={styles.statNumber}>78%</span>
              <span className={styles.statLabel}>Youth Participation</span>
            </div>
          </div>

          {/* Women Empowerment Card */}
          <div className={styles.missionCard}>
            <div className={styles.cardIcon}>
              <FontAwesomeIcon icon={faHandHoldingHeart} />
            </div>
            <h3 className={styles.cardTitle}>Women in Farming</h3>
            <div className={styles.cardStats}>
              <span className={styles.statNumber}>65%</span>
              <span className={styles.statLabel}>Women Beneficiaries</span>
            </div>
          </div>
        </div>

        <div className={styles.solutionsSection}>
          <h3 className={styles.solutionsTitle}>Our Solutions</h3>
          
          <div className={styles.solutionsGrid}>
            <div className={styles.solutionItem}>
              <h4 className={styles.solutionName}>Insured Financing</h4>
              <p className={styles.solutionDescription}>
                Affordable loans with insurance
              </p>
            </div>

            <div className={styles.solutionItem}>
              <h4 className={styles.solutionName}>Digital Marketplace</h4>
              <p className={styles.solutionDescription}>
                Connect directly with buyers
              </p>
            </div>

            <div className={styles.solutionItem}>
              <h4 className={styles.solutionName}>Training & Mentorship</h4>
              <p className={styles.solutionDescription}>
                Modern farming techniques
              </p>
            </div>
          </div>
        </div>

        <div className={styles.impactSection}>
          <div className={styles.impactStats}>
            <div className={styles.impactStat}>
              <span className={styles.impactNumber}>1500</span>
              <span className={styles.impactLabel}>Farmers Trained</span>
            </div>
            <div className={styles.impactStat}>
              <span className={styles.impactNumber}>1 M </span>
              <span className={styles.impactLabel}>Loan Disbursed</span>
            </div>
            <div className={styles.impactStat}>
              <span className={styles.impactNumber}>10</span>
              <span className={styles.impactLabel}>Counties Reached</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsHome;