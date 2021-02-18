import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="copyrights">
        <p id="first">Premier Three Logistics ltd.</p>
        <p id="second">&#169; All rights reserved | 2020</p>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  bottom: 0;
  width: 100%;
  padding: 0.5rem 10%;
  background-color: #13444e;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .copyrights,
  p {
    background-color: transparent;
    color: white;
  }
  .copyrights {
    margin: 10px 80px;

    #first {
      font-size: 1.5rem;
      font-weight: 600;
    }
    #second {
      margin-top: 0.5rem;
      font-size: 0.8rem;
    }
  }
`;
