import React from "react";
import styled from "styled-components";

const MobileFooter = () => {
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

export default MobileFooter;

const Wrapper = styled.footer`
  bottom: 0;
  width: 100%;
  padding: 0.3rem 10%;
  background-color: #000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  * {
    background-color: transparent;
  }
  .copyrights {
    p {
      color: white;
      font-family: "Ubuntu";
      line-height: 1.6;
    }

    #first {
      font-size: 1rem;
      font-weight: 600;
    }
    #second {
      font-size: 0.6rem;
    }
  }
`;
