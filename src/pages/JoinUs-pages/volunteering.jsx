import React from "react";
import "./VoluntIntern.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const volunteering = () => {
  return (
    <>
      <Navbar />
      <div className="volunteering-wrapper">
        <div className="volunteering-header-sect">
          <h1>Volunteering</h1>
          <a href="#about-volunteering" className="volunteering-arrow">
            <span class="m_scroll_arrows unu"></span>
            <span class="m_scroll_arrows doi"></span>
            <span class="m_scroll_arrows trei"></span>
            <span class="m_scroll_arrows quad"></span>
          </a>
        </div>
        <div className="volunteering-quote">
          <h1>
            <span style={{ color: "#fbba16" }}>Lend</span> a Hand, Make a{" "}
            <span style={{ color: "#EC1D25" }}>
              <p>Difference</p>
            </span>
          </h1>
          <p>
            At Unnathi, we believe that the strength of our community lies in
            the selfless hands and hearts of our volunteers. By choosing to
            volunteer with us, you are not only offering your time and skills
            but are also making a profound impact on countless lives. Every task
            you undertake, no matter how big or small, contributes to our shared
            vision of a brighter, more equitable world.
          </p>
        </div>
        <div id="about-volunteering" ></div>
      </div>

      <Footer />
    </>
  );
};

export default volunteering;
