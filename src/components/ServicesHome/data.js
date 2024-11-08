import weather from '../../assets/donations.jpg';
import farmersHub from '../../assets/equipment.jpg';
import farmLabour from '../../assets/donations.jpg';
import donationBasket from '../../assets/financing.jpg';
import smartIoT from '../../assets/irrigation.jpg';
import marketPlace from '../../assets/lease.jpg';

const data = [
    {
        id: 1,
        heading: 'Real-Time Weather Reports',
        content: 'Get accurate, location-based weather forecasts to help you plan your farming activities and increase productivity.',
        to: '/weather-reports',
        icon: weather,
    },
    {
        id: 2,
        heading: 'Farmer’s Hub',
        content: 'Access resources, tools, and a community network to stay informed and connected with other farmers.',
        to: '/farmers-hub',
        icon: farmersHub,
    },
    {
        id: 3,
        heading: 'Farm Labour Services',
        content: 'Find skilled farm laborers and workers to help with planting, harvesting, and more, whenever you need support.',
        to: '/farm-labour',
        icon: farmLabour,
    },
    {
        id: 4,
        heading: 'Donation Basket - Supporting Zero Hunger',
        content: 'Contribute to our mission to end hunger by supporting food donations to communities in need.',
        to: '/donation-basket',
        icon: donationBasket,
    },
    {
        id: 5,
        heading: 'SmartMavuno IoT Solutions',
        content: 'Use IoT technology to monitor soil health, moisture levels, and environmental conditions for optimized farming.',
        to: '/iot-solutions',
        icon: smartIoT,
    },
    {
        id: 6,
        heading: 'Smart Marketplace',
        content: 'Buy and sell farm products, equipment, and services directly through our marketplace, connecting you to a broader market.',
        to: '/marketplace',
        icon: marketPlace,
    },
]

export default data;
