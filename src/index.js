import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CRUDContext from "./hooks/CRUDContext";
import LoginContext from "./hooks/LoginContext";
// import './api'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LoginContext>
    <CRUDContext>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CRUDContext>
  </LoginContext>
);
