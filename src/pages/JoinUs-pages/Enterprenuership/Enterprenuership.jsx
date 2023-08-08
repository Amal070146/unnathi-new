import React from 'react'
import "./Enterprenuership.css";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import LanguageSwitcher from "../../../components/LanguageSwitcher/LanguageSwitcher";

const Enterprenuership = () => {
  return (
    <>
      <Navbar />
      <div className="home-language-switcher">
        <LanguageSwitcher />
      </div>
      <div className="ngocollaboration-wrapper">
        <div className="volunteering-header-sect enterprenuership-header-sect">
          <h1>Projects to Fund</h1>
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
}

export default Enterprenuership
