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
    content: 'Get insured financing collateral-free from SmartMavuno with flexible repayment terms and competitive rates.',
    to: '/loans',
    icon: faShieldAlt
  },
  {
    id: 2,
    heading: 'Digital Marketplace',
    content: 'Buy and sell farm products, equipment, and services directly through our secure digital marketplace platform.',
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
            className={`${styles.icon} ${isHovered ? styles.iconHover : ''}`} 
          />
        </div>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.content}>{content}</p>
        <Link 
          to={to} 
          className={`${styles.link} ${isHovered ? styles.linkHover : ''}`}
        >
          Explore Service
          <FontAwesomeIcon 
            icon={faArrowRight} 
            className={`${styles.arrowIcon} ${isHovered ? styles.arrowIconHover : ''}`} 
          />
        </Link>
      </div>
      <div className={styles.serviceBackground}></div>
    </div>
  );
};

const ServicesHome = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.superHeading}>Our Premium Services</p>
          <h2 className={styles.mainHeading}>Empowering Your Agricultural Success</h2>
          <p className={styles.subHeading}>
            Modernize your farm workflow with our specialized services designed 
            to maximize productivity and profitability.
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
          <h3>Need assistance choosing the right service?</h3>
          <p>Our agricultural experts are ready to help you make the best decision for your farm.</p>
          <Link to="/contactUs" className={styles.ctaButton}>
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;