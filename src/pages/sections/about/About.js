import React from "react";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <SectionWrapper>
      <h2>About us</h2>
      <Row>
        <Column>
          <p>
            Premier Three Logistics Limited is a general supplies company based
            in Mombasa, Kenya with satellite bases in Nairobi, Kigali in Rwanda
            and Bangui in The Central African Republic.
          </p>
          <p>
            The company’s primary objective is to nourish its existing business
            relationships and develop new partnerships with manufacturers based
            in Kenya looking to penetrate the Rwanda and Central African
            markets.
          </p>
        </Column>
        <Column>
          <p>
            We provide full solutions for small enterprises and multinationals
            covering all local aspects with in-house capabilities. Founded in
            2017, our portfolio continues to grow in large part due to our
            Director’s diversity, logistics expertise and dedication to customer
            service.
          </p>
        </Column>
      </Row>
    </SectionWrapper>
  );
};

export default AboutSection;

//section wrapper
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
  h2 {
    text-align: center;
    color: #707070;
    font-size: 1.5rem;
    width: 50%;
    line-height: 1.5;
    margin-bottom: 3rem;
  }
`;

//Row
const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

//column
const Column = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  p {
    color: #707070;
    font-size: 1rem;
    line-height: 2;
    margin-bottom: 1rem;
    width: 80%;
  }
`;
