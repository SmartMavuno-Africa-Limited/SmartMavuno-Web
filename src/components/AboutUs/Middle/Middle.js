import React from "react";
import styles from './Middle.module.css';
import logo1 from '../../../assets/aboutUs/middle1.png';
import logo2 from '../../../assets/aboutUs/middle2.png';
import logo3 from '../../../assets/aboutUs/middle3.png';

const Middle = () =>{
    return(
        <div style={{backgroundColor: '#f8f8f8'}} className='overflow-hidden'>
            <div className={`container ${styles.contain}`}>
                <p data-aos='fade-down-right' data-aos-offset="170" className={styles.mainHead}>Discover the Future of Agriculture with Smart Mavuno</p>
                <p data-aos='fade-up-left' data-aos-offset="170" className={styles.mainContent}>
                    At Smart Mavuno, we are dedicated to empowering farmers with the most innovative agritech solutions to help them thrive. 
                    Our services are crafted with care and passion, from land leasing to agricultural financing, produce marketplaces, and weather forecasting. 
                    Each solution is designed to provide farmers with the tools and technology needed to increase productivity, sustainability, and profitability. 
                    Whether you're scaling your farming operations or seeking smarter ways to manage your crops, 
                    Smart Mavuno’s platform brings the future of agriculture to your fingertips.
                </p>

                <div className="row">
                    <div data-aos='fade-right' data-aos-offset="170" className="col-md-4">
                        <div className={styles.box}>
                            <img src={logo1} alt=""/>
                            <p className={styles.head}>Land Leasing</p>
                            <p className={styles.content}>
                                Smart Mavuno connects farmers with land leasers, offering access to quality agricultural land 
                                that allows farmers to scale their operations and improve productivity. Our platform bridges the 
                                gap between farmers and landowners, ensuring that you have the resources needed to grow and succeed. 
                                Whether you're looking for short-term or long-term land leasing opportunities, 
                                Smart Mavuno facilitates a smooth and reliable process.
                            </p>
                        </div>
                    </div>

                    <div data-aos='fade-up' className="col-md-4">
                        <div className={styles.box}>
                            <img src={logo2} alt=""/>
                            <p className={styles.head}>Agricultural Financing</p>
                            <p className={styles.content}>
                                Smart Mavuno acts as a bridge, connecting farmers with trusted financiers who provide the capital 
                                needed to invest in modern farming tools, equipment, and technology. We work with a network of 
                                financial institutions to ensure farmers have access to the funds they need, with flexible options to help them grow their businesses.
                                Our platform simplifies the process, making it easier for farmers to secure the financing they require for their agricultural ventures.
                            </p>
                        </div>
                    </div>

                    <div data-aos='fade-left' className="col-md-4">
                        <div className={styles.box}>
                            <img src={logo3} alt=""/>
                            <p className={styles.head}>Produce Marketplace</p>
                            <p className={styles.content}>
                                Smart Mavuno's Produce Marketplace connects farmers directly with buyers, 
                                ensuring fair trade and better prices for their crops. Our platform creates a 
                                streamlined, efficient way for farmers to sell their produce, enhancing market access 
                                and simplifying the sales process. We help farmers reach a wider audience while supporting fair, transparent transactions.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Middle;