import React from 'react'
import "./Enterprenuership.css";
import banner from "../../../assets/JoinUspage/yellow-banner-img/projectfund.png";
import timeline from "../../../assets/JoinUspage/timelinebg.png";

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import LanguageSwitcher from "../../../components/LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
const Enterprenuership = () => {
    const { t } = useTranslation(["NGOCollaboration"]);
  return (
    <>
      <Navbar />
      <div className="home-language-switcher">
        <LanguageSwitcher />
      </div>
      <div className="enterprenuership-wrapper">
        <div className="volunteering-header-sect enterprenuership-header-sect">
          <h1>Entrepreneurship</h1>
          <a href="#about-submitidea" className="volunteering-arrow">
            <span class="m_scroll_arrows unu"></span>
            <span class="m_scroll_arrows doi"></span>
            <span class="m_scroll_arrows trei"></span>
            <span class="m_scroll_arrows quad"></span>
          </a>
        </div>
        {/* guidelines start */}
        <div className="submitidea-guidelines-wrapper">
          <h1>
            <span>Eligibility</span> Criteria
          </h1>
          <div className="submitidea-guidelines-content-wrapper">
            <div className="submitidea-guidelines-individual">
              <div className="yellow-circle"></div>
              <div>
                <h3>Entities That Can Apply:</h3>
                <p>
                  Societies, cooperatives, proprietorships, companies, and other
                  formal business structures are welcome to apply.
                </p>
              </div>
            </div>
            <div className="submitidea-guidelines-individual">
              <div className="yellow-circle"></div>
              <div>
                <h3>SC/ST Ownership:</h3>
                <p>
                  The entity should have substantial ownership by individuals
                  from the SC/ST community.
                </p>
              </div>
            </div>{" "}
            <div className="submitidea-guidelines-individual">
              <div className="yellow-circle"></div>
              <div>
                <h3>Aligned Vision:</h3>
                <p>
                  Your venture should align with empowerment, development, or
                  solutions that significantly benefit the SC/ST community.
                </p>
              </div>
            </div>{" "}
            <div className="submitidea-guidelines-individual">
              <div className="yellow-circle"></div>
              <div>
                <h3>Commitment:</h3>
                <p>
                  An unwavering dedication to navigating the entrepreneurial
                  journey, through its challenges and triumphs.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* guidelines end */}
        {/*  timeline start */}

        <div className="submitidea-timeline-wrapper">
          <h1>
            <span>{t("howTo")}</span> Initiate Collaboration?
          </h1>
          <div className="submitidea-timeline-content-wrapper">
            <div>
              <img src={timeline} alt="" />
            </div>
            <div className="submitidea-timeline-content">
              <div className="submitidea-timeline-content-individual timeline1">
                <div>
                  <h2>1</h2>
                </div>
                <div>
                  <p>
                    Click on the 'Apply for the Entrepreneurship Support
                    Programme' button below.
                  </p>
                </div>
              </div>

              <div className="submitidea-timeline-content-individual timeline2">
                <div>
                  <p>
                    Detail your startup idea, vision, and potential impact in
                    the application form.
                  </p>
                </div>
                <div>
                  <h2>2</h2>
                </div>
              </div>

              <div className="submitidea-timeline-content-individual timeline3">
                <div>
                  <h2>3</h2>
                </div>
                <div>
                  <p>
                    Attach pertinent documents, business plans, or prototypes.
                  </p>
                </div>
              </div>

              <div className="submitidea-timeline-content-individual timeline4">
                <div>
                  <p>
                    Post submission, our collaborative team from Unnathi and
                    Startup Mission will evaluate your application.
                  </p>
                </div>{" "}
                <div>
                  <h2>4</h2>
                </div>
              </div>
            </div>
          </div>
          <p style={{ textAlign: "center" }}>
            Note: The selection follows a rigorous criterion, ensuring ventures
            with the most promise and alignment gain access to our aggregator
            model and the myriad benefits it offers.
          </p>
        </div>
        {/*  timeline end */}

        {/* yellow banner start */}
        <div className="internship-yellow-banner-wrapper">
          <div className="internship-yellow-banner-content-wrapper">
            <h1>Embark on Your Entrepreneurial Odyssey with Unnathi</h1>
            <p>
              If your venture holds the promise of innovation and societal
              impact, the Entrepreneurship Support Programme is your launchpad.
              Join us, and let's co-create entrepreneurial tales that resonate,
              inspire, and endure.
            </p>
            <a href="">
              <p>Apply for the Entrepreneurship Support Programme</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="20"
                viewBox="0 0 29 23"
                fill="none"
              >
                <path
                  d="M27.0839 12.5299C27.3655 12.2482 27.5237 11.8662 27.5237 11.4679C27.5237 11.0695 27.3655 10.6875 27.0839 10.4058L18.586 1.908C18.4475 1.76453 18.2817 1.65009 18.0984 1.57136C17.9152 1.49263 17.7181 1.45119 17.5186 1.44946C17.3191 1.44773 17.1213 1.48573 16.9367 1.56126C16.7521 1.6368 16.5844 1.74834 16.4433 1.88938C16.3023 2.03042 16.1908 2.19814 16.1152 2.38276C16.0397 2.56737 16.0017 2.76518 16.0034 2.96463C16.0052 3.16409 16.0466 3.36121 16.1253 3.54448C16.204 3.72775 16.3185 3.89351 16.462 4.03208L22.3956 9.96568L2.50222 9.96568C2.10382 9.96568 1.72173 10.1239 1.44002 10.4057C1.15831 10.6874 1.00004 11.0695 1.00004 11.4679C1.00004 11.8663 1.15831 12.2483 1.44002 12.5301C1.72173 12.8118 2.10382 12.97 2.50222 12.97L22.3956 12.97L16.462 18.9036C16.1883 19.187 16.0369 19.5664 16.0403 19.9603C16.0438 20.3541 16.2017 20.7309 16.4803 21.0094C16.7588 21.2879 17.1355 21.4459 17.5294 21.4493C17.9233 21.4528 18.3027 21.3014 18.586 21.0277L27.0839 12.5299Z"
                  fill="black"
                  stroke="white"
                  stroke-width="1.2"
                />
              </svg>
            </a>
          </div>
          <div className="internship-yellow-banner-image-wrapper">
            <img src={banner} alt="" />
          </div>
        </div>
        {/* yellow banner ends */}
      </div>
      <Footer />
    </>
  );
}

export default Enterprenuership
