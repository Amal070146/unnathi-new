import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Volunteering from "./pages/JoinUs-pages/Volunteering/Volunteerings";
import Internship from "./pages/JoinUs-pages/Internship/Internships";
import SubmitIdea from "./pages/JoinUs-pages/SubmitIdea/SubmitIdea";
import NGOCollaboration from "./pages/JoinUs-pages/NGOCollaboration/NGOCollaboration";
import i18next from "i18next";
import Enterprenuership from './pages/JoinUs-pages/Enterprenuership/Enterprenuership'
import ProjectsFund from "./pages/JoinUs-pages/ProjectFunds/ProjectsFund";
import UAS from "./pages/JoinUs-pages/UAS/UAS";
import GoverningBody from './pages/NavbarPages/GoverningBody/GoverningBody'
function App() {
  //Check whether the path contains the query parameter lang and if it does, set the language to the value of the query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get("lang");
  if (lang) {
    localStorage.setItem("lang", lang);
    i18next.changeLanguage(lang);
  }

  // //Add the value of the language to the query parameter lang in the URL
  // urlParams.set("lang", i18next.language);
  // const newUrlParams = urlParams.toString();
  // const newUrl =
  //   window.location.protocol +
  //   "//" +
  //   window.location.host +
  //   window.location.pathname +
  //   "?" +
  //   newUrlParams;
  // window.history.pushState({ path: newUrl }, "", newUrl);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/volunteering",
      element: <Volunteering />,
    },
    {
      path: "/internship",
      element: <Internship />,
    },
    {
      path: "/submitidea",
      element: <SubmitIdea />,
    },
    {
      path: "/ngocollaboration",
      element: <NGOCollaboration />,
    },
    {
      path: "/projectfunds",
      element: <ProjectsFund />,
    },
    {
      path: "/enterprenuership",
      element: <Enterprenuership />,
    },
    {
      path: "/uas",
      element: <UAS />,
    },
    {
      path: "/governing-body",
      element: <GoverningBody />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
