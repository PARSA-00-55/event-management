import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
 
import Root from "./layout/root.jsx";
import Home from "./pages/Home/Home.jsx";
import Aboutus from "./pages/Aboutus/Aboutus.jsx";
import Login from "./pages/Authentication/Login.jsx";
import Register from "./pages/Authentication/Register.jsx";

import "./index.css";
import Gallery from "./pages/Gallery/Gallery.jsx";
import ServiceDetails from "./pages/Service/ServiceDetails.jsx";
import Service from "./pages/Service/Service.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <Aboutus />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/service",
        element: <Service />
      },
      {
        path: "/service/:id",
        element: <ServiceDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
