import React from "react";
import styled from "styled-components";

const TestimonialsSection = () => {
  return (
    <SectionWrapper>
      <h2>What our esteemed customers have to say about us</h2>
      <div className="comment">
        <img
          src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/12_GzLGbVU5F.jpg"
          alt="avatar"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
      </div>
      <Line />
      <div className="comment">
        <p id="second">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <img
          src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/12_GzLGbVU5F.jpg"
          alt="avatar"
        />
      </div>
      <Line />
      <div className="comment">
        <img
          src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/12_GzLGbVU5F.jpg"
          alt="avatar"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
      </div>
      <BTN>Request a quote</BTN>
    </SectionWrapper>
  );
};

export default TestimonialsSection;

//page wrapper
const SectionWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fcfcfc;
  * {
    background-color: transparent;
  }
  h2,
  p {
    text-align: center;
  }
  h2 {
    color: #8e8e8e;
    font-size: 2.3rem;
    width: 50%;
    line-height: 1.5;
    margin-bottom: 3rem;
  }
  .comment {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 2rem 0;
    img {
      vertical-align: middle;
      height: 4rem;
      width: 4rem;
      border-radius: 50%;
    }
    p {
      margin-left: 2rem;
      width: 80%;
      text-align: left;
      line-height: 2;
    }
    #second {
      margin-right: 2rem;
    }
  }
`;

//view more button
const BTN = styled.button`
  margin: 3rem 2rem;
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

//horizontal line
const Line = styled.div`
  width: 50%;
  height: 2rem;
  border-bottom: 1px solid #cccccc;
`;
