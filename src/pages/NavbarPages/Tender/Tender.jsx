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
      "Expression of interest (EOI) for selection of the establishment of a project division that will function on a self sustainable financial self-dependent model under Unnathi.",
    link: "https://drive.google.com/file/d/16fKRcAju73T0cRcS118s3EBR4LlEHhzK/view",
  },
  {
    id: 2,
    title:
      "Expression of Interest (EOI) for selection of consultants for the preparation of detailed project report (DPR) as per the guidelines of Government of India & Kerala in consultation with Unnathi",
    link: "https://drive.google.com/file/d/1BTZfc9caaPItAZRIT3hXobIbwf-bW9TV/view",
  },
  {
    id: 3,
    title:
      "TIME EXTENSION - Expression of Interest (EOI) for selection of consultants for the preparation of detailed project report (DPR) as per the guidelines of Government of India & Kerala in consultation With Unnathi",
    link: "https://drive.google.com/file/d/159b5-nEITNVhnfbZSFNZgMnV5-AlRz7B/view?usp=drivesdk",
  },
  {
    id: 4,
    title:
      "TIME EXTENSION - Expression of interest (EOI) for selection of the establishment of a project division that will function on a self sustainable financial self-dependent model under Unnathi.",
    link: "https://drive.google.com/file/d/1epNg7AoM5d9KE_uzbdpsSyYNnRYESeUg/view?usp=drivesdk",
  },
];

const Tender = () => {
  return (
    <div className={styles.outerWrapper}>
      <Navbar />
      <div className={styles.tenderWrapper}>
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
