import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import MobileToolbar from "../mobile/navigation/Toolbar";

const Toolbar = () => {
  return isMobile ? (
    MobileToolbar
  ) : (
    <Wrapper>
      <a href="#main">
        <img
          className="logo"
          src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/Logo_lMQcLZB4Wb9N.svg"
          alt="Logo"
        />
      </a>
      <nav>
        <ul className="nav_links">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#whyus">Why us</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
      </nav>
      <a href="#contact">
        <BTN>Contact us</BTN>
      </a>
    </Wrapper>
  );
};

export default Toolbar;

const Wrapper = styled.div`
  position: fixed;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2%;
  background-color: #000;
  margin: auto;
  left: 0;
  right: 0;
  top: 1rem;
  border-radius: 5rem;
  * {
    background-color: transparent;
  }
  li,
  a {
    font-weight: 600;
    font-size: 0.9rem;
    color: #fff;
    line-height: 1.6;
    letter-spacing: 2px;
    text-decoration: none;
  }
  .logo {
    cursor: pointer;
    height: 2rem;
  }
  .nav_links {
    list-style: none;
    margin: 0 1rem;
  }
  .nav_links li {
    display: inline-block;
    padding: 0px 20px;
  }
  .nav_links li a {
    transition: all 0.3s ease 0s;
  }
  .nav_links li a:hover {
    color: #0088a9;
  }
`;

//request a quote button
const BTN = styled.button`
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
