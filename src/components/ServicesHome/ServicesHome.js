import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ServicesHome.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowRight, 
  faShieldAlt, 
  faStore 
} from '@fortawesome/free-solid-svg-icons';

// Service data - only Insured Financing and Digital Marketplace
const servicesData = [
  {
    id: 1,
    heading: 'Insured Financing',
    content: 'Collateral-free loans with flexible terms.',
    to: '/loans',
    icon: faShieldAlt
  },
  {
    id: 2,
    heading: 'Digital Marketplace',
    content: 'Buy & sell farm products directly.',
    to: 'https://marketplace.smartmavuno.com',
    icon: faStore
  }
];

const ServiceHome = ({ heading, content, to, icon, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`${styles.serviceItem} ${index % 2 === 0 ? styles.serviceItemPrimary : styles.serviceItemSecondary}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.serviceContent}>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon 
            icon={icon} 
            className={styles.icon} 
          />
        </div>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.content}>{content}</p>
        <Link 
          to={to} 
          className={styles.link}
        >
          Explore
          <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIcon} />
        </Link>
      </div>
    </div>
  );
};

const ServicesHome = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.mainHeading}>Our Services</h2>
          <p className={styles.subHeading}>
            Modern tools for agricultural success
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {servicesData.map((service, index) => (
            <ServiceHome
              key={service.id}
              heading={service.heading}
              content={service.content}
              to={service.to}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>

        <div className={styles.ctaSection}>
          <Link to="/contactUs" className={styles.ctaButton}>
            Contact Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;