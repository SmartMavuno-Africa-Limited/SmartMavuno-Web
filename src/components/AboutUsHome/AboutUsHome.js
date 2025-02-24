import React, { useState } from "react";
import styles from './AboutUsHome.module.css';

const AboutUsHome = () => {
  // State to track selected region
  const [region, setRegion] = useState("");

  // Mapping of regions to WhatsApp group links
  const regionLinks = {
    "SmartMavuno Nairobi Farmers Hub": "https://chat.whatsapp.com/EB9CWE7ViwA5NA0xK7BVtD",
    "SmartMavuno North-Eastern Farmers Hub": "https://chat.whatsapp.com/FUdagfWuwNO78XaUr9dMna",
    "SmartMavuno Eastern Farmers Hub": "https://chat.whatsapp.com/GCpLuceiW1wHjMKWAkJfbF",
    "SmartMavuno Coast Farmers Hub": "https://chat.whatsapp.com/BpTrf2gE2gM1N8hHavarXJ",
    "SmartMavuno Rift Valley Farmers Hub": "https://chat.whatsapp.com/HJfogxzG3ZSGg76Mf8aWL8",
    "SmartMavuno Central Kenya Farmers Hub": "https://chat.whatsapp.com/LwJo9FPCQKgKUPknbfEr2K",
    "SmartMavuno Western Farmers Hub": "https://chat.whatsapp.com/Eqx48cZ8vat8cbULjqdFlC",
    "SmartMavuno Nyanza Farmers Hub": "https://chat.whatsapp.com/L1QnsFvhA5aCVugEPH8At9"
  };

  // Function to handle community join
  const handleJoinCommunity = () => {
    if (region) {
      window.open(regionLinks[region], "_blank");
    } else {
      alert("Please select a region.");
    }
  };

  return (
    <>
      <div className={`container ${styles.contain}`}>
        <div className="row">
          <div className="col-md-12">
            <p data-aos="slide-left" className={styles.heading}>Empowering Farmers with Smart and Accessible Solutions</p>
            <div data-aos="zoom-in">
              <p className={styles.content}>
                SmartMavuno is dedicated to transforming the agricultural landscape with cutting-edge solutions tailored for farmers. 
                Our team, equipped with over 20 years of combined experience in agri-tech, aims to bridge the gap between traditional farming and modern digital tools. 
                We provide an intuitive platform that offers farm management, market insights, and productivity tools, all accessible to farmers of any scale. 
                Whether you're looking to optimize your yield, access new markets, or manage resources efficiently, SmartMavuno is here to support your journey towards sustainable and profitable farming.
              </p>
            </div>
          </div>
        </div>

        {/* Region Selection Dropdown */}
        <div className="row">
          <div className="col-md-12">
            <div className={styles.regionSelect}>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className={styles.regionDropdown}
              >
                <option value="">Select Your Region</option>
                <option value="SmartMavuno Nairobi Farmers Hub">SmartMavuno Nairobi Farmers Hub </option>
                <option value="SmartMavuno North-Eastern Farmers Hub">SmartMavuno North Eastern Farmers Hub </option>
                <option value="SmartMavuno Eastern Farmers Hub"> SmartMavuno Eastern Farmers Hub</option>
                <option value="SmartMavuno Coast Farmers Hub">SmartMavuno Coast Farmers Hub</option>
                <option value="SmartMavuno Rift Valley Farmers Hub">SmartMavuno Rift Valley Farmers Hub</option>
                <option value="SmartMavuno Central Kenya Farmers Hub">SmartMavuno Central Kenya Farmers Hub</option>
                <option value="SmartMavuno Western Farmers Hub">SmartMavuno Western Farmers Hub</option>
                <option value="SmartMavuno Nyanza Farmers Hub">SmartMavuno Nyanza Farmers Hub</option>
              </select>
            </div>
          </div>
        </div>

        {/* Custom Join Community Button */}
        <div data-aos='zoom-in' style={{ textAlign: 'center' }}>
          <div
            className={styles.joinCommunityBtn}
            onClick={handleJoinCommunity}
            style={{ cursor: 'pointer' }}
          >
            JOIN COMMUNITY
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsHome;
