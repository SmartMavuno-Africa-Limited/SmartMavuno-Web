import React, { useState } from 'react';
import styles from './CaseStudy.module.css';
import { Link } from 'react-router-dom';

// Importing the fakeData array from the fakeData.js file
import fakeData from './fakeData'; // Adjust the import path as needed

const CaseStudy = () => {
    const [data, setData] = useState(fakeData); // Initial data set from fakeData.js
    const [active, setActive] = useState([true, false, false, false, false, false, false, false]); // Active state for category buttons

    // Filter data based on category
    const filterData = (category) => {
        let temp = fakeData.filter((x) => x.category === category); // Filter the fakeData based on the selected category
        setData([...temp]);
    }

    // Set active state for filter buttons
    const activeNav = (i) => {
        let temp = [false, false, false, false, false, false, false, false]; // Reset all buttons to inactive
        temp[i] = true; // Set the clicked filter button to active
        setActive([...temp]);
    }

    return (
        <div className={`container ${styles.contain} overflow-hidden`}>
            <div data-aos='slide-left'>
                <p className={styles.our}>OUR&nbsp;</p>
                <p className={styles.study}>INITIATIVES</p>
            </div>

            {/* Filter buttons */}
            <div className={`${styles.grp_btn}`} data-aos='fade'>
                <p onClick={() => { setData(fakeData); activeNav(0) }} className={`${styles.filter} ${active[0] ? styles.active : ''}`}>ALL</p>
                <p onClick={() => { filterData('donation'); activeNav(1) }} className={`${styles.filter} ${active[1] ? styles.active : ''}`}>DONATION</p>
                <p onClick={() => { filterData('weather'); activeNav(2) }} className={`${styles.filter} ${active[2] ? styles.active : ''}`}>WEATHER</p>
                <p onClick={() => { filterData('labour'); activeNav(3) }} className={`${styles.filter} ${active[3] ? styles.active : ''}`}>LABOUR</p>
                <p onClick={() => { filterData('loans'); activeNav(4) }} className={`${styles.filter} ${active[4] ? styles.active : ''}`}>LOANS</p>
                <p onClick={() => { filterData('IoT'); activeNav(5) }} className={`${styles.filter} ${active[5] ? styles.active : ''}`}>IoT</p>
                <p onClick={() => { filterData('marketplace'); activeNav(6) }} className={`${styles.filter} ${active[6] ? styles.active : ''}`}>MARKETPLACE</p>
                <p onClick={() => { filterData('strategy'); activeNav(7) }} className={`${styles.filter} ${active[7] ? styles.active : ''}`}>AGRI-BUSINESS STRATEGY</p>
            </div>

            {/* Display filtered data */}
            <div className='row mb-2'>
                {data.map((x) => (
                    <div key={x.id} className={`col-md-4 col-sm-6 mt-4`} data-aos='fade'>
                        <Link to={`/projectDetails?id=${x.id}`} style={{ textDecoration: "none" }}>
                            <div className={styles.img} style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.0), rgba(5, 25, 81, .55)), url(${x.img})` }}>
                                <p className={styles.imgText1}>{x.designation}</p>
                                <p className={styles.imgText2}>{x.title}</p>
                                <p className={styles.imgDescription}>{x.description}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CaseStudy;
