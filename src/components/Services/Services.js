import React from "react";
import styles from './Services.module.css';
import ServicesHome from "../ServicesHome/ServicesHome";
import data from './data';

const Services = () => {
    return(
        <div className={`container ${styles.contain} overflow-hidden pb-2`}>
            {/* Updated Company Heading */}
            <p data-aos='slide-right' className={styles.heading}>SmartMavuno</p>
            
            {/* Updated Subheading */}
            <div>
                <p data-aos='slide-left' className={`mx-auto ${styles.subHeading}`}>
                    Eat Smart, Feel Great
                </p>
            </div>

            {/* Rendering Service Cards */}
            <div className={`row ${styles.cont}`}>
                {
                    data && data.map(x=>(
                        <div key={x.id} className="col-lg-4 col-md-6">
                            <ServicesHome id={x.id} heading={x.heading} content={x.content} to={x.to} icon={x.icon}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Services;
