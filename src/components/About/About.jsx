import React from "react";
import "./About.css";
import img from "../../assets/about-img.png";

const About = () => {
  return (
    <div className="about-home-wrapper" id="ABOUT">
      <div className="about-home-content-wrap">
        <h1>
          <span className="about-header-bottonline">What is</span>
          Unnathi ?
        </h1>
        <p>
          Unnathi (Kerala Empowerment Society) is an initiative of the
          Government of Kerala, registered under the the Travancore-Cochin
          Literary, Scientific and Charitable Societies Registration Act.
          <br></br> Our primary focus is the welfare and development of
          Scheduled Caste (SC) & Scheduled Tribe (ST)communities of Kerala
          through innovative and collaborative solutions. We adopt the best
          practices worldwide, listen to ideas, take reasonable risks and adopt
          techniques and technologies that can cut red-tape and deliver results
          in the most transparent and democratic means.
        </p>
      </div>
      <div className="about-home-img-wrap">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default About;
