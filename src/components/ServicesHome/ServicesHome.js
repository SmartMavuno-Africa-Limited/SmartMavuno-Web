import React from "react";
import { Link } from "react-router-dom";
import styles from "./ServicesHome.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowRight, 
  faPeopleArrows, 
  faShieldAlt, 
  faStore 
} from '@fortawesome/free-solid-svg-icons';

// Service data - now 3 services
const servicesData = [
  {
    id: 1,
    heading: 'Insured Financing',
    content: 'Collateral-free loans',
    to: '/loans',
    icon: faShieldAlt
  },
  {
    id: 2,
    heading: 'Digital Marketplace',
    content: 'Buy & sell products',
    to: 'https://marketplace.smartmavuno.com',
    icon: faStore
  },
  {
    id: 3,
    heading: 'Training',
    content: 'Mentorship programs',
    to: '/community',
    icon: faPeopleArrows
  }
];

const ServiceHome = ({ heading, content, to, icon }) => {
  return (
    <div className={styles.serviceItem}>
      <div className={styles.serviceContent}>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={icon} className={styles.icon} />
        </div>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.content}>{content}</p>
        <Link to={to} className={styles.link}>
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
            Tools for agricultural success
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {servicesData.map((service) => (
            <ServiceHome
              key={service.id}
              heading={service.heading}
              content={service.content}
              to={service.to}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;