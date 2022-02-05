import React from "react";
import "./Error.css";

const Error = () => {
  return (
    <div className="error">
      <h2>Please select a donut!</h2>
      <img
        className="select"
        src="https://assets.webiconspng.com/uploads/2017/09/Donut-PNG-Image-77162.png"
        alt=""
      />
    </div>
  );
};

export default Error;
