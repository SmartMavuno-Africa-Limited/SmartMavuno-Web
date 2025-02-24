import React, { useState, useRef } from 'react';
import Footer from '../Footer'; // Import Footer component
import styles from './Loan.module.css';

// Loan Application Form Component
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({
            ...formData,
            [name]: files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Loan Application Submitted', formData);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <h3>Loan Application Form</h3>
            <input
                type="text"
                name="applicantName"
                value={formData.applicantName}
                onChange={handleInputChange}
                placeholder="Applicant Name"
                required
            />
            <input
                type="text"
                name="contactInfo"
                value={formData.contactInfo}
                onChange={handleInputChange}
                placeholder="Contact Information"
                required
            />
            <input
                type="number"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleInputChange}
                placeholder="Loan Amount (KES)"
                required
            />
            <textarea
                name="loanPurpose"
                value={formData.loanPurpose}
                onChange={handleInputChange}
                placeholder="Purpose of Loan"
                required
            />
            <input
                type="text"
                name="repaymentPeriod"
                value={formData.repaymentPeriod}
                onChange={handleInputChange}
                placeholder="Repayment Period (Months)"
                required
            />
            <textarea
                name="incomeSource"
                value={formData.incomeSource}
                onChange={handleInputChange}
                placeholder="Source of Income"
                required
            />
            <textarea
                name="collateralDetails"
                value={formData.collateralDetails}
                onChange={handleInputChange}
                placeholder="Collateral Details (if any)"
            />
            <textarea
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleInputChange}
                placeholder="Additional Notes"
            />
            <label>Mpesa Statements (PDF):</label>
            <input
                type="file"
                name="mpesaStatements"
                accept=".pdf"
                onChange={handleFileChange}
            />
            <label>Bank Statements (PDF):</label>
            <input
                type="file"
                name="bankStatements"
                accept=".pdf"
                onChange={handleFileChange}
            />
            <label>Farming History (PDF):</label>
            <input
                type="file"
                name="farmingHistory"
                accept=".pdf"
                onChange={handleFileChange}
            />
            <button type="submit">Submit Loan Application</button>
        </form>
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
                    <h1 className={styles.heroHeading}>SmartMavuno Loan Application</h1>
                    <p className={styles.heroDescription}>
                        Apply for a loan to support your farming needs. SmartMavuno offers flexible loan solutions tailored for farmers.
                    </p>
                    <button className={styles.scrollButton} onClick={scrollToApplicationSection}>
                        Apply Now
                    </button>
                </div>

                {/* Loan Details Section */}
                <div className={styles.detailsSection}>
                    <h2>Why Apply for a Loan with SmartMavuno?</h2>
                    <p>
                        We provide financial support to farmers to enhance their agricultural productivity, ensuring they have the resources needed to succeed.
                    </p>
                </div>

                {/* Loan Application Form Section */}
                <div ref={applicationSectionRef} className={styles.applicationSection}>
                    <LoanForm />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Loan;
