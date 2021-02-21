import React from "react";
import styled from "styled-components";

const TestimonialSection = () => {
  return (
    <SectionWrapper>
      <h2>CLIENT TESTIMONIALS</h2>
      <TestimonialCard>
        <div className="col1" id="person-details">
          <div className="row">
            <div className="col">
              <img
                className="avatar"
                src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/testimonials/nicole_dCjX5vm-6.jpg"
                alt="Guenefe Nicole"
              />
            </div>
            <div className="col">
              <h4>Guenefe Nicole</h4>
              <p>HR Officer - United Nations Guinea Bissau</p>
            </div>
          </div>
        </div>
        <div className="col1" id="person-comment">
          <p>Lorem ipsum lol... person's comment about the company</p>
        </div>
      </TestimonialCard>
      <hr />
      <TestimonialCard>
        <div className="col1" id="person-details">
          <div className="row">
            <div className="col">
              <img
                className="avatar"
                src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/testimonials/chim_Wtq_Z2LFb30f.jpg"
                alt="Chimene Mianze"
              />
            </div>
            <div className="col">
              <h4>Chimene Mianze</h4>
              <p>Head of distribution and Digital Banking - Ecobank CAR</p>
            </div>
          </div>
        </div>
        <div className="col1" id="person-comment">
          <p>Lorem ipsum lol... person's comment about the company</p>
        </div>
      </TestimonialCard>
      <hr />
      <TestimonialCard>
        <div className="col1" id="person-details">
          <div className="row">
            <div className="col">
              <img
                className="avatar"
                src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/testimonials/eugenes_mom_4SL6hHxV9.jpg"
                alt="Joyce Deloge"
              />
            </div>
            <div className="col">
              <h4>Joyce Deloge</h4>
              <p>Technical Specialist - UNDP Tanzania</p>
            </div>
          </div>
        </div>
        <div className="col1" id="person-comment">
          <p>Lorem ipsum lol... person's comment about the company</p>
        </div>
      </TestimonialCard>
      <hr />
      <TestimonialCard>
        <div className="col1" id="person-details">
          <div className="row">
            <div className="col">
              <img
                className="avatar"
                src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/testimonials/youssoupha_SnsNdGcqyO.jpg"
                alt="Youssoupha Niang"
              />
            </div>
            <div className="col">
              <h4>Youssoupha Niang</h4>
              <p>Regional Ombudsman and Coordinator - UN Kenya</p>
            </div>
          </div>
        </div>
        <div className="col1" id="person-comment">
          <p>Lorem ipsum lol... person's comment about the company</p>
        </div>
      </TestimonialCard>
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
  p {
    line-height: 1.6;
    text-align: center;
  }
  h2 {
    font-size: 3rem;
    font-family: "Ubuntu";
    font-weight: 600;
    color: #000;
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

//person card
const TestimonialCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 1rem 0;
  .avatar {
    vertical-align: middle;
    width: 3em;
    height: 3rem;
    border-radius: 50%;
    border: solid 2px #000;
    bacground-color: blue;
  }
  .col1 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 0.5rem;
  }
`;
