import React from "react";
import styled from "styled-components";

const ContactsSection = () => {
  return (
    <SectionWrapper>
      <ContactCard>
        <p>41311-80100</p>
        <p>Mombasa, Kenya</p>
        <p>Telephone: +254 719 655 469</p>
        <p>E-mail: info@premierthreelogistics.com</p>
      </ContactCard>
    </SectionWrapper>
  );
};

export default ContactsSection;

const SectionWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/aboutpage/map_img_qu6fz83L3AVA.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

//card holding contacts details
const ContactCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 3rem 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  margin: 1rem;
  background-color: #fff !important;
  img {
    height: 2rem;
    margin-bottom: 2rem;
  }
  p {
    color: #707070;
    line-height: 2;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
  }
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
