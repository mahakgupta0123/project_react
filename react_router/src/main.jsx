import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import AboutUs from "./components/Home/AboutUs.jsx"
import Contact from "./components/Home/Contact.jsx"
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import User from "./components/User_params/User.jsx";
import Github from "./components/User_params/Github.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path:"/contact",
        element:<Contact />
      },
       {
        path:"/user/:id",
        element:<User />
      },
      {
        path:"/github",
        element:<Github />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
