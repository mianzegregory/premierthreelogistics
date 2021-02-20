import React from "react";
import styled from "styled-components";
import ship from "../../../assets/ship.svg";

const MobileMainSection = () => {
  return (
    <SectionWrapper>
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
      <img src={ship} alt="ship image" />
      <div className="btn-row">
        <ContactBTN>CONTACT US</ContactBTN>
        <LearnMoreBTN>LEARN MORE</LearnMoreBTN>
      </div>
    </SectionWrapper>
  );
};

export default MobileMainSection;

//styles for the section
const SectionWrapper = styled.section`
  padding: 8% 5%;
  margin: auto auto;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1,
  p {
    text-align: center;
    line-height: 1.6;
  }
  h1 {
    font-size: 2.5rem;
    font-family: "Ubuntu";
    font-weight: 600;
  }
  p {
    font-size: 1rem;
    color: #7d7d7d;
    font-family: "Open Sans";
  }
  .btn-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 2rem;
  }
`;

//contact button
const ContactBTN = styled.button`
  border-radius: 0.2rem;
  padding: 0.7rem 1rem;
  border: solid 2px;
  border-color: #31b0c9;
  font-size: 0.9rem;
  margin: 0 0.4rem;
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
`;