import logo from "../../../assets/logo.webp";
import logo_mal from "../../../assets/logo_mal.webp";

import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { AiFillCloseCircle } from "react-icons/ai";
import { useReactPath } from "../../../components/Navbar/path.hook";

import LanguageSwitcher from "../../../components/LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const Navbar = () => {
  const { t } = useTranslation(["GoverningBody"]);
  const [openmenu, setopenmenu] = useState(false);
  const [navlogo, setnavlogo] = useState(false);
  function openMenu() {
    console.log("true");
    setopenmenu(!openmenu);
  }
  function closeMenu() {
    setopenmenu(false);
  }

  useEffect(() => {
    i18next.changeLanguage("en");
  }, []);

  const path = useReactPath();
  const navContent = [
    t("governingBody"),
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
  return (
    <div className="navbar-wrapper">
      <div
        className="navbar"
        style={{
          background: navlogo ? "rgba(1,1,1,0.4)" : "transparent",
        }}
      >
        <div className="navbar-desk">
          {navContent.slice(0, 2).map((content, i) => (
            //find the value of teh link using content from links object
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
          <a
            href="https://www.odepc.net/unnathi/"
            style={{ marginTop: "5px", color: navlogo ? "#fff" : "#000" }}
          >
            Scholorships
          </a>

          <a href="/home">
            <img
              className="nav-logo"
              style={{ width: navlogo ? "90px" : "180px" }}
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
          <div className="dropdown">
            <button style={{ color: navlogo ? "#fff" : "#000" }}>
              Others&nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
              >
                <path
                  d="M1 1L7 7L13 1"
                  stroke="white"
                  style={{ stroke: navlogo ? "#fff" : "#000" }}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div id="dropdown-content" class="dropdown-content">
              <div className="space-container"></div>
              <div className="dropdown-content-in">
                <a href="/tender" target="_blank">
                  Tenders
                </a>
                <a href="https://scdd.kerala.gov.in" target="_blank">
                  SCDD
                </a>
                <a href="https://www.stdd.kerala.gov.in/home-5" target="_blank">
                  STDD
                </a>
                <a href="https://tribal.nic.in" target="_blank">
                  MoTA
                </a>
                <a href="https://socialjustice.gov.in" target="_blank">
                  Social Justice
                </a>
                <a href="https://stcmis.gov.in" target="_blank">
                  STCMIS
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="navbar-mob"
          style={{ background: openmenu ? "white" : "transparent" }}
        >
          <a href="/home">
            <img
              className="nav-logo"
              style={{ width: navlogo ? "90px" : "120px" }}
              src={i18next.language === "mal" ? logo_mal : logo}
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
              <div className="innerSetMenuDiv">
                {navContent.map((content, i) => (
                  <a href={`/${content}`} key={i.toString() + content}>
                    <p
                      style={{
                        color: window.location.href.includes(`/${content}`)
                          ? "#FBBA16"
                          : "",
                        textTransform: "capitalize",
                        padding: "5px 0px 0px",
                        borderRadius: "20px",
                      }}
                    >
                      {content}
                    </p>
                  </a>
                ))}
                <a
                  href="https://www.odepc.net/unnathi/"
                  style={{ marginTop: "5px" }}
                >
                  Scholorships
                </a>
                <div className="dropdown">
                  <button>
                    Others&nbsp;
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                    >
                      <path
                        d="M1 1L7 7L13 1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <div class="dropdown-content">
                    <a href="/tender" target="_blank">
                      Tenders
                    </a>
                    <a href="https://scdd.kerala.gov.in" target="_blank">
                      SCDD
                    </a>
                    <a
                      href="https://www.stdd.kerala.gov.in/home-5"
                      target="_blank"
                    >
                      STDD
                    </a>
                    <a href="https://tribal.nic.in" target="_blank">
                      MoTA
                    </a>
                    <a href="https://socialjustice.gov.in" target="_blank">
                      Social Justice
                    </a>
                    <a href="https://stcmis.gov.in" target="_blank">
                      STCMIS
                    </a>
                  </div>
                </div>
              </div>
              <div className="language">
                {(window.location.pathname === "/home" ||
                  window.location.pathname === "/") && <LanguageSwitcher />}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
