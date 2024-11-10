import React, { useState } from 'react';
import styles from './Projects.module.css'; // Make sure to create or update this CSS file
import agriJengaImg from '../../assets/sMediaService/agri.jpg';
import agriMtaaniImg from '../../assets/sMediaService/agrimtaani.jpg'; // Add appropriate image path
import Footer from '../../components/Footer'; // Import Footer component

const Projects = () => {
  // Separate state for each project to toggle subscription form visibility
  const [isAgriJengaSubscribed, setIsAgriJengaSubscribed] = useState(false);
  const [isAgriMtaaniSubscribed, setIsAgriMtaaniSubscribed] = useState(false);

  const handleAgriJengaSubscribe = () => {
    setIsAgriJengaSubscribed(true);
  };

  const handleAgriMtaaniSubscribe = () => {
    setIsAgriMtaaniSubscribed(true);
  };

  return (
    <>
      <div className="container mt-5">

        {/* AgriJenga Project */}
        <div className="row mb-5">
          <div className={`col-md-6 ${styles.projectBox}`}>
            <img src={agriJengaImg} alt="AgriJenga Project" className={styles.projectImage} />
          </div>
          <div className={`col-md-6 ${styles.projectDetails}`}>
            <p className={styles.projectHeading}>AgriJenga: Sustainable Urban Agriculture</p>
            <p className={styles.projectDescription}>
              AgriJenga focuses on promoting sustainable agricultural practices in urban areas. We aim to empower youths by teaching them innovative farming techniques and creating green spaces in cities.
            </p>
            <p className={styles.projectSubText}>
              Join our mission to transform urban spaces into thriving agricultural hubs for the future. Become a part of AgriJenga and help create a sustainable future.
            </p>
            <button className={`${styles.waitlistButton} ${styles.greenButton}`} onClick={handleAgriJengaSubscribe}>
              Join Waitlist
            </button>
            
            {/* Subscription Form for AgriJenga */}
            {isAgriJengaSubscribed && (
              <div className={styles.subscriptionForm}>
                <h4 className={styles.subscriptionHeading}>Subscribe Now (Ksh 1500)</h4>
                <form>
                  <label htmlFor="name" className={styles.formLabel}>Name:</label>
                  <input type="text" id="name" className={styles.formInput} required />

                  <label htmlFor="email" className={styles.formLabel}>Email:</label>
                  <input type="email" id="email" className={styles.formInput} required />

                  {/* Additional Fields */}
                  <label htmlFor="id" className={styles.formLabel}>ID Number:</label>
                  <input type="text" id="id" className={styles.formInput} required />

                  <label htmlFor="location" className={styles.formLabel}>Location:</label>
                  <input type="text" id="location" className={styles.formInput} required />

                  <label htmlFor="phone" className={styles.formLabel}>Phone Number:</label>
                  <input type="tel" id="phone" className={styles.formInput} required />

                  <label htmlFor="dob" className={styles.formLabel}>Date of Birth:</label>
                  <input type="date" id="dob" className={styles.formInput} required />

                  <button type="submit" className={styles.submitButton}>
                    Submit Subscription
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* AgriMtaani Project */}
        <div className="row mb-5">
          <div className={`col-md-6 ${styles.projectBox}`}>
            <img src={agriMtaaniImg} alt="AgriMtaani Project" className={styles.projectImage} />
          </div>
          <div className={`col-md-6 ${styles.projectDetails}`}>
            <p className={styles.projectHeading}>AgriMtaani: Urban Farming along Riverlines</p>
            <p className={styles.projectDescription}>
              AgriMtaani focuses on promoting farming in urban areas, particularly along river lines. The goal is to improve food security and provide communities with fresh, locally grown produce.
            </p>
            <p className={styles.projectSubText}>
              Get involved in urban farming and help support the growth of sustainable food sources in your city. Join AgriMtaani today and make a lasting impact!
            </p>
            <button className={`${styles.waitlistButton} ${styles.greenButton}`} onClick={handleAgriMtaaniSubscribe}>
              Join Waitlist
            </button>
            
            {/* Subscription Form for AgriMtaani */}
            {isAgriMtaaniSubscribed && (
              <div className={styles.subscriptionForm}>
                <h4 className={styles.subscriptionHeading}>Subscribe Now (Ksh 1500)</h4>
                <form>
                  <label htmlFor="name" className={styles.formLabel}>Name:</label>
                  <input type="text" id="name" className={styles.formInput} required />

                  <label htmlFor="email" className={styles.formLabel}>Email:</label>
                  <input type="email" id="email" className={styles.formInput} required />

                  {/* Additional Fields */}
                  <label htmlFor="id" className={styles.formLabel}>ID Number:</label>
                  <input type="text" id="id" className={styles.formInput} required />

                  <label htmlFor="location" className={styles.formLabel}>Location:</label>
                  <input type="text" id="location" className={styles.formInput} required />

                  <label htmlFor="phone" className={styles.formLabel}>Phone Number:</label>
                  <input type="tel" id="phone" className={styles.formInput} required />

                  <label htmlFor="dob" className={styles.formLabel}>Date of Birth:</label>
                  <input type="date" id="dob" className={styles.formInput} required />

                  <button type="submit" className={styles.submitButton}>
                    Submit Subscription
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Projects;
