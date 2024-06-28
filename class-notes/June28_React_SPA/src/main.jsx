import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./HomePage.jsx";
import About from "./Components/About/About.jsx";
import "./index.css";
import Hero from "./Components/Hero/Hero.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "",
        element: <Hero />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
