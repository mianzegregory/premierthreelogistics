import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="copyrights">
        <p id="first">Premier Three Logistics ltd.</p>
        <p id="second">
          &#169; All rights reserved | 2021 - Powered by Premier Three Studio
        </p>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  bottom: 0;
  width: 100%;
  padding: 0.3rem 10%;
  background-color: #000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .copyrights,
  p {
    background-color: transparent;
    color: white;
    font-family: "Ubuntu";
    line-height: 1.6;
  }
  .copyrights {
    margin: 10px 80px;

    #first {
      font-size: 1.5rem;
      font-weight: 600;
    }
    #second {
      margin-top: 0.1rem;
      font-size: 0.8rem;
    }
  }
`;
