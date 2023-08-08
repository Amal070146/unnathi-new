import React from "react";
import "./GoverningBody.css";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import headerimg from "../../../assets/NavbarPages/GoverningBody/header-img.png";

import logo from "../../../assets/logo.png";
import logo_mal from "../../../assets/logo_mal.png";

import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { AiFillCloseCircle } from "react-icons/ai";
import { useReactPath } from "../../../components/Navbar/path.hook";

import LanguageSwitcher from "../../../components/LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import img1 from "../../../assets/NavbarPages/GoverningBody/img1.png";
import img2 from "../../../assets/NavbarPages/GoverningBody/img2.png";
import img3 from "../../../assets/NavbarPages/GoverningBody/img3.png";
import img4 from "../../../assets/NavbarPages/GoverningBody/img4.png";
import img5 from "../../../assets/NavbarPages/GoverningBody/img5.png";

const GoverningBody = () => {
  const { t } = useTranslation(["Navbar"]);
  const [openmenu, setopenmenu] = useState(false);
  const [navlogo, setnavlogo] = useState(false);
  function openMenu() {
    console.log("true");
    setopenmenu(!openmenu);
  }
  function closeMenu() {
    setopenmenu(false);
  }

  const path = useReactPath();
  const navContent = [
    t("about"),
    t("governingBody"),
    t("media"),
    t("partners"),
    t("donate"),
    t("projects"),
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
            {navContent.slice(0, 3).map((content, i) => (
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
                style={{ width: navlogo ? "90px" : "180px" }}
                src={i18next.language === "en" ? logo : logo_mal}
                alt=""
              />
            </a>
            {navContent.slice(3, 6).map((content, i) => (
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
          </div>

          <div className="navbar-mob">
            <a href="/home">
              <img
                className="nav-logo"
                style={{ width: navlogo ? "90px" : "150px" }}
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
                <LanguageSwitcher />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="governingbody-wrapper">
        <div className="governingbody-header-set-wrapper">
          <img src={headerimg} alt="" />
          <div className="governingbody-header-set-cover"></div>
          <div className="governingbody-header-set-cover-text">
            <h2>GOVERNING</h2>
            <h1>BODY</h1>
          </div>

          <a href="#governingcontent" className="volunteering-arrow">
            <span
              style={{ borderColor: "black" }}
              class="m_scroll_arrows unu"
            ></span>
            <span
              style={{ borderColor: "black" }}
              class="m_scroll_arrows doi"
            ></span>
            <span
              style={{ borderColor: "black" }}
              class="m_scroll_arrows trei"
            ></span>
            <span
              style={{ borderColor: "black" }}
              class="m_scroll_arrows quad"
            ></span>
          </a>
        </div>

        <div id="governingcontent" className="governingcontent-wrapper">
          <div className="governingcontent-individual-wrapper">
            <img src={img1} alt="" />
            <h3>CHAIRMAN</h3>
            <h2>Sri. K. Radhakrishnan</h2>
            <p>
              Hon Minister for Welfare of Scheduled Castes, Scheduled Tribes &
              Backward Classes, Kerala
            </p>
          </div>{" "}
          <div className="governingcontent-individual-wrapper">
            <img src={img2} alt="" />
            <h3>Vice Chairman</h3>
            <h2>Dr A. Jayatilak IAS</h2>
            <p>
              Additional Chief Secretary, Scheduled Castes & Scheduled Tribes
              Development Department, Govt of Kerala
            </p>
          </div>{" "}
          <div className="governingcontent-individual-wrapper">
            <img src={img3} alt="" />
            <h3>Convenor/CEO</h3>
            <h2>Sri. Prasanth N. IAS</h2>
            <p>
              Special Secretary, Scheduled Castes & Scheduled Tribes Development
              Department, Govt of Kerala
            </p>
          </div>{" "}
          <div className="governingcontent-individual-wrapper">
            <img src={img4} alt="" />
            <h3>Member</h3>
            <h2>Sri. K Gopalakrishnan IAS</h2>
            <p>
              Director, Scheduled Castes Development Department, Govt of Kerala
            </p>
          </div>{" "}
          <div className="governingcontent-individual-wrapper">
            <img src={img5} alt="" />
            <h3>Member</h3>
            <h2>Smt. Meghashree D.R. IAS</h2>
            <p>
              Director, Scheduled Tribes Development Department, Govt of Kerala
            </p>
          </div>{" "}
          <div className="governingcontent-individual-wrapper">
            <div>
              {" "}
              <h3>Member</h3>
              <h2>Smt. Minimol V. G.</h2>
              <p>
                Additional Secretary, Scheduled Castes & Scheduled Tribes
                Development Department, Govt of Kerala
              </p>
            </div>
            <div style={{ background: "#fbba16",width:"100%",height:"4px",margin:"10px 0px" }}></div>
            <div>
              {" "}
              <h3>Member</h3>
              <h2>Sri. V. Sajeev</h2>
              <p>
                Additional Director, Scheduled Castes Development Department,
                Govt of Kerala
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GoverningBody;
