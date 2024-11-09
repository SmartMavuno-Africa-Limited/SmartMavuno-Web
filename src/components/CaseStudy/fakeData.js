import img2 from '../../assets/caseStudy/IoT.jpg';
import img3 from '../../assets/caseStudy/labour.jpg';
import img4 from '../../assets/caseStudy/donate.png';
import img5 from '../../assets/caseStudy/loan.jpg';
import img6 from '../../assets/caseStudy/weather.jpg';
import img7 from '../../assets/caseStudy/market.jpg';
import img8 from '../../assets/caseStudy/consult.jpg';

// New fake data for the real-world initiatives
const fakeData = [
    {
        id: 1,
        designation: 'Community Crisis Response',
        title: 'Donation Basket: Addressing Hunger in Africa',
        img: img4,
        category: 'donation',
        description: 'Over 10,000 people affected by hunger in Sub-Saharan Africa receive essential food supplies through our Donation Basket initiative.'
    },
    {
        id: 2,
        designation: 'Weather Insights',
        title: 'Real-time Weather Data for Farmers',
        img: img6,
        category: 'weather',
        description: 'Farmers get access to timely weather updates to plan and protect their crops from adverse weather conditions.'
    },
    {
        id: 3,
        designation: 'Labor Solutions',
        title: 'Connecting Farmers with Skilled Labor',
        img: img3,
        category: 'labour',
        description: 'Solving labor shortages by connecting farmers with skilled workers, improving productivity and harvest efficiency.'
    },
    {
        id: 4,
        designation: 'Financial Empowerment',
        title: 'Farm Insured Loans for Farmers',
        img: img5,
        category: 'loans',
        description: 'We provide insured loans to farmers to help them access capital and mitigate risks associated with unpredictable harvests.'
    },
    {
        id: 5,
        designation: 'Smart Farming Solutions',
        title: 'SmartMavuno IoT Integration for Precision Farming',
        img: img2,
        category: 'IoT',
        description: 'Using IoT technology to collect real-time data and improve farming practices for better yield and resource management.'
    },
    {
        id: 6,
        designation: 'Marketplace Access',
        title: 'Efficient Marketplace for Farmers',
        img: img7,
        category: 'marketplace',
        description: 'Connecting farmers with a marketplace to sell produce directly to consumers, cutting out the middleman and increasing profits.'
    },
    {
        id: 7,
        designation: 'Seed Distribution',
        title: 'Access to High-Quality Seeds for Farmers',
        img: img8,
        category: 'seeds',
        description: 'Ensuring farmers have access to high-quality, drought-resistant seeds to help them combat climate change and grow better crops.'
    },
    {
        id: 8,
        designation: 'Agricultural Consulting',
        title: 'Customized Strategies for Agri-Businesses',
        img: img2,
        category: 'strategy',
        description: 'Providing farmers with tailored consulting services to improve their farming operations and make their businesses more sustainable.'
    }
];

export default fakeData;
