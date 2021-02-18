import React from "react";
import styled from "styled-components";

const MissionandVisionSection = () => {
  return (
    <SectionWrapper>
      <h2>Our Mission & Vision</h2>
      <div className="row">
        <Card>
          <img
            src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/icons/glasses_1h9xG99bId.svg"
            alt="glasses icon"
          />
          <p>
            Provide our esteemed clientele With quality services that not Only
            meet but exceed their Expectations.
          </p>
        </Card>
        <Card>
          <img
            src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/icons/info_xHMxTkdYh9K-.svg"
            alt="glasses icon"
          />
          <p>
            Build long-term relationships with our Customers and provide them
            with Exceptional services.
          </p>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default MissionandVisionSection;

//page wrapper
const SectionWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fcfcfc;
  * {
    background-color: transparent;
  }
  h2,
  p {
    text-align: center;
  }
  h2 {
    color: #707070;
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
    .service {
      margin: 1rem 0.5rem;
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

//Mission & vision card
const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 3rem 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  margin: 1rem;
  background-color: #fff !important;
  img {
    height: 2rem;
    margin-bottom: 2rem;
  }
  p {
    color: #707070;
    line-height: 2;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
  }
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
