import React from 'react';
import styles from './Bottom.module.css';
import fakeData from './aboutUsBottom';
import { FaLeaf, FaSeedling, FaHandshake, FaUsers, FaChartLine, FaGlobe } from 'react-icons/fa';

const Bottom = () => {
    // Assign icons based on content (you can customize this)
    const getIcon = (id) => {
        const icons = [FaLeaf, FaSeedling, FaHandshake, FaUsers, FaChartLine, FaGlobe];
        return icons[id % icons.length];
    };

    return (
        <>
            <div className={`container ${styles.contain}`}>
                {fakeData.map((x, idx) => {
                    const IconComponent = getIcon(x.id);
                    return (
                        <div key={x.id} className={`${styles.sectionContainer} ${idx % 2 === 0 ? styles.even : styles.odd}`}>
                            <div className={styles.contentWrapper}>
                                {idx % 2 === 0 ? (
                                    <>
                                        <div data-aos='fade-right' data-aos-offset="200" className={styles.textContent}>
                                            <div className={styles.contentInner}>
                                                <div className={styles.iconContainer}>
                                                    <IconComponent className={styles.icon} />
                                                </div>
                                                <h2 className={styles.heading}>{x.heading}</h2>
                                                <p className={styles.content}>{x.content}</p>
                                                <div className={styles.decorativeElement}></div>
                                            </div>
                                        </div>
                                        <div data-aos='fade-left' className={styles.visualContent}>
                                            <div className={styles.visualWrapper}>
                                                <div className={styles.graphicElement}>
                                                    <div className={styles.circle}></div>
                                                    <div className={styles.line}></div>
                                                    <div className={styles.square}></div>
                                                </div>
                                                <div className={styles.statsContainer}>
                                                    <div className={styles.stat}>
                                                        <span className={styles.statNumber}>95%</span>
                                                        <span className={styles.statLabel}>Success Rate</span>
                                                    </div>
                                                    <div className={styles.stat}>
                                                        <span className={styles.statNumber}>5000+</span>
                                                        <span className={styles.statLabel}>farmers</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div data-aos='fade-right' className={styles.visualContent}>
                                            <div className={styles.visualWrapper}>
                                                <div className={styles.graphicElement}>
                                                    <div className={styles.circle}></div>
                                                    <div className={styles.line}></div>
                                                    <div className={styles.square}></div>
                                                </div>
                                                <div className={styles.statsContainer}>
                                                    <div className={styles.stat}>
                                                        <span className={styles.statNumber}>2</span>
                                                        <span className={styles.statLabel}>Years</span>
                                                    </div>
                                                    <div className={styles.stat}>
                                                        <span className={styles.statNumber}>100%</span>
                                                        <span className={styles.statLabel}>Commitment</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-aos='fade-left' data-aos-offset="200" className={styles.textContent}>
                                            <div className={styles.contentInner}>
                                                <div className={styles.iconContainer}>
                                                    <IconComponent className={styles.icon} />
                                                </div>
                                                <h2 className={styles.heading}>{x.heading}</h2>
                                                <p className={styles.content}>{x.content}</p>
                                                <div className={styles.decorativeElement}></div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Bottom;