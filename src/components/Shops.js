import React from "react";
import "./Shops.css";
import shop from "../img/shop.png";

const Pricing = () => {
  return (
    <div className="shops">
      <div className="box-shop">
        <img src={shop} alt="shop" />
        <div className="address">
          <h4>Oberkampf</h4>
          <p>Available</p>
        </div>
      </div>

      <div className="box-shop">
        <img src={shop} alt="shop" />
        <div className="address">
          <h4>Montparnasse</h4>
          <p>Available</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
