import React, { useRef, useState } from 'react';
import Footer from '../Footer';
import styles from './farmlabour.module.css';
import { FaUserTie, FaUser, FaHandshake, FaCheckCircle, FaClock, FaShieldAlt, FaArrowRight, FaTools } from 'react-icons/fa';

const FarmLabour = () => {
  const labourSectionRef = useRef(null);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [activeTab, setActiveTab] = useState('employer');
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState({
    // Employer fields
    employerName: '',
    farmAddress: '',
    phoneNumber: '',
    emailAddress: '',
    farmType: '',
    positionTitle: '',
    jobDescription: '',
    employmentTerms: '',
    
    // Laborer fields
    fullName: '',
    contactInfo: '',
    address: '',
    positionApplied: '',
    availability: '',
    relevantSkills: '',
    
    // Equipment rental fields
    equipmentType: '',
    rentalPeriod: '',
    equipmentSpecifications: ''
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
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = (formType) => {
    const errors = {};
    
    if (formType === 'employer') {
      if (!formValues.employerName.trim()) errors.employerName = 'Name is required';
      if (!formValues.farmAddress.trim()) errors.farmAddress = 'Farm address is required';
      if (!formValues.phoneNumber.trim()) errors.phoneNumber = 'Phone number is required';
      if (!formValues.emailAddress.trim()) errors.emailAddress = 'Email is required';
      if (!formValues.farmType) errors.farmType = 'Farm type is required';
      if (!formValues.positionTitle.trim()) errors.positionTitle = 'Position title is required';
      if (!formValues.employmentTerms) errors.employmentTerms = 'Employment terms are required';
      if (!formValues.jobDescription.trim()) errors.jobDescription = 'Job description is required';
    } 
    else if (formType === 'laborer') {
      if (!formValues.fullName.trim()) errors.fullName = 'Full name is required';
      if (!formValues.contactInfo.trim()) errors.contactInfo = 'Contact information is required';
      if (!formValues.address.trim()) errors.address = 'Address is required';
      if (!formValues.positionApplied) errors.positionApplied = 'Position is required';
      if (!formValues.availability) errors.availability = 'Availability is required';
      if (!formValues.relevantSkills.trim()) errors.relevantSkills = 'Skills are required';
    }
    else if (formType === 'equipment') {
      if (!formValues.equipmentType.trim()) errors.equipmentType = 'Equipment type is required';
      if (!formValues.rentalPeriod.trim()) errors.rentalPeriod = 'Rental period is required';
      if (!formValues.equipmentSpecifications.trim()) errors.equipmentSpecifications = 'Specifications are required';
      if (!formValues.contactInfo.trim()) errors.contactInfo = 'Contact information is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e, formType) => {
    e.preventDefault();
    
    if (validateForm(formType)) {
      // Simulate form submission
      setTimeout(() => {
        setSubmissionStatus(formType);
        
        // Reset form values
        setFormValues({
          employerName: '',
          farmAddress: '',
          phoneNumber: '',
          emailAddress: '',
          farmType: '',
          positionTitle: '',
          jobDescription: '',
          employmentTerms: '',
          fullName: '',
          contactInfo: '',
          address: '',
          positionApplied: '',
          availability: '',
          relevantSkills: '',
          equipmentType: '',
          rentalPeriod: '',
          equipmentSpecifications: ''
        });
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmissionStatus(null);
        }, 5000);
      }, 1000);
    }
  };

  const getSuccessMessage = (formType) => {
    switch(formType) {
      case 'employer':
        return 'Your hiring request has been submitted successfully! We will match you with suitable workers within 24 hours.';
      case 'laborer':
        return 'Your job application has been submitted successfully! Employers will contact you within 48 hours if you match their requirements.';
      case 'equipment':
        return 'Your equipment rental request has been submitted! Equipment owners will contact you within 24 hours.';
      default:
        return 'Thank you for your submission! Our team will reach out to you soon.';
    }
  };

  return (
    <>
      <div className={styles.container}>
        {/* Success Message */}
        {submissionStatus && (
          <div className={styles.successMessage}>
            <FaCheckCircle className={styles.successIcon} />
            <h3>Submission Successful!</h3>
            <p>{getSuccessMessage(submissionStatus)}</p>
            <p className={styles.contactInfo}>For immediate assistance, contact us at +254 707687930</p>
          </div>
        )}

        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeading}>
              Connecting <span className={styles.highlight}>Farms</span> with 
              <span className={styles.highlight}> Resources</span>
            </h1>
            <p className={styles.heroDescription}>
              Find skilled workers, rent equipment, or discover employment opportunities. 
              We bridge the gap between agricultural needs and available resources.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <FaUser className={styles.statIcon} />
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Workers Placed</span>
              </div>
              <div className={styles.statItem}>
                <FaTools className={styles.statIcon} />
                <span className={styles.statNumber}>200+</span>
                <span className={styles.statLabel}>Equipment Rentals</span>
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
              <h3>Verified Users</h3>
              <p>All workers and equipment providers undergo thorough verification for your peace of mind.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <FaClock className={styles.benefitIcon} />
              </div>
              <h3>Quick Matching</h3>
              <p>Get connected with suitable resources within 48 hours through our smart matching system.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <FaHandshake className={styles.benefitIcon} />
              </div>
              <h3>Fair Agreements</h3>
              <p>We ensure transparent terms and fair arrangements for all parties involved.</p>
            </div>
          </div>
        </section>

        {/* Labour Section */}
        <section ref={labourSectionRef} className={styles.labourSection}>
          <h2 className={styles.sectionTitle}>Find Your Perfect Match</h2>
          <p className={styles.sectionSubtitle}>Select what you're looking for</p>
          
          <div className={styles.tabContainer}>
            <div className={styles.tabButtons}>
              <button 
                className={`${styles.tabButton} ${activeTab === 'employer' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('employer')}
              >
                <FaUserTie className={styles.tabIcon} />
                Hire Workers
              </button>
              <button 
                className={`${styles.tabButton} ${activeTab === 'laborer' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('laborer')}
              >
                <FaUser className={styles.tabIcon} />
                Find Work
              </button>
              <button 
                className={`${styles.tabButton} ${activeTab === 'equipment' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('equipment')}
              >
                <FaTools className={styles.tabIcon} />
                Rent Equipment
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
                          className={`${styles.formInput} ${formErrors.employerName ? styles.errorInput : ''}`}
                          type="text"
                          placeholder="Full legal name"
                          value={formValues.employerName}
                          onChange={handleInputChange}
                        />
                        {formErrors.employerName && <span className={styles.errorText}>{formErrors.employerName}</span>}
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Farm Location *</label>
                        <input
                          name="farmAddress"
                          className={`${styles.formInput} ${formErrors.farmAddress ? styles.errorInput : ''}`}
                          type="text"
                          placeholder="Farm address"
                          value={formValues.farmAddress}
                          onChange={handleInputChange}
                        />
                        {formErrors.farmAddress && <span className={styles.errorText}>{formErrors.farmAddress}</span>}
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Email Address *</label>
                        <input
                          name="emailAddress"
                          className={`${styles.formInput} ${formErrors.emailAddress ? styles.errorInput : ''}`}
                          type="email"
                          placeholder="Email address"
                          value={formValues.emailAddress}
                          onChange={handleInputChange}
                        />
                        {formErrors.emailAddress && <span className={styles.errorText}>{formErrors.emailAddress}</span>}
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Phone Number *</label>
                        <input
                          name="phoneNumber"
                          className={`${styles.formInput} ${formErrors.phoneNumber ? styles.errorInput : ''}`}
                          type="text"
                          placeholder="Phone number"
                          value={formValues.phoneNumber}
                          onChange={handleInputChange}
                        />
                        {formErrors.phoneNumber && <span className={styles.errorText}>{formErrors.phoneNumber}</span>}
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Type of Farm *</label>
                        <select
                          name="farmType"
                          className={`${styles.formInput} ${formErrors.farmType ? styles.errorInput : ''}`}
                          value={formValues.farmType}
                          onChange={handleInputChange}
                        >
                          <option value="">Select farm type</option>
                          <option value="crop">Crop Farming</option>
                          <option value="livestock">Livestock Farming</option>
                          <option value="dairy">Dairy Farming</option>
                          <option value="poultry">Poultry Farming</option>
                          <option value="mixed">Mixed Farming</option>
                        </select>
                        {formErrors.farmType && <span className={styles.errorText}>{formErrors.farmType}</span>}
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Position Needed *</label>
                        <input
                          name="positionTitle"
                          className={`${styles.formInput} ${formErrors.positionTitle ? styles.errorInput : ''}`}
                          type="text"
                          placeholder="Position title"
                          value={formValues.positionTitle}
                          onChange={handleInputChange}
                        />
                        {formErrors.positionTitle && <span className={styles.errorText}>{formErrors.positionTitle}</span>}
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Employment Terms *</label>
                        <select
                          name="employmentTerms"
                          className={`${styles.formInput} ${formErrors.employmentTerms ? styles.errorInput : ''}`}
                          value={formValues.employmentTerms}
                          onChange={handleInputChange}
                        >
                          <option value="">Select employment type</option>
                          <option value="full-time">Full-Time</option>
                          <option value="part-time">Part-Time</option>
                          <option value="seasonal">Seasonal</option>
                          <option value="contract">Contract</option>
                        </select>
                        {formErrors.employmentTerms && <span className={styles.errorText}>{formErrors.employmentTerms}</span>}
                      </div>
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Job Description *</label>
                      <textarea
                        name="jobDescription"
                        className={`${styles.formTextarea} ${formErrors.jobDescription ? styles.errorInput : ''}`}
                        placeholder="Describe the responsibilities and expectations for this position"
                        value={formValues.jobDescription}
                        onChange={handleInputChange}
                        rows="4"
                      ></textarea>
                      {formErrors.jobDescription && <span className={styles.errorText}>{formErrors.jobDescription}</span>}
                    </div>
                    
                    <button type="submit" className={styles.submitButton}>
                      Find Workers Now
                    </button>
                  </form>
                </div>
              ) : activeTab === 'laborer' ? (
                <div className={styles.formSection}>
                  <h3 className={styles.formTitle}>Find Farm Work Opportunities</h3>
                  <form onSubmit={(e) => handleSubmit(e, 'laborer')} className={styles.form}>
                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Full Name *</label>
                        <input
                          name="fullName"
                          className={`${styles.formInput} ${formErrors.fullName ? styles.errorInput : ''}`}
                          type="text"
                          placeholder="Your full name"
                          value={formValues.fullName}
                          onChange={handleInputChange}
                        />
                        {formErrors.fullName && <span className={styles.errorText}>{formErrors.fullName}</span>}
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Phone Number *</label>
                        <input
                          name="contactInfo"
                          className={`${styles.formInput} ${formErrors.contactInfo ? styles.errorInput : ''}`}
                          type="text"
                          placeholder="Phone number"
                          value={formValues.contactInfo}
                          onChange={handleInputChange}
                        />
                        {formErrors.contactInfo && <span className={styles.errorText}>{formErrors.contactInfo}</span>}
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Location *</label>
                        <input
                          name="address"
                          className={`${styles.formInput} ${formErrors.address ? styles.errorInput : ''}`}
                          type="text"
                          placeholder="Your location"
                          value={formValues.address}
                          onChange={handleInputChange}
                        />
                        {formErrors.address && <span className={styles.errorText}>{formErrors.address}</span>}
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Position Seeking *</label>
                        <select
                          name="positionApplied"
                          className={`${styles.formInput} ${formErrors.positionApplied ? styles.errorInput : ''}`}
                          value={formValues.positionApplied}
                          onChange={handleInputChange}
                        >
                          <option value="">Select position</option>
                          <option value="field-worker">Field Worker</option>
                          <option value="harvester">Harvester</option>
                          <option value="livestock-care">Livestock Care</option>
                          <option value="equipment-operator">Equipment Operator</option>
                          <option value="supervisor">Supervisor</option>
                        </select>
                        {formErrors.positionApplied && <span className={styles.errorText}>{formErrors.positionApplied}</span>}
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Availability *</label>
                        <select
                          name="availability"
                          className={`${styles.formInput} ${formErrors.availability ? styles.errorInput : ''}`}
                          value={formValues.availability}
                          onChange={handleInputChange}
                        >
                          <option value="">Select availability</option>
                          <option value="full-time">Full-Time</option>
                          <option value="part-time">Part-Time</option>
                          <option value="seasonal">Seasonal</option>
                          <option value="contract">Contract Basis</option>
                        </select>
                        {formErrors.availability && <span className={styles.errorText}>{formErrors.availability}</span>}
                      </div>
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Relevant Skills & Experience *</label>
                      <textarea
                        name="relevantSkills"
                        className={`${styles.formTextarea} ${formErrors.relevantSkills ? styles.errorInput : ''}`}
                        placeholder="List your agricultural skills, experience, and any equipment you can operate"
                        value={formValues.relevantSkills}
                        onChange={handleInputChange}
                        rows="4"
                      ></textarea>
                      {formErrors.relevantSkills && <span className={styles.errorText}>{formErrors.relevantSkills}</span>}
                    </div>
                    
                    <button type="submit" className={styles.submitButton}>
                      Find Work Opportunities
                    </button>
                  </form>
                </div>
              ) : (
                <div className={styles.formSection}>
                  <h3 className={styles.formTitle}>Rent Farm Equipment</h3>
                  <form onSubmit={(e) => handleSubmit(e, 'equipment')} className={styles.form}>
                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Your Name *</label>
                        <input
                          name="employerName"
                          className={`${styles.formInput} ${formErrors.employerName ? styles.errorInput : ''}`}
                          type="text"
                          placeholder="Full name"
                          value={formValues.employerName}
                          onChange={handleInputChange}
                        />
                        {formErrors.employerName && <span className={styles.errorText}>{formErrors.employerName}</span>}
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Phone Number *</label>
                        <input
                          name="contactInfo"
                          className={`${styles.formInput} ${formErrors.contactInfo ? styles.errorInput : ''}`}
                          type="text"
                          placeholder="Phone number"
                          value={formValues.contactInfo}
                          onChange={handleInputChange}
                        />
                        {formErrors.contactInfo && <span className={styles.errorText}>{formErrors.contactInfo}</span>}
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Equipment Type *</label>
                        <select
                          name="equipmentType"
                          className={`${styles.formInput} ${formErrors.equipmentType ? styles.errorInput : ''}`}
                          value={formValues.equipmentType}
                          onChange={handleInputChange}
                        >
                          <option value="">Select equipment type</option>
                          <option value="tractor">Tractor</option>
                          <option value="plow">Plow</option>
                          <option value="harvester">Harvester</option>
                          <option value="irrigation">Irrigation System</option>
                          <option value="sprayer">Sprayer</option>
                          <option value="other">Other Equipment</option>
                        </select>
                        {formErrors.equipmentType && <span className={styles.errorText}>{formErrors.equipmentType}</span>}
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Rental Period *</label>
                        <select
                          name="rentalPeriod"
                          className={`${styles.formInput} ${formErrors.rentalPeriod ? styles.errorInput : ''}`}
                          value={formValues.rentalPeriod}
                          onChange={handleInputChange}
                        >
                          <option value="">Select rental period</option>
                          <option value="daily">Daily</option>
                          <option value="weekly">Weekly</option>
                          <option value="monthly">Monthly</option>
                          <option value="seasonal">Seasonal</option>
                        </select>
                        {formErrors.rentalPeriod && <span className={styles.errorText}>{formErrors.rentalPeriod}</span>}
                      </div>
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Equipment Specifications *</label>
                      <textarea
                        name="equipmentSpecifications"
                        className={`${styles.formTextarea} ${formErrors.equipmentSpecifications ? styles.errorInput : ''}`}
                        placeholder="Describe the equipment you need, including any specific requirements"
                        value={formValues.equipmentSpecifications}
                        onChange={handleInputChange}
                        rows="4"
                      ></textarea>
                      {formErrors.equipmentSpecifications && <span className={styles.errorText}>{formErrors.equipmentSpecifications}</span>}
                    </div>
                    
                    <button type="submit" className={styles.submitButton}>
                      Find Equipment
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