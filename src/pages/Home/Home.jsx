import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import NGO from "../../components/NGO/NGO";
import About from "../../components/About/About";
import VM from "../../components/VM/VM";
import Gallery from "../../components/Testimonial/Gallery";
import Map from "../../components/Map/Map";
import Footer from "../../components/Footer/Footer";

import Swiper from "../../components/Testimonial/Slider";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Home = () => {
  return (
    <div className="home-wrapper">
      <Navbar />
      <div className="home-screen-wrapper" id="home">
        <a href="#ABOUT" className="home-button-nav">
          <span className="m_scroll_arrows unu"></span>
          <span className="m_scroll_arrows doi"></span>
          <span className="m_scroll_arrows trei"></span>
        </a>
      </div>
      <NGO />
      <div className="home-language-switcher">
        <LanguageSwitcher />
      </div>
      <div id="about">
        <About />
      </div>

      <VM />

      <Gallery />

      <Swiper />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
