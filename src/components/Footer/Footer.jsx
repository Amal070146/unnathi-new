import React from "react";
import logo from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-toper">
        <img src={logo} alt="" />
        <div>
          <a href="">MEDIA</a>
          <a href="">NEWS</a>
          <a href="">IMPACT</a>
          <a href="">PRIVACY POLICY</a>
          <a href="">DISCLAIMER</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p style={{ textAlign: "center" }}>
          Copyright © 2023 All Rights Reserved. Unnathi x GTech MuLearn
        </p>
      </div>
    </div>
  );
};

export default Footer;
