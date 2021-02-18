import React from "react";
import styled from "styled-components";

const WhyUsSection = () => {
  return (
    <SectionWrapper>
      <h2>Why people choose Premier Three Logistics</h2>
      <div className="row">
        <div className="reason">
          <p id="num">1</p>
          <p id="title">QUALITY</p>
          <p id="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="reason">
          <p id="num">2</p>
          <p id="title">TRANSPARENCY</p>
          <p id="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="reason">
          <p id="num">3</p>
          <p id="title">AFFORDABILITY</p>
          <p id="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="row" id="second_row">
        <div className="reason">
          <p id="num">4</p>
          <p id="title">RESPONSIBILITY</p>
          <p id="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="reason">
          <p id="num">5</p>
          <p id="title">VERSATILITY</p>
          <p id="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyUsSection;

//page wrapper
const SectionWrapper = styled.section`
  padding: 0 10%;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2,
  p {
    text-align: center;
  }
  h2 {
    color: #8e8e8e;
    font-size: 2.3rem;
    width: 40%;
    line-height: 1.5;
    margin-bottom: 3rem;
  }
  #second_row {
    margin-top: 3rem;
  }
  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    .reason {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 27%;
      p {
        margin: 0.5rem 0;
      }
      #num {
        color: #31b0c9;
        font-weight: 600;
        font-size: 1.3rem;
      }
      #title {
        color: #000;
        font-weight: 600;
        font-size: 1.3rem;
      }
      #desc {
        color: #8e8e8e;
        font-weight: 600;
        font-size: 0.9rem;
        line-height: 1.8;
      }
    }
  }
`;
