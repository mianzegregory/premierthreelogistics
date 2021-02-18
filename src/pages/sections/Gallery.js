import React from "react";
import styled from "styled-components";

const GallerySection = () => {
  return (
    <SectionWrapper>
      <h2>GALLERY</h2>
      <p>
        Some of the products we delivered to our customers. Visit our social
        Media pages for more.
      </p>
      <div className="img-row">
        <img
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
      </div>
      <div className="img-row">
        <img
          id="img4"
          src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/4_B2aApAOC2lRz.jpg"
          alt="Hyundai"
        />
        <img
          id="img5"
          src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/3_mLHcMbdGS.jpg"
          alt="Mercedes"
        />
      </div>
    </SectionWrapper>
  );
};

export default GallerySection;

//styles for the section
const SectionWrapper = styled.section`
  padding: 0 5%;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
