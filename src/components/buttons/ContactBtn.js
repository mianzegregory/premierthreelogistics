import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";

const ContactBTN = () => (
  <Popup trigger={<BtnWrapper>Request a quote</BtnWrapper>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
);

export default ContactBTN;

//button style
const BtnWrapper = styled.button`
  border-radius: 2rem;
  padding: 0.5rem;
  border: none;
  font-size: 0.9rem;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  color: white;
  background-color: #31b0c9;
  transition: 0.2s;
  font-weight: 600;
  :hover {
    background-color: #227a8b;
  }
`;
