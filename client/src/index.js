import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import App from "./App";
import { AppProvider } from "./context/appContext";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { ToastContainer } from "react-toastify";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <AppProvider>
    <App />
    <ToastContainer position="top-center" />
  </AppProvider>
  // /* </React.StrictMode> */
);
