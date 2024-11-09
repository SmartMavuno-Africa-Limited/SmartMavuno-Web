import React from "react";
import styles from './Real.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faGlobe, faChartLine, faSeedling, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

const impactData = [
    {
        title: "Farmers Empowered",
        value: 10000,
        icon: faUsers,
        formattedValue: "10,000+"  
    },
    {
        title: "Counties Reached",
        value: 46,
        icon: faGlobe,
        formattedValue: "46"
    },
    {
        title: "Market Value",
        value: 50000000,
        icon: faChartLine,
        formattedValue: "$50M+"
    },
    {
        title: "Seeds Distributed",
        value: 1000000,
        icon: faSeedling,
        formattedValue: "1M+"
    },
    {
        title: "Sustainable Projects",
        value: 50,
        icon: faHandHoldingHeart,
        formattedValue: "50+"
    },
];

const Real = () => {
    return (
        <div className="mb-5 overflow-hidden">
            {/* Parent container for all the impact items */}
            <div className={styles.impactWrapper}>
                <div className={styles.text}>
                    <p data-aos="slide-right" data-aos-offset="150" className={styles.heading}>Our Impact</p>
                    {/* Container for the impact items */}
                    <div className={styles.impactContainer}>
                        {impactData.map((item, index) => (
                            <div key={index} className={styles.impactItem}>
                                <FontAwesomeIcon icon={item.icon} className={styles.impactIcon} />
                                <h3 className={styles.number}>{item.formattedValue}</h3>
                                <p className={styles.title}>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Real;
