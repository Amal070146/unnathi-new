import React from "react";
import "./About.css";
import img from "../../assets/about-img.webp";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation(["About"]);
  return (
    <div className="about-home-wrapper" id="ABOUT" data-aos="fade-right">
      <div className="about-home-content-wrap">
        <h1>
          <span className="about-header-bottonline">{t("what_is")}</span>
          {t("unnathi")}
        </h1>
        <p>
          {t("unnathi_description_para1")} <br />
          {t("unnathi_description_para2")}
        </p>
      </div>
      <div className="about-home-img-wrap">
        <img src={img} alt="" loading="lazy"/>
      </div>
    </div>
  );
};

export default About;
