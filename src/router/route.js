import Home from "../views/home";
import Service from "../views/services";
import ContactUs from '../views/contactUs';
import IndividualService from "../views/individualService";
import AboutUs from '../views/aboutUs';
import ProjectDetails from "../views/projectDetails";
import SignUp from '../components/Registration/SignUp';
import Login from '../components/Registration/Login';
import ForgotPassword from '../components/Registration/ForgotPassword';
import Blog from "../components/Blog/blog";
import Projects from "../components/Projects/projects";
import ModernFarming from "../components/ModernFarming/ModernFarming";


const routes = [
    {
        components: <Home />,
        to: '/'
    },
    {
        components: <Service />,
        to: '/services'
    },
    {
        components: <ContactUs />,
        to: '/contactUs'
    },
    {
        components: <IndividualService />,
        to: '/individualService'
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
        components: <Blog />,
        to: '/blog'
    },
    {
        components: <SignUp />,
        to: '/signup'
    },
    {
        components: <Login />,
        to: '/login'
    },
    {
        components: <ForgotPassword />,
        to: '/forgot-password'
    },
    {
        components: <ModernFarming />,
        to: '/modernfarming'
    }

];

export default routes;