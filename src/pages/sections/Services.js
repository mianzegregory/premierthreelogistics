import React from "react";
import styled from "styled-components";
import intl_freight from "../../assets/intl_freight.svg";
import delivery from "../../assets/delivery.svg";
import customs_clearance from "../../assets/customs_clearance.svg";
import { isMobile } from "react-device-detect";
import MobileServicesSection from "./mobile/Services";

const ServicesSection = () => {
  return isMobile ? (
    <MobileServicesSection />
  ) : (
    <SectionWrapper id="services">
      <h2>OUR SERVICES</h2>
      <p>
        We are dedicated to satisfying our customers with
        <br /> Our comprehensive list of services
      </p>
      <div className="img-row">
        <div className="img_txt">
          <img src={intl_freight} alt="plane" />
          <p>
            International
            <br /> Freight
          </p>
        </div>
        <div className="img_txt">
          <img src={delivery} alt="plane" />
          <p>
            Delivery of <br />
            Goods
          </p>
        </div>
        <div className="img_txt">
          <img src={customs_clearance} alt="plane" />
          <p>
            Customs <br />
            Clearance
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;

//styles for the section
const SectionWrapper = styled.section`
  padding: 0 10%;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2,
  p {
    text-align: center;
    line-height: 1.6;
  }
  h2 {
    font-size: 3rem;
    font-family: "Ubuntu";
    font-weight: 600;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.2rem;
    color: #7d7d7d;
    font-family: "Open Sans";
    margin-bottom: 2rem;
  }
  .img-row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    img {
      height: 7rem;
      margin-bottom: 1rem;
    }
    .img_txt {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    p {
      color: #000;
      font-size: 1.2rem;
      font-weight: 700;
      font-family: "Ubuntu";
      margin-bottom: 0;
    }
  }
`;
