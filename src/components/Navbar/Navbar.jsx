import "./Navbar.css";
import logo from "../../assets/logo.png";

import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { AiFillCloseCircle } from "react-icons/ai";
import { useReactPath } from "./path.hook";

const Navbar = () => {
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
    "ABOUT US",
    "GOVERNING BODY",
    "MEDIA",
    "PARTNERS",
    "DONATE",
    "PROJECTS",
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
      <div className="navbar">
        <div className="navbar-desk">
          {navContent.slice(0, 3).map((content, i) => (
            <a href={`#${content}`} key={i.toString() + content}>
              <p
                style={{
                  color: window.location.href.includes(`#${content}`)
                    ? "#FBBA16"
                    : "",
                  textTransform: "capitalize",
                  padding: "5px 10px",
                  borderRadius: "20px",
                }}
              >
                {content}
              </p>
            </a>
          ))}
          <a href="/">
            <img
              className="nav-logo"
              style={{ width: navlogo ? "90px" : "140px" }}
              src={logo}
              alt=""
            />
          </a>
          {navContent.slice(3, 6).map((content, i) => (
            <a href={`#${content}`} key={i.toString() + content}>
              <p
                style={{
                  color: window.location.href.includes(`#${content}`)
                    ? "#FBBA16"
                    : "",
                  textTransform: "capitalize",
                  padding: "5px 10px",
                  borderRadius: "20px",
                }}
              >
                {content}
              </p>
            </a>
          ))}
        </div>
        <div className="navbar-mob">
          <a href="/">
            <img
              className="nav-logo"
              style={{ width: navlogo ? "90px" : "140px" }}
              src={logo}
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
                <a href={`#${content}`} key={i.toString() + content}>
                  <p
                    style={{
                      color: window.location.href.includes(`#${content}`)
                        ? "#FBBA16"
                        : "",
                      textTransform: "capitalize",
                      padding: "5px 10px",
                      borderRadius: "20px",
                    }}
                  >
                    {content}
                  </p>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
