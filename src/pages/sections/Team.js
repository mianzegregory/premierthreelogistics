import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import MobileTeamSection from "./mobile/Team";

const TeamSection = () => {
  return isMobile ? (
    <MobileTeamSection />
  ) : (
    <SectionWrapper id="team">
      <h2>OUR TEAM</h2>
      <p>Meet the wonderful team dedicated to running this company.</p>
      <div className="card-row">
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
        {/* <PersonCard>
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
        </PersonCard> */}
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
  h2,
  p {
    line-height: 1.6;
    text-align: center;
    margin-bottom: 2rem;
  }
  h2 {
    font-size: 3rem;
    font-family: "Ubuntu";
    font-weight: 600;
  }
  p {
    font-size: 1.2rem;
    color: #7d7d7d;
    font-family: "Open Sans";
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
    text-align: left;
  }
  h3 {
    font-family: "Ubuntu";
    font-size: 1.2rem;
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
