import React from "react";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <SectionWrapper>
      <h2>
        We are dedicated to satisfying Our customers with our comprehensive List
        of services
      </h2>
      <div className="row">
        <div className="service">
          <img
            src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/icons/int_freight_kGWC-2Fcbose.svg"
            alt="international freight"
          />
          <p>International Freight</p>
        </div>

        <div className="service">
          <img
            src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/icons/customs_clr_Ba7MQGQEEJS1H.svg"
            alt="Customs clearance"
          />
          <p>Customs Clearance</p>
        </div>

        <div className="service">
          <img
            src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/icons/delivery_W3NEfqq2LN.svg"
            alt="Delivery of goods"
          />
          <p>Goods Delivery</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;

//page wrapper
const SectionWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fcfcfc;
  * {
    background-color: transparent;
  }
  h2,
  p {
    text-align: center;
  }
  h2 {
    color: #8e8e8e;
    font-size: 2.3rem;
    width: 50%;
    line-height: 1.5;
    margin-bottom: 3rem;
  }
  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    .service {
      margin: 1rem 0.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 1.5rem;
      img {
        height: 4rem;
      }
      p {
        margin-top: 1rem;
        color: #000;
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.6;
      }
    }
  }
`;
