import React from "react";
import styled from "styled-components";
import ship from "../../assets/ship.svg";

const MainSection = () => {
  return (
    <SectionWrapper>
      <Col>
        <h1>PREMIER THREE LOGISTICS</h1>
        <p>One stop solution for all your logistics And shipping needs.</p>
        <div className="btn-row">
          <BTN>CONTACT US</BTN>
          <BTN>LEARN MORE</BTN>
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
  padding: 0 5%;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

//Column
const Col = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .btn-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

//Contact button
const BTN = styled.button`
  border-radius: 2rem;
  padding: 0.5rem;
  border: none;
  font-size: 0.9rem;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  color: white;
  background-color: #31b0c9;
  transition: 0.2s;
  font-weight: 600;
  :hover {
    background-color: #227a8b;
  }
`;
