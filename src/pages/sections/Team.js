import React from "react";
import styled from "styled-components";

const TeamSection = () => {
  return (
    <SectionWrapper>
      <h2>OUR TEAM</h2>
      <p>Meet the wonderful team dedicated to running this company.</p>
      <br />
      <div className="card-row">
        <PersonCard>
          <div className="img-bg">
            <img
              src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/person_placeholder_gYT9O-we_.png"
              alt="person-img"
            />
          </div>
          <br />
          <hr />
          <h3>Person's name</h3>
          <p>Role within the company</p>
        </PersonCard>
        <PersonCard>
          <div className="img-bg">
            <img
              src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/person_placeholder_gYT9O-we_.png"
              alt="person-img"
            />
          </div>
          <br />
          <hr />
          <h3>Person's name</h3>
          <p>Role within the company</p>
        </PersonCard>
        <PersonCard>
          <div className="img-bg">
            <img
              src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/person_placeholder_gYT9O-we_.png"
              alt="person-img"
            />
          </div>
          <br />
          <hr />
          <h3>Person's name</h3>
          <p>Role within the company</p>
        </PersonCard>
      </div>
    </SectionWrapper>
  );
};

export default TeamSection;

//styles for the section
const SectionWrapper = styled.section`
  padding: 0 5%;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fdfdfd;
  h2 {
    color: #000;
  }
  p {
    color: #707070;
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

//team member card
const PersonCard = styled.div`
  border-radius: 0.5rem;
  lex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  h3,
  p {
    color: #1c74bb;
  }
  img {
    height: 20rem;
  }
  .img-bg {
    background-color: #f1ceb3;
    border-radius: 0.3rem;
  }
`;
