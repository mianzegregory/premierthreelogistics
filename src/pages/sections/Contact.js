import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import MobileContactSection from "./mobile/Contact";

const ContactSection = () => {
  return isMobile ? (
    <MobileContactSection />
  ) : (
    <SectionWrapper id="contact">
      <h2>CONTACT US</h2>
      <p>
        Have an enquiry or some feedback for us?
        <br />
        Reach out to us through one of the contact methods listed below
        <br />
        Or click one of the links down below
      </p>
      <nav className="footer-social-links">
        {/* <a
          href="https://www.linkedin.com/company/premierthreelogistics"
          target="_blank"
          rel="noreferrer noopener"
          className="social-link"
        >
          <i className="mdi mdi-linkedin"></i>
        </a> */}
        <a
          href="https://www.instagram.com/premierthreelogistics"
          target="_blank"
          rel="noreferrer noopener nofollow"
          className="social-link"
        >
          <i className="mdi mdi-instagram"></i>
        </a>
        {/* <a
          href="https://www.facebook.com/Premier-3-Logistics-107800514302439"
          target="_blank"
          rel="noreferrer noopener"
          className="social-link"
        >
          <i className="mdi mdi-facebook-box"></i>
        </a> */}
        <a
          href="mailto:info@premierthreelogistics.com?subject=Enquiry"
          target="_blank"
          rel="noreferrer noopener nofollow"
          className="social-link"
        >
          <i className="mdi mdi-google"></i>
        </a>
        <a
          href="tel:+254-719-655-469"
          target="_blank"
          rel="noreferrer noopener nofollow"
          class="social-link"
        >
          <i className="mdi mdi-phone"></i>
        </a>
      </nav>
      <p className="contact-info">Email: info@premierthreelogistics.com</p>
      <p className="contact-info">Phone Number: +254-719-655-469</p>
    </SectionWrapper>
  );
};

export default ContactSection;

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
    margin-bottom: 2rem;
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
  .footer-social-links {
    margin-bottom: 2rem;
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
    font-size: 1rem;
    color: #000;
    font-weight: 600;
    margin-bottom: 0;
  }
`;
