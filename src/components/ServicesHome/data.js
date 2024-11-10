import { faCloudSun, faUsers, faHandHoldingHeart, faCube, faMapSigns, faStoreAlt } from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        id: 1,
        heading: 'Real-Time Weather Reports',
        content: 'Get accurate, location-based weather forecasts to help you plan your farming activities and increase productivity.',
        to: 'https://smartmvua-forecast.netlify.app/',
        icon: faCloudSun, // FontAwesome icon
    },
    {
        id: 2,
        heading: 'Farmer’s Hub',
        content: 'Access resources, tools, and a community network to stay informed and connected with other farmers.',
        to: '/farmers-hub',
        icon: faUsers, // FontAwesome icon
    },
    {
        id: 3,
        heading: 'Farm Labour Services',
        content: 'Find skilled farm laborers and workers to help with planting, harvesting, and more, whenever you need support.',
        to: '/farm-labour',
        icon: faHandHoldingHeart, // FontAwesome icon
    },
    {
        id: 4,
        heading: 'Donation Basket - Supporting Zero Hunger',
        content: 'Contribute to our mission to end hunger by supporting food donations to communities in need.',
        to: '/donation-basket',
        icon: faCube, // FontAwesome icon
    },
    {
        id: 5,
        heading: 'SmartMavuno IoT Solutions',
        content: 'Use IoT technology to monitor soil health, moisture levels, and environmental conditions for optimized farming.',
        to: '/iot-solutions',
        icon: faMapSigns, // FontAwesome icon
    },
    {
        id: 6,
        heading: 'Smart Marketplace',
        content: 'Buy and sell farm products, equipment, and services directly through our marketplace, connecting you to a broader market.',
        to: 'https://smartmavunoshop.vercel.app/',
        icon: faStoreAlt, // FontAwesome icon
    },
    {
        id: 7,
        heading: 'Land Leasing',
        content: 'Get Farming Land from any part of Africa at affordable prices through SmartMavuno',
        to: '/landleasing',
        icon: faStoreAlt, // FontAwesome icon
    },
];

export default data;
