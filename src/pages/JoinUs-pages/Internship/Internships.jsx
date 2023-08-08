import React from "react";
import "./Internship.css";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../../components/LanguageSwitcher/LanguageSwitcher";
const Internship = () => {
  const { t } = useTranslation(["Internship"]);
  return (
    <>
      <Navbar />
      <LanguageSwitcher />
      <div className="internship-wrapper">
        <div className="volunteering-header-sect internship-header-sect">
          <h1>{t("internships")}</h1>
          <a href="#about-internship" className="volunteering-arrow">
            <span class="m_scroll_arrows unu"></span>
            <span class="m_scroll_arrows doi"></span>
            <span class="m_scroll_arrows trei"></span>
            <span class="m_scroll_arrows quad"></span>
          </a>
        </div>

        {/* eligibility criteria */}
        <div className="volunteering-eligibility-selection">
          <div>
            <h1>
              <span>{t("eligibility")}</span>&nbsp;{t("criteria")}
            </h1>
            <div className="volunteering-eligilibility-set">
              <div>
                <div className="yellow-circle"></div>
                <p>{t("ec1")}</p>
              </div>{" "}
              <div>
                <div className="yellow-circle"></div>
                <p>{t("ec2")}</p>
              </div>{" "}
              <div>
                <div className="yellow-circle"></div>
                <p>{t("ec3")}</p>
              </div>{" "}
              <div>
                <div className="yellow-circle"></div>
                <p>{t("ec4")}</p>
              </div>{" "}
            </div>
          </div>
          <div>
            <h1>
              <span>{t("selection")}</span>&nbsp;{t("process")}
            </h1>
            <p className="volunteering-selection-content">
              {t("selectionProcessTextPara1")}
              <br></br> <br></br>
              {t("selectionProcessTextPara2")}
            </p>
          </div>
        </div>

        {/* apply */}
        <div className="volunteering-apply-button-wrapper">
          <p>
            {t("takeThe")} <span style={{ color: "#FBBA16" }}> {t("leap")}</span>
            .{t("embarkOn")}{" "}
            <span style={{ color: "#EC1D25" }}> {t("purpose")}</span>,{" "}
            <span style={{ color: "#F37020" }}> {t("passion")}</span>{" "}
            {t("professionalGrowth")}
          </p>
          <a href="">
            <p>{t("apply")}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="22"
              viewBox="0 0 29 22"
              fill="none"
            >
              <path
                d="M27.2189 12.0805C27.5005 11.7988 27.6587 11.4168 27.6587 11.0185C27.6587 10.6201 27.5005 10.2381 27.2189 9.95642L18.7211 1.4586C18.5825 1.31512 18.4167 1.20068 18.2335 1.12196C18.0502 1.04323 17.8531 1.00179 17.6536 1.00006C17.4541 0.998323 17.2563 1.03633 17.0717 1.11186C16.8871 1.18739 16.7194 1.29893 16.5784 1.43998C16.4373 1.58102 16.3258 1.74874 16.2502 1.93335C16.1747 2.11797 16.1367 2.31577 16.1384 2.51523C16.1402 2.71469 16.1816 2.91181 16.2603 3.09508C16.3391 3.27835 16.4535 3.44411 16.597 3.58268L22.5306 9.51628L2.63723 9.51628C2.23883 9.51628 1.85674 9.67455 1.57503 9.95626C1.29332 10.238 1.13505 10.6201 1.13505 11.0185C1.13505 11.4169 1.29332 11.7989 1.57503 12.0807C1.85674 12.3624 2.23883 12.5206 2.63723 12.5206L22.5306 12.5206L16.597 18.4542C16.3233 18.7376 16.1719 19.117 16.1754 19.5109C16.1788 19.9047 16.3368 20.2815 16.6153 20.56C16.8938 20.8385 17.2706 20.9965 17.6644 20.9999C18.0583 21.0034 18.4377 20.852 18.7211 20.5783L27.2189 12.0805Z"
                fill="black"
                stroke="#FBBA16"
                stroke-width="1.2"
              />
            </svg>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Internship;
