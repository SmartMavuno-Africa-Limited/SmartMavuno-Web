import React from 'react';
import Footer from '../Footer';
import styles from './Community.module.css';
import { FaWhatsapp, FaUsers, FaComments, FaSeedling, FaMapMarkerAlt } from 'react-icons/fa';

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
            <h1>Farmers Community</h1>
            <p>Connect with farmers in your region</p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <FaUsers />
                <span>5K+</span>
              </div>
              <div className={styles.stat}>
                <FaComments />
                <span>8 Regions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Regions Section */}
        <div className={styles.regionsSection}>
          <h2><FaWhatsapp /> Join Your Region</h2>
          <div className={styles.regionsGrid}>
            {Object.entries(regionLinks).map(([region, url]) => (
              <button 
                key={region}
                className={styles.regionButton}
                onClick={() => handleJoinCommunity(url)}
              >
                <FaWhatsapp className={styles.whatsappIcon} />
                <span>{region}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className={styles.mapSection}>
          <h2><FaMapMarkerAlt /> Coverage Areas</h2>
          <div className={styles.mapPlaceholder}>
            <div className={styles.activeCounty}>
              <span className={styles.countyDot}></span>
              <span>Machakos</span>
            </div>
            <div className={styles.activeCounty}>
              <span className={styles.countyDot}></span>
              <span>Nyeri</span>
            </div>
            <div className={styles.activeCounty}>
              <span className={styles.countyDot}></span>
              <span>Muranga</span>
            </div>
            <div className={styles.activeCounty}>
              <span className={styles.countyDot}></span>
              <span>Kisumu</span>
            </div>
            <div className={styles.activeCounty}>
              <span className={styles.countyDot}></span>
              <span>Homabay</span>
            </div>
          </div>
          <p className={styles.mapNote}>Active counties shown above</p>
        </div>

        {/* Benefits Section */}
        <div className={styles.benefitsSection}>
          <h2>Community Benefits</h2>
          <div className={styles.benefitsList}>
            <div className={styles.benefitItem}>
              <FaComments />
              <p>Real-time chat</p>
            </div>
            <div className={styles.benefitItem}>
              <FaSeedling />
              <p>Expert advice</p>
            </div>
            <div className={styles.benefitItem}>
              <FaUsers />
              <p>Networking</p>
            </div>
            <div className={styles.benefitItem}>
              <FaWhatsapp />
              <p>Quick updates</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Community;