import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import MobileTestimonialSection from "./mobile/Testimonials";

const TestimonialSection = () => {
  return isMobile ? (
    <MobileTestimonialSection />
  ) : (
    <SectionWrapper>
      <h2>CLIENT TESTIMONIALS</h2>
      <br />
      <br />
      <div className="card-row">
        <TestimonialCard>
          <img
            className="avatar"
            src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/testimonials/nicole_dCjX5vm-6.jpg"
            alt="Guenefe Nicole"
          />
          <br />
          <h4>Guenefe Nicole</h4>
          <p>HR Officer - United Nations Guinea Bissau</p>
          <p>Lorem ipsum lol... person's comment about the company</p>
        </TestimonialCard>
        <TestimonialCard>
          <img
            className="avatar"
            src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/testimonials/youssoupha_SnsNdGcqyO.jpg"
            alt="Youssoupha Niang"
          />
          <br />
          <h4>Youssoupha Niang</h4>
          <p>Regional Ombudsman and Coordinator - UN Kenya</p>
          <p>Lorem ipsum lol... person's comment about the company</p>
        </TestimonialCard>
        <TestimonialCard>
          <img
            className="avatar"
            src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/testimonials/eugenes_mom_4SL6hHxV9.jpg"
            alt="Joyce Deloge"
          />
          <br />
          <h4>Joyce Deloge</h4>
          <p>Technical Specialist - UNDP Tanzania</p>
          <p>Lorem ipsum lol... person's comment about the company</p>
        </TestimonialCard>
      </div>
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
  h2,
  h4 p {
    line-height: 1.6;
  }
  h4,
  p {
    text-align: left;
  }
  h2 {
    font-size: 3rem;
    font-family: "Ubuntu";
    text-align: center;
    font-weight: 600;
    color: #000;
  }
  p {
    font-size: 1.2rem;
    color: #7d7d7d;
    font-family: "Open Sans";
  }
  hr {
    width: 40%;
    border: 0.5px solid #e4e4e4;
  }
  * {
    background-color: transparent;
  }
  .card-row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

//person card
const TestimonialCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 0.3rem;
  lex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff !important;
  padding: 3rem;
  width: 30%;
  h4 {
    color: #000;
    text-align: center;
  }
  p {
    color: #707070;
  }
  .avatar {
    vertical-align: middle;
    width: 3em;
    border-radius: 50%;
  }
`;
