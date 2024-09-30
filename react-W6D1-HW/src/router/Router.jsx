import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import "../index.css";
import Home from "../pages/Home";
import Iceland from "../pages/Iceland";
import Ecuador from "../pages/Ecuador";
import Norway from "../pages/Norway";
import ZambiaZimbabwe from "../pages/ZambiaZimbabwe";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home /> ,
    errorElement: <ErrorPage />
  },
  {
    path: "/Iceland",
    element: <Iceland /> ,
  },
  {
    path: "/Ecuador",
    element: <Ecuador /> ,
  },
  {
    path: "/Norway",
    element: <Norway /> ,
  },
  {
    path: "/ZambiaZimbabwe",
    element: <ZambiaZimbabwe/>
  },
]);


export default router