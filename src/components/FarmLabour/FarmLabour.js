import React, { useRef, useState } from 'react';
import Footer from '../Footer';
import styles from './farmlabour.module.css';
import img1 from './img1.png';
import { FaUserTie, FaUser, FaHandshake, FaCheckCircle, FaLeaf, FaClock, FaShieldAlt } from 'react-icons/fa';

const FarmLabour = () => {
  const labourSectionRef = useRef(null);
  const [showEmployerForm, setShowEmployerForm] = useState(false);
  const [showLaborerForm, setShowLaborerForm] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [formValues, setFormValues] = useState({
    employerName: '',
    farmAddress: '',
    phoneNumber: '',
    emailAddress: '',
    farmType: '',
    registrationInfo: '',
    positionTitle: '',
    jobDescription: '',
    employmentTerms: '',
    tin: '',
    complianceStatements: '',
    benefitsOffered: '',
    workEnvironmentDescription: '',
    fullName: '',
    contactInfo: '',
    address: '',
    dateOfBirth: '',
    positionApplied: '',
    availability: '',
    previousEmployment: '',
    relevantSkills: '',
    educationBackground: '',
    physicalFitness: '',
    equipmentAbility: '',
    references: '',
    backgroundCheck: '',
    disabilityStatus: '',
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
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmissionStatus(null);
      }, 5000);
    }, 1000);
  };

  const isEmployerFormComplete = Object.keys(formValues)
    .filter(key => !key.includes('fullName') && !key.includes('contactInfo') && 
                  !key.includes('address') && !key.includes('dateOfBirth') && 
                  !key.includes('positionApplied') && !key.includes('availability') && 
                  !key.includes('previousEmployment') && !key.includes('relevantSkills') && 
                  !key.includes('educationBackground') && !key.includes('physicalFitness') && 
                  !key.includes('equipmentAbility') && !key.includes('references') && 
                  !key.includes('backgroundCheck') && !key.includes('disabilityStatus'))
    .every(key => formValues[key].trim() !== '');

  const isLaborerFormComplete = Object.keys(formValues)
    .filter(key => !key.includes('employerName') && !key.includes('farmAddress') && 
                  !key.includes('phoneNumber') && !key.includes('emailAddress') && 
                  !key.includes('farmType') && !key.includes('registrationInfo') && 
                  !key.includes('positionTitle') && !key.includes('jobDescription') && 
                  !key.includes('employmentTerms') && !key.includes('tin') && 
                  !key.includes('complianceStatements') && !key.includes('benefitsOffered') && 
                  !key.includes('workEnvironmentDescription'))
    .every(key => formValues[key].trim() !== '');

  return (
    <>
      <div className={styles.container}>
        {/* Success Message */}
        {submissionStatus && (
          <div className={styles.successMessage}>
            <FaCheckCircle className={styles.successIcon} />
            <p>Successful submission! Our team will reach out to you shortly.</p>
          </div>
        )}

        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeading}>Connecting Farms with Skilled Labor</h1>
            <p className={styles.heroDescription}>
              Find the perfect match for your agricultural needs. Whether you're a farm owner seeking reliable workers 
              or a laborer looking for meaningful employment, we bridge the gap between talent and opportunity in the 
              agricultural sector.
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
              Get Started Today
            </button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <h2 className={styles.sectionTitle}>Why Choose Our Labor Services</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <FaShieldAlt className={styles.benefitIcon} />
              <h3>Verified Workers</h3>
              <p>All laborers undergo thorough background checks and skill verification.</p>
            </div>
            <div className={styles.benefitCard}>
              <FaClock className={styles.benefitIcon} />
              <h3>Quick Matching</h3>
              <p>Get connected with suitable workers or employers within 48 hours.</p>
            </div>
            <div className={styles.benefitCard}>
              <FaHandshake className={styles.benefitIcon} />
              <h3>Fair Agreements</h3>
              <p>We ensure transparent terms and fair compensation for all parties.</p>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className={styles.trustSection}>
          <div className={styles.trustContent}>
            <div className={styles.trustText}>
              <h2 className={styles.trustTitle}>Trusted by Farmers Nationwide</h2>
              <p className={styles.trustDescription}>
                Our platform has successfully connected hundreds of farms with skilled agricultural workers. 
                We understand the unique challenges of farm labor and have developed a system that benefits 
                both employers and workers through fair practices and reliable matching.
              </p>
              <ul className={styles.trustList}>
                <li><FaCheckCircle className={styles.listIcon} /> Comprehensive worker screening</li>
                <li><FaCheckCircle className={styles.listIcon} /> Customized matching algorithm</li>
                <li><FaCheckCircle className={styles.listIcon} /> Ongoing support and mediation</li>
                <li><FaCheckCircle className={styles.listIcon} /> Compliance with agricultural labor laws</li>
              </ul>
            </div>
            <div className={styles.trustImages}>
              <div className={styles.mainImage}>
                <img src={img1} alt="Farm worker" className={styles.img1} />
              </div>
              <div className={styles.secondaryImages}>
              </div>
            </div>
          </div>
        </section>

        {/* Labour Section */}
        <section ref={labourSectionRef} className={styles.labourSection}>
          <h2 className={styles.sectionTitle}>Find Your Perfect Match</h2>
          <p className={styles.sectionSubtitle}>Select your role to get started</p>
          
          <div className={styles.labourOptions}>
            <div className={styles.optionCard}>
              <div className={styles.optionHeader}>
                <FaUserTie className={styles.optionIcon} />
                <h3>I'm an Employer</h3>
                <p>Looking for skilled farm workers</p>
              </div>
              <ul className={styles.optionList}>
                <li>Post job opportunities</li>
                <li>Browse worker profiles</li>
                <li>Schedule interviews</li>
                <li>Manage hires</li>
              </ul>
              <button 
                onClick={() => {
                  setShowEmployerForm(!showEmployerForm);
                  setShowLaborerForm(false);
                }} 
                className={styles.optionButton}
              >
                {showEmployerForm ? 'Hide Form' : 'Post a Job'}
              </button>
            </div>

            <div className={styles.optionCard}>
              <div className={styles.optionHeader}>
                <FaUser className={styles.optionIcon} />
                <h3>I'm a Laborer</h3>
                <p>Looking for farm work opportunities</p>
              </div>
              <ul className={styles.optionList}>
                <li>Create your profile</li>
                <li>Browse available jobs</li>
                <li>Showcase your skills</li>
                <li>Get hired quickly</li>
              </ul>
              <button 
                onClick={() => {
                  setShowLaborerForm(!showLaborerForm);
                  setShowEmployerForm(false);
                }} 
                className={styles.optionButton}
              >
                {showLaborerForm ? 'Hide Form' : 'Find Work'}
              </button>
            </div>
          </div>

          {/* Employer Form */}
          {showEmployerForm && (
            <div className={styles.formContainer}>
              <h3 className={styles.formTitle}>Employer Registration</h3>
              <form onSubmit={(e) => handleSubmit(e, 'employer')} className={styles.employerForm}>
                <div className={styles.formSection}>
                  <h4>Employer Identification</h4>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Name of Employer *</label>
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
                      <label className={styles.formLabel}>Farm Address *</label>
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
                  </div>
                  
                  <div className={styles.formRow}>
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
                  </div>
                </div>

                <div className={styles.formSection}>
                  <h4>Business Information</h4>
                  <div className={styles.formRow}>
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
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Registration Details *</label>
                      <input
                        name="registrationInfo"
                        className={styles.formInput}
                        type="text"
                        placeholder="Business registration info"
                        value={formValues.registrationInfo}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.formSection}>
                  <h4>Employment Details</h4>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Position Title *</label>
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
                      <label className={styles.formLabel}>Terms of Employment *</label>
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
                      placeholder="Job responsibilities and expectations"
                      value={formValues.jobDescription}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                </div>

                <div className={styles.formSection}>
                  <h4>Additional Information</h4>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Employee Benefits Offered</label>
                    <input
                      name="benefitsOffered"
                      className={styles.formInput}
                      type="text"
                      placeholder="Benefits offered"
                      value={formValues.benefitsOffered}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Work Environment Description</label>
                    <textarea
                      name="workEnvironmentDescription"
                      className={styles.formTextarea}
                      placeholder="Describe the work environment"
                      value={formValues.workEnvironmentDescription}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className={styles.submitButton} 
                  disabled={!isEmployerFormComplete}
                >
                  Submit Request
                </button>
              </form>
            </div>
          )}

          {/* Laborer Form */}
          {showLaborerForm && (
            <div className={styles.formContainer}>
              <h3 className={styles.formTitle}>Laborer Registration</h3>
              <form onSubmit={(e) => handleSubmit(e, 'laborer')} className={styles.laborerForm}>
                <div className={styles.formSection}>
                  <h4>Personal Information</h4>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Full Name *</label>
                      <input
                        name="fullName"
                        className={styles.formInput}
                        type="text"
                        placeholder="Full legal name"
                        value={formValues.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Contact Information *</label>
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
                  </div>
                  
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Address *</label>
                      <input
                        name="address"
                        className={styles.formInput}
                        type="text"
                        placeholder="Residential address"
                        value={formValues.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Date of Birth</label>
                      <input
                        name="dateOfBirth"
                        className={styles.formInput}
                        type="date"
                        value={formValues.dateOfBirth}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.formSection}>
                  <h4>Position Information</h4>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Position Applied For *</label>
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
                        <option value="other">Other</option>
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
                </div>

                <div className={styles.formSection}>
                  <h4>Skills & Experience</h4>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Relevant Skills *</label>
                    <textarea
                      name="relevantSkills"
                      className={styles.formTextarea}
                      placeholder="List your agricultural skills"
                      value={formValues.relevantSkills}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Previous Employment History</label>
                    <textarea
                      name="previousEmployment"
                      className={styles.formTextarea}
                      placeholder="Your work history in agriculture"
                      value={formValues.previousEmployment}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Equipment Operation Ability</label>
                    <input
                      name="equipmentAbility"
                      className={styles.formInput}
                      type="text"
                      placeholder="Machinery you can operate"
                      value={formValues.equipmentAbility}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className={styles.submitButton} 
                  disabled={!isLaborerFormComplete}
                >
                  Submit Application
                </button>
              </form>
            </div>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default FarmLabour;