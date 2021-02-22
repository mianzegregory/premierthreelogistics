import React from "react";
import styled from "styled-components";

const MobileTestimonialSection = () => {
  return (
    <SectionWrapper id="testimonials">
      <h2>
        CLIENT
        <br />
        TESTIMONIALS
      </h2>
      <img
        className="avatar"
        src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/testimonials/nicole_dCjX5vm-6.jpg"
        alt="Guenefe Nicole"
      />
      <h4>Guenefe Nicole</h4>
      <p className="title">HR Officer - United Nations Guinea Bissau</p>
      <p className="comment">
        A solid 5 star experience. Goods delivered on time, with courtesy and
        care.
      </p>
      <img
        className="avatar"
        src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/testimonials/eugenes_mom_4SL6hHxV9.jpg"
        alt="Joyce Deloge"
      />
      <br />
      <h4>Joyce Deloge</h4>
      <p className="title">Technical Specialist - UNDP Tanzania</p>
      <br />
      <p className="comment">
        My experience was above expectation, pick up and delivery was prompt
        even during the lockdown period which I was worried about. The process
        was hustle free and I will definitely use them again.
      </p>
      <img
        className="avatar"
        src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/testimonials/youssoupha_SnsNdGcqyO.jpg"
        alt="Youssoupha Niang"
      />
      <br />
      <h4>Youssoupha Niang</h4>
      <p className="title">Regional Ombudsman and Coordinator - UN Kenya</p>
      <p className="comment">Outstanding delivery company.</p>
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
    font-size: 2rem;
    font-family: "Ubuntu";
    font-weight: 600;
    color: #000;
    margin-bottom: 2rem;
  }
  p {
    font-size: 0.8rem;
    color: #7d7d7d;
    font-family: "Open Sans";
  }
  .title {
    font-size: 0.7rem;
    color: #000;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .comment {
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
  .avatar {
    vertical-align: middle;
    width: 3em;
    border-radius: 50%;
    margin-bottom: 2rem;
  }
  * {
    background-color: transparent;
  }
`;
