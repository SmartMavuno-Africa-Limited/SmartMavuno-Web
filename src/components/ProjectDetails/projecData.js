import loan from '../../assets/projectDetails/loan.jpg';
import marketplace from '../../assets/projectDetails/market.jpg';
import weather from '../../assets/projectDetails/weather.jpg';

const projectData = [
    {
        id: 1,
        banner: loan,
        title: 'Insured Farm Financing Loans',
        heading: 'Financial Security for Farmers with Insurance-Backed Loans',
        subHeading: 'We provide low-interest loans for farmers backed by insurance, ensuring they have financial security even in the event of crop failure or unforeseen circumstances.',
        card: {
            client: 'AgriFinance Solutions',
            categories: 'Finance, Loans',
            date: '15 November 2023',
            tags: 'loans, finance, insurance, agriculture',
            img: loan
        },
        para1: 'Our insured farm financing loans help farmers secure the capital they need to purchase equipment, seeds, and fertilizers, with the added protection of insurance coverage against crop loss.',
        para2: 'This program enables farmers to access affordable financing while mitigating the risks associated with farming, such as unpredictable weather and pests.',
        para3: 'We partner with agricultural banks and insurance providers to offer these financial products, ensuring farmers have access to both resources and protection.',
        summary: 'With insured financing, we’re helping farmers grow their businesses with confidence, knowing they are covered in times of uncertainty.',
        img1: loan,
    },
    {
        id: 2,
        banner: marketplace,
        title: 'MarketPlace Solutions',
        heading: 'Connecting Farmers with Buyers and Storage Facilities',
        subHeading: 'Our digital marketplace enables farmers to sell their produce directly to buyers, while also offering storage solutions to help manage inventory and reduce waste.',
        card: {
            client: 'MarketHub Inc.',
            categories: 'Marketplace, E-commerce, Logistics',
            date: '25 November 2023',
            tags: 'marketplace, e-commerce, farming, logistics',
            img: marketplace
        },
        para1: 'Our platform connects farmers directly with buyers, eliminating middlemen and allowing farmers to sell their produce at competitive prices.',
        para2: 'In addition to facilitating transactions, we provide storage solutions to help farmers store excess produce, reducing waste and improving their ability to respond to market demand.',
        para3: 'The marketplace also offers farmers access to logistics services, helping them deliver their products efficiently and cost-effectively.',
        summary: 'The MarketPlace program creates a streamlined supply chain, giving farmers better access to markets and reducing post-harvest losses.',
        img1: marketplace,
    },
    {
        id: 3,
        banner: weather,
        title: 'Weather Updates and Climate Actions',
        heading: 'Tracking Weather Patterns for Better Farming Decisions',
        subHeading: 'We provide farmers with real-time weather updates and climate change data, helping them adapt their farming practices to changing environmental conditions.',
        card: {
            client: 'AgriWeather Solutions',
            categories: 'Weather, Climate, Sustainability',
            date: '5 November 2023',
            tags: 'weather, climate change, updates, farming',
            img: weather
        },
        para1: 'Our platform delivers accurate weather forecasts and climate data to farmers, helping them plan their agricultural activities with better insight into potential weather patterns.',
        para2: 'By receiving real-time updates on weather conditions, farmers can optimize irrigation, planting, and harvesting schedules to mitigate risks caused by extreme weather events.',
        para3: 'Climate action is a key focus of our work, as we aim to educate farmers on sustainable practices that can help them adapt to the changing climate and reduce their environmental impact.',
        summary: 'Weather and climate updates are vital tools for modern farmers to navigate unpredictable conditions and ensure crop success.',
        img1: weather,
    }
];

export default projectData;