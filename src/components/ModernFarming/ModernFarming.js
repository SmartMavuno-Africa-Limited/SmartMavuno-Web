import React, { useState } from 'react';
import styles from './modernfarming.module.css'; // Update or create a new CSS file
import verticalFarmingImg from '../../assets/sMediaService/vertical.jpg';
import hydroponicsImg from '../../assets/sMediaService/hydroponics.jpeg';
import pipeFarmingImg from '../../assets/sMediaService/pipe-farming.jpeg';
import bagFarmingImg from '../../assets/sMediaService/bag-farming.jpeg';
import containerGardeningImg from '../../assets/sMediaService/container-gardening.jpeg';
import Footer from '../Footer'; // Import Footer component
import { Pie } from 'react-chartjs-2'; // Importing the Pie chart component
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const ModernFarming = () => {
  // States to track which tool is subscribed and form visibility
  const [isVerticalFarmingFormVisible, setIsVerticalFarmingFormVisible] = useState(false);
  const [isHydroponicsFormVisible, setIsHydroponicsFormVisible] = useState(false);
  const [isPipeFarmingFormVisible, setIsPipeFarmingFormVisible] = useState(false);
  const [isBagFarmingFormVisible, setIsBagFarmingFormVisible] = useState(false);
  const [isContainerGardeningFormVisible, setIsContainerGardeningFormVisible] = useState(false);

  const handleShowForm = (tool) => {
    switch (tool) {
      case 'verticalFarming':
        setIsVerticalFarmingFormVisible(true);
        break;
      case 'hydroponics':
        setIsHydroponicsFormVisible(true);
        break;
      case 'pipeFarming':
        setIsPipeFarmingFormVisible(true);
        break;
      case 'bagFarming':
        setIsBagFarmingFormVisible(true);
        break;
      case 'containerGardening':
        setIsContainerGardeningFormVisible(true);
        break;
      default:
        break;
    }
  };

  // Pie chart data for modern farming impact
  const chartData = {
    labels: ['Increase in Yield', 'Water Efficiency', 'Labor Reduction', 'Sustainability'],
    datasets: [
      {
        label: 'Impact of Modern Farming Tools',
        data: [40, 30, 20, 10], // percentages for each aspect
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384', '#4BC0C0'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <>
      <div className="container mt-5">
        <section className={styles.heroSection}>
          <h2 className={styles.heroHeading}>Revolutionizing Farming with Modern Tools</h2>
          <p className={styles.heroDescription}>
            Explore the benefits of cutting-edge farming tools that are transforming agriculture. From vertical farming to hydroponics, these technologies are making farming more sustainable and efficient.
          </p>
        </section>

        {/* Modern Farming Tools Section */}
        <section className={styles.toolsSection}>
          <h3 className={styles.sectionHeading}>Modern Farming Tools</h3>

          <div className="row">
            {/* Vertical Farming */}
            <div className="col-md-4">
              <div className={styles.toolCard}>
                <img src={verticalFarmingImg} alt="Vertical Farming" className={styles.toolImage} />
                <h4 className={styles.toolTitle}>Vertical Farming</h4>
                <p className={styles.toolDescription}>
                  Vertical farming allows us to grow crops in stacked layers, making the most out of limited space.
                </p>
                <button className={styles.toolButton} onClick={() => handleShowForm('verticalFarming')}>
                  Get Devices
                </button>
                {isVerticalFarmingFormVisible && (
                  <div className={styles.subscriptionForm}>
                    <h4 className={styles.subscriptionHeading}>Device Leasing or Purchase</h4>
                    <form className={styles.form}>
                      <label htmlFor="name" className={styles.formLabel}>Name:</label>
                      <input type="text" id="name" className={styles.formInput} required />

                      <label htmlFor="email" className={styles.formLabel}>Email:</label>
                      <input type="email" id="email" className={styles.formInput} required />

                      <label htmlFor="phone" className={styles.formLabel}>Phone Number:</label>
                      <input type="tel" id="phone" className={styles.formInput} required />

                      <label htmlFor="deviceOption" className={styles.formLabel}>Would you like to Lease or Purchase?</label>
                      <select id="deviceOption" className={styles.formInput} required>
                        <option value="">Select Option</option>
                        <option value="lease">Lease</option>
                        <option value="purchase">Purchase</option>
                      </select>

                      <label htmlFor="quantity" className={styles.formLabel}>Quantity:</label>
                      <input type="number" id="quantity" className={styles.formInput} required />

                      <label htmlFor="deliveryDate" className={styles.formLabel}>Preferred Delivery Date:</label>
                      <input type="date" id="deliveryDate" className={styles.formInput} required />

                      <button type="submit" className={styles.submitButton}>
                        Submit
                      </button>
                    </form>
                    <p>Thank you for your interest! We will contact you shortly.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Hydroponics */}
            <div className="col-md-4">
              <div className={styles.toolCard}>
                <img src={hydroponicsImg} alt="Hydroponics" className={styles.toolImage} />
                <h4 className={styles.toolTitle}>Hydroponics</h4>
                <p className={styles.toolDescription}>
                  Hydroponics is a soil-less farming method that uses nutrient-rich water to grow plants efficiently.
                </p>
                <button className={styles.toolButton} onClick={() => handleShowForm('hydroponics')}>
                  Get Devices
                </button>
                {isHydroponicsFormVisible && (
                  <div className={styles.subscriptionForm}>
                    <h4 className={styles.subscriptionHeading}>Device Leasing or Purchase</h4>
                    <form className={styles.form}>
                      <label htmlFor="name" className={styles.formLabel}>Name:</label>
                      <input type="text" id="name" className={styles.formInput} required />

                      <label htmlFor="email" className={styles.formLabel}>Email:</label>
                      <input type="email" id="email" className={styles.formInput} required />

                      <label htmlFor="phone" className={styles.formLabel}>Phone Number:</label>
                      <input type="tel" id="phone" className={styles.formInput} required />

                      <label htmlFor="deviceOption" className={styles.formLabel}>Would you like to Lease or Purchase?</label>
                      <select id="deviceOption" className={styles.formInput} required>
                        <option value="">Select Option</option>
                        <option value="lease">Lease</option>
                        <option value="purchase">Purchase</option>
                      </select>

                      <label htmlFor="quantity" className={styles.formLabel}>Quantity:</label>
                      <input type="number" id="quantity" className={styles.formInput} required />

                      <label htmlFor="deliveryDate" className={styles.formLabel}>Preferred Delivery Date:</label>
                      <input type="date" id="deliveryDate" className={styles.formInput} required />

                      <button type="submit" className={styles.submitButton}>
                        Submit
                      </button>
                    </form>
                    <p>Thank you for your interest! We will contact you shortly.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Pipe Farming */}
            <div className="col-md-4">
              <div className={styles.toolCard}>
                <img src={pipeFarmingImg} alt="Pipe Farming" className={styles.toolImage} />
                <h4 className={styles.toolTitle}>Pipe Farming</h4>
                <p className={styles.toolDescription}>
                  Pipe farming utilizes PVC pipes to grow plants in an efficient, space-saving manner, perfect for urban spaces.
                </p>
                <button className={styles.toolButton} onClick={() => handleShowForm('pipeFarming')}>
                  Get Devices
                </button>
                {isPipeFarmingFormVisible && (
                  <div className={styles.subscriptionForm}>
                    <h4 className={styles.subscriptionHeading}>Device Leasing or Purchase</h4>
                    <form className={styles.form}>
                      <label htmlFor="name" className={styles.formLabel}>Name:</label>
                      <input type="text" id="name" className={styles.formInput} required />

                      <label htmlFor="email" className={styles.formLabel}>Email:</label>
                      <input type="email" id="email" className={styles.formInput} required />

                      <label htmlFor="phone" className={styles.formLabel}>Phone Number:</label>
                      <input type="tel" id="phone" className={styles.formInput} required />

                      <label htmlFor="deviceOption" className={styles.formLabel}>Would you like to Lease or Purchase?</label>
                      <select id="deviceOption" className={styles.formInput} required>
                        <option value="">Select Option</option>
                        <option value="lease">Lease</option>
                        <option value="purchase">Purchase</option>
                      </select>

                      <label htmlFor="quantity" className={styles.formLabel}>Quantity:</label>
                      <input type="number" id="quantity" className={styles.formInput} required />

                      <label htmlFor="deliveryDate" className={styles.formLabel}>Preferred Delivery Date:</label>
                      <input type="date" id="deliveryDate" className={styles.formInput} required />

                      <button type="submit" className={styles.submitButton}>
                        Submit
                      </button>
                    </form>
                    <p>Thank you for your interest! We will contact you shortly.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="row">
            {/* Bag Farming */}
            <div className="col-md-4">
              <div className={styles.toolCard}>
                <img src={bagFarmingImg} alt="Bag Farming" className={styles.toolImage} />
                <h4 className={styles.toolTitle}>Bag Farming</h4>
                <p className={styles.toolDescription}>
                  Bag farming is a great option for growing crops in small spaces, using bags filled with soil or compost.
                </p>
                <button className={styles.toolButton} onClick={() => handleShowForm('bagFarming')}>
                  Get Devices
                </button>
                {isBagFarmingFormVisible && (
                  <div className={styles.subscriptionForm}>
                    <h4 className={styles.subscriptionHeading}>Device Leasing or Purchase</h4>
                    <form className={styles.form}>
                      <label htmlFor="name" className={styles.formLabel}>Name:</label>
                      <input type="text" id="name" className={styles.formInput} required />

                      <label htmlFor="email" className={styles.formLabel}>Email:</label>
                      <input type="email" id="email" className={styles.formInput} required />

                      <label htmlFor="phone" className={styles.formLabel}>Phone Number:</label>
                      <input type="tel" id="phone" className={styles.formInput} required />

                      <label htmlFor="deviceOption" className={styles.formLabel}>Would you like to Lease or Purchase?</label>
                      <select id="deviceOption" className={styles.formInput} required>
                        <option value="">Select Option</option>
                        <option value="lease">Lease</option>
                        <option value="purchase">Purchase</option>
                      </select>

                      <label htmlFor="quantity" className={styles.formLabel}>Quantity:</label>
                      <input type="number" id="quantity" className={styles.formInput} required />

                      <label htmlFor="deliveryDate" className={styles.formLabel}>Preferred Delivery Date:</label>
                      <input type="date" id="deliveryDate" className={styles.formInput} required />

                      <button type="submit" className={styles.submitButton}>
                        Submit
                      </button>
                    </form>
                    <p>Thank you for your interest! We will contact you shortly.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Container Gardening */}
            <div className="col-md-4">
              <div className={styles.toolCard}>
                <img src={containerGardeningImg} alt="Container Gardening" className={styles.toolImage} />
                <h4 className={styles.toolTitle}>Container Gardening</h4>
                <p className={styles.toolDescription}>
                  Container gardening involves growing plants in containers, ideal for urban environments with limited space.
                </p>
                <button className={styles.toolButton} onClick={() => handleShowForm('containerGardening')}>
                  Get Devices
                </button>
                {isContainerGardeningFormVisible && (
                  <div className={styles.subscriptionForm}>
                    <h4 className={styles.subscriptionHeading}>Device Leasing or Purchase</h4>
                    <form className={styles.form}>
                      <label htmlFor="name" className={styles.formLabel}>Name:</label>
                      <input type="text" id="name" className={styles.formInput} required />

                      <label htmlFor="email" className={styles.formLabel}>Email:</label>
                      <input type="email" id="email" className={styles.formInput} required />

                      <label htmlFor="phone" className={styles.formLabel}>Phone Number:</label>
                      <input type="tel" id="phone" className={styles.formInput} required />

                      <label htmlFor="deviceOption" className={styles.formLabel}>Would you like to Lease or Purchase?</label>
                      <select id="deviceOption" className={styles.formInput} required>
                        <option value="">Select Option</option>
                        <option value="lease">Lease</option>
                        <option value="purchase">Purchase</option>
                      </select>

                      <label htmlFor="quantity" className={styles.formLabel}>Quantity:</label>
                      <input type="number" id="quantity" className={styles.formInput} required />

                      <label htmlFor="deliveryDate" className={styles.formLabel}>Preferred Delivery Date:</label>
                      <input type="date" id="deliveryDate" className={styles.formInput} required />

                      <button type="submit" className={styles.submitButton}>
                        Submit
                      </button>
                    </form>
                    <p>Thank you for your interest! We will contact you shortly.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Farming Stats Section with Pie Chart */}
        <section className={styles.statsSection}>
          <h3 className={styles.statsHeading}>Impact of Modern Farming Tools</h3>
          <div className={styles.chartContainer}>
            <Pie data={chartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
          </div>

          <p className={styles.chartDescription}>
            The chart above shows the benefits of modern farming tools in terms of yield improvement, water efficiency, labor reduction, and sustainability. As we adopt these tools, we are creating a more efficient, sustainable, and profitable future for farming.
          </p>
        </section>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default ModernFarming;
