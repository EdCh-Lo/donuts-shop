import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div className="circle circle-1"></div>
    <div className="circle circle-2"></div>
    <div className="circle circle-3"></div>
    <div className="circle circle-4"></div>
    <div className="circle circle-5"></div>
  </React.StrictMode>,

  document.getElementById("root")
);
