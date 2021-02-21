import React from "react";
import styled from "styled-components";

const MobileGallerySection = () => {
  return (
    <SectionWrapper>
      <h2>GALLERY</h2>
      <br />
      <p>
        Some of the products we delivered to our customers. Visit our social
        <br />
        Media pages for more.
      </p>
      <br />
      <br />
      {/* <img
        id="img1"
        src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/1_XO7J5t0ds.jpg"
        alt="Suzuki Swift"
      />
      <img
        id="img2"
        src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/12_GzLGbVU5F.jpg"
        alt="Toyota Vanguard"
      />
      <img
        id="img3"
        src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/17_K--sTVeVR.jpg"
        alt="Wolfswagen Golf"
      />

      <img
        id="img4"
        src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/4_B2aApAOC2lRz.jpg"
        alt="Hyundai"
      />
      <img
        id="img5"
        src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/3_mLHcMbdGS.jpg"
        alt="Mercedes"
      /> */}
       <img
          src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/12_GzLGbVU5F.jpg"
          alt="Toyota Vanguard"
        />
        <img
          src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/17_K--sTVeVR.jpg"
          alt="Wolfswagen Golf"
        />
        <img
          src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/3_mLHcMbdGS.jpg"
          alt="Mercedes"
        />
        <img
          src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/4_B2aApAOC2lRz.jpg"
          alt="Hyundai"
        />
        <img
          src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/gallery/vanguard_5tksVFhS7kOD.jpg"
          alt="Toyota Vanguard"
        />
    </SectionWrapper>
  );
};

export default MobileGallerySection;

//styles for the section
const SectionWrapper = styled.section`
  padding: 10%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2,
  p {
    text-align: left;
    line-height: 1.6;
    text-align: center;
  }
  h2 {
    font-size: 3rem;
    font-family: "Ubuntu";
    font-weight: 600;
  }
  p {
    font-size: 1.2rem;
    color: #7d7d7d;
    font-family: "Open Sans";
  }
  * {
    background-color: transparent;
  }
  img {
    max-width: 100%;
    margin: 0.1rem;
  }
`;
