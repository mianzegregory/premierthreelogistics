import React from "react";
import styled from "styled-components";
import quality from "../../../assets/quality.svg";
import affordable from "../../../assets/affordable.svg";
import peace_of_mind from "../../../assets/peace_of_mind.svg";

const MobileWhyUsSection = () => {
  return (
    <SectionWrapper id="whyus">
      <h2>WHY US</h2>
      <p>
        Find out why people love working with us and why
        <br /> You will want to choose us as well.
      </p>
      <div className="img_txt">
        <img src={quality} alt="plane" />
        <p>
          Unmatched <br />
          Quality
        </p>
      </div>
      <div className="img_txt">
        <img src={affordable} alt="plane" />
        <p>
          Unbeatable <br />
          Prices
        </p>
      </div>
      <div className="img_txt">
        <img src={peace_of_mind} alt="plane" />
        <p>
          Peace of <br />
          Mind
        </p>
      </div>
    </SectionWrapper>
  );
};

export default MobileWhyUsSection;

//styles for the section
const SectionWrapper = styled.section`
  padding: 8% 5%;
  margin: auto auto;
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
    margin-bottom: 2rem;
  }
  h2 {
    font-size: 2rem;
    font-family: "Ubuntu";
    font-weight: 600;
  }
  p {
    font-size: 0.8rem;
    font-family: "Open Sans";
  }
  * {
    background-color: transparent;
  }
  .img_txt {
    margin: 1.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      height: 5rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 0.8rem;
      font-weight: 700;
      font-family: "Ubuntu";
      margin-bottom: 0;
    }
  }
`;
