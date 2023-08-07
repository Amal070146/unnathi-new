import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="LanguageSwitcher-wrapper">
      <select onChange={changeLanguage} value={i18n.language}>
        <option value="en">A</option>
        <option value="mal">അ</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;
