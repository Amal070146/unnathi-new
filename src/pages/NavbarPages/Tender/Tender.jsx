import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import styles from "./Tender.module.css";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

const data = [
  {
    id: 1,
    title:
      "Quotation Invited for GPR Survey for mapping underground utilities @ Peroorkada in Thiruvananthapuram District",
    link: "https://web.rbdck.com/wp-content/uploads/2023/09/GPR-Survey-quotation-final.pdf",
  },
];

const Tender = () => {
  return (
    <div className={styles.outerWrapper}>
      <Navbar />
      <div className={styles.tenderWrapper}>
        <h1>No new tenders are listed. Kindly check back later.</h1>
        <div>
          {data.map(({ id, title, link }) => {
            return (
              <a href={link} target="_blank">
                {title}
              </a>
            );
          })}
        </div>
      </div>
      <div className={styles.footer}>
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Tender;
