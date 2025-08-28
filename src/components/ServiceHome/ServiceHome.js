import React from "react";
import { Link } from "react-router-dom";
import styles from "./ServiceHome.module.css"; // Import CSS module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome Import
import data from '../Services/data'; // Import data from Services/data

// Create a new component for individual service items
const ServiceItem = ({ heading, content, to, icon }) => {
    return (
        <div className={styles.serviceItem}>
            {/* Icon container that uses the styles defined above */}
            <div className={styles.iconContainer}>
                <FontAwesomeIcon icon={icon} className={styles.icon} />
            </div>
            <h3 className={styles.heading}>{heading}</h3>
            <p className={styles.content}>{content}</p>
            <Link to={to} className={styles.link}>
                Learn More
            </Link>
        </div>
    );
};

// The main component that will render all services
const ServicesHome = () => {
    return (
        <div className={`container ${styles.contain} overflow-hidden pb-4`}>
            <p data-aos="slide-right" className={styles.heading}>
                Services
            </p>
            <div>
                <p data-aos="slide-left" className={`mx-auto ${styles.subHeading}`}>
                    Modernize your workflow and maximize results
                </p>
            </div>

            <div className="row">
                {/* Map over the data array and pass each item to the ServiceItem component */}
                {data.map((item) => (
                    <div key={item.id} className="col-lg-4 col-md-6">
                        <ServiceItem
                            heading={item.heading}
                            content={item.content}
                            to={item.to}
                            icon={item.icon}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesHome;
