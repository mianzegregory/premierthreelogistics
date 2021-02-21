import React from "react";
import styled from "styled-components";
// import { isMobile } from "react-device-detect";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact">
      <h2>CONTACT US</h2>
      <br />
      <p>
        Have an enquiry or some feedback for us?
        <br />
        Fill the form below to contact us
      </p>
      <br /> <br />
    </SectionWrapper>
  );
};

export default ContactSection;

//styles for the section
const SectionWrapper = styled.section`
  padding: 0 5%;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2,
  p {
    line-height: 1.6;
    text-align: center;
  }
  h2 {
    font-size: 3rem;
    font-family: "Ubuntu";
    font-weight: 600;
  }
  p {
    font-size: 1.2rem;
    color: #7d7d7d;
    font-family: "Open Sans";
  }
  * {
    background-color: transparent;
  }
`;
