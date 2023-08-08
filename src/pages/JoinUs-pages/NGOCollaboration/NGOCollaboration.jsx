import React from "react";
import "./NGOCollaboration.css";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import LanguageSwitcher from "../../../components/LanguageSwitcher/LanguageSwitcher";
const NGOCollaboration = () => {
  return (
    <>
      <Navbar />
      <div className="home-language-switcher">
        <LanguageSwitcher />
      </div>
      <div className="ngocollaboration-wrapper">
        <div className="volunteering-header-sect ngocollobaration-header-sect">
          <h1>Collaboration</h1>
          <a href="#about-submitidea" className="volunteering-arrow">
            <span class="m_scroll_arrows unu"></span>
            <span class="m_scroll_arrows doi"></span>
            <span class="m_scroll_arrows trei"></span>
            <span class="m_scroll_arrows quad"></span>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NGOCollaboration;
