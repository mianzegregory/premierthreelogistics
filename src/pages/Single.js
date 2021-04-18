import React from "react";
import MainSection from "./sections/Main";
import ServicesSection from "./sections/Services";
import WhyUsSection from "./sections/WhyUS";
import GallerySection from "./sections/Gallery";
import AboutUsSection from "./sections/AboutUs";
// import TeamSection from "./sections/Team";
import TestimonialSection from "./sections/Testimonials";
import ContactSection from "./sections/Contact";

const MainPage = () => {
  return (
    <main>
      <MainSection />
      <ServicesSection />
      <WhyUsSection />
      <GallerySection />
      <AboutUsSection />
      {/* <TeamSection /> */}
      <TestimonialSection />
      <ContactSection />
    </main>
  );
};

export default MainPage;
