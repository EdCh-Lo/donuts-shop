import React from "react";
import "./Shops.css";
import shop from "../img/shop.png";

const Pricing = ({ shop1, shop2 }) => {
  const available1 = shop1 === 1 ? "address available" : "address unavailable";
  const available2 = shop2 === 1 ? "address available" : "address unavailable";

  return (
    <div className="shops">
      <div className="box-shop">
        <img src={shop} alt="shop" />
        <div className={available1}>
          <h4>Oberkampf</h4>
          <p>Available</p>
        </div>
      </div>

      <div className="box-shop">
        <img src={shop} alt="shop" />
        <div className={available2}>
          <h4>Montparnasse</h4>
          <p>Available</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
