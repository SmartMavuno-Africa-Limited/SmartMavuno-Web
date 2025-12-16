import React, { useRef, useState } from 'react';
import Footer from '../Footer';
import styles from './farmlabour.module.css';
import { FaUserTie, FaUser, FaCheckCircle, FaArrowRight, FaTools } from 'react-icons/fa';

const FarmLabour = () => {
  const labourSectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState('employer');
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    location: '',
    position: '',
    type: ''
  });

  const handleButtonClick = () => {
    labourSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formValues);
    // Reset form
    setFormValues({ name: '', phone: '', location: '', position: '', type: '' });
  };

  return (
    <>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1>Farm Resources</h1>
            <p>Workers & Equipment</p>
            
            {/* Stats in one line */}
            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <span>500+</span>
                <p>Workers</p>
              </div>
              <div className={styles.stat}>
                <span>200+</span>
                <p>Equipment</p>
              </div>
              <div className={styles.stat}>
                <span>98%</span>
                <p>Satisfaction</p>
              </div>
            </div>
            
            <button onClick={handleButtonClick} className={styles.heroButton}>
              Start Now <FaArrowRight />
            </button>
          </div>
        </section>

        {/* Benefits - Simple tick list */}
        <section className={styles.benefitsSection}>
          <h2>Why Choose Us</h2>
          <div className={styles.tickList}>
            <div className={styles.tickItem}>
              <FaCheckCircle className={styles.tickIcon} />
              <span>Verified users</span>
            </div>
            <div className={styles.tickItem}>
              <FaCheckCircle className={styles.tickIcon} />
              <span>Quick matching</span>
            </div>
            <div className={styles.tickItem}>
              <FaCheckCircle className={styles.tickIcon} />
              <span>Fair terms</span>
            </div>
            <div className={styles.tickItem}>
              <FaCheckCircle className={styles.tickIcon} />
              <span>24/7 support</span>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section ref={labourSectionRef} className={styles.labourSection}>
          <h2>Get Started</h2>
          
          <div className={styles.tabButtons}>
            <button 
              className={`${styles.tabButton} ${activeTab === 'employer' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('employer')}
            >
              <FaUserTie />
              Hire
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'laborer' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('laborer')}
            >
              <FaUser />
              Work
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'equipment' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('equipment')}
            >
              <FaTools />
              Rent
            </button>
          </div>
          
          <div className={styles.formSection}>
            <h3>
              {activeTab === 'employer' ? 'Find Workers' : 
               activeTab === 'laborer' ? 'Find Work' : 
               'Rent Equipment'}
            </h3>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                name="name"
                className={styles.formInput}
                type="text"
                placeholder="Your Name"
                value={formValues.name}
                onChange={handleInputChange}
                required
              />
              
              <input
                name="phone"
                className={styles.formInput}
                type="tel"
                placeholder="Phone Number"
                value={formValues.phone}
                onChange={handleInputChange}
                required
              />
              
              <input
                name="location"
                className={styles.formInput}
                type="text"
                placeholder="Location"
                value={formValues.location}
                onChange={handleInputChange}
                required
              />
              
              <select
                name="position"
                className={styles.formInput}
                value={formValues.position}
                onChange={handleInputChange}
                required
              >
                {activeTab === 'employer' && (
                  <>
                    <option value="">Position Needed</option>
                    <option value="field">Field Worker</option>
                    <option value="harvest">Harvester</option>
                    <option value="livestock">Livestock Care</option>
                  </>
                )}
                {activeTab === 'laborer' && (
                  <>
                    <option value="">Position Wanted</option>
                    <option value="field">Field Worker</option>
                    <option value="harvest">Harvester</option>
                    <option value="livestock">Livestock Care</option>
                  </>
                )}
                {activeTab === 'equipment' && (
                  <>
                    <option value="">Equipment Type</option>
                    <option value="tractor">Tractor</option>
                    <option value="plow">Plow</option>
                    <option value="irrigation">Irrigation</option>
                  </>
                )}
              </select>
              
              <select
                name="type"
                className={styles.formInput}
                value={formValues.type}
                onChange={handleInputChange}
                required
              >
                {activeTab === 'employer' && (
                  <>
                    <option value="">Employment Type</option>
                    <option value="full">Full-Time</option>
                    <option value="part">Part-Time</option>
                    <option value="season">Seasonal</option>
                  </>
                )}
                {activeTab === 'laborer' && (
                  <>
                    <option value="">Availability</option>
                    <option value="full">Full-Time</option>
                    <option value="part">Part-Time</option>
                    <option value="season">Seasonal</option>
                  </>
                )}
                {activeTab === 'equipment' && (
                  <>
                    <option value="">Rental Period</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </>
                )}
              </select>
              
              <button type="submit" className={styles.submitButton}>
                {activeTab === 'employer' ? 'Find Workers' : 
                 activeTab === 'laborer' ? 'Find Jobs' : 
                 'Find Equipment'}
              </button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default FarmLabour;