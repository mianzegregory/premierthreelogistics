import React from "react";
import styled from "styled-components";
import arrowup from "../../assets/arrow-up-bold.svg";

const BackToTopBtn = () => {
  return (
    <a href="#main">
      <Wrapper>
        <div className="icon-cont">
          <img src={arrowup} alt="" />
        </div>
      </Wrapper>
    </a>
  );
};

export default BackToTopBtn;

const Wrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: transparent;
  .icon-cont {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
