import React from "react";
import MainSection from "./sections/home/Main";
import AboutSection from "./sections/home/About";
import WhyUsSection from "./sections/home/WhyUs";
import SomeProdsSection from "./sections/home/SomeProds";
import TestimonialsSection from "./sections/home/Testimonials";
import StatsSection from "./sections/home/Stats";

const HomePage = () => {
  return (
    <main>
      <MainSection />
      <AboutSection />
      <WhyUsSection />
      <StatsSection />
      <SomeProdsSection />
      <TestimonialsSection />
    </main>
  );
};

export default HomePage;
