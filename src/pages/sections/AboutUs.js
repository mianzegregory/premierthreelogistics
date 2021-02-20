import React from "react";
import styled from "styled-components";

const AboutUsSection = () => {
  return (
    <SectionWrapper>
      <h2>ABOUT US</h2>
      <p>
        We are a general supplies company based in Mombasa, Kenya with satellite
        bases in Nairobi, Rwanda and the Central African Republic. Our primary
        objective is to nourish our existing business relationships and develop
        new partnerships with manufacturers based in Kenya looking to penetrate
        the Rwanda and Central African markets.
      </p>
      <br />
      <p>
        We provide full solutions for small enterprises and multinationals
        covering all local aspects with in-house capabilities. Founded in 2017,
        our portfolio continues to grow in large part due to our Director’s
        diversity, logistics expertise and dedication to customer service.
      </p>
      <div className="card-row">
        <MVCard>
          <h3>MISSION</h3>
          <p>
            Provide our esteemed clientele with quality services that not only
            meet but exceed their Expectations.
          </p>
        </MVCard>
        <MVCard>
          <h3>VISION</h3>
          <p>
            Build long-term relationships with our Customers and provide them
            with Exceptional services.
          </p>
        </MVCard>
      </div>
    </SectionWrapper>
  );
};

export default AboutUsSection;

//styles for the section
const SectionWrapper = styled.section`
  padding: 0 5%;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  h2,
  p {
    color: #fff;
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

//mission and vision card
const MVCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 0.5rem;
  lex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff !important;
  padding: 1rem;
  width: 40%;
  height: 15rem;
  h2 {
    color: #000;
  }
  p {
    color: #707070;
  }
`;
