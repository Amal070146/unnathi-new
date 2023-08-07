import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Volunteering from "./pages/JoinUs-pages/Volunteering/Volunteering";
import Internship from "./pages/JoinUs-pages/Internship/Internship";
import SubmitIdea from "./pages/JoinUs-pages/SubmitIdea/SubmitIdea";
function App() {
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
  ]);
  return <RouterProvider router={router} />;
}

export default App;
