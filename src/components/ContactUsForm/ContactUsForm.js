import React, { useState } from "react";
import styles from './ContactUsForm.module.css';

const ContactUsForm = () => {
    const [formContent, setFormContent] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormContent((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Check all fields
        const { firstName, lastName, email, phone, subject, message } = formContent;
        if (!firstName || !lastName || !email || !phone || !subject || !message) {
            setSubmitStatus({ type: 'error', message: 'Please fill all fields' });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        // Construct email
        const emailBody = `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message: ${message}
        `.trim();

        const mailtoLink = `mailto:info@smartmavuno.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

        // Open email client
        window.location.href = mailtoLink;
        
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
            
            // Reset form
            setFormContent({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        }, 1000);
    };

    return (
        <div className={styles.container}>
            <div className={styles.contactWrapper}>
                {/* Header */}
                <div className={styles.header}>
                    <h2 className={styles.heading}>Contact Us</h2>
                    <p className={styles.subheading}>Get in touch with our team</p>
                </div>

                <div className={styles.contentWrapper}>
                    {/* Contact Info Cards */}
                    <div className={styles.infoCards}>
                        <div className={styles.infoCard}>
                            <div className={styles.cardIcon}>📍</div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>Location</h3>
                                <p className={styles.cardText}>Ruiru, Kenya</p>
                            </div>
                        </div>
                        
                        <div className={styles.infoCard}>
                            <div className={styles.cardIcon}>📞</div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>Contact</h3>
                                <p className={styles.cardText}>+254 707 687 930</p>
                                <p className={styles.cardText}>info@smartmavuno.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={styles.formContainer}>
                        <div className={styles.formHeader}>
                            <h3 className={styles.formTitle}>Send us a message</h3>
                            <p className={styles.formSubtitle}>Fill out the form below</p>
                        </div>
                        
                        {submitStatus && (
                            <div className={`${styles.statusMessage} ${submitStatus.type === 'error' ? styles.error : styles.success}`}>
                                {submitStatus.message}
                            </div>
                        )}
                        
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formRow}>
                                <div className={styles.inputGroup}>
                                    <input 
                                        name="firstName" 
                                        value={formContent.firstName} 
                                        onChange={handleChange} 
                                        className={styles.input} 
                                        type="text"
                                        placeholder="First Name"
                                    />
                                </div>
                                
                                <div className={styles.inputGroup}>
                                    <input 
                                        name="lastName" 
                                        value={formContent.lastName} 
                                        onChange={handleChange} 
                                        className={styles.input} 
                                        type="text"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.inputGroup}>
                                    <input 
                                        name="email" 
                                        value={formContent.email} 
                                        onChange={handleChange} 
                                        className={styles.input} 
                                        type="email"
                                        placeholder="Email Address"
                                    />
                                </div>
                                
                                <div className={styles.inputGroup}>
                                    <input 
                                        name="phone" 
                                        value={formContent.phone} 
                                        onChange={handleChange} 
                                        className={styles.input} 
                                        type="tel"
                                        placeholder="Phone Number"
                                    />
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <input 
                                    name="subject" 
                                    value={formContent.subject} 
                                    onChange={handleChange} 
                                    className={styles.input} 
                                    type="text"
                                    placeholder="Subject"
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <textarea 
                                    name="message" 
                                    value={formContent.message} 
                                    onChange={handleChange} 
                                    className={styles.textarea} 
                                    placeholder="Your message here..."
                                    rows="5"
                                />
                            </div>

                            <button 
                                type="submit" 
                                className={styles.submitButton}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsForm;