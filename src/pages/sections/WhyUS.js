import React from "react";
import styled from "styled-components";
import quality from "../../assets/quality.svg";
import affordable from "../../assets/affordable.svg";
import peace_of_mind from "../../assets/peace_of_mind.svg";

const WhyUsSection = () => {
  return (
    <SectionWrapper>
      <h2>WHY US</h2>
      <br />
      <p>
        Find out why people love working with us and why
        <br /> You will want to choose us as well.
      </p>
      <br />
      <br />
      <div className="img-row">
        <div className="img_txt">
          <img src={quality} alt="plane" />
          <br />
          <p>
            Unmatched <br />
            Quality
          </p>
        </div>
        <div className="img_txt">
          <img src={affordable} alt="plane" />
          <br />
          <p>
            Unbeatable <br />
            Prices
          </p>
        </div>
        <div className="img_txt">
          <img src={peace_of_mind} alt="plane" />
          <br />
          <p>
            Peace of <br />
            Mind
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyUsSection;

//styles for the section
const SectionWrapper = styled.section`
  padding: 0 10%;
  width: 100vw;
  height: 100vh;
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
  .img-row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    img {
      height: 7rem;
    }
    .img_txt {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    p {
      font-size: 1.2rem;
      font-weight: 700;
      font-family: "Ubuntu";
    }
  }
`;
