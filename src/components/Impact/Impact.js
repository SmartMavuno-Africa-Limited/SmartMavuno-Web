import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from './Impact.module.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, 
  faGlobe, 
} from '@fortawesome/free-solid-svg-icons';

const impactData = [
    {
        title: "Farmers Empowered",
        value: 5000,
        icon: faUsers,
        formattedValue: "5000",
        description: "Smallholder farmers currently using smartmavuno platform",
        color: "#4CAF50"
    },
    {
        title: "Counties Reached",
        value: 5,
        icon: faGlobe,
        formattedValue: "5",
        description: "Across Kenya ",
        color: "#2196F3"
    },
    {
        title: "Farmers Trained",
        value: 1500,
        icon: faGlobe,
        formattedValue: "1500",
        description: "Farmers Trained on climate-smart farming practices",
        color: "#FF9800"
    },
];

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const observer = useRef(null);

  const startCounter = useCallback(() => {
    let startTime = null;
    const animationDuration = duration * 1000;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / animationDuration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounter();
          observer.current.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.current.observe(countRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [startCounter]);

  return <span ref={countRef}>{count.toLocaleString()}</span>;
};

const Impact = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className={styles.impactSection}>
            <div className={styles.backgroundAnimation}></div>
            
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.titleWrapper}>
                        <p className={styles.superTitle}>Transforming Agriculture</p>
                        <h2 className={styles.heading}>
                            <span className={styles.headingLine}>Our</span>
                            <span className={styles.headingAccent}> Impact </span>
                            <span className={styles.headingLine}>in Numbers</span>
                        </h2>
                    </div>
                    <p className={styles.subtitle}>
                        Through innovative solutions and community partnerships, we're transforming agriculture 
                        across Africa one farmer at a time. These numbers tell our story of growth and empowerment.
                    </p>
                </div>

                <div className={styles.impactGrid}>
                    {impactData.map((item, index) => (
                        <div 
                            key={index} 
                            className={`${styles.impactCard} ${activeIndex === index ? styles.active : ''}`}
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                            style={{ '--accent-color': item.color }}
                        >
                            <div className={styles.cardInner}>
                                <div className={styles.iconContainer}>
                                    <div className={styles.iconBackground}></div>
                                    <FontAwesomeIcon icon={item.icon} className={styles.impactIcon} />
                                </div>
                                
                                <div className={styles.numberContainer}>
                                    <h3 className={styles.number}>
                                        {item.title === "Market Value" ? "$" : ""}
                                        {item.title !== "Farmers Empowered" && item.title !== "Farmers Trained" ? 
                                            item.formattedValue : 
                                            <Counter end={item.value} duration={2} />
                                        }
                                    </h3>
                                </div>
                                
                                <div className={styles.textContainer}>
                                    <p className={styles.title}>{item.title}</p>
                                    <p className={styles.description}>{item.description}</p>
                                </div>
                                
                                <div className={styles.cardHoverEffect}></div>
                            </div>
                            
                            <div className={styles.cardDecoration}>
                                <div className={styles.decorationCircle}></div>
                                <div className={styles.decorationCircle}></div>
                                <div className={styles.decorationCircle}></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h3 className={styles.ctaTitle}>Be Part of Our Growing Impact</h3>
                        <p className={styles.ctaText}>Join thousands of farmers and partners who are transforming African agriculture</p>
                        <div className={styles.ctaButtons}>
                            <Link to="/contactUs" className={styles.primaryButton}>
                                Partner With Us
                            </Link>
                            <Link to="/contactUs" className={styles.secondaryButton}>
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;