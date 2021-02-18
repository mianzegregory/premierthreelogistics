import React from "react";
import MainSection from "./sections/about/Main";
import AboutSection from "./sections/about/About";
import MissionandVisionSection from "./sections/about/MissionVision";
import SkillsSection from "./sections/about/Skills";
import TeamSection from "./sections/about/Team";
import ContactsSection from "./sections/about/Contacts";

const AboutPage = () => {
  return (
    <main>
      <MainSection />
      <AboutSection />
      <MissionandVisionSection />
      <SkillsSection />
      <TeamSection />
      <ContactsSection />
    </main>
  );
};

export default AboutPage;
