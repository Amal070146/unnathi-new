import React from "react";
import "./GoverningBody.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import headerimg from "../../../assets/NavbarPages/GoverningBody/header-img.webp";


import { useTranslation } from "react-i18next";
// import i18next from "i18next";

import img1 from "../../../assets/NavbarPages/GoverningBody/img1.webp";
import img2 from "../../../assets/NavbarPages/GoverningBody/img2.webp";
import img3 from "../../../assets/NavbarPages/GoverningBody/image1.webp";
import img4 from "../../../assets/NavbarPages/GoverningBody/img4.webp";
import img5 from "../../../assets/NavbarPages/GoverningBody/img5.webp";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const GoverningBody = () => {
  const { t } = useTranslation(["GoverningBody"]);

  return (
    <>
      <Navbar />
      <div className="governingbody-wrapper">
        <div className="governingbody-header-set-wrapper">
          <img src={headerimg} alt="" />
          <div className="governingbody-header-set-cover"></div>
          <div className="governingbody-header-set-cover-text">
            <h2>{t("governing")}</h2>
            <h1>{t("body")}</h1>
          </div>
        </div>

        <div id="governingcontent" className="governingcontent-wrapper">
          <div className="governingcontent-individual-wrapper">
            <img src={img1} alt="img" loading="lazy" />
            <h3>{t("chairman")}</h3>
            <h2>{t("radhakrishnan")}</h2>
            <p>{t("radhakrishnanRole")}</p>
          </div>{" "}
          <div className="governingcontent-individual-wrapper">
            <img src={img2} alt="img" loading="lazy" />
            <h3>{t("viceChairman")}</h3>
            <h2>{t("jayatilak")}</h2>
            <p>{t("jayatilakRole")}</p>
          </div>{" "}
     
          <div className="governingcontent-individual-wrapper">
            <img src={img4} alt="img" loading="lazy" />
            <h3>{t("member")}</h3>
            <h2>{t("gopalakrishnan")}</h2>
            <p>{t("gopalakrishnanRole")}</p>
          </div>{" "}
          <div className="governingcontent-individual-wrapper">
            <img src={img5} alt="img" loading="lazy" />
            <h3>{t("member")}</h3>
            <h2>{t("meghashree")}</h2>
            <p>{t("meghashreeRole")}</p>
          </div>{" "}
          <div
            className="governingcontent-individual-wrapper"
            style={{ border: "none" }}
          >
            <div>
              {" "}
              <h3>{t("member")}</h3>
              <h2>{t("minimol")}.</h2>
              <p>{t("minimolRole")}</p>
            </div>
            <div
              style={{
                background: "#fbba16",
                width: "100%",
                height: "4px",
                margin: "20px 0px",
              }}
            ></div>
            <div>
              {" "}
              <h3>{t("member")}</h3>
              <h2>{t("sajeev")}</h2>
              <p>{t("sajeevRole")}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GoverningBody;
