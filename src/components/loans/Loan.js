import { useState, useRef } from 'react';
import Footer from '../Footer';
import styles from './Loan.module.css';
import { FaCheckCircle, FaArrowRight, FaArrowDown } from 'react-icons/fa';

const LoanForm = () => {
    const [formData, setFormData] = useState({
        applicantName: '',
        contactInfo: '',
        loanAmount: '',
        loanType: '',
        repaymentPeriod: '',
        mpesaStatements: null,
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const validateStep = (step) => {
        const newErrors = {};
        
        if (step === 1) {
            if (!formData.applicantName.trim()) newErrors.applicantName = 'Required';
            if (!formData.contactInfo.trim()) newErrors.contactInfo = 'Required';
            if (!formData.loanAmount || formData.loanAmount <= 0) newErrors.loanAmount = 'Required';
        }
        
        if (step === 2) {
            if (!formData.loanType) newErrors.loanType = 'Select type';
            if (!formData.repaymentPeriod) newErrors.repaymentPeriod = 'Select period';
            if (!formData.mpesaStatements) newErrors.mpesaStatements = 'Required';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({
            ...formData,
            [name]: files[0],
        });
        
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateStep(2)) {
            console.log('Loan Application Submitted', formData);
            setSubmitted(true);
        }
    };

    const nextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    return (
        <div className={styles.formWrapper}>
            {submitted ? (
                <div className={styles.successMessage}>
                    <FaCheckCircle className={styles.successIcon} />
                    <h3>Application Sent!</h3>
                    <p>We'll contact you within 24 hours.</p>
                    <p className={styles.contactInfo}>Questions? +254707687930</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className={styles.formContainer}>
                    <div className={styles.progressBar}>
                        <div className={styles.progress} style={{ width: `${(currentStep / 2) * 100}%` }}></div>
                    </div>
                    
                    <div className={styles.formHeader}>
                        <h3>Apply for Loan</h3>
                        <p className={styles.formSubtitle}>2 simple steps</p>
                    </div>
                    
                    {currentStep === 1 && (
                        <div className={styles.formStep}>
                            <div className={styles.inputGroup}>
                                <input
                                    type="text"
                                    name="applicantName"
                                    value={formData.applicantName}
                                    onChange={handleInputChange}
                                    placeholder="Your Name"
                                    className={errors.applicantName ? styles.errorInput : ''}
                                />
                                {errors.applicantName && <span className={styles.errorText}>{errors.applicantName}</span>}
                            </div>
                            <div className={styles.inputGroup}>
                                <input
                                    type="text"
                                    name="contactInfo"
                                    value={formData.contactInfo}
                                    onChange={handleInputChange}
                                    placeholder="Phone Number"
                                    className={errors.contactInfo ? styles.errorInput : ''}
                                />
                                {errors.contactInfo && <span className={styles.errorText}>{errors.contactInfo}</span>}
                            </div>
                            <div className={styles.inputGroup}>
                                <input
                                    type="number"
                                    name="loanAmount"
                                    value={formData.loanAmount}
                                    onChange={handleInputChange}
                                    placeholder="Amount needed (KES)"
                                    className={errors.loanAmount ? styles.errorInput : ''}
                                />
                                {errors.loanAmount && <span className={styles.errorText}>{errors.loanAmount}</span>}
                            </div>
                            <button type="button" className={styles.nextButton} onClick={nextStep}>
                                Continue
                                <FaArrowRight className={styles.buttonIcon} />
                            </button>
                        </div>
                    )}
                    
                    {currentStep === 2 && (
                        <div className={styles.formStep}>
                            <div className={styles.inputGroup}>
                                <select
                                    name="loanType"
                                    value={formData.loanType}
                                    onChange={handleInputChange}
                                    className={errors.loanType ? styles.errorInput : ''}
                                >
                                    <option value="">Loan Type</option>
                                    <option value="Seeds & Inputs">Seeds & Inputs</option>
                                    <option value="Equipment">Equipment</option>
                                    <option value="Irrigation">Irrigation</option>
                                </select>
                                {errors.loanType && <span className={styles.errorText}>{errors.loanType}</span>}
                            </div>
                            <div className={styles.inputGroup}>
                                <select
                                    name="repaymentPeriod"
                                    value={formData.repaymentPeriod}
                                    onChange={handleInputChange}
                                    className={errors.repaymentPeriod ? styles.errorInput : ''}
                                >
                                    <option value="">Repayment Period</option>
                                    <option value="3">3 Months</option>
                                    <option value="6">6 Months</option>
                                    <option value="12">12 Months</option>
                                    <option value="24">24 Months</option>
                                </select>
                                {errors.repaymentPeriod && <span className={styles.errorText}>{errors.repaymentPeriod}</span>}
                            </div>
                            
                            <div className={styles.fileUploadSection}>
                                <div className={styles.fileInputGroup}>
                                    <div className={styles.fileInput}>
                                        <input
                                            type="file"
                                            name="mpesaStatements"
                                            accept=".pdf,.jpg,.png"
                                            onChange={handleFileChange}
                                            className={errors.mpesaStatements ? styles.errorInput : ''}
                                        />
                                        <span className={styles.fileButton}>Upload M-Pesa Statement</span>
                                        <span className={styles.fileName}>{formData.mpesaStatements ? formData.mpesaStatements.name : ''}</span>
                                    </div>
                                    {errors.mpesaStatements && <span className={styles.errorText}>{errors.mpesaStatements}</span>}
                                </div>
                            </div>
                            
                            <div className={styles.buttonGroup}>
                                <button type="button" className={styles.backButton} onClick={prevStep}>
                                    Back
                                </button>
                                <button type="submit" className={styles.submitButton}>
                                    Submit Application
                                </button>
                            </div>
                        </div>
                    )}
                </form>
            )}
        </div>
    );
};

const Loan = () => {
    const applicationSectionRef = useRef(null);

    const scrollToApplicationSection = () => {
        applicationSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className={styles.container}>
                {/* Hero Section */}
                <div className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroHeading}>Farm Loans</h1>
                        <p className={styles.heroDescription}>Quick financing for farmers</p>
                        
                        <div className={styles.statsRow}>
                            <div className={styles.stat}>
                                <h3>KES 100,000</h3>
                                <p>Max Loan</p>
                            </div>
                            <div className={styles.stat}>
                                <h3>3-24 Months</h3>
                                <p>Repayment</p>
                            </div>
                            <div className={styles.stat}>
                                <h3>9% Rate</h3>
                                <p>Interest</p>
                            </div>
                        </div>
                        
                        <button className={styles.scrollButton} onClick={scrollToApplicationSection}>
                            Apply Now
                            <FaArrowDown className={styles.buttonArrow} />
                        </button>
                    </div>
                </div>

                {/* Benefits Section - Bullet Points */}
                <div className={styles.benefitsSection}>
                    <h2>Why SmartMavuno?</h2>
                    <div className={styles.bulletList}>
                        <div className={styles.bulletItem}>
                            <div className={styles.bulletIcon}>✓</div>
                            <p>48-hour approval</p>
                        </div>
                        <div className={styles.bulletItem}>
                            <div className={styles.bulletIcon}>✓</div>
                            <p>Flexible seasonal terms</p>
                        </div>
                        <div className={styles.bulletItem}>
                            <div className={styles.bulletIcon}>✓</div>
                            <p>Apply on phone</p>
                        </div>
                        <div className={styles.bulletItem}>
                            <div className={styles.bulletIcon}>✓</div>
                            <p>Expert farmer support</p>
                        </div>
                    </div>
                </div>

                {/* Loan Application Form Section */}
                <div ref={applicationSectionRef} className={styles.applicationSection}>
                    <div className={styles.sectionHeader}>
                        <h2>Apply Now</h2>
                    </div>
                    <LoanForm />
                </div>

            </div>
            <Footer />
        </>
    );
};

export default Loan;