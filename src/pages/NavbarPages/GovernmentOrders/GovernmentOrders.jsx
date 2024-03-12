
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import styles from "./GovernmentOrders.module.css";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

const data = [
    {
        id: 1,
        title: "Pre-Matric/Vocational engineering/ non engineering/ post-matric parallel college scholarships",
        link: "https://drive.google.com/file/d/1tzLibsu6fLGmsisgsvX9KIjjpgzl0msy/view?usp=sharing",
    },
    {
        id: 2,
        title: "Post-matric Academic allowance",
        link: "https://drive.google.com/file/d/1nZMAWCv68H6pmO-2LIEEP93qHgHBzBux/view?usp=sharing",
    },
    {
        id: 3,
        title: "Post-matric scholarships",
        link: "https://drive.google.com/file/d/167Vykf-WiRUMGm7Xl-fCGhIkqDvhRWn1/view?usp=sharing",
    },
    {
        id: 4,
        title: "Overseas scholarships",
        link: "https://drive.google.com/file/d/1KqHCY0rAWsW-RTXBK_z29A_R-cIXzWs8/view?usp=sharing",
    },
];

const GovernmentOrders = () => {
    return (
        <div className={styles.outerWrapper}>
            <Navbar />
            <div className={styles.tenderWrapper}>
                <div>
                    {data.reverse().map(({ id, title, link }) => {
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

export default GovernmentOrders;
