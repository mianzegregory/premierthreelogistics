import React from "react";
import styled from "styled-components";
import intl_freight from "../../../assets/intl_freight.svg";
import delivery from "../../../assets/delivery.svg";
import customs_clearance from "../../../assets/customs_clearance.svg";

const MobileServicesSection = () => {
  return (
    <SectionWrapper id="services">
      <h2>OUR SERVICES</h2>
      <p>
        We are dedicated to satisfying our customers with
        <br /> Our comprehensive list of services
      </p>
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
    </SectionWrapper>
  );
};

export default MobileServicesSection;

//styles for the section
const SectionWrapper = styled.section`
  padding: 8% 5%;
  margin: auto auto;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2,
  p {
    text-align: center;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
  h2 {
    font-size: 2rem;
    font-family: "Ubuntu";
    font-weight: 600;
  }
  p {
    font-size: 0.8rem;
    color: #7d7d7d;
    font-family: "Open Sans";
  }
  .img_txt {
      margin: 1.5rem 0;
    img {
      height: 5rem;
      margin-bottom: 1rem;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      color: #000;
      font-size: 0.8rem;
      font-weight: 700;
      font-family: "Ubuntu";
      margin-bottom: 0;
    }
  }
`;
