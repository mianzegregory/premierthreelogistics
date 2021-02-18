import React from "react";
import styled from "styled-components";

const SkillsSection = () => {
  return (
    <SectionWrapper>
      <h2>
        Our Industry-Specific
        <br />
        Competence
      </h2>
      <div className="row">
        <div className="skill">
          <img
            src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/icons/automotive_l7aPffGcP7HF.svg"
            alt="international freight"
          />
          <p>Automotive</p>
        </div>
        <div className="skill">
          <img
            src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/icons/med_fl6o2hZlj.svg"
            alt="Customs clearance"
          />
          <p>Medical Supplies</p>
        </div>
        <div className="skill">
          <img
            src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/icons/office_supplies_ttFgTWTwJN_EX.svg"
            alt="Delivery of goods"
          />
          <p>Office Supplies</p>
        </div>
        <div className="skill">
          <img
            src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/icons/electronics_aqouirHcQn.svg"
            alt="international freight"
          />
          <p>Electronics</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;

//page wrapper
const SectionWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  * {
    background-color: transparent;
  }
  h2,
  p {
    text-align: center;
  }
  h2 {
    color: #8e8e8e;
    font-size: 1.5rem;
    width: 50%;
    line-height: 1.5;
    margin-bottom: 3rem;
  }
  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    .skill {
      margin: 1rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 1.5rem;
      img {
        height: 4rem;
      }
      p {
        margin-top: 1rem;
        color: #000;
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.6;
      }
    }
  }
`;
