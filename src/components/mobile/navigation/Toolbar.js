import React from "react";
import styled from "styled-components";

const MobileToolbar = () => {
  return (
    <ToolbarWrapper>
      <a href="#main">
        <img
          className="logo"
          src="https://ik.imagekit.io/sgmianze96/PremierThreeLogistics/Logo_lMQcLZB4Wb9N.svg"
          alt="Logo"
        />
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
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
        <li>
          <a href="#contact">
            <BTN>Contact us</BTN>
          </a>
        </li>
      </ul>
    </ToolbarWrapper>
  );
};

export default MobileToolbar;

const ToolbarWrapper = styled.header`
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 3;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: #fff;
  }
  li a {
    display: block;
    padding: 20px 20px;
    border-right: 1px solid #f4f4f4;
    font-weight: 600;
    font-size: 0.9rem;
    color: #000;
    line-height: 1.6;
    letter-spacing: 2px;
    text-decoration: none;
  }
  .logo {
    display: block;
    float: left;
    height: 4rem;
    padding: 1rem 2rem;
    text-decoration: none;
  }
  /* menu */
  .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.3s ease-out;
  }
  /* menu icon */
  .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 28px 20px;
    position: relative;
    user-select: none;
  }
  .menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.3s ease-out;
    width: 18px;
  }
  .menu-icon .navicon:before,
  .menu-icon .navicon:after {
    background: #333;
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.3s ease-out;
    width: 100%;
  }
  .menu-icon .navicon:before {
    top: 5px;
  }
  .menu-icon .navicon:after {
    top: -5px;
  }
  /* menu btn */
  .menu-btn {
    display: none;
  }
  .menu-btn:checked ~ .menu {
    max-height: 100%;
  }
  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }
  .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }
  .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }
  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }
  /* 48em = 768px */
  @media (min-width: 48em) {
    li {
      float: left;
    }
    li a {
      padding: 20px 30px;
    }
    .menu {
      clear: none;
      float: right;
      max-height: none;
    }
    .menu-icon {
      display: none;
    }
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
  background-color: #00c2cc;
  transition: 0.2s;
  font-weight: 600;
  :hover {
    background-color: #227a8b;
  }
`;
