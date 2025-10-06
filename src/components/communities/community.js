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

  const GOOGLE_MAPS_API_KEY = "AIzaSyBzB829TQoQfsT0Pf254OQRMF6S2snExSw";

  const highlightedCounties = [
    { 
      name: "Machakos", 
      color: "#FF6B6B",
      lat: -1.5177, 
      lng: 37.2634 
    },
    { 
      name: "Nyeri", 
      color: "#4ECDC4",
      lat: -0.4201, 
      lng: 36.9476 
    },
    { 
      name: "Muranga", 
      color: "#45B7D1",
      lat: -0.7248, 
      lng: 37.1525 
    },
    { 
      name: "Kisumu", 
      color: "#96CEB4",
      lat: -0.1022, 
      lng: 34.7617 
    },
    { 
      name: "Homabay", 
      color: "#FFEAA7",
      lat: -0.5273, 
      lng: 34.4571 
    }
  ];

  const handleJoinCommunity = (url) => {
    window.open(url, '_blank');
  };

  // Generate Google Static Maps URL with markers
  const getStaticMapUrl = () => {
    const baseUrl = "https://maps.googleapis.com/maps/api/staticmap";
    const center = "Kenya";
    const size = "600x400";
    const zoom = 7;
    const mapType = "roadmap";
    
    // Create markers string
    const markers = highlightedCounties.map(county => 
      `markers=color:${county.color.replace('#', '0x')}%7Clabel:${county.name.charAt(0)}%7C${county.lat},${county.lng}`
    ).join('&');
    
    return `${baseUrl}?center=${center}&zoom=${zoom}&size=${size}&maptype=${mapType}&${markers}&key=${GOOGLE_MAPS_API_KEY}`;
  };

  return (
    <>
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1>Join SmartMavuno Farmers Community</h1>
            <p>Connect with farmers, share knowledge, and get expert advice through WhatsApp communities</p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <FaUsers />
                <h3>5000</h3>
                <p>Farmers</p>
              </div>
              <div className={styles.stat}>
                <FaComments />
                <h3>5</h3>
                <p>Regions</p>
              </div>
              <div className={styles.stat}>
                <FaSeedling />
                <h3>24/7</h3>
                <p>Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map & Regions Combined Section */}
        <div className={styles.combinedSection}>
          <div className={styles.mapSide}>
            <h2>Our Coverage Areas</h2>
            <div className={styles.mapContainer}>
              <img 
                src={getStaticMapUrl()} 
                alt="Kenya map showing SmartMavuno coverage areas in Machakos, Nyeri, Muranga, Kisumu, and Homabay"
                className={styles.kenyaMap}
                onError={(e) => {
                  console.error('Failed to load map image');
                  e.target.style.display = 'none';
                }}
              />
              <div className={styles.mapOverlay}>
                <p>Active counties highlighted in color</p>
              </div>
            </div>
            <div className={styles.legend}>
              <h4>Active Counties:</h4>
              <div className={styles.legendItems}>
                {highlightedCounties.map(county => (
                  <div key={county.name} className={styles.legendItem}>
                    <div 
                      className={styles.legendColor} 
                      style={{ backgroundColor: county.color }}
                    ></div>
                    <span>{county.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.regionsSide}>
            <h2>Join Your Region</h2>
            <div className={styles.regionsList}>
              {Object.entries(regionLinks).map(([region, url]) => (
                <button 
                  key={region}
                  className={styles.regionButton}
                  onClick={() => handleJoinCommunity(url)}
                >
                  <FaWhatsapp />
                  <span>{region}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className={styles.benefitsSection}>
          <h2>Why Join Our Community?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <FaComments />
              <h4>Real-time Chat</h4>
              <p>Instant discussions with farmers in your area</p>
            </div>
            <div className={styles.benefitCard}>
              <FaSeedling />
              <h4>Expert Advice</h4>
              <p>Get guidance from agricultural specialists</p>
            </div>
            <div className={styles.benefitCard}>
              <FaUsers />
              <h4>Networking</h4>
              <p>Connect with buyers and suppliers</p>
            </div>
            <div className={styles.benefitCard}>
              <FaWhatsapp />
              <h4>Quick Updates</h4>
              <p>Market prices & weather alerts</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Community;