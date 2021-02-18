import React from "react";
import styled from "styled-components";

const AboutUsSection = () => {
  return (
    <SectionWrapper>
      <h2>ABOUT US</h2>
      <p>
        We are a general supplies company based in Mombasa, Kenya with satellite
        bases in Nairobi, Rwanda and the Central African Republic. Our primary
        objective is to nourish our existing business relationships and develop
        new partnerships with manufacturers based in Kenya looking to penetrate
        the Rwanda and Central African markets.
      </p>
      <br />
      <p>
        We provide full solutions for small enterprises and multinationals
        covering all local aspects with in-house capabilities. Founded in 2017,
        our portfolio continues to grow in large part due to our Director’s
        diversity, logistics expertise and dedication to customer service.
      </p>
    </SectionWrapper>
  );
};

export default AboutUsSection;

//styles for the section
const SectionWrapper = styled.section`
  padding: 0 5%;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  h2,
  p {
    color: #fff;
  }
  * {
    background-color: transparent;
  }
`;
