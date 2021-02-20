import React from "react";
import styled from "styled-components";

const TestimonialSection = () => {
  return (
    <SectionWrapper>
      <h2>CLIENT TESTIMONIALS</h2>
    </SectionWrapper>
  );
};

export default TestimonialSection;

//styles for the section
const SectionWrapper = styled.section`
  padding: 0 5%;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  h2 {
    color: #000;
  }
  p {
    color: #707070;
  }
  * {
    background-color: transparent;
  }
`;
