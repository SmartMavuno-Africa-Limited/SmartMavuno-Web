import Home from "../views/home";
import Service from "../views/services";
import ContactUs from '../views/contactUs';
import IndividualService from "../views/individualService";
import AboutUs from '../views/aboutUs';
import ProjectDetails from "../views/projectDetails";
import SMediaService from '../views/sMediaService';
import SignUp from '../components/Registration/SignUp';
import Login from '../components/Registration/Login';
import ForgotPassword from '../components/Registration/ForgotPassword';

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
        components: <SMediaService />,
        to: '/sMediaService'
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
    }

];

export default routes;