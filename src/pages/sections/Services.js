import React from "react";
import styled from "styled-components";
import intl_freight from "../../assets/intl_freight.svg";
import delivery from "../../assets/delivery.svg";
import customs_clearance from "../../assets/customs_clearance.svg";

const ServicesSection = () => {
  return (
    <SectionWrapper>
      <h2>OUR SERVICES</h2>
      <p>
        We are dedicated to satisfying our customers with Our comprehensive list
        of services
      </p>
      <div className="img-row">
        <div className="img_txt">
          <img src={intl_freight} alt="plane" />
          <p>International Freight</p>
        </div>
        <div className="img_txt">
          <img src={delivery} alt="plane" />
          <p>Delivery of Goods</p>
        </div>
        <div className="img_txt">
          <img src={customs_clearance} alt="plane" />
          <p>Customs Clearance</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;

//styles for the section
const SectionWrapper = styled.section`
  padding: 0 5%;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .img-row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    img {
      height: 5rem;
    }
    .img_txt {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
