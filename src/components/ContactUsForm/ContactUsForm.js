import React, { useState } from "react";
import styles from './ContactUsForm.module.css';

const ContactUsForm = () => {
    const [formContent, setFormContent] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormContent((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        if (!formContent.name || !formContent.email || !formContent.subject || !formContent.message) {
            alert("Please fill out all the fields.");
            return;  // Don't proceed if fields are missing
        }

        // Construct the email content
        const mailtoLink = `mailto:info@smartmavuno.africa?subject=${encodeURIComponent(formContent.subject)}&body=${encodeURIComponent(`
            Name: ${formContent.name}\n
            Email: ${formContent.email}\n
            Message: ${formContent.message}
        `)}`;

        // Redirect to the email client with pre-filled subject and body
        window.location.href = mailtoLink;
    };

    return (
        <>
            <div className={`container ${styles.contain} overflow-hidden`}>
                <p data-aos='fade-up' className={`${styles.heading} mx-auto`}>Talk to us</p>

                <div className="row">
                    <div className="col-md-4" data-aos='fade-right'>
                        <p className={styles.head}>Address</p>
                        <p className={styles.content}>00100, Ruiru, Kenya</p>
                    </div>

                    <div className="col-md-4" data-aos='fade-up' data-aos-offset='100'>
                        <p className={styles.head}>Contact</p>
                        <p className={styles.content}>Mobile: +254707687930</p>
                        <p className={styles.content}>Email: info@smartmavuno.africa</p>
                    </div>

                    <div className="col-md-4" data-aos='fade-left' data-aos-offset='70'>
                        <p className={styles.head}>Working Hours</p>
                        <p className={styles.content}>Monday - Friday: 09:00 - 20:00</p>
                        <p className={styles.content}>Saturday & Sunday: 10:30 - 22:00</p>
                    </div>
                </div>

                <p className={styles.email} data-aos='fade-up'>You can email us</p>

                <div className="row">
                    <div className="col-md-6" data-aos='fade-right' style={{ textAlign: 'left' }}>
                        <label className={styles.label}>Name</label><br />
                        <input 
                            name="name" 
                            value={formContent.name} 
                            onChange={handleChange} 
                            className={styles.input} 
                            type="text" 
                        />

                        <label className={styles.label}>Email</label><br />
                        <input 
                            name="email" 
                            value={formContent.email} 
                            onChange={handleChange} 
                            className={styles.input} 
                            type="email" 
                        />

                        <label className={styles.label}>Subject</label><br />
                        <input 
                            name="subject" 
                            value={formContent.subject} 
                            onChange={handleChange} 
                            className={styles.input} 
                            type="text" 
                        />
                    </div>

                    <div className="col-md-6" data-aos='fade-left' style={{ textAlign: 'left' }}>
                        <label className={styles.label}>Message</label><br />
                        <textarea 
                            name="message" 
                            value={formContent.message} 
                            onChange={handleChange} 
                            className={`${styles.input} ${styles.msg}`} 
                            type="text" 
                        />

                        {/* Optional ReCAPTCHA */}
                        <div className="captcha-container">
                            {/* Uncomment below if you want ReCAPTCHA but it's optional */}
                            {/* <ReCAPTCHA 
                                sitekey="your-site-key" 
                                onChange={handleCaptchaChange} 
                            /> */}
                        </div>

                        {/* Custom 'Send' Button */}
                        <div style={{ textAlign: 'right' }}>
                            <button 
                                onClick={handleSubmit} 
                                className={`${styles.btn} custom-btn`}>
                                SEND
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUsForm;
