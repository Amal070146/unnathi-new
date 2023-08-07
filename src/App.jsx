import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Volunteering from "./pages/JoinUs-pages/Volunteering/volunteering";

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
