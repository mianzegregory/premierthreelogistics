import React from "react";
import styled from "styled-components";

const MainSection = () => {
  return (
    <SectionWrapper>
      <h1>
        GET TO KNOW MORE ABOUT THE COMPANY AND THE WONDERFUL TEAM DEDICATED TO
        RUNNING IT
      </h1>
    </SectionWrapper>
  );
};

export default MainSection;

//page wrapper
const SectionWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/aboutpage/top_img_blur_compressed_5dwcS8m5aMBp.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  h1 {
    color: white;
    text-align: center;
    background-color: transparent;
    font-size: 2.5rem;
    line-height: 1.5;
    width: 50%;
  }
`;