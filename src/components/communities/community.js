import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faUsers } from '@fortawesome/free-solid-svg-icons';
import Banner from '../Banner/Banner'; 
import Footer from '../Footer/Footer'; 
import styles from './community.module.css';

const Community = () => {
  const [region, setRegion] = useState("");
  const [hoveredRegion, setHoveredRegion] = useState(null);

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

  // Function to handle community join
  const handleJoinCommunity = () => {
    if (region) {
      window.open(regionLinks[region], "_blank");
    } else {
      alert("Please select a region.");
    }
  };

  // Function to handle direct region click
  const handleRegionClick = (regionName) => {
    window.open(regionLinks[regionName], "_blank");
  };

  return (
    <div className={styles.pageContainer}>
      {/* Banner Section */}
      <section>
        <Banner />
      </section>

      {/* Community Content Section */}
      <section className={styles.communitiesContainer}>
        <div className={styles.communitiesSection}>
          <h2 className={styles.communitiesTitle}>Join Your Regional Farming Community</h2>
          <p className={styles.communitiesSubtitle}>
            Connect with farmers in your region, share experiences, and access localized resources.
          </p>

          <div className={styles.communitiesGrid}>
            {Object.keys(regionLinks).map((regionName) => (
              <div
                key={regionName}
                className={`${styles.regionCard} ${hoveredRegion === regionName ? styles.regionCardHover : ''}`}
                onMouseEnter={() => setHoveredRegion(regionName)}
                onMouseLeave={() => setHoveredRegion(null)}
                onClick={() => handleRegionClick(regionName)}
              >
                <div className={styles.regionContent}>
                  <h3 className={styles.regionName}>{regionName}</h3>
                  <p className={styles.regionDescription}>Farmers Community Hub</p>
                  <div className={`${styles.regionButton} ${hoveredRegion === regionName ? styles.regionButtonHover : ''}`}>
                    Join Now <FontAwesomeIcon icon={faArrowRight} className={styles.buttonIcon} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.dropdownSection}>
            <div className={styles.dropdownContainer}>
              <h3 className={styles.dropdownTitle}>Select your region to join</h3>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className={styles.regionDropdown}
              >
                <option value="">Choose your region</option>
                {Object.keys(regionLinks).map((regionName) => (
                  <option key={regionName} value={regionName}>
                    {regionName} Community
                  </option>
                ))}
              </select>
              
              <button
                className={`${styles.joinButton} ${region ? styles.joinButtonActive : ''}`}
                onClick={handleJoinCommunity}
                disabled={!region}
              >
                <FontAwesomeIcon icon={faUsers} className={styles.buttonIcon} />
                JOIN COMMUNITY
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Community;