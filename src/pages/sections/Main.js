import React from "react";
import styled from "styled-components";
import ship from "../../assets/ship.svg";

const MainSection = () => {
  return (
    <SectionWrapper>
      <Col>
        <h1>
          PREMIER THREE <br />
          LOGISTICS
        </h1>
        <br />
        <p>
          One stop solution for all your logistics <br /> And shipping needs.
        </p>
        <br />
        <br />
        <div className="btn-row">
          <ContactBTN>CONTACT US</ContactBTN>
          <LearnMoreBTN>LEARN MORE</LearnMoreBTN>
        </div>
      </Col>
      <Col>
        <img src={ship} alt="ship image" />
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
  }
  h1 {
    font-size: 3rem;
    font-family: "Ubuntu";
    font-weight: 600;
  }
  p {
    font-size: 1.5rem;
    color: #7d7d7d;
    font-family: open-sans;
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
  border: solid 2px #31b0c9;
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
`;

//learn more button
const LearnMoreBTN = styled.button`
  border-radius: 0.2rem;
  padding: 0.7rem 1rem;
  border: solid 2px #31b0c9;
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
`;