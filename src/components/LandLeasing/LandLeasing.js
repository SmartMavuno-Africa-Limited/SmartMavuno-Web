import React, { useState, useRef } from 'react';
import Footer from '../Footer'; // Import Footer component
import styles from './landleasing.module.css';

// Importing images
import img1 from './img1.png';
import img2 from './img2.png';

// Lessor and Lessee Form Components
const LessorForm = () => {
    const [formData, setFormData] = useState({
        lessorName: '',
        contactInfo: '',
        assetDescription: '',
        leaseTerms: '',
        responsibilities: '',
        rightsPrivileges: '',
        legalObligations: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Lessor Form Submitted', formData);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <h3>Lessor Form</h3>
            <input
                type="text"
                name="lessorName"
                value={formData.lessorName}
                onChange={handleInputChange}
                placeholder="Lessor Name"
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
            <textarea
                name="assetDescription"
                value={formData.assetDescription}
                onChange={handleInputChange}
                placeholder="Asset Description"
                required
            />
            <textarea
                name="leaseTerms"
                value={formData.leaseTerms}
                onChange={handleInputChange}
                placeholder="Lease Terms"
                required
            />
            <textarea
                name="responsibilities"
                value={formData.responsibilities}
                onChange={handleInputChange}
                placeholder="Responsibilities"
                required
            />
            <textarea
                name="rightsPrivileges"
                value={formData.rightsPrivileges}
                onChange={handleInputChange}
                placeholder="Rights and Privileges"
                required
            />
            <textarea
                name="legalObligations"
                value={formData.legalObligations}
                onChange={handleInputChange}
                placeholder="Legal Obligations"
                required
            />
            <button type="submit">Submit Lessor Form</button>
        </form>
    );
};

const LesseeForm = () => {
    const [formData, setFormData] = useState({
        lesseeName: '',
        contactInfo: '',
        startDate: '',
        leaseDuration: '',
        paymentDetails: '',
        assetUsage: '',
        maintenanceResponsibilities: '',
        legalObligations: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Lessee Form Submitted', formData);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <h3>Lessee Form</h3>
            <input
                type="text"
                name="lesseeName"
                value={formData.lesseeName}
                onChange={handleInputChange}
                placeholder="Lessee Name"
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
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                placeholder="Lease Start Date"
                required
            />
            <input
                type="text"
                name="leaseDuration"
                value={formData.leaseDuration}
                onChange={handleInputChange}
                placeholder="Lease Duration"
                required
            />
            <textarea
                name="paymentDetails"
                value={formData.paymentDetails}
                onChange={handleInputChange}
                placeholder="Payment Details"
                required
            />
            <textarea
                name="assetUsage"
                value={formData.assetUsage}
                onChange={handleInputChange}
                placeholder="Asset Usage"
                required
            />
            <textarea
                name="maintenanceResponsibilities"
                value={formData.maintenanceResponsibilities}
                onChange={handleInputChange}
                placeholder="Maintenance Responsibilities"
                required
            />
            <textarea
                name="legalObligations"
                value={formData.legalObligations}
                onChange={handleInputChange}
                placeholder="Legal Obligations"
                required
            />
            <button type="submit">Submit Lessee Form</button>
        </form>
    );
};

const LandLeasing = () => {
    const [showLessorForm, setShowLessorForm] = useState(false);
    const [showLesseeForm, setShowLesseeForm] = useState(false);

    const leasingSectionRef = useRef(null);

    const scrollToLeasingSection = () => {
        leasingSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className={styles.container}>
                {/* Hero Section */}
                <div className={styles.heroSection}>
                    <h1 className={styles.heroHeading}>Empowering Farmers Through Land Leasing</h1>
                    <p className={styles.heroDescription}>
                        Discover the advantages of accessible land leasing for farmers. By connecting farmers with land leasers, we help expand farming opportunities, making land access more flexible and scalable for sustainable agricultural growth.
                    </p>

                    {/* Button to scroll to leasing section */}
                    <button className={styles.scrollButton} onClick={scrollToLeasingSection}>
                        Lease Now
                    </button>
                </div>

                {/* Why Choose to Lease with SmartMavuno Section */}
                <div className={styles.chooseLeaseSection}>
                    <div className={styles.imageContainer}>
                        <img src={img1} alt="Why Choose to Lease" className={styles.leaseImage} />
                    </div>
                    <div className={styles.textContainer}>
                        <h2>Why Choose To Lease With SmartMavuno</h2>
                        <p className={styles.leaseDescription}>
                            At SmartMavuno, we provide tailored land leasing solutions that meet the unique needs of farmers. By connecting you with trusted land leasers, we ensure that you get access to the best land for your agricultural needs, helping to increase productivity and sustainability in the long term.
                        </p>
                    </div>
                </div>

                {/* Requirements Section */}
                <div className={styles.requirementsSection}>
                    <div className={styles.textContainer}>
                        <h2>Essential Elements of a Valid Lease</h2>
                        <ul className={styles.requirementList}>
                            <li><strong>An occupier or lessee</strong> – Refers to the person who resides in the leased premises.</li>
                            <li><strong>Exclusive possession</strong> – The lessee must have an interest that entitles them to exclude all other persons, including the lessor, from the premises.</li>
                            <li><strong>The period of a lease must be certain</strong> – The Land Act, 2012 permits an owner to lease land or part of it to any person for a definite term.</li>
                        </ul>
                        <p className={styles.leaseAgreementLink}>
                            <a href="https://www.buyrentkenya.com/discover/what-you-need-to-know-before-signing-a-commercial-lease-agreement#Essential_Elements_of_a_Valid_Lease" target="_blank" rel="noopener noreferrer">
                                Read more about Lease Agreement Essentials.
                            </a>
                        </p>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={img2} alt="Lease Requirements" className={styles.leaseImage} />
                    </div>
                </div>

                {/* Leasing Section */}
                <div ref={leasingSectionRef} className={styles.leasingSection}>
                    {/* Title with reduced font size */}
                    <h2 className={styles.leasingTitle}>
                        The lease agreement is a binding contract that outlines the terms of the arrangement between the lessor and the lessee. The lessee is obligated to make payments to the lessor and may also be responsible for maintenance. The lessor may also grant the lessee special privileges, such as early termination of the lease or renewal on the same terms.
                    </h2>

                    {/* Buttons to toggle forms */}
                    <div className={styles.buttonContainer}>
                        <button onClick={() => setShowLessorForm(!showLessorForm)}>
                            {showLessorForm ? 'Hide Lessor Form' : 'Show Lessor Form'}
                        </button>

                        <button onClick={() => setShowLesseeForm(!showLesseeForm)}>
                            {showLesseeForm ? 'Hide Lessee Form' : 'Show Lessee Form'}
                        </button>
                    </div>

                    {/* Display the forms if toggled */}
                    {showLessorForm && <LessorForm />}
                     {showLesseeForm && <LesseeForm />}
                </div>


            </div>
            <Footer />
        </>
    );
};

export default LandLeasing;
