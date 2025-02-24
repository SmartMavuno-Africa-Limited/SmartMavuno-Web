import React, { useRef, useState } from 'react';
import Footer from '../Footer';
import styles from './farmlabour.module.css';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import { FaUserTie, FaUser } from 'react-icons/fa'; // Import icon for employer

const FarmLabour = () => {
  const labourSectionRef = useRef(null);
  const [showEmployerForm, setShowEmployerForm] = useState(false);
  const [showLaborerForm, setShowLaborerForm] = useState(false);
  const [formValues, setFormValues] = useState({
    // Initialize form fields for laborer as well
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

  const isFormComplete = Object.values(formValues).every((value) => value.trim() !== '');

  return (
    <>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <h1 className={styles.heroHeading}>Enhancing Farm Operations with Skilled Labour</h1>
          <p className={styles.heroDescription}>
            Unlock the potential of your farm with access to skilled labor. By connecting farmers with experienced
            agricultural workers, we ensure that every farm has the support it needs for efficient and productive
            operations, fostering sustainable growth and development.
          </p>
          <button onClick={handleButtonClick} className={styles.heroButton}>
            Explore Labour Options
          </button>
        </section>

        {/* Trust Section */}
        <section className={styles.trustSection}>
          <div className={styles.leftContent}>
            <img src={img1} alt="Example 1" className={styles.img1} />
            <div className={styles.stackedImages}>
              <img src={img2} alt="Example 2" className={styles.img2} />
              <img src={img3} alt="Example 3" className={styles.img3} />
            </div>
          </div>
          <div className={styles.rightContent}>
            <h2 className={styles.trustTitle}>Why Trust Us?</h2>
            <p className={styles.trustDescription}>
              Our team connects you with skilled and experienced agricultural workers, ensuring you receive reliable 
              support tailored to your farm’s needs. By fostering meaningful partnerships, we guarantee efficient, 
              sustainable, and high-quality operations that help drive agricultural success.
            </p>
          </div>
        </section>

        {/* Labour Section */}
        <section ref={labourSectionRef} className={styles.labourSection}>
          <div className={styles.labourLeft}>
            <h2>
              <FaUserTie className={styles.employerIcon} /> {/* Employer Icon */}
              Employer
            </h2>
            <h3>In need of a Laborer</h3>
            <p>
              An employer is an individual or organization that hires employees to perform specific tasks or services 
              in exchange for compensation. Employers are responsible for defining job roles, setting employment terms, 
              and ensuring compliance with labor laws. They play a crucial role in managing workforce dynamics, providing 
              necessary resources for employees, and fostering a productive work environment. Employers can vary widely in 
              size and industry, from small businesses to large corporations, each contributing to the economy by creating 
              job opportunities and supporting livelihoods.
            </p>
            <button onClick={() => setShowEmployerForm(!showEmployerForm)} className={styles.formButton}>
              {showEmployerForm ? 'Hide Form' : 'Fill Employer Details'}
            </button>

            {showEmployerForm && (
              <form className={styles.employerForm}>
                <h4>Employer Identification</h4>
                <label className={styles.formLabel}>Name of Employer</label>
                <input
                  name="employerName"
                  className={styles.formInput}
                  type="text"
                  placeholder="Full legal name"
                  value={formValues.employerName}
                  onChange={handleInputChange}
                />

                <label className={styles.formLabel}>Farm Address</label>
                <input
                  name="farmAddress"
                  className={styles.formInput}
                  type="text"
                  placeholder="Farm address"
                  value={formValues.farmAddress}
                  onChange={handleInputChange}
                />

                <label className={styles.formLabel}>Contact Information</label>
                <input
                  name="phoneNumber"
                  className={styles.formInput}
                  type="text"
                  placeholder="Phone number"
                  value={formValues.phoneNumber}
                  onChange={handleInputChange}
                />
                <input
                  name="emailAddress"
                  className={styles.formInput}
                  type="email"
                  placeholder="Email address"
                  value={formValues.emailAddress}
                  onChange={handleInputChange}
                />

                <h4>Business Information</h4>
                <label className={styles.formLabel}>Type of Farm</label>
                <input
                  name="farmType"
                  className={styles.formInput}
                  type="text"
                  placeholder="Farm type"
                  value={formValues.farmType}
                  onChange={handleInputChange}
                />

                <label className={styles.formLabel}>Registration Details</label>
                <input
                  name="registrationInfo"
                  className={styles.formInput}
                  type="text"
                  placeholder="Business registration info"
                  value={formValues.registrationInfo}
                  onChange={handleInputChange}
                />

                <h4>Employment Details</h4>
                <label className={styles.formLabel}>Position Title</label>
                <input
                  name="positionTitle"
                  className={styles.formInput}
                  type="text"
                  placeholder="Position title"
                  value={formValues.positionTitle}
                  onChange={handleInputChange}
                />

                <label className={styles.formLabel}>Job Description</label>
                <textarea
                  name="jobDescription"
                  className={styles.formTextarea}
                  placeholder="Job responsibilities and expectations"
                  value={formValues.jobDescription}
                  onChange={handleInputChange}
                ></textarea>

                <label className={styles.formLabel}>Terms of Employment</label>
                <input
                  name="employmentTerms"
                  className={styles.formInput}
                  type="text"
                  placeholder="Employment terms"
                  value={formValues.employmentTerms}
                  onChange={handleInputChange}
                />

                <h4>Legal and Compliance Information</h4>
                <label className={styles.formLabel}>Tax Identification Number (TIN)</label>
                <input
                  name="tin"
                  className={styles.formInput}
                  type="text"
                  placeholder="TIN"
                  value={formValues.tin}
                  onChange={handleInputChange}
                />

                <label className={styles.formLabel}>Compliance Statements</label>
                <textarea
                  name="complianceStatements"
                  className={styles.formTextarea}
                  placeholder="Compliance information"
                  value={formValues.complianceStatements}
                  onChange={handleInputChange}
                ></textarea>

                <h4>Additional Information</h4>
                <label className={styles.formLabel}>Employee Benefits Offered</label>
                <input
                  name="benefitsOffered"
                  className={styles.formInput}
                  type="text"
                  placeholder="Benefits offered"
                  value={formValues.benefitsOffered}
                  onChange={handleInputChange}
                />

                <label className={styles.formLabel}>Work Environment Description</label>
                <textarea
                  name="workEnvironmentDescription"
                  className={styles.formTextarea}
                  placeholder="Describe the work environment"
                  value={formValues.workEnvironmentDescription}
                  onChange={handleInputChange}
                ></textarea>

                <button type="submit" className={styles.formButton} disabled={!isFormComplete}>
                  Submit
                </button>
              </form>
            )}
          </div>
          <div className={styles.labourRight}>
            <h2>
              <FaUser className={styles.laborerIcon} /> Laborers
            </h2>
            <p>
              A farm laborer is an individual who performs essential physical tasks on farms, which may include planting, cultivating, harvesting crops, and caring for livestock. Their responsibilities can vary widely depending on the type of farm and the season. Farm laborers often work outdoors in various weather conditions and may use machinery as part of their duties. Physical stamina, reliability, and a willingness to learn are crucial traits for success in this role. They play a vital role in maintaining agricultural productivity and ensuring that farming operations run smoothly.
            </p>
            <button onClick={() => setShowLaborerForm(!showLaborerForm)} className={styles.formButton}>
              {showLaborerForm ? 'Hide Form' : 'Fill Laborer Details'}
            </button>

            {showLaborerForm && (
              <form className={styles.laborerForm}>
                <h4>Personal Information</h4>
                <label className={styles.formLabel}>Full Name</label>
                <input
                  name="fullName"
                  className={styles.formInput}
                  type="text"
                  placeholder="Full legal name"
                  value={formValues.fullName}
                  onChange={handleInputChange}
                />

                <label className={styles.formLabel}>Contact Information</label>
                <input
                  name="contactInfo"
                  className={styles.formInput}
                  type="text"
                  placeholder="Phone number"
                  value={formValues.contactInfo}
                  onChange={handleInputChange}
                />

                <label className={styles.formLabel}>Address</label>
                <input
                  name="address"
                  className={styles.formInput}
                  type="text"
                  placeholder="Residential address"
                  value={formValues.address}
                  onChange={handleInputChange}
                />

                <h4>Position Information</h4>
                <label className={styles.formLabel}>Position Applied For</label>
                <input
                  name="positionApplied"
                  className={styles.formInput}
                  type="text"
                  placeholder="Laborer position"
                  value={formValues.positionApplied}
                  onChange={handleInputChange}
                />

                <label className={styles.formLabel}>Availability</label>
                <input
                  name="availability"
                  className={styles.formInput}
                  type="text"
                  placeholder="Availability"
                  value={formValues.availability}
                  onChange={handleInputChange}
                />

                <h4>Work Experience</h4>
                <label className={styles.formLabel}>Previous Employment History</label>
                <textarea
                  name="previousEmployment"
                  className={styles.formTextarea}
                  placeholder="Employment history"
                  value={formValues.previousEmployment}
                  onChange={handleInputChange}
                ></textarea>

                <h4>Education</h4>
                <label className={styles.formLabel}>Educational Background</label>
                <textarea
                  name="educationBackground"
                  className={styles.formTextarea}
                  placeholder="Education details"
                  value={formValues.educationBackground}
                  onChange={handleInputChange}
                ></textarea>

                <h4>Physical Requirements</h4>
                <label className={styles.formLabel}>Physical Fitness</label>
                <input
                  name="physicalFitness"
                  className={styles.formInput}
                  type="text"
                  placeholder="Physical fitness"
                  value={formValues.physicalFitness}
                  onChange={handleInputChange}
                />

                <label className={styles.formLabel}>Ability to Operate Equipment</label>
                <input
                  name="equipmentAbility"
                  className={styles.formInput}
                  type="text"
                  placeholder="Licenses or certifications"
                  value={formValues.equipmentAbility}
                  onChange={handleInputChange}
                />

                <h4>Additional Information</h4>
                <label className={styles.formLabel}>Criminal Background Check</label>
                <input
                  name="backgroundCheck"
                  className={styles.formInput}
                  type="text"
                  placeholder="Background check info"
                  value={formValues.backgroundCheck}
                  onChange={handleInputChange}
                />

                <label className={styles.formLabel}>Disability Status</label>
                <input
                  name="disabilityStatus"
                  className={styles.formInput}
                  type="text"
                  placeholder="Disability status (optional)"
                  value={formValues.disabilityStatus}
                  onChange={handleInputChange}
                />

                <button type="submit" className={styles.formButton} disabled={!isFormComplete}>
                  Submit
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
      <Footer /> {/* Place footer outside the main container */}
    </>
  );
};

export default FarmLabour;
