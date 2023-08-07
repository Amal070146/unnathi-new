import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Volunteering from "./pages/JoinUs-pages/Volunteering/volunteering";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
import enTranslations from "./locales/en.json"; // Import your translation files
import frTranslations from "./locales/fr.json";
import malTranslation from "./locales/mal.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    fr: { translation: frTranslations },
    mal: { translation: malTranslation },
  },
  lng: "en", // Set the default language here
  fallbackLng: "en", // If a translation is not available for the selected language, fallback to English
  interpolation: {
    escapeValue: false, // Allows using HTML tags in translation strings if needed
  },
});

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/volunteering",
      element: <Volunteering />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
