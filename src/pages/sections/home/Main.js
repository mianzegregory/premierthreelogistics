import React from "react";
import styled from "styled-components";

const MainSection = () => {
  return (
    <SectionWrapper>
        <h1>ONE-STOP SOLUTION FOR ALL YOUR SHIPPING AND LOGISTICS NEEDS</h1>
        <BTN>Request a quote</BTN>
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
    url("https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/homepage/top_img_blur_compressed_gA3v0Rdf45.jpg");
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

//request a quote button
const BTN = styled.button`
margin: 3rem 0;
  border-radius: 2rem;
  padding: 1rem;
  border: none;
  font-size: 1rem;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  color: white;
  background-color: #31b0c9;
  transition: 0.2s;
  font-weight: 600;
  :hover {
    background-color: #227a8b;
    font-size: 1.3rem;
  }
`;
