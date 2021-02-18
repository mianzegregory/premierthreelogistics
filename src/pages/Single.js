import React from "react";
import MainSection from "./sections/Main";
import ServicesSection from "./sections/Services";
import WhyUsSection from "./sections/WhyUS";
import GallerySection from "./sections/Gallery";

const MainPage = () => {
  return (
    <main>
      <MainSection />
      <ServicesSection />
      <WhyUsSection />
      <GallerySection />
    </main>
  );
};

export default MainPage;
