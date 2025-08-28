import React, { useRef, useState } from 'react';
import Footer from '../Footer';
import styles from './farmlabour.module.css';
import { FaUserTie, FaUser, FaHandshake, FaCheckCircle, FaLeaf, FaClock, FaShieldAlt, FaArrowRight } from 'react-icons/fa';

const FarmLabour = () => {
  const labourSectionRef = useRef(null);
  const [ setShowEmployerForm] = useState(false);
  const [ setShowLaborerForm] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [activeTab, setActiveTab] = useState('employer');
  const [formValues, setFormValues] = useState({
    // Employer fields
    employerName: '',
    farmAddress: '',
    phoneNumber: '',
    emailAddress: '',
    farmType: '',
    registrationInfo: '',
    positionTitle: '',
    jobDescription: '',
    employmentTerms: '',
    benefitsOffered: '',
    
    // Laborer fields
    fullName: '',
    contactInfo: '',
    address: '',
    dateOfBirth: '',
    positionApplied: '',
    availability: '',
    relevantSkills: '',
    previousEmployment: '',
    equipmentAbility: '',
  });

  const handleButtonClick = () => {
    if (labourSectionRef.current) {
      labourSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e, formType) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmissionStatus(formType);
      setShowEmployerForm(false);
      setShowLaborerForm(false);
      setFormValues({
        employerName: '',
        farmAddress: '',
        phoneNumber: '',
        emailAddress: '',
        farmType: '',
        registrationInfo: '',
        positionTitle: '',
        jobDescription: '',
        employmentTerms: '',
        benefitsOffered: '',
        fullName: '',
        contactInfo: '',
        address: '',
        dateOfBirth: '',
        positionApplied: '',
        availability: '',
        relevantSkills: '',
        previousEmployment: '',
        equipmentAbility: '',
      });
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmissionStatus(null);
      }, 5000);
    }, 1000);
  };

  return (
    <>
      <div className={styles.container}>
        {/* Success Message */}
        {submissionStatus && (
          <div className={styles.successMessage}>
            <FaCheckCircle className={styles.successIcon} />
            <p>Thank you for your submission! Our team will reach out to you within 24 hours.</p>
          </div>
        )}

        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeading}>
              Connecting <span className={styles.highlight}>Farms</span> with 
              <span className={styles.highlight}> Skilled Labor</span>
            </h1>
            <p className={styles.heroDescription}>
              Find the perfect match for your agricultural needs. Whether you're a farm owner seeking reliable workers 
              or a laborer looking for meaningful employment, we bridge the gap between talent and opportunity.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <FaUser className={styles.statIcon} />
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Workers Placed</span>
              </div>
              <div className={styles.statItem}>
                <FaLeaf className={styles.statIcon} />
                <span className={styles.statNumber}>120+</span>
                <span className={styles.statLabel}>Farms Served</span>
              </div>
              <div className={styles.statItem}>
                <FaHandshake className={styles.statIcon} />
                <span className={styles.statNumber}>98%</span>
                <span className={styles.statLabel}>Satisfaction Rate</span>
              </div>
            </div>
            <button onClick={handleButtonClick} className={styles.heroButton}>
              Get Started Today <FaArrowRight className={styles.buttonIcon} />
            </button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <h2 className={styles.sectionTitle}>Why Choose Our Platform</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <FaShieldAlt className={styles.benefitIcon} />
              </div>
              <h3>Verified Workers</h3>
              <p>All laborers undergo thorough background checks and skill verification for your peace of mind.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <FaClock className={styles.benefitIcon} />
              </div>
              <h3>Quick Matching</h3>
              <p>Get connected with suitable workers or employers within 48 hours through our smart algorithm.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <FaHandshake className={styles.benefitIcon} />
              </div>
              <h3>Fair Agreements</h3>
              <p>We ensure transparent terms and fair compensation for all parties involved in the process.</p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className={styles.processSection}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Register Your Profile</h3>
              <p>Create a detailed profile as an employer or worker with your specific requirements and skills.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Get Matched</h3>
              <p>Our algorithm connects you with the most suitable matches based on your needs and preferences.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Start Working</h3>
              <p>Begin your agricultural partnership with clear terms and ongoing support from our team.</p>
            </div>
          </div>
        </section>

        {/* Labour Section */}
        <section ref={labourSectionRef} className={styles.labourSection}>
          <h2 className={styles.sectionTitle}>Find Your Perfect Match</h2>
          <p className={styles.sectionSubtitle}>Select your role to get started</p>
          
          <div className={styles.tabContainer}>
            <div className={styles.tabButtons}>
              <button 
                className={`${styles.tabButton} ${activeTab === 'employer' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('employer')}
              >
                <FaUserTie className={styles.tabIcon} />
                I'm an Employer
              </button>
              <button 
                className={`${styles.tabButton} ${activeTab === 'laborer' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('laborer')}
              >
                <FaUser className={styles.tabIcon} />
                I'm a Worker
              </button>
            </div>
            
            <div className={styles.tabContent}>
              {activeTab === 'employer' ? (
                <div className={styles.formSection}>
                  <h3 className={styles.formTitle}>Find Skilled Farm Workers</h3>
                  <form onSubmit={(e) => handleSubmit(e, 'employer')} className={styles.form}>
                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Your Name *</label>
                        <input
                          name="employerName"
                          className={styles.formInput}
                          type="text"
                          placeholder="Full legal name"
                          value={formValues.employerName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Farm Location *</label>
                        <input
                          name="farmAddress"
                          className={styles.formInput}
                          type="text"
                          placeholder="Farm address"
                          value={formValues.farmAddress}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Email Address *</label>
                        <input
                          name="emailAddress"
                          className={styles.formInput}
                          type="email"
                          placeholder="Email address"
                          value={formValues.emailAddress}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Phone Number *</label>
                        <input
                          name="phoneNumber"
                          className={styles.formInput}
                          type="text"
                          placeholder="Phone number"
                          value={formValues.phoneNumber}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Type of Farm *</label>
                        <select
                          name="farmType"
                          className={styles.formInput}
                          value={formValues.farmType}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select farm type</option>
                          <option value="crop">Crop Farming</option>
                          <option value="livestock">Livestock Farming</option>
                          <option value="dairy">Dairy Farming</option>
                          <option value="poultry">Poultry Farming</option>
                          <option value="mixed">Mixed Farming</option>
                        </select>
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Position Needed *</label>
                        <input
                          name="positionTitle"
                          className={styles.formInput}
                          type="text"
                          placeholder="Position title"
                          value={formValues.positionTitle}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Employment Terms *</label>
                        <select
                          name="employmentTerms"
                          className={styles.formInput}
                          value={formValues.employmentTerms}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select employment type</option>
                          <option value="full-time">Full-Time</option>
                          <option value="part-time">Part-Time</option>
                          <option value="seasonal">Seasonal</option>
                          <option value="contract">Contract</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Job Description *</label>
                      <textarea
                        name="jobDescription"
                        className={styles.formTextarea}
                        placeholder="Describe the responsibilities and expectations for this position"
                        value={formValues.jobDescription}
                        onChange={handleInputChange}
                        required
                        rows="4"
                      ></textarea>
                    </div>
                    
                    <button type="submit" className={styles.submitButton}>
                      Find Workers Now
                    </button>
                  </form>
                </div>
              ) : (
                <div className={styles.formSection}>
                  <h3 className={styles.formTitle}>Find Farm Work Opportunities</h3>
                  <form onSubmit={(e) => handleSubmit(e, 'laborer')} className={styles.form}>
                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Full Name *</label>
                        <input
                          name="fullName"
                          className={styles.formInput}
                          type="text"
                          placeholder="Your full name"
                          value={formValues.fullName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Phone Number *</label>
                        <input
                          name="contactInfo"
                          className={styles.formInput}
                          type="text"
                          placeholder="Phone number"
                          value={formValues.contactInfo}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Location *</label>
                        <input
                          name="address"
                          className={styles.formInput}
                          type="text"
                          placeholder="Your location"
                          value={formValues.address}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Position Seeking *</label>
                        <select
                          name="positionApplied"
                          className={styles.formInput}
                          value={formValues.positionApplied}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select position</option>
                          <option value="field-worker">Field Worker</option>
                          <option value="harvester">Harvester</option>
                          <option value="livestock-care">Livestock Care</option>
                          <option value="equipment-operator">Equipment Operator</option>
                          <option value="supervisor">Supervisor</option>
                        </select>
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Availability *</label>
                        <select
                          name="availability"
                          className={styles.formInput}
                          value={formValues.availability}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select availability</option>
                          <option value="full-time">Full-Time</option>
                          <option value="part-time">Part-Time</option>
                          <option value="seasonal">Seasonal</option>
                          <option value="contract">Contract Basis</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Relevant Skills & Experience *</label>
                      <textarea
                        name="relevantSkills"
                        className={styles.formTextarea}
                        placeholder="List your agricultural skills, experience, and any equipment you can operate"
                        value={formValues.relevantSkills}
                        onChange={handleInputChange}
                        required
                        rows="4"
                      ></textarea>
                    </div>
                    
                    <button type="submit" className={styles.submitButton}>
                      Find Work Opportunities
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default FarmLabour;