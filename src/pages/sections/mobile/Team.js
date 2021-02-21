import React from "react";
import styled from "styled-components";

const MobileTeamSection = () => {
  return (
    <SectionWrapper id="team">
      <h2>OUR TEAM</h2>
      <br />
      <p>Meet the wonderful team dedicated to running this company.</p>
      <br /> <br />
      <PersonCard>
        <div className="img-bg">
          <img
            src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/team/jean_iPEeRKxcZsoy.png"
            alt="Jean Tristan Mianze"
          />
        </div>
        <br />
        <hr />
        <br />
        <h3>Jean Tristan Mianze</h3>
        <p>Director & Logistics Specialist</p>
      </PersonCard>
      <PersonCard>
        <div className="img-bg" id="img-bg2">
          <img
            src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/team/greg_6GeRaeR1Qv-b.png"
            alt="Steeve Gregory Mianze"
          />
        </div>
        <br />
        <hr />
        <br />
        <h3>Steeve Gregory Mianze</h3>
        <p>UI/UX Designer & Web Developer</p>
      </PersonCard>
    </SectionWrapper>
  );
};

export default MobileTeamSection;

//styles for the section
const SectionWrapper = styled.section`
  padding: 8% 5%;
  margin: auto auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fdfdfd;
  h2,
  p {
    line-height: 1.6;
    text-align: center;
  }
  h2 {
    font-size: 2rem;
    font-family: "Ubuntu";
    font-weight: 600;
  }
  p {
    font-size: 0.8rem;
    color: #7d7d7d;
    font-family: "Open Sans";
  }
  * {
    background-color: transparent;
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
    text-align: left;
  }
  h3 {
    font-family: "Ubuntu";
    font-size: 1rem;
    margin-bottom: 3px;
  }
  p {
    font-family: "Open Sans";
    font-size: 0.8rem;
  }
  img {
    height: 12rem;
  }
  .img-bg {
    background-color: #b3d6f1;
    border-radius: 0.3rem;
  }
  #img-bg2 {
    background-color: #b3f1ed;
  }
`;
