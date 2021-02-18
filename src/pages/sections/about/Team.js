import React from "react";
import styled from "styled-components";

const TeamSection = () => {
  return (
    <SectionWrapper>
      <h2>Our Team</h2>
      <div className="row">
        <div className="card_container">
          <Card>
            <img
              src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/person_placeholder_gYT9O-we_.png"
              alt="peron placeholder"
            />
          </Card>
          <Line />
          <p id="name">Name</p>
          <p id="position">Position</p>
        </div>
        <div className="card_container">
          <Card id="second_card">
            <img
              src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/person_placeholder_gYT9O-we_.png"
              alt="peron placeholder"
            />
          </Card>
          <Line />
          <p id="name">Name</p>
          <p id="position">Position</p>
        </div>
        <div className="card_container">
          <Card id="third_card">
            <img
              src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/person_placeholder_gYT9O-we_.png"
              alt="peron placeholder"
            />
          </Card>
          <Line />
          <p id="name">Name</p>
          <p id="position">Position</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TeamSection;

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
    .card_container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 30%;
      p {
        text-align: left;
        color: #1c74bb;
      }
      #name {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.3rem;
      }
      #position {
        font-size: 0.8rem;
      }
      #second_card {
        background-color: #f1ceb3 !important;
      }
      #third_card {
        background-color: #f1b3d6 !important;
      }
    }
  }
`;

//Team member card
const Card = styled.div`
  transition: 0.3s;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 1rem;
  background-color: #b3d6f1 !important;
  img {
    height: 20rem;
  }
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

//horizontal line
const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #cccccc;
  margin-bottom: 1rem;
`;
