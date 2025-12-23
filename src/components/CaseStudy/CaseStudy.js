import { useState } from 'react';
import styles from './CaseStudy.module.css';

const caseStudies = [
  {
    id: 1,
    designation: 'Financing',
    title: 'Insured Loans',
    img: 'https://res.cloudinary.com/dfexj3grb/image/upload/v1758229511/medium-shot-farmers-with-smartphone_wj5dly.jpg',
    category: 'loans',
    description: 'Collateral-free loans for farmers',
    stats: {
      adoptionRate: '78%',
      benefit: '35% lower rates'
    }
  },
  {
    id: 2,
    designation: 'Marketplace',
    title: 'Digital Market',
    img: 'https://res.cloudinary.com/dfexj3grb/image/upload/v1758228736/medium-shot-man-holding-vegetables_nolgg5.jpg',
    category: 'marketplace',
    description: 'Connect farmers with buyers',
    stats: {
      adoptionRate: '85%',
      benefit: '40% higher profits'
    }
  },
  {
    id: 3,
    designation: 'Weather',
    title: 'Weather Analytics',
    img: 'https://res.cloudinary.com/dfexj3grb/image/upload/v1758228299/weather_xkk21w.jpg',
    category: 'weather',
    description: 'Real-time weather data for farms'
  }
];

const CaseStudy = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showWeatherOptions, setShowWeatherOptions] = useState(false);

  const filterData = (category) => {
    setActiveFilter(category);
    setShowWeatherOptions(false);
  }

  const filteredStudies = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'loans', name: 'Loans' },
    { id: 'marketplace', name: 'Market' },
    { id: 'weather', name: 'Weather' }
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
          <h2 className={styles.title}>Our Impact</h2>
          <p className={styles.subtitle}>
            Transforming agriculture across Africa
          </p>
        </div>

        {/* Filter buttons without icons */}
        <div className={styles.filterContainer}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => filterData(category.id)}
              className={`${styles.filterBtn} ${activeFilter === category.id ? styles.active : ''}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Weather Options Modal */}
        {showWeatherOptions && (
          <div className={styles.weatherOptionsModal}>
            <div className={styles.weatherOptionsContent}>
              <h3>Weather Options</h3>
              <div className={styles.weatherOptionsButtons}>
                <button 
                  className={styles.weatherOptionBtn}
                  onClick={() => handleWeatherOptionClick('current')}
                >
                  Current Location
                </button>
                <button 
                  className={styles.weatherOptionBtn}
                  onClick={() => handleWeatherOptionClick('search')}
                >
                  Search Location
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

        {/* Case study cards - 3 in one line */}
        <div className={styles.grid}>
          {filteredStudies.map((item) => (
            <div 
              key={item.id} 
              className={styles.card}
              onClick={() => handleCardClick(item)}
            >
              <div className={styles.cardImage}
                   style={{ backgroundImage: `url(${item.img})` }}>
                <div className={styles.cardBadge}>
                  {item.category}
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <p className={styles.designation}>{item.designation}</p>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
                
                {item.category === 'weather' ? (
                  <button className={styles.actionBtn}>
                    View Options →
                  </button>
                ) : (
                  <div className={styles.actionBtn}>
                    Explore →
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudy;