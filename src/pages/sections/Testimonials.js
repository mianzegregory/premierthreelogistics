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
                src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/team/greg_6GeRaeR1Qv-b.png"
                alt="Steeve Gregory Mianze"
              />
            </div>
            <div className="col">
              <h4>Person's name</h4>
              <p>Person's title</p>
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

//person card
const TestimonialCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
    justify-content: center;
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
