import React from "react";
import styled from "styled-components";

const SomeProdsSection = () => {
  return (
    <SectionWrapper>
      <h2>Some of the products We delivered to our Esteemed customers</h2>
      <div className="row">
        <div className="service">
          <img
            src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/15_VjJo99SL00EQT.jpg"
            alt="international freight"
          />
        </div>

        <div className="service">
          <img
            src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/15_VjJo99SL00EQT.jpg"
            alt="international freight"
          />
        </div>

        <div className="service">
          <img
            src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/15_VjJo99SL00EQT.jpg"
            alt="international freight"
          />
        </div>
      </div>
      <BTN>View more</BTN>
    </SectionWrapper>
  );
};

export default SomeProdsSection;

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
    font-size: 2.3rem;
    width: 50%;
    line-height: 1.5;
    margin-bottom: 3rem;
  }
  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    .service {
      cursor: pointer;
      margin: 1rem 0.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 1.5rem;
      img {
        height: 14rem;
      }
    }
  }
`;

//view more button
const BTN = styled.button`
  margin: 3rem 2rem;
  border-radius: 2rem;
  padding: 1rem;
  border: none;
  font-size: 1rem;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  color: white;
  background-color: #31b0c9;
  transition: 0.2s;
  font-weight: 600;
  :hover {
    background-color: #227a8b;
    font-size: 1.3rem;
  }
`;
