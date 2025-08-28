import React from "react";
import Banner from '../../components/Banner';
import ChoosingUs from "../../components/ChoosingUs";
import ServicesHome from "../../components/ServicesHome";
import CaseStudy from "../../components/CaseStudy";
import Footer from "../../components/Footer";
import AboutUsHome from "../../components/AboutUsHome";
import Testimonial from "../../components/Testimonial";
import Impact from "../../components/Impact";


const Home = () => {
  return (
    <>
      {/* Banner Section  */}
      <section>
        <Banner />
      </section>

      About Us Section
      <section>
        <AboutUsHome />
      </section>

      {/* Why Choosing Us Section  */}
      <section>
        <ChoosingUs />
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