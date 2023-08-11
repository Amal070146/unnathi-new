import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";
import { event } from "jquery";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [change, setchange] = useState(true);
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    console.log(event, "vazha");
  };
  function changelanguages(events) {
    setchange(!change);

    i18n.changeLanguage(events.target.value);
  }
  // const urlParams = new URLSearchParams(window.location.search);
  // urlParams.set("lang", i18n.language);
  // const newUrlParams = urlParams.toString();
  // const newUrl =
  //   window.location.protocol +
  //   "//" +
  //   window.location.host +
  //   window.location.pathname +
  //   "?" +
  //   newUrlParams;
  // window.history.pushState({ path: newUrl }, "", newUrl);

  return (
    <div className="LanguageSwitcher-wrapper">
      {/* <select onChange={changeLanguage} value={i18n.language}>
        <option value="en">A</option>
        <option value="mal">അ</option>
      </select>{" "} */}
      {change ? (
        <button onClick={changelanguages} value={"mal"}>
          അ
        </button>
      ) : (
        <button onClick={changelanguages} value={"en"}>
          A
        </button>
      )}
    </div>
  );
}

export default LanguageSwitcher;
