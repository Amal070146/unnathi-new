import React from "react";
import "./ProjectsFunds.css";

import banner from "../../../assets/JoinUspage/yellow-banner-img/projectfund.png";
import timeline from "../../../assets/JoinUspage/timelinebg.png";

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import LanguageSwitcher from "../../../components/LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const ProjectsFund = () => {
  const { t } = useTranslation(["NGOCollaboration"]);
  return (
    <>
      <Navbar />
      <div className="home-language-switcher">
        <LanguageSwitcher />
      </div>
      <div className="projectfund-wrapper">
        <div className="volunteering-header-sect projectfunds-header-sect">
          <h1>{t("projectToFund")}</h1>
          <a href="#about-projectfund" className="volunteering-arrow">
            <span class="m_scroll_arrows unu"></span>
            <span class="m_scroll_arrows doi"></span>
            <span class="m_scroll_arrows trei"></span>
            <span class="m_scroll_arrows quad"></span>
          </a>
        </div>
        <div className="projectfund-quotes-wrapper">
          <div>
            <h2>
              Tailored{" "}
              <span style={{ color: "#FBBA16", fontWeight: 600 }}>
                Solutions
              </span>{" "}
              for Unique
            </h2>
            <h1 style={{ color: "#EC1D25", fontWeight: 600 }}>Challenges</h1>
          </div>
          <div>
            <h3>
              Invest in Change<span style={{ color: "#F37020" }}>.</span> Shape
              Tomorrow's Narratives<span style={{ color: "#F37020" }}>.</span>{" "}
              Execute Transformative Solutions
              <span style={{ color: "#F37020" }}>.</span>
            </h3>
            <p>
              Unnathi's spectrum of projects is designed to address the unique
              challenges faced by the SC/ST community—challenges that often
              require customized, flexible, and one-time solutions that the
              traditional government system may find challenging to address
              efficiently.
            </p>
          </div>
        </div>

        {/* card section starts */}
        <div id="about-projectfund" className="projectfund-cardset-wrapper">
          <h1>
            <span>Why Collaborate</span> with Unnathi?
          </h1>
          <div className="projectfund-cardset-content-wrapper">
            <div className="projectfund-cardset-individual">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="142"
                height="147"
                viewBox="0 0 142 147"
                fill="none"
              >
                <path
                  opacity="0.901"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M67.9947 2.56595C77.2598 1.68941 81.5363 5.84402 80.8252 15.0298C77.9665 20.8722 73.4451 22.7051 67.2616 20.5285C62.1772 17.1925 60.833 12.6713 63.2291 6.96495C64.7415 5.32698 66.33 3.86064 67.9947 2.56595Z"
                  fill="black"
                />
                <circle cx="71.6612" cy="79.1822" r="67.818" fill="#CCCCCC" />
                <circle cx="71.6607" cy="12.0973" r="12.0973" fill="#CCCCCC" />
                <circle cx="119.317" cy="131.603" r="12.0973" fill="#CCCCCC" />
                <circle cx="25.4713" cy="121.339" r="12.0973" fill="#CCCCCC" />
                <path
                  d="M47.1 26.0272L41.2346 9.16431L55.898 13.9299L47.1 26.0272Z"
                  fill="#CCCCCC"
                />
                <path
                  d="M128.848 120.239L126.649 105.209L141.312 111.808L128.848 120.239Z"
                  fill="#CCCCCC"
                />
                <path
                  opacity="0.838"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M38.6685 1.83276C43.7832 2.76389 48.6709 4.35237 53.3318 6.59835C50.4888 10.6957 47.5561 14.7281 44.5338 18.6956C43.4648 16.5897 42.6094 14.3902 41.9677 12.0971C14.4984 25.2405 2.5233 46.9911 6.04253 77.349C7.74355 85.6374 11.0428 93.2132 15.9403 100.077C14.881 101.223 13.659 102.2 12.2744 103.01C6.46916 96.2574 2.68113 88.4367 0.910358 79.5485C-3.68929 46.0982 9.14111 22.0259 39.4016 7.33152C39.737 7.02799 39.9813 6.6614 40.1348 6.23177C39.4954 4.80238 39.0066 3.33605 38.6685 1.83276Z"
                  fill="black"
                />
                <path
                  opacity="0.843"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M82.658 4.03223C111.144 11.8691 128.863 30.1983 135.813 59.0198C138.868 73.4485 138.012 87.6228 133.247 101.543C134.957 102.521 136.668 103.499 138.379 104.476C134.463 107.284 130.43 109.972 126.281 112.541C124.376 107.85 123.399 102.962 123.349 97.8776C124.88 98.47 126.346 99.2032 127.748 100.077C137.509 69.8384 130.788 43.8111 107.586 21.9948C100.219 15.9891 91.9098 11.7122 82.658 9.1644C81.8699 7.46997 81.8699 5.7592 82.658 4.03223Z"
                  fill="black"
                />
                <path
                  opacity="0.841"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M59.9294 24.5611C87.454 24.3499 104.683 37.5469 111.618 64.1521C114.752 94.1826 102.166 114.345 73.8596 124.638C65.381 126.654 56.8274 127.509 48.1988 127.204C47.6067 128.982 46.8735 130.693 45.9993 132.337C42.83 128.455 39.653 124.545 36.4681 120.606C40.9538 118.825 45.475 117.115 50.0317 115.474C50.3983 115.718 50.7649 115.963 51.1314 116.207C50.6964 117.587 50.2077 118.931 49.6651 120.239C71.2987 123.539 88.2839 116.085 100.62 97.8778C111.596 76.3117 108.541 56.8825 91.4556 39.591C74.2863 26.8046 56.9345 26.5602 39.4008 38.8578C25.7898 51.1847 22.2462 65.9704 28.7698 83.2145C39.0671 101.475 54.097 106.973 73.8596 99.7107C76.8942 97.7759 79.8269 95.6988 82.6576 93.4788C83.9891 94.4429 85.2112 95.5427 86.3235 96.778C74.845 107.895 61.4038 111.072 45.9993 106.309C26.8031 97.1314 18.3717 81.8574 20.705 60.4863C25.7817 39.6941 38.8565 27.7191 59.9294 24.5611Z"
                  fill="black"
                />
                <path
                  opacity="0.917"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M59.1969 42.8904C62.3739 42.8904 65.551 42.8904 68.728 42.8904C68.082 47.4975 70.0375 49.5748 74.5934 49.1223C75.449 48.2669 76.3038 47.4116 77.1594 46.5562C79.4814 48.8779 81.8026 51.1996 84.1245 53.5213C80.9851 55.5296 80.4968 57.9735 82.6582 60.853C84.1047 61.2163 85.5711 61.3384 87.0572 61.2196C87.0572 64.6412 87.0572 68.0622 87.0572 71.4839C82.6963 70.5916 80.8634 72.3028 81.5584 76.6161C82.4141 77.4717 83.2689 78.3265 84.1245 79.1822C81.7916 81.6375 79.3479 83.9595 76.7929 86.1472C71.8337 81.9029 69.1452 83.1244 68.728 89.8131C65.551 89.8131 62.3739 89.8131 59.1969 89.8131C60.2078 86.0101 58.8636 83.8106 55.1644 83.2146C53.6841 84.4925 52.0956 85.3481 50.3988 85.7807C48.3095 83.8143 46.3544 81.7365 44.5335 79.5487C45.6635 78.2994 46.6411 76.9555 47.4662 75.5163C46.8699 71.8168 44.6704 70.4729 40.8677 71.4839C40.8677 68.0622 40.8677 64.6412 40.8677 61.2196C42.5956 61.3393 44.3064 61.2171 45.9998 60.853C48.2368 58.3498 47.8702 56.2725 44.9001 54.6211C44.4113 53.8879 44.4113 53.1547 44.9001 52.4216C46.8667 50.3322 48.944 48.3771 51.132 46.5562C56.4722 51.0953 59.1605 49.8733 59.1969 42.8904ZM62.1295 57.5537C56.7951 59.6664 54.7177 63.5767 55.8976 69.2844C60.0797 76.1659 65.2119 76.8991 71.2941 71.4839C74.5274 62.8113 71.473 58.1678 62.1295 57.5537Z"
                  fill="black"
                />
                <path
                  opacity="0.713"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M89.2569 81.748C90.9879 81.8756 92.6983 82.1198 94.389 82.4812C94.2497 88.499 92.0502 89.5988 87.7905 85.7805C88.3917 84.4608 88.88 83.1161 89.2569 81.748Z"
                  fill="black"
                />
                <path
                  opacity="0.913"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.8727 103.01C29.0059 101.778 33.2827 106.177 31.7031 116.207C26.6627 123.325 21.0418 123.814 14.8403 117.674C12.3421 111.588 13.6862 106.7 18.8727 103.01Z"
                  fill="black"
                />
                <path
                  opacity="0.909"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M114.918 114.008C120.864 113.73 124.652 116.418 126.282 122.072C126.282 130.617 122.006 134.161 113.451 132.703C110.641 131.848 108.808 130.015 107.952 127.205C106.259 120.567 108.581 116.168 114.918 114.008Z"
                  fill="black"
                />
              </svg>
              <h3>
                Tangible<br></br>Impact
              </h3>
              <p>
                Our projects are tailored for measurable impact. By funding or
                directly executing, you contribute to transformative change in
                areas that most need it.
              </p>
            </div>
          </div>
        </div>
        {/* card section starts */}
        {/*  timeline start */}

        <div className="submitidea-timeline-wrapper">
          <h1>
            <span>{t("howTo")}</span> {t("projectToFund")}
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
                  <p>{t("step1")}</p>
                </div>
              </div>

              <div className="submitidea-timeline-content-individual timeline2">
                <div>
                  <p>{t("step2")}</p>
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
                  <p>{t("step3")}</p>
                </div>
              </div>

              <div className="submitidea-timeline-content-individual timeline4">
                <div>
                  <p>{t("step4")}</p>
                </div>{" "}
                <div>
                  <h2>4</h2>
                </div>
              </div>
            </div>
          </div>
          <p style={{ textAlign: "center" }}>{t("note")}</p>
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
};

export default ProjectsFund;
