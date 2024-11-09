import React from "react";
import { Link } from "react-router-dom";
import styles from "./ServicesHome.module.css"; // Import CSS module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome Import
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // FontAwesome Icon for "Learn More"
import data from './data'; // Importing the data

const ServiceHome = ({ heading, content, to, icon }) => {
    return (
        <div className={styles.serviceItem}>
            {/* Icon container that uses the styles defined above */}
            <div className={styles.iconContainer}>
                <FontAwesomeIcon icon={icon} className={styles.icon} />
            </div>
            <h3 className={styles.heading}>{heading}</h3>
            <p className={styles.content}>{content}</p>
            <Link to={to} className={styles.link}>
                {/* FontAwesome "ArrowRight" icon */}
                <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIcon} />
            </Link>
        </div>
    );
};

const ServicesHome = () => {
    return (
        <div className={`container ${styles.contain} overflow-hidden pb-4`}>
            <div>
                <p data-aos="slide-left" className={`mx-auto ${styles.subHeading}`}>
                    Modernize your farm workflow from range of our services
                </p>
            </div>

            <div className="row">
                {data.map((item) => (
                    <div key={item.id} className="col-lg-4 col-md-6">
                        <ServiceHome
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
