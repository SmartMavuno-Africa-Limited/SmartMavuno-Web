import React from 'react';
import Footer from '../Footer';
import styles from './Community.module.css';
import { FaWhatsapp, FaUsers, FaComments, FaSeedling } from 'react-icons/fa';

const Community = () => {
  const regionLinks = {
    "Nairobi": "https://chat.whatsapp.com/EB9CWE7ViwA5NA0xK7BVtD",
    "North-Eastern": "https://chat.whatsapp.com/FUdagfWuwNO78XaUr9dMna",
    "Eastern": "https://chat.whatsapp.com/GCpLuceiW1wHjMKWAkJfbF",
    "Coast": "https://chat.whatsapp.com/BpTrf2gE2gM1N8hHavarXJ",
    "Rift Valley": "https://chat.whatsapp.com/HJfogxzG3ZSGg76Mf8aWL8",
    "Central Kenya": "https://chat.whatsapp.com/LwJo9FPCQKgKUPknbfEr2K",
    "Western": "https://chat.whatsapp.com/Eqx48cZ8vat8cbULjqdFlC",
    "Nyanza": "https://chat.whatsapp.com/L1QnsFvhA5aCVugEPH8At9"
  };

  const handleJoinCommunity = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeading}>Join the SmartMavuno Farmers Community</h1>
            <p className={styles.heroDescription}>
              Connect with fellow farmers in your region. Share knowledge, get expert advice, and stay updated on the latest agricultural practices through our WhatsApp communities.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <FaUsers className={styles.statIcon} />
                <h3>5000+ Farmers</h3>
                <p>Active Community Members</p>
              </div>
              <div className={styles.stat}>
                <FaComments className={styles.statIcon} />
                <h3>8 Regions</h3>
                <p>Across Kenya</p>
              </div>
              <div className={styles.stat}>
                <FaSeedling className={styles.statIcon} />
                <h3>24/7 Support</h3>
                <p>Expert Advice Available</p>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.visualCard}>
              <div className={styles.cardIcon}>
                <FaWhatsapp />
              </div>
              <h4>Instant Updates</h4>
              <p>Get timely information about weather, markets, and more</p>
            </div>
            <div className={styles.visualCard}>
              <div className={styles.cardIcon}>
                <FaUsers />
              </div>
              <h4>Knowledge Sharing</h4>
              <p>Learn from other farmers' experiences</p>
            </div>
            <div className={styles.visualCard}>
              <div className={styles.cardIcon}>
                <FaSeedling />
              </div>
              <h4>Exclusive Content</h4>
              <p>Access farming tips from agricultural experts</p>
            </div>
          </div>
        </div>

        {/* Regions Section */}
        <div className={styles.regionsSection}>
          <div className={styles.sectionHeader}>
            <h2>Join Your Regional Community</h2>
            <p>Select your region to join the WhatsApp group for farmers in your area</p>
          </div>
          <div className={styles.regionsGrid}>
            {Object.entries(regionLinks).map(([region, url]) => (
              <div key={region} className={styles.regionCard}>
                <div className={styles.regionContent}>
                  <h3>{region}</h3>
                  <p>Connect with farmers in the {region} region</p>
                </div>
                <button 
                  className={styles.joinButton}
                  onClick={() => handleJoinCommunity(url)}
                >
                  Join Group
                  <FaWhatsapp className={styles.buttonIcon} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className={styles.benefitsSection}>
          <h2>Why Join Our Community?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <FaComments />
              </div>
              <h4>Real-time Discussions</h4>
              <p>Participate in conversations about farming challenges and solutions with peers in your region</p>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <FaSeedling />
              </div>
              <h4>Expert Guidance</h4>
              <p>Get advice from agricultural specialists and experienced farmers</p>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <FaUsers />
              </div>
              <h4>Networking Opportunities</h4>
              <p>Connect with potential buyers, suppliers, and farming partners</p>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <FaWhatsapp />
              </div>
              <h4>Instant Updates</h4>
              <p>Receive timely information about market prices, weather alerts, and training opportunities</p>
            </div>
          </div>
        </div>

        {/* Guidelines Section */}
        <div className={styles.guidelinesSection}>
          <h2>Community Guidelines</h2>
          <div className={styles.guidelinesList}>
            <div className={styles.guidelineItem}>
              <div className={styles.guidelineNumber}>1</div>
              <div className={styles.guidelineContent}>
                <h4>Be Respectful</h4>
                <p>Treat all community members with respect and courtesy</p>
              </div>
            </div>
            <div className={styles.guidelineItem}>
              <div className={styles.guidelineNumber}>2</div>
              <div className={styles.guidelineContent}>
                <h4>Stay On Topic</h4>
                <p>Keep discussions focused on farming and related subjects</p>
              </div>
            </div>
            <div className={styles.guidelineItem}>
              <div className={styles.guidelineNumber}>3</div>
              <div className={styles.guidelineContent}>
                <h4>No Spamming</h4>
                <p>Avoid excessive self-promotion or irrelevant messages</p>
              </div>
            </div>
            <div className={styles.guidelineItem}>
              <div className={styles.guidelineNumber}>4</div>
              <div className={styles.guidelineContent}>
                <h4>Share Knowledge</h4>
                <p>Contribute your experiences and expertise to help others</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Community;