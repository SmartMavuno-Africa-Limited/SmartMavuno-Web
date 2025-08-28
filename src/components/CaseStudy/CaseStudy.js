import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CaseStudy.module.css';

const caseStudies = [
  {
    id: 1,
    designation: 'Financial Solutions',
    title: 'Insured Agricultural Loans',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhcm0lMjBsb2FufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80',
    category: 'loans',
    description: 'Collateral-free insured financing with flexible repayment terms helps farmers access capital for equipment, seeds, and expansion while mitigating production risks.'
  },
  {
    id: 2,
    designation: 'Market Access',
    title: 'Digital Agricultural Marketplace',
    img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFybSUyMG1hcmtldHBsYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80',
    category: 'marketplace',
    description: 'A secure digital platform connecting farmers directly with buyers, eliminating intermediaries and ensuring fair prices for both producers and consumers.'
  },
   {
    id: 3,
    designation: 'Weather Intelligence',
    title: 'Real-time Weather Monitoring for Farmers',
    img:'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYXRoZXIlMjBmYXJtfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80',
    category: 'weather',
    description: 'Farmers receive accurate, localized weather forecasts to optimize planting, irrigation, and harvesting schedules while protecting crops from adverse conditions.'
  }
];

const CaseStudy = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  const filterData = (category) => {
    setActiveFilter(category);
  }

  const filteredStudies = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  const categories = [
    { id: 'all', name: 'All Initiatives', icon: '🌱' },
    { id: 'loans', name: 'Insured Financing', icon: '💰' },
    { id: 'marketplace', name: 'Digital Marketplace', icon: '🛒' },
    { id: 'weather', name: 'Weather Insights', icon: '🌦️' }
  ];

  return (
    <section className={styles.caseStudySection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.superTitle}>Our Impact</p>
          <h2 className={styles.title}>Transforming <span className={styles.highlight}>African Agriculture</span></h2>
          <p className={styles.subtitle}>
            Discover how our innovative solutions are empowering farmers, increasing yields, 
            and creating sustainable agricultural ecosystems across the continent.
          </p>
        </div>

        {/* Filter buttons with icons */}
        <div className={styles.filterContainer}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => filterData(category.id)}
              className={`${styles.filterBtn} ${activeFilter === category.id ? styles.active : ''}`}
            >
              <span className={styles.filterIcon}>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Case study cards */}
        <div className={styles.grid}>
          {filteredStudies.map((item) => (
            <div 
              key={item.id} 
              className={styles.card}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={styles.cardInner}>
                <div 
                  className={styles.cardImage}
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <div className={styles.imageOverlay}></div>
                  <div className={styles.cardBadge}>
                    {item.category.toUpperCase()}
                  </div>
                  
                  {/* Quick stats that appear on hover */}
                  <div className={`${styles.cardStats} ${hoveredCard === item.id ? styles.visible : ''}`}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>89%</span>
                      <span className={styles.statLabel}>Adoption Rate</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>42%</span>
                      <span className={styles.statLabel}>Yield Increase</span>
                    </div>
                  </div>
                </div>
                
                <div className={styles.cardContent}>
                  <p className={styles.designation}>{item.designation}</p>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDescription}>{item.description}</p>
                  
                  <Link 
                    to={`/projectDetails?id=${item.id}`} 
                    className={styles.cardLink}
                  >
                    View Case Study
                    <span className={styles.arrow}>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        {filteredStudies.length === 0 && (
          <div className={styles.noResults}>
            <h3>No initiatives found in this category</h3>
            <p>Check back soon for new programs and services.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default CaseStudy;