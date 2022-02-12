import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <header>
      <img
        className="logo"
        src="https://assets.webiconspng.com/uploads/2017/09/Donut-PNG-Image-77162.png"
        alt="donut-logo"
      />
      <ul>
        <li>Our donuts</li>
        <li>Our stores</li>
        <li>Our story</li>
        <li>Your cart : {cart}$</li>
      </ul>
    </header>
  );
};

export default Header;
