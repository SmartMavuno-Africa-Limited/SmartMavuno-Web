import React, { useState } from "react";
import styles from './ContactUsForm.module.css';

const ContactUsForm = () => {
    const [formContent, setFormContent] = useState({
        name: '',
        email: '',
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
        
        if (!formContent.name || !formContent.email || !formContent.subject || !formContent.message) {
            setSubmitStatus({ type: 'error', message: 'Please fill out all the fields.' });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        // Simulate API call/processing
        setTimeout(() => {
            // Construct the email content
            const mailtoLink = `mailto:info@smartmavuno.com?subject=${encodeURIComponent(formContent.subject)}&body=${encodeURIComponent(`
                Name: ${formContent.name}\n
                Email: ${formContent.email}\n
                Message: ${formContent.message}
            `)}`;

            // Redirect to the email client with pre-filled subject and body
            window.location.href = mailtoLink;
            
            setIsSubmitting(false);
            setSubmitStatus({ type: 'success', message: 'Your message has been sent successfully!' });
            
            // Reset form
            setFormContent({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }, 1500);
    };

    return (
        <div className={styles.container}>
            <div className={styles.contactWrapper}>
                {/* Header Section */}
                <div className={styles.header}>
                    <div className={styles.headerContent}>
                        <h2 className={styles.heading}>Get in Touch</h2>
                        <p className={styles.subheading}>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                    </div>
                    <div className={styles.headerVisual}>
                        <div className={styles.visualElement}></div>
                    </div>
                </div>

                <div className={styles.contentGrid}>
                    {/* Contact Information */}
                    <div className={styles.infoSection}>
                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className={styles.infoContent}>
                                <h3 className={styles.infoTitle}>Address</h3>
                                <p className={styles.infoText}>00100, Ruiru, Kenya</p>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className={styles.infoContent}>
                                <h3 className={styles.infoTitle}>Contact</h3>
                                <p className={styles.infoText}>Mobile: +254707687930</p>
                                <p className={styles.infoText}>Email: info@smartmavuno.com</p>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>
                                <i className="fas fa-clock"></i>
                            </div>
                            <div className={styles.infoContent}>
                                <h3 className={styles.infoTitle}>Working Hours</h3>
                                <p className={styles.infoText}>Monday - Friday: 09:00 - 20:00</p>
                                <p className={styles.infoText}>Saturday & Sunday: 10:30 - 22:00</p>
                            </div>
                        </div>

                        <div className={styles.socialSection}>
                            <h3 className={styles.socialTitle}>Follow Us</h3>
                            <div className={styles.socialIcons}>
                                <a href="https://www.facebook.com/profile.php?id=100089102720769&mibextid=ZbWKwL" className={styles.socialLink}>
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://x.com/SmartMavuno" className={styles.socialLink}>
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.instagram.com/smartmavuno?igsh=MTRhZHUzcXBseHlhaQ%3D%3D" className={styles.socialLink}>
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/smartmavuno" className={styles.socialLink}>
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={styles.formSection}>
                        <div className={styles.formContainer}>
                            <h3 className={styles.formTitle}>Send us a message</h3>
                            
                            {submitStatus && (
                                <div className={`${styles.statusMessage} ${submitStatus.type === 'error' ? styles.error : styles.success}`}>
                                    <i className={`fas ${submitStatus.type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle'}`}></i>
                                    {submitStatus.message}
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.formRow}>
                                    <div className={styles.inputGroup}>
                                        <input 
                                            id="name"
                                            name="name" 
                                            value={formContent.name} 
                                            onChange={handleChange} 
                                            className={styles.input} 
                                            type="text"
                                            placeholder=" "
                                        />
                                        <label htmlFor="name" className={styles.label}>
                                            Your Name
                                        </label>
                                        <i className={`fas fa-user ${styles.inputIcon}`}></i>
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <input 
                                            id="email"
                                            name="email" 
                                            value={formContent.email} 
                                            onChange={handleChange} 
                                            className={styles.input} 
                                            type="email"
                                            placeholder=" "
                                        />
                                        <label htmlFor="email" className={styles.label}>
                                            Email Address
                                        </label>
                                        <i className={`fas fa-envelope ${styles.inputIcon}`}></i>
                                    </div>
                                </div>

                                <div className={styles.inputGroup}>
                                    <input 
                                        id="subject"
                                        name="subject" 
                                        value={formContent.subject} 
                                        onChange={handleChange} 
                                        className={styles.input} 
                                        type="text"
                                        placeholder=" "
                                    />
                                    <label htmlFor="subject" className={styles.label}>
                                        Subject
                                    </label>
                                    <i className={`fas fa-tag ${styles.inputIcon}`}></i>
                                </div>

                                <div className={styles.inputGroup}>
                                    <textarea 
                                        id="message"
                                        name="message" 
                                        value={formContent.message} 
                                        onChange={handleChange} 
                                        className={`${styles.input} ${styles.textarea}`} 
                                        placeholder=" "
                                        rows="5"
                                    />
                                    <label htmlFor="message" className={styles.label}>
                                        Your Message
                                    </label>
                                    <i className={`fas fa-comment ${styles.inputIcon} ${styles.textareaIcon}`}></i>
                                </div>

                                <button 
                                    type="submit" 
                                    className={styles.submitButton}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <i className="fas fa-spinner fa-spin"></i>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <i className="fas fa-paper-plane"></i>
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsForm;