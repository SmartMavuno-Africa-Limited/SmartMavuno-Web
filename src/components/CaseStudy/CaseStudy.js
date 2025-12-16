import { useState } from 'react';
import styles from './CaseStudy.module.css';

const caseStudies = [
  {
    id: 1,
    designation: 'Financial Solutions',
    title: 'Insured Agricultural Loans',
    img: 'https://res.cloudinary.com/dfexj3grb/image/upload/v1758229511/medium-shot-farmers-with-smartphone_wj5dly.jpg',
    category: 'loans',
    description: 'Collateral-free insured financing with flexible repayment terms helps farmers access capital for equipment, seeds, and expansion while mitigating production risks.',
    stats: {
      adoptionRate: '78%',
      benefit: '35% lower interest rates'
    }
  },
  {
    id: 2,
    designation: 'Market Access',
    title: 'Digital Agricultural Marketplace',
    img: 'https://res.cloudinary.com/dfexj3grb/image/upload/v1758228736/medium-shot-man-holding-vegetables_nolgg5.jpg',
    category: 'marketplace',
    description: 'A secure digital platform connecting farmers directly with buyers, eliminating intermediaries and ensuring fair prices for both producers and consumers.',
    stats: {
      adoptionRate: '85%',
      benefit: '40% higher profits'
    }
  },
  {
    id: 3,
    designation: 'Weather Intelligence',
    title: 'Advanced Weather Analytics Platform',
    img: 'https://res.cloudinary.com/dfexj3grb/image/upload/v1758228299/weather_xkk21w.jpg',
    category: 'weather',
    description: 'Comprehensive weather monitoring with real-time data, forecasts, and historical analysis to help farmers make informed decisions about planting, irrigation, and harvesting.'
  }
];

const CaseStudy = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showWeatherOptions, setShowWeatherOptions] = useState(false);

  const filterData = (category) => {
    setActiveFilter(category);
    setShowWeatherOptions(false);
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

  const handleWeatherOptionClick = (option) => {
    if (option === 'current') {
      window.open('https://harvest-hq-webjs.vercel.app/weatherwebsite/currentLocationW/weather.html', '_blank');
    } else if (option === 'search') {
      window.open('https://harvest-hq-webjs.vercel.app/weatherwebsite/generalweather.html', '_blank');
    }
    setShowWeatherOptions(false);
  };

  const handleCardClick = (item) => {
    if (item.category === 'loans') {
      window.location.href = '/loans';
    } else if (item.category === 'marketplace') {
      window.open('https://marketplace.smartmavuno.com/', '_blank');
    } else if (item.category === 'weather') {
      setShowWeatherOptions(true);
    }
  };

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

        {/* Weather Options Modal */}
        {showWeatherOptions && (
          <div className={styles.weatherOptionsModal}>
            <div className={styles.weatherOptionsContent}>
              <h3>Choose Weather Option</h3>
              <div className={styles.weatherOptionsButtons}>
                <button 
                  className={styles.weatherOptionBtn}
                  onClick={() => handleWeatherOptionClick('current')}
                >
                  <span className={styles.weatherOptionIcon}>📍</span>
                  Current Location Weather
                </button>
                <button 
                  className={styles.weatherOptionBtn}
                  onClick={() => handleWeatherOptionClick('search')}
                >
                  <span className={styles.weatherOptionIcon}>🔍</span>
                  Search by Location
                </button>
              </div>
              <button 
                className={styles.closeOptionsBtn}
                onClick={() => setShowWeatherOptions(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Case study cards */}
        <div className={styles.grid}>
          {filteredStudies.map((item) => (
            <div 
              key={item.id} 
              className={styles.card}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(item)}
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
                  {item.category !== 'weather' && (
                    <div className={`${styles.cardStats} ${hoveredCard === item.id ? styles.visible : ''}`}>
                      <div className={styles.stat}>
                        <span className={styles.statNumber}>{item.stats.adoptionRate}</span>
                        <span className={styles.statLabel}>Adoption Rate</span>
                      </div>
                      <div className={styles.stat}>
                        <span className={styles.statNumber}>{item.stats.benefit}</span>
                        <span className={styles.statLabel}>Farmer Benefit</span>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className={styles.cardContent}>
                  <p className={styles.designation}>{item.designation}</p>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDescription}>{item.description}</p>
                  
                  <div className={styles.cardAction}>
                    {item.category === 'weather' ? (
                      <button className={styles.weatherActionBtn}>
                        View Weather Options
                        <span className={styles.arrow}>→</span>
                      </button>
                    ) : (
                      <span className={styles.exploreText}>
                        Click to explore →
                      </span>
                    )}
                  </div>
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