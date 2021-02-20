import React from "react";
import MainSection from "./sections/Main";
import ServicesSection from "./sections/Services";
import WhyUsSection from "./sections/WhyUS";
import GallerySection from "./sections/Gallery";
import AboutUsSection from "./sections/AboutUs";
import TeamSection from "./sections/Team";

const MainPage = () => {
  return (
    <main>
      <MainSection />
      <ServicesSection />
      <WhyUsSection />
      <GallerySection />
      <AboutUsSection />
      <TeamSection />
    </main>
  );
};

export default MainPage;
