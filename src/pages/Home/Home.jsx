import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import VM from "../../components/VM/VM";
import Curious from "../../components/JoinUs/JoinUs";
import Testimonial from "../../components/Testimonial/Testimonial";
import Gallery from "../../components/Testimonial/Gallery";
import Map from "../../components/Map/Map";
import Footer from "../../components/Footer/Footer";
import bgimg from "../../assets/home-bg.png";
import Swiper from "../../components/Testimonial/Slider";
const Home = () => {
  return (
    <div className="home-wrapper">
      <Navbar />
      <div className="home-screen-wrapper">
        <h2 style={{ fontFamily: "Rage", fontWeight: 500 }}>Realizing the</h2>
        <h1 style={{ fontFamily: "Red Hat Text", fontWeight: 600 }}>
          DEVELOPMENT GOALS
        </h1>
        <div>
          <img src={bgimg} alt="" />
        </div>
      </div>
      <About />
      <VM />
      <Curious />
      {/* <Gallery /> */}
      {/* <Testimonial /> */}

      <Swiper />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
