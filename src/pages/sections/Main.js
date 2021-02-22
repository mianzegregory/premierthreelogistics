import React from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import ship from "../../assets/ship.svg";
import MobileMainSection from "./mobile/Main";

const MainSection = () => {
  return isMobile ? (
    <MobileMainSection />
  ) : (
    <SectionWrapper id="main">
      <Col>
        <h1>
          PREMIER THREE <br />
          LOGISTICS
        </h1>
        <p>
          One stop solution for all your logistics <br /> And shipping needs.
        </p>
        <div className="btn-row">
          <a href="#contact">
            <ContactBTN>CONTACT US</ContactBTN>
          </a>
          <a href="#services">
            <LearnMoreBTN>LEARN MORE</LearnMoreBTN>
          </a>
        </div>
      </Col>
      <Col>
        <img src={ship} alt="ship" />
      </Col>
    </SectionWrapper>
  );
};

export default MainSection;

//styles for the section
const SectionWrapper = styled.section`
  padding: 0 10%;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

//Column
const Col = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1,
  p {
    text-align: left;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
  h1 {
    font-size: 3rem;
    font-family: "Ubuntu";
    font-weight: 600;
  }
  p {
    font-size: 1.2rem;
    color: #7d7d7d;
    font-family: "Open Sans";
  }
  .btn-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 45%;
  }
`;

//contact button
const ContactBTN = styled.button`
  border-radius: 0.2rem;
  padding: 0.7rem 1rem;
  border: solid 2px;
  border-color: #31b0c9;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  color: white;
  background-color: #31b0c9;
  transition: 0.2s;
  font-weight: 600;
  :hover {
    font-size: 1.2rem;
  }
  @media(max-width: 1366px) {
    font-size: 0.9rem;
  }
`;

//learn more button
const LearnMoreBTN = styled.button`
  border-radius: 0.2rem;
  padding: 0.7rem 1rem;
  border: solid 2px;
  border-color: #31b0c9;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  color: #31b0c9;
  background-color: #fff;
  transition: 0.2s;
  font-weight: 600;
  :hover {
    font-size: 1.2rem;
  }
  @media(max-width: 1366px) {
    font-size: 0.9rem;
  }
`;
