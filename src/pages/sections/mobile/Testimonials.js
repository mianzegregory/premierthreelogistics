import React from "react";
import styled from "styled-components";

const MobileTestimonialSection = () => {
  return (
    <SectionWrapper>
      <h2>CLIENT TESTIMONIALS</h2>
      <br />
      <br />
      <img
        className="avatar"
        src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/testimonials/nicole_dCjX5vm-6.jpg"
        alt="Guenefe Nicole"
      />
      <br />
      <h4>Guenefe Nicole</h4>
      <p>HR Officer - United Nations Guinea Bissau</p>
      <p>Lorem ipsum lol... person's comment about the company</p>
      <br />
      <hr />
      <br />
      <img
        className="avatar"
        src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/testimonials/eugenes_mom_4SL6hHxV9.jpg"
        alt="Joyce Deloge"
      />
      <br />
      <h4>Joyce Deloge</h4>
      <p>Technical Specialist - UNDP Tanzania</p>
      <p>Lorem ipsum lol... person's comment about the company</p>
      <br />
      <hr />
      <br />
      <img
        className="avatar"
        src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/testimonials/youssoupha_SnsNdGcqyO.jpg"
        alt="Youssoupha Niang"
      />
      <br />
      <h4>Youssoupha Niang</h4>
      <p>Regional Ombudsman and Coordinator - UN Kenya</p>
      <p>Lorem ipsum lol... person's comment about the company</p>
    </SectionWrapper>
  );
};

export default MobileTestimonialSection;

//styles for the section
const SectionWrapper = styled.section`
  padding: 8% 5%;
  margin: auto auto;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  h2,
  p {
    line-height: 1.6;
    text-align: center;
  }
  h2 {
    font-size: 2.5rem;
    font-family: "Ubuntu";
    font-weight: 600;
    color: #000;
  }
  p {
    font-size: 0.9rem;
    color: #7d7d7d;
    font-family: "Open Sans";
  }
  .avatar {
    vertical-align: middle;
    width: 3em;
    border-radius: 50%;
  }
  * {
    background-color: transparent;
  }
`;
