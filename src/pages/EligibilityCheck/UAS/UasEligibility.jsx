import React, { useState, useEffect } from "react";
import { BsCheckLg } from "react-icons/bs";
import "../Eligibility.css";

import logo from "../../../assets/logo.webp";
import logo_mal from "../../../assets/logo_mal.webp";
import { BiMenu } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import LanguageSwitcher from "../../../components/LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useReactPath } from "../../../components/Navbar/path.hook";

const UasEligibility = (props) => {
  const { t } = useTranslation(["GoverningBody"]);
  const [openmenu, setopenmenu] = useState(false);
  const [navlogo, setnavlogo] = useState(false);
  function openMenu() {
    console.log("true");
    setopenmenu(!openmenu);
  }

  useEffect(() => {
    i18next.changeLanguage("en");
  }, []);

  const path = useReactPath();
  const navContent = [
    t("Governing-Body"),
    t("UAS"),
    t("internship"),
    t("volunteering"),
  ];
  useEffect(() => {}, [path]);
  const changenavlogo = () => {
    window.scrollY >= 250 ? setnavlogo(true) : setnavlogo(false);
    return navlogo;
  };

  useEffect(() => {
    window.addEventListener("scroll", changenavlogo);

    return () => {
      window.removeEventListener("scroll", changenavlogo);
    };
  }, []);
  const [currSection, setCurrSection] = useState(0);
  const [radioData, setRadioData] = useState(Array(3).fill(null));

  const [page, setPage] = useState("null"); //temporary replace with usenavigate later on

  const sectionCount = 3; //following list should be of this size
  const questions = [
    "How do you describe yourself? ",
    "Why do you think Unnathi should engage you in such a crucial position? ",
    "What is the level of time and dedication that can be expected from you for Unnathi?",
  ];
  const images = [
    "https://apply.teachforindia.org/assets/img/MaskgroupMobile_2_0.png",
    "https://apply.teachforindia.org/assets/img/Maskgroup_2_1.png",
    "https://apply.teachforindia.org/assets/img/MaskgroupMobile_2_2.png",
  ];
  const radioValue = [
    ["I’m a professional", "I’m a post graduate", "I’m an entrepreneur"],
    [
      "I’m a senior professional with substantial experience of leading teams and building organisations. My domain knowledge is exceptional. ",
      "I’m a passionate leader with exceptional drive, dedication and proven track-record of excellence. My technical knowledge is world-class. ",
      "I’m an entrepreneur and good at executing idea and building teams. I’m good at conceiving and rolling out new projects.",
    ],
    [
      "One year of dedicated on-site engagement in Unnathi HQ . Timely delivery of results. Passion towards the cause and speed of execution is my strength.",
      "One year of off-site/remote engagement. Timely delivery of results. Exceptional passion towards the cause and speed of execution compensates for physical absence. I rely on technology big time.",
      "One year of hybrid engagement and timely delivery of results. Passion towards the cause and speedy execution using technology compensates for my physical absence. I am speed!",
    ],
  ];

  const handleRadioClick = (e) => {
    const temp = [...radioData];
    temp[currSection] = e.target.value;
    setRadioData(temp);
  };

  const handleSectionChange = (direction) => {
    if (direction === -1) {
      //Go back
      if (currSection === 0) {
        //At first section
      } else setCurrSection(currSection - 1);
    }
    if (direction === 1) {
      //Go front

      if (currSection === 2) {
        //At last seciton
        if (radioData.includes(null)) {
          //Not Eligible
          setPage("NotEligible");
          setCurrSection(0);
          console.log("NE");
        } else {
          //Eligible
          setPage("Eligible");
        }
      } else setCurrSection(currSection + 1);
    }
  };
  return (
    <>
      <div className="navbar-wrapper">
        <div
          className="navbar"
          style={{
            background: navlogo ? "rgba(1,1,1,0.4)" : "transparent",
          }}
        >
          <div className="navbar-desk">
            {navContent.slice(0, 2).map((content, i) => (
              <a href={`/${content}`} key={i.toString() + content}>
                <p
                  style={{
                    borderBottom: window.location.href.includes(`/${content}`)
                      ? "4px solid #FBBA16"
                      : "",
                    textTransform: "capitalize",
                    padding: "5px 10px 0px",
                    color: navlogo ? "#fff" : "#000",
                  }}
                >
                  {content}
                </p>
              </a>
            ))}
            <a href="/home">
              <img
                className="nav-logo"
                style={{ width: navlogo ? "90px" : "100px" }}
                src={i18next.language === "en" ? logo : logo_mal}
                alt=""
              />
            </a>
            {navContent.slice(2, 4).map((content, i) => (
              <a href={`/${content}`} key={i.toString() + content}>
                <p
                  style={{
                    borderBottom: window.location.href.includes(`/${content}`)
                      ? "4px solid #FBBA16"
                      : "",
                    textTransform: "capitalize",
                    padding: "5px 10px 0px",
                    color: navlogo ? "#fff" : "#000",
                  }}
                >
                  {content}
                </p>
              </a>
            ))}
            {/* <LanguageSwitcher /> */}
          </div>

          <div className="navbar-mob">
            <a href="/home">
              <img
                className="nav-logo"
                style={{ width: navlogo ? "90px" : "100px" }}
                src={i18next.language === "en" ? logo : logo_mal}
                alt=""
              />
            </a>
            <button
              style={{ backgroundColor: "transparent", border: "none" }}
              onClick={openMenu}
            >
              {openmenu ? (
                <RxCross1 style={{ color: "black", fontSize: "40px" }} />
              ) : (
                <BiMenu style={{ color: "black", fontSize: "40px" }} />
              )}
            </button>

            {openmenu && (
              <div className="menu-div">
                {navContent.map((content, i) => (
                  <a href={`/${content}`} key={i.toString() + content}>
                    <p
                      style={{
                        color: window.location.href.includes(`/${content}`)
                          ? "#FBBA16"
                          : "",
                        textTransform: "capitalize",
                        padding: "5px 10px",
                        borderRadius: "20px",
                        color: navlogo ? "#fff" : "#000",
                      }}
                    >
                      {content}
                    </p>
                  </a>
                ))}
                {/* <LanguageSwitcher /> */}
              </div>
            )}
          </div>
        </div>
      </div>
      {(() => {
        if (page === "NotEligible") {
          return (
            <div className="Eligibility NotEligible">
              <div className="containerBody">
                <div className="contentBox">
                  <b style={{ fontSize: "1.5rem" }}>
                    Unfortunately, it looks like you're not eligible to apply
                    this time!
                  </b>
                  <p>
                    We wish you could join us, but it looks like you don't meet
                    the criteria for the Unnathi UAS, make sure you have filled
                    all the details correctly.
                  </p>
                  <ol></ol>
                  {/* <p>
                    If you're not eligible to work in India, you can apply to a{" "}
                    <a href="https://teachforall.org/teach-your-country">
                      Teach For All Fellowship in a different country
                    </a>
                    .
                  </p> */}
                  <br />

                  <br />
                  <p>
                    If you actually fit all the criteria, answer the
                    'eligibility check' questions again!
                  </p>

                  <div className="btn">
                    <button
                      onClick={() => {
                        setPage(null);
                        setRadioData(Array(3).fill(null));
                      }}
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        } else if (page === "Eligible") {
          return (
            <div className="Eligibility NotEligible">
              <div className="containerBody">
                <div
                  style={{ justifyContent: "center" }}
                  className="contentBox"
                >
                  <b style={{ fontSize: "1.5rem" }}>You are eligible !</b>
                  <p>
                    You satisfy all our criteria and are eligible to apply.
                    Click on the button below to proceed.
                  </p>

                  <div className="btn">
                    <a
                      className="applybutton"
                      target="_blank"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSd8EqIHmztbsmG_ch8vJD4rcbmVKsM82i2UcLfzzDJB_r11oQ/viewform?usp=pp_url"
                      style={{ background: "#FBBA16", color: "white" }}
                    >
                      <a style={{ color: "white" }}>Apply</a>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="Eligibility">
              <div className="containerBody">
                <div className="contentBox">
                  <b>
                    Let's check if you're eligible to apply for the Unnathi UAS.
                  </b>
                  <div className="steps">
                    <span className="line"></span>
                    {(() => {
                      const arr = [];
                      for (let i = 0; i < sectionCount; i++)
                        arr.push(
                          <div
                            className={
                              i <= currSection ? "circle " : "circle grey"
                            }
                            key={`circle${i}`}
                          >
                            {i < currSection ? <BsCheckLg /> : i}
                          </div>
                        );
                      return arr;
                    })()}
                  </div>
                  <b>{questions[currSection]}</b>
                  <div className="radio">
                    {radioValue[currSection].map((label, index) => {
                      return (
                        <label
                          htmlFor={`radio1${index}`}
                          key={label.toString()}
                        >
                          <input
                            type="radio"
                            name="radio"
                            id={`radio1${index}`}
                            value={label}
                            onChange={handleRadioClick}
                            checked={label === radioData[currSection]}
                          />
                          {label}
                        </label>
                      );
                    })}
                  </div>

                  <div className="btn">
                    <button onClick={() => handleSectionChange(-1)}>
                      Back
                    </button>
                    <button onClick={() => handleSectionChange(1)}>
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })()}
      <div className="footer-bottom-eligibility">
        <p style={{ textAlign: "center" }}>
          Copyright © 2023 All Rights Reserved. Unnathi
        </p>
      </div>
    </>
  );
};

export default UasEligibility;
