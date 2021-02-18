import React from "react";
import styled from "styled-components";
import quality from "../../assets/quality.svg";
import affordable from "../../assets/affordable.svg";
import peace_of_mind from "../../assets/peace_of_mind.svg";

const WhyUsSection = () => {
  return (
    <SectionWrapper>
      <h2>WHY US</h2>
      <p>
        Find out why people love working with us and why You will want to choose
        us as well.
      </p>
      <div className="img-row">
        <div className="img_txt">
          <img src={quality} alt="plane" />
          <p>Unmatched Quality</p>
        </div>
        <div className="img_txt">
          <img src={affordable} alt="plane" />
          <p>Unbeatable Prices</p>
        </div>
        <div className="img_txt">
          <img src={peace_of_mind} alt="plane" />
          <p>Peace of Mind</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyUsSection;

//styles for the section
const SectionWrapper = styled.section`
  padding: 0 5%;
  width: 100vw;
  height: 100vh;
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
