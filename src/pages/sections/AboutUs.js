import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import MobileAboutUsSection from "./mobile/About";

const AboutUsSection = () => {
  return isMobile ? (
    <MobileAboutUsSection />
  ) : (
    <SectionWrapper>
      <h2>ABOUT US</h2>
      <br />
      <p>
        We are a general supplies company based in Mombasa, Kenya with satellite
        bases in Nairobi, Rwanda and the <br />
        Central African Republic. Our primary objective is to nourish our
        existing business relationships and develop new <br />
        Partnerships with manufacturers based in Kenya looking to penetrate the
        Rwanda and central <br />
        African markets.
      </p>
      <br />
      <br />
      <p>
        We provide full solutions for small enterprises and multinationals
        covering all local aspects with in-house <br />
        Capabilities. Founded in 2017, our portfolio continues to grow in large
        part due to our Director’s diversity, <br />
        Logistics expertise and dedication to customer service.
      </p>
      <br />
      <br />
      <div className="card-row">
        <MVCard>
          <h3>MISSION</h3>
          <br />
          <p>
            Provide our esteemed clientele with quality services that not only
            meet but exceed their Expectations.
          </p>
        </MVCard>
        <MVCard>
          <h3>VISION</h3>
          <br />
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
  padding: 0 10%;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #000;
  h2,
  p {
    color: #fff;
    text-align: center;
    line-height: 1.6;
  }
  h2 {
    font-size: 3rem;
    font-family: "Ubuntu";
    font-weight: 600;
  }
  p {
    font-size: 1.2rem;
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

//mission and vision card
const MVCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff !important;
  padding: 3rem;
  width: 40%;
  h3 {
    color: #000;
    text-align: center;
  }
  p {
    color: #707070;
  }
`;
