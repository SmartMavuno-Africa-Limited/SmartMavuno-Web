import React, { useEffect, useState } from "react";
import styles from './Real.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faGlobe, faChartLine, faSeedling, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

const impactData = [
    {
        title: "Farmers Empowered",
        value: 10000, // Store the raw value for counting
        icon: faUsers,
    },
    {
        title: "Counties Reached",
        value: 46,
        icon: faGlobe,
    },
    {
        title: "Market Value",
        value: 50000000, // $50M+ as a raw value
        icon: faChartLine,
    },
    {
        title: "Seeds Distributed",
        value: 1000000, // 1M+
        icon: faSeedling,
    },
    {
        title: "Sustainable Projects",
        value: 50, // 50+
        icon: faHandHoldingHeart,
    },
];

const Real = () => {
    // State to hold the animated number values
    const [countValues, setCountValues] = useState({
        farmersEmpowered: 0,
        countiesReached: 0,
        marketValue: 0,
        seedsDistributed: 0,
        sustainableProjects: 0,
    });

    // Function to animate the numbers using requestAnimationFrame
    const animateNumbers = () => {
        const maxValues = {
            farmersEmpowered: 10000,
            countiesReached: 46,
            marketValue: 50000000,
            seedsDistributed: 1000000,
            sustainableProjects: 50,
        };

        // Increment value gradually until max value is reached
        const animate = () => {
            setCountValues((prevValues) => {
                const newValues = {};
                let allCompleted = true;
                Object.keys(maxValues).forEach((key) => {
                    if (prevValues[key] < maxValues[key]) {
                        allCompleted = false;
                        newValues[key] = Math.min(prevValues[key] + 50, maxValues[key]);
                    } else {
                        newValues[key] = maxValues[key];
                    }
                });

                return { ...prevValues, ...newValues };
            });

            if (!Object.values(countValues).every((val, index) => val === Object.values(maxValues)[index])) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    };

    // Trigger number animation on component mount
    useEffect(() => {
        animateNumbers();
    }, []);

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
                                <h3 className={styles.number}>{countValues[item.title.replace(/\s+/g, '').toLowerCase()]}</h3>
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
