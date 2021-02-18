import React from "react";
import styled from "styled-components";

const StatsSection = () => {
  return (
    <SectionWrapper>
      <div className="stat">
        <img
          src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/icons/smile_1nF6HvQqZ.svg"
          alt="smile icon"
        />
        <div className="txt">
          <p>100+</p>
          <p>Customers</p>
        </div>
      </div>
      <div className="stat">
        <img
          src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/icons/planet_RFcT3oBmffVji.svg"
          alt="planet icon"
        />
        <div className="txt">
          <p>5</p>
          <p>Countries</p>
        </div>
      </div>
      <div className="stat">
        <img
          src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/icons/thumbs_up_PufJbDONRn.svg"
          alt="thumbs icon"
        />
        <div className="txt">
          <p>100+</p>
          <p>Deliveries</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default StatsSection;

//page wrapper
const SectionWrapper = styled.section`
  padding: 1.5rem 10%;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #13444e;
  * {
    background-color: transparent;
  }
  p {
    color: white;
  }
  .stat {
    margin: 0 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
      height: 4rem;
    }
    p {
      color: #fff;
      font-size: 1.5rem;
      font-weight: 600;
    }
    .txt {
      margin-left: 0.5rem;
    }
  }
`;
