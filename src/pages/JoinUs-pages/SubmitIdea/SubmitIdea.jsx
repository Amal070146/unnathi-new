import React from 'react'
import "./SubmitIdea.css";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
const SubmitIdea = () => {
  return (
    <>
      <Navbar />
      <div className='submitidea-wrapper'>
        <div className="volunteering-header-sect submitidea-header-sect">
          <h1>INTERNSHIPS</h1>
          <a href="#about-internship" className="volunteering-arrow">
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

export default SubmitIdea
