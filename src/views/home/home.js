import React from "react";
import Banner from '../../components/Banner';
import ServicesHome from "../../components/ServicesHome";
import CaseStudy from "../../components/CaseStudy";
import Footer from "../../components/Footer";
import AboutUsHome from "../../components/AboutUsHome";
import Testimonial from "../../components/Testimonial";
import Impact from "../../components/Impact";
import Productshowcase from "../../components/ProductShowcase";


const Home = () => {
  return (
    <>
      {/* Banner Section  */}
      <section>
        <Banner />
      </section>

      <section>
        <AboutUsHome />
      </section>

      {/* Why Choosing Us Section  */}
      <section>
        <Productshowcase />
      </section>
      
      {/* Services Section  */}
      <section>
        <ServicesHome />
      </section>

      {/* Case Study Section  */}
      <section>
        <CaseStudy />
      </section>

      {/* Real Section  */}
      <section>
        <Impact />
      </section>

      {/* Testimonial Section  */}
      <section>
        <Testimonial />
      </section>

      {/* Footer Section  */}
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Home;