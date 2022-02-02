import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img
        className="logo"
        src="https://assets.webiconspng.com/uploads/2017/09/Donut-PNG-Image-77162.png"
        alt=""
      />
      <ul>
        <li>Our donuts</li>
        <li>Our stores</li>
        <li>Our story</li>
        <li>Your cart : $0.00</li>
      </ul>
    </header>
  );
};

export default Header;
