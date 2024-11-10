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
  // Separate state for each tool to toggle subscription form visibility
  const [isVerticalFarmingSubscribed, setIsVerticalFarmingSubscribed] = useState(false);
  const [isHydroponicsSubscribed, setIsHydroponicsSubscribed] = useState(false);
  const [isPipeFarmingSubscribed, setIsPipeFarmingSubscribed] = useState(false);
  const [isBagFarmingSubscribed, setIsBagFarmingSubscribed] = useState(false);
  const [isContainerGardeningSubscribed, setIsContainerGardeningSubscribed] = useState(false);

  const handleSubscribe = (tool) => {
    switch (tool) {
      case 'verticalFarming':
        setIsVerticalFarmingSubscribed(true);
        break;
      case 'hydroponics':
        setIsHydroponicsSubscribed(true);
        break;
      case 'pipeFarming':
        setIsPipeFarmingSubscribed(true);
        break;
      case 'bagFarming':
        setIsBagFarmingSubscribed(true);
        break;
      case 'containerGardening':
        setIsContainerGardeningSubscribed(true);
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
                <button className={styles.toolButton} onClick={() => handleSubscribe('verticalFarming')}>
                  Get Started
                </button>
                {isVerticalFarmingSubscribed && (
                  <div className={styles.subscriptionForm}>
                    <p>Thank you for showing interest in Vertical Farming!</p>
                    {/* Subscription form content */}
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
                <button className={styles.toolButton} onClick={() => handleSubscribe('hydroponics')}>
                  Get Started
                </button>
                {isHydroponicsSubscribed && (
                  <div className={styles.subscriptionForm}>
                    <p>Thank you for showing interest in Hydroponics!</p>
                    {/* Subscription form content */}
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
                <button className={styles.toolButton} onClick={() => handleSubscribe('pipeFarming')}>
                  Get Started
                </button>
                {isPipeFarmingSubscribed && (
                  <div className={styles.subscriptionForm}>
                    <p>Thank you for showing interest in Pipe Farming!</p>
                    {/* Subscription form content */}
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
                <button className={styles.toolButton} onClick={() => handleSubscribe('bagFarming')}>
                  Get Started
                </button>
                {isBagFarmingSubscribed && (
                  <div className={styles.subscriptionForm}>
                    <p>Thank you for showing interest in Bag Farming!</p>
                    {/* Subscription form content */}
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
                <button className={styles.toolButton} onClick={() => handleSubscribe('containerGardening')}>
                  Get Started
                </button>
                {isContainerGardeningSubscribed && (
                  <div className={styles.subscriptionForm}>
                    <p>Thank you for showing interest in Container Gardening!</p>
                    {/* Subscription form content */}
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
