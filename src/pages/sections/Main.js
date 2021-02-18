import React from "react";
import styled from "styled-components";

const MainSection = () => {
  return <SectionWrapper>
      Hello
  </SectionWrapper>;
};

export default MainSection;

//styles for the section
const SectionWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

//Column
const Col = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
