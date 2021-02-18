import React from "react";
import styled from "styled-components";

const ContactPage = () => {
  return <PageWrapper>Contact Us</PageWrapper>;
};

export default ContactPage;

//page wrapper
const PageWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
