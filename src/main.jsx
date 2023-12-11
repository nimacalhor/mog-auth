import "./index.css";
import React from "react";
import Router from "./Routes.jsx";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthContextProvider from "./components/AuthContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={Router} />
    </AuthContextProvider>
  </React.StrictMode>
);
