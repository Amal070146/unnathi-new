import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Volunteering from "./pages/JoinUs-pages/Volunteering/volunteering";
import Internship from "./pages/JoinUs-pages/Internship/internship";
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
  ]);
  return <RouterProvider router={router} />;
}

export default App;
