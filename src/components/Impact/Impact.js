import React, { useState } from "react";
import styles from './Impact.module.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, 
  faGlobe 
} from '@fortawesome/free-solid-svg-icons';

const impactData = [
    {
        title: "Farmers",
        value: 5000,
        icon: faUsers,
        description: "Using our platform",
        color: "#4CAF50"
    },
    {
        title: "Counties",
        value: 10,
        icon: faGlobe,
        description: "Across Kenya",
        color: "#2196F3"
    },
    {
        title: "Trained",
        value: 1500,
        icon: faGlobe,
        description: "Climate-smart farming",
        color: "#FF9800"
    },
];

const Impact = () => {
    return (
        <section className={styles.impactSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>Our Impact</h2>
                    <p className={styles.subtitle}>
                        Transforming agriculture across Africa
                    </p>
                </div>

                <div className={styles.impactGrid}>
                    {impactData.map((item, index) => (
                        <div 
                            key={index} 
                            className={styles.impactCard}
                            style={{ '--accent-color': item.color }}
                        >
                            <div className={styles.cardInner}>
                                <div className={styles.iconContainer}>
                                    <FontAwesomeIcon icon={item.icon} className={styles.impactIcon} />
                                </div>
                                
                                <div className={styles.numberContainer}>
                                    <h3 className={styles.number}>
                                        {item.value.toLocaleString()}
                                    </h3>
                                </div>
                                
                                <div className={styles.textContainer}>
                                    <p className={styles.title}>{item.title}</p>
                                    <p className={styles.description}>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.ctaSection}>
                    <Link to="/contactUs" className={styles.ctaButton}>
                        Partner With Us
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Impact;