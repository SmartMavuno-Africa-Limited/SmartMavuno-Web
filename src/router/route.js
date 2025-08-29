import Home from "../views/home";
import ContactUs from '../views/contactUs';
import AboutUs from '../views/aboutUs';
import ProjectDetails from "../views/projectDetails";
import Projects from "../components/Projects/projects";
import FarmLabour from "../components/FarmLabour/FarmLabour";
import Loan from "../components/loans/Loan";
import Community from "../components/communities/community";


const routes = [
    {
        components: <Home />,
        to: '/'
    },
    {
        components: <ContactUs />,
        to: '/contactUs'
    },
    {
        components: <AboutUs />,
        to: '/aboutUs'
    },
    {
        components: <ProjectDetails />,
        to: '/projectDetails'
    },
    {
        components: <Projects />,
        to: '/projects'
    },
    {
        components: <FarmLabour />,
        to: '/farmlabour'
    },
    {
        components: <Loan />,
        to: '/loans'
    },
     {
        components: <Community />,
        to: '/community'
    }

];

export default routes;