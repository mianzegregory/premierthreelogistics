import React from "react";
import MainSection from "./sections/Main";
import ServicesSection from "./sections/Services";
import WhyUsSection from "./sections/WhyUS";
import GallerySection from "./sections/Gallery";
import AboutUsSection from "./sections/AboutUs";

const MainPage = () => {
  return (
    <main>
      <MainSection />
      <ServicesSection />
      <WhyUsSection />
      <GallerySection />
      <AboutUsSection />
    </main>
  );
};

export default MainPage;
