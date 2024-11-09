import cardImg from '../../assets/projectDetails/card.png';
import projectImg1 from '../../assets/projectDetails/project1.png';
import weather from '../../assets/projectDetails/weather.jpg';
import donate1 from '../../assets/projectDetails/donate1.jpeg';
import donate2 from '../../assets/projectDetails/donate2.jpeg';
import labour from '../../assets/projectDetails/labour.jpg';
import laon from '../../assets/projectDetails/loan.jpg';
import IoT from '../../assets/projectDetails/IoT.jpg';
import marketplace from '../../assets/projectDetails/market.jpg';
import agribusinesses from '../../assets/projectDetails/loan.jpg';

import donate from '../../assets/projectDetails/donations.jpg';



const fakeData = [
    {
        id: 1,
        banner: donate,
        title: 'Donation Basket',
        heading: 'Supporting Farmers Through Donation Programs',
        subHeading: 'We aim to provide resources and donations to struggling farmers, helping them access essential tools, seeds, and equipment for sustainable farming.',
        card: {
            client: 'AgriSupport Foundation',
            categories: 'Donation, Sustainability',
            date: '1 November 2023',
            tags: 'donations, support, farmers, sustainability',
            img: donate2
        },
        para1: 'Our Donation Basket initiative collects and distributes essential agricultural resources such as seeds, tools, and fertilizers to small-scale farmers who need them most.',
        para2: 'By collaborating with various agricultural organizations, we’re able to provide these critical resources to farmers affected by natural disasters, economic downturns, and other challenges.',
        para3: 'Through donations, we are helping farmers improve their livelihoods, increase their productivity, and ensure food security in their local communities.',
        summary: 'The Donation Basket program is a lifeline for farmers in need, ensuring they have the resources required for the next planting season.',
        img1: donate1,
    },
    {
        id: 2,
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
    },
    {
        id: 3,
        banner: labour,
        title: 'Farm Labor Solutions',
        heading: 'Balancing Human and Machine Labor in Agriculture',
        subHeading: 'Our project focuses on improving farm labor efficiency by integrating human workers with automation and machine-assisted farming techniques.',
        card: {
            client: 'AgriLabor Solutions',
            categories: 'Labor, Automation',
            date: '10 November 2023',
            tags: 'labor, automation, farming, technology',
            img: labour
        },
        para1: 'We combine human labor with automation to reduce the physical strain on farm workers while increasing productivity. Our solutions include drone-assisted planting and automated harvesting.',
        para2: 'Through training programs, we equip farmers with the knowledge to operate new technology alongside traditional farming techniques, improving overall farm efficiency.',
        para3: 'Automation in agriculture is revolutionizing the industry, helping reduce labor costs and improve working conditions for farm employees.',
        summary: 'By leveraging both human and machine labor, we are enhancing farm productivity and ensuring the well-being of agricultural workers.',
        img1: labour,
    },
    {
        id: 4,
        banner: laon,
        title: 'Insured Farm Financing Loans',
        heading: 'Financial Security for Farmers with Insurance-Backed Loans',
        subHeading: 'We provide low-interest loans for farmers backed by insurance, ensuring they have financial security even in the event of crop failure or unforeseen circumstances.',
        card: {
            client: 'AgriFinance Solutions',
            categories: 'Finance, Loans',
            date: '15 November 2023',
            tags: 'loans, finance, insurance, agriculture',
            img: laon
        },
        para1: 'Our insured farm financing loans help farmers secure the capital they need to purchase equipment, seeds, and fertilizers, with the added protection of insurance coverage against crop loss.',
        para2: 'This program enables farmers to access affordable financing while mitigating the risks associated with farming, such as unpredictable weather and pests.',
        para3: 'We partner with agricultural banks and insurance providers to offer these financial products, ensuring farmers have access to both resources and protection.',
        summary: 'With insured financing, we’re helping farmers grow their businesses with confidence, knowing they are covered in times of uncertainty.',
        img1: laon,
    },
    {
        id: 5,
        banner: IoT,
        title: 'Affordable IoT Farm Devices',
        heading: 'Leveraging IoT Technology for Smarter Farming',
        subHeading: 'Our IoT devices help farmers monitor and manage their crops and livestock in real-time, offering affordable solutions for precision agriculture.',
        card: {
            client: 'IoTFarm Solutions',
            categories: 'Technology, IoT, Agriculture',
            date: '20 November 2023',
            tags: 'IoT, devices, technology, farming',
            img: IoT
        },
        para1: 'We provide affordable IoT devices designed to monitor key farming parameters such as soil moisture, temperature, and crop health, helping farmers make informed decisions.',
        para2: 'These devices enable farmers to track their fields remotely and receive real-time alerts, improving farm management and reducing resource wastage.',
        para3: 'Our mission is to make smart farming technology accessible to all farmers, regardless of their scale or budget, to drive sustainable agriculture.',
        summary: 'IoT devices empower farmers to optimize their farming practices, reduce waste, and increase yields with minimal investment.',
        img1: IoT,
    },
    {
        id: 6,
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
        id: 7,
        banner: agribusinesses,
        title: 'Agri-Business Strategy',
        heading: 'Building Scalable and Profitable Agribusiness Models',
        subHeading: 'We help agribusinesses develop strategies to scale their operations, improve profitability, and navigate the complexities of the modern agricultural landscape.',
        card: {
            client: 'AgriConsulting',
            categories: 'Business Strategy, Consulting',
            date: '30 November 2023',
            tags: 'business strategy, growth, agriculture',
            img: cardImg
        },
        para1: 'Our consultancy services focus on helping agribusinesses identify growth opportunities, optimize their supply chains, and expand into new markets.',
        para2: 'We provide actionable insights to improve business operations, reduce costs, and increase profitability, ensuring long-term success in the agriculture sector.',
        para3: 'Whether it’s through technology adoption, process optimization, or market expansion, we help businesses develop strategies that are both scalable and sustainable.',
        summary: 'Our Agri-Business Strategy services empower agricultural enterprises to build more efficient, profitable, and future-proof businesses.',
        img1: projectImg1,
    }
];

export default fakeData;
