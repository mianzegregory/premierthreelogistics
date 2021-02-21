import React from "react";
import styled from "styled-components";
// import { isMobile } from "react-device-detect";

const MobileContactSection = () => {
  return (
    <SectionWrapper id="contact">
      <h2>CONTACT US</h2>
      <br />
      <p>
        Have an enquiry or some feedback for us?
        <br />
        Reach out to us through one of the contact methods listed below
        <br />
        Or click one of the links down below
      </p>
      <br /> <br />
      <nav class="footer-social-links">
        {/* <a
          href="https://www.linkedin.com/company/premierthreelogistics"
          target="_blank"
          rel="noreferrer noopener"
          class="social-link"
        >
          <i class="mdi mdi-linkedin"></i>
        </a> */}
        <a
          href="https://www.instagram.com/premierthreelogistics"
          target="_blank"
          rel="noreferrer noopener"
          class="social-link"
        >
          <i class="mdi mdi-instagram"></i>
        </a>
        {/* <a
          href="https://www.facebook.com/Premier-3-Logistics-107800514302439"
          target="_blank"
          rel="noreferrer noopener"
          class="social-link"
        >
          <i class="mdi mdi-facebook-box"></i>
        </a> */}
        <a
          href="mailto:info@premierthreelogistics.com?subject=Enquiry"
          class="social-link"
        >
          <i class="mdi mdi-google"></i>
        </a>
        <a href="tel:+254-719-655-469" class="social-link">
          <i class="mdi mdi-phone"></i>
        </a>
      </nav>
      <br /> <br />
      <p className="contact-info">Email: info@premierthreelogistics.com</p>
      <p className="contact-info">Phone Number: +254-719-655-469</p>
    </SectionWrapper>
  );
};

export default MobileContactSection;

//styles for the section
const SectionWrapper = styled.section`
  padding: 0 5%;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2,
  p {
    line-height: 1.6;
    text-align: center;
  }
  h2 {
    font-size: 2rem;
    font-family: "Ubuntu";
    font-weight: 600;
  }
  p {
    font-size: 0.8rem;
    color: #7d7d7d;
    font-family: "Open Sans";
  }
  * {
    background-color: transparent;
  }
  .footer-social-links .social-link {
    display: inline-block;
    text-align: center;
    line-height: 3rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: #000;
    color: #fff;
    margin-right: 2rem;
    transition: all 0.3s ease-in-out;
  }
  .footer-social-links .social-link:last-child {
    margin-right: 0;
  }
  .footer-social-links .social-link:hover {
    text-decoration: none;
    background-color: #f7f7f7;
    color: #000;
  }
  .contact-info {
    font-size: 0.8rem;
    color: #000;
    font-weight: 600;
  }
`;
