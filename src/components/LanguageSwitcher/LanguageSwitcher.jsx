import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  //Add the value of the language to the query parameter lang in the URL
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set("lang", i18n.language);
  const newUrlParams = urlParams.toString();
  const newUrl =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    "?" +
    newUrlParams;
  window.history.pushState({ path: newUrl }, "", newUrl);

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
