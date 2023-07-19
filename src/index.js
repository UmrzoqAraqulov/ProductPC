import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CRUDContext from "./hooks/CRUDContext";
// import './api'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CRUDContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CRUDContext>
);
