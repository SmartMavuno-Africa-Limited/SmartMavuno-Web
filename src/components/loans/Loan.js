import React, { useState, useRef } from 'react';
import Footer from '../Footer';
import styles from './Loan.module.css';
import { FaCheckCircle, FaArrowRight, FaArrowDown } from 'react-icons/fa';

const LoanForm = () => {
    const [formData, setFormData] = useState({
        applicantName: '',
        contactInfo: '',
        loanAmount: '',
        loanPurpose: '',
        repaymentPeriod: '',
        incomeSource: '',
        collateralDetails: '',
        additionalNotes: '',
        mpesaStatements: null,
        bankStatements: null,
        farmingHistory: null,
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const validateStep = (step) => {
        const newErrors = {};
        
        if (step === 1) {
            if (!formData.applicantName.trim()) newErrors.applicantName = 'Full name is required';
            if (!formData.contactInfo.trim()) newErrors.contactInfo = 'Contact information is required';
            if (!formData.loanAmount || formData.loanAmount <= 0) newErrors.loanAmount = 'Valid loan amount is required';
        }
        
        if (step === 2) {
            if (!formData.loanPurpose) newErrors.loanPurpose = 'Please select a loan purpose';
            if (!formData.repaymentPeriod) newErrors.repaymentPeriod = 'Please select a repayment period';
            if (!formData.incomeSource.trim()) newErrors.incomeSource = 'Income source is required';
        }
        
        if (step === 3) {
            if (!formData.mpesaStatements) newErrors.mpesaStatements = 'M-Pesa statements are required';
            if (!formData.bankStatements) newErrors.bankStatements = 'Bank statements are required';
            if (!formData.farmingHistory) newErrors.farmingHistory = 'Farming history document is required';
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
        
        // Clear error when user starts typing
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
        
        // Clear error when user selects a file
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateStep(3)) {
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
                    <h3>Application Submitted Successfully!</h3>
                    <p>Thank you for applying for a loan with SmartMavuno. We have received your application and our team will review it carefully.</p>
                    <div className={styles.successDetails}>
                        <p><strong>What happens next?</strong></p>
                        <ul>
                            <li>We will verify your documents within 24-48 hours</li>
                            <li>Our loan officer will contact you at {formData.contactInfo}</li>
                            <li>You may be asked for additional information if needed</li>
                            <li>Final approval decision within 3 business days</li>
                        </ul>
                    </div>
                    <p className={styles.contactInfo}>For immediate questions, call us at +254707687930 or email loans@smartmavuno.com</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className={styles.formContainer}>
                    <div className={styles.progressBar}>
                        <div className={styles.progress} style={{ width: `${(currentStep / 3) * 100}%` }}></div>
                    </div>
                    
                    <div className={styles.formHeader}>
                        <h3>SmartMavuno Loan Application</h3>
                        <p className={styles.formSubtitle}>Complete your application in just a few steps</p>
                    </div>
                    
                    {currentStep === 1 && (
                        <div className={styles.formStep}>
                            <h4>Personal Information</h4>
                            <div className={styles.inputGroup}>
                                <input
                                    type="text"
                                    name="applicantName"
                                    value={formData.applicantName}
                                    onChange={handleInputChange}
                                    placeholder="Full Name"
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
                                    placeholder="Phone Number & Email"
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
                                    placeholder="Loan Amount (KES)"
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
                            <h4>Loan Details</h4>
                            <div className={styles.inputGroup}>
                                <select
                                    name="loanPurpose"
                                    value={formData.loanPurpose}
                                    onChange={handleInputChange}
                                    className={errors.loanPurpose ? styles.errorInput : ''}
                                >
                                    <option value="">Select Loan Purpose</option>
                                    <option value="Seeds & Inputs">Seeds & Inputs</option>
                                    <option value="Equipment">Farming Equipment</option>
                                    <option value="Expansion">Farm Expansion</option>
                                    <option value="Irrigation">Irrigation Systems</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.loanPurpose && <span className={styles.errorText}>{errors.loanPurpose}</span>}
                            </div>
                            <div className={styles.inputGroup}>
                                <select
                                    name="repaymentPeriod"
                                    value={formData.repaymentPeriod}
                                    onChange={handleInputChange}
                                    className={errors.repaymentPeriod ? styles.errorInput : ''}
                                >
                                    <option value="">Select Repayment Period</option>
                                    <option value="3">3 Months</option>
                                    <option value="6">6 Months</option>
                                    <option value="12">12 Months</option>
                                    <option value="24">24 Months</option>
                                </select>
                                {errors.repaymentPeriod && <span className={styles.errorText}>{errors.repaymentPeriod}</span>}
                            </div>
                            <div className={styles.inputGroup}>
                                <textarea
                                    name="incomeSource"
                                    value={formData.incomeSource}
                                    onChange={handleInputChange}
                                    placeholder="Primary Source of Income"
                                    className={errors.incomeSource ? styles.errorInput : ''}
                                />
                                {errors.incomeSource && <span className={styles.errorText}>{errors.incomeSource}</span>}
                            </div>
                            <div className={styles.buttonGroup}>
                                <button type="button" className={styles.backButton} onClick={prevStep}>
                                    Back
                                </button>
                                <button type="button" className={styles.nextButton} onClick={nextStep}>
                                    Continue
                                    <FaArrowRight className={styles.buttonIcon} />
                                </button>
                            </div>
                        </div>
                    )}
                    
                    {currentStep === 3 && (
                        <div className={styles.formStep}>
                            <h4>Documents & Final Details</h4>
                            <div className={styles.inputGroup}>
                                <textarea
                                    name="collateralDetails"
                                    value={formData.collateralDetails}
                                    onChange={handleInputChange}
                                    placeholder="Collateral Details (if any)"
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <textarea
                                    name="additionalNotes"
                                    value={formData.additionalNotes}
                                    onChange={handleInputChange}
                                    placeholder="Additional Notes"
                                />
                            </div>
                            
                            <div className={styles.fileUploadSection}>
                                <h5>Upload Required Documents</h5>
                                <div className={styles.fileInputGroup}>
                                    <label>M-Pesa Statements (PDF) <span className={styles.required}>*</span></label>
                                    <div className={styles.fileInput}>
                                        <input
                                            type="file"
                                            name="mpesaStatements"
                                            accept=".pdf"
                                            onChange={handleFileChange}
                                            className={errors.mpesaStatements ? styles.errorInput : ''}
                                        />
                                        <span className={styles.fileButton}>Choose File</span>
                                        <span className={styles.fileName}>{formData.mpesaStatements ? formData.mpesaStatements.name : 'No file chosen'}</span>
                                    </div>
                                    {errors.mpesaStatements && <span className={styles.errorText}>{errors.mpesaStatements}</span>}
                                </div>
                                
                                <div className={styles.fileInputGroup}>
                                    <label>Bank Statements (PDF) <span className={styles.required}>*</span></label>
                                    <div className={styles.fileInput}>
                                        <input
                                            type="file"
                                            name="bankStatements"
                                            accept=".pdf"
                                            onChange={handleFileChange}
                                            className={errors.bankStatements ? styles.errorInput : ''}
                                        />
                                        <span className={styles.fileButton}>Choose File</span>
                                        <span className={styles.fileName}>{formData.bankStatements ? formData.bankStatements.name : 'No file chosen'}</span>
                                    </div>
                                    {errors.bankStatements && <span className={styles.errorText}>{errors.bankStatements}</span>}
                                </div>
                                
                                <div className={styles.fileInputGroup}>
                                    <label>Farming History (PDF) <span className={styles.required}>*</span></label>
                                    <div className={styles.fileInput}>
                                        <input
                                            type="file"
                                            name="farmingHistory"
                                            accept=".pdf"
                                            onChange={handleFileChange}
                                            className={errors.farmingHistory ? styles.errorInput : ''}
                                        />
                                        <span className={styles.fileButton}>Choose File</span>
                                        <span className={styles.fileName}>{formData.farmingHistory ? formData.farmingHistory.name : 'No file chosen'}</span>
                                    </div>
                                    {errors.farmingHistory && <span className={styles.errorText}>{errors.farmingHistory}</span>}
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
                        <h1 className={styles.heroHeading}>Grow Your Farm with SmartMavuno Loans</h1>
                        <p className={styles.heroDescription}>
                            Access affordable financing tailored for farmers. Quick approval, flexible repayment, and dedicated support for your agricultural success.
                        </p>
                        <div className={styles.heroStats}>
                            <div className={styles.stat}>
                                <h3>Up to KES 100,000</h3>
                                <p>Loan Amount</p>
                            </div>
                            <div className={styles.stat}>
                                <h3>3-24 Months</h3>
                                <p>Repayment Period</p>
                            </div>
                            <div className={styles.stat}>
                                <h3>9% Interest</h3>
                                <p>Competitive Rates</p>
                            </div>
                        </div>
                        <button className={styles.scrollButton} onClick={scrollToApplicationSection}>
                            Apply Now
                            <FaArrowDown className={styles.buttonArrow} />
                        </button>
                    </div>
                    <div className={styles.heroVisual}>
                        <div className={styles.visualCard}>
                            <h4>Seeds & Inputs</h4>
                            <p>Finance your planting season</p>
                        </div>
                        <div className={styles.visualCard}>
                            <h4>Equipment</h4>
                            <p>Modern farming tools</p>
                        </div>
                        <div className={styles.visualCard}>
                            <h4>Irrigation</h4>
                            <p>Water management systems</p>
                        </div>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className={styles.benefitsSection}>
                    <h2>Why Choose SmartMavuno Loans?</h2>
                    <div className={styles.benefitsGrid}>
                        <div className={styles.benefitItem}>
                            <h4>Quick Approval</h4>
                            <p>Get a decision within 48 hours of application submission</p>
                        </div>
                        <div className={styles.benefitItem}>
                            <h4>Farmer-Friendly</h4>
                            <p>Terms designed around harvesting cycles and seasonal income</p>
                        </div>
                        <div className={styles.benefitItem}>
                            <h4>Digital Process</h4>
                            <p>Apply from your phone, minimal paperwork required</p>
                        </div>
                        <div className={styles.benefitItem}>
                            <h4>Expert Support</h4>
                            <p>Agricultural specialists to help you grow</p>
                        </div>
                    </div>
                </div>

                {/* Loan Application Form Section */}
                <div ref={applicationSectionRef} className={styles.applicationSection}>
                    <div className={styles.sectionHeader}>
                        <h2>Loan Application</h2>
                        <p>Complete the form below to apply for financing</p>
                    </div>
                    <LoanForm />
                </div>

                {/* FAQ Section */}
                <div className={styles.faqSection}>
                    <h2>Frequently Asked Questions</h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h4>What are the eligibility requirements?</h4>
                            <p>You must be 18+ years, have a registered farm, and demonstrate farming experience.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h4>How long does approval take?</h4>
                            <p>Most applications are processed within 2 business days after document submission.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h4>What documents do I need?</h4>
                            <p>ID, proof of farming activity, and financial statements (M-Pesa or bank).</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h4>Can I repay early?</h4>
                            <p>Yes, early repayment is allowed with no penalty fees.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Loan;