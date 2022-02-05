import React from "react";
import "./Pricing.css";
import discount2 from "../img/discount-2.png";
import discount3 from "../img/discount-3.png";
import discount4 from "../img/discount-4.png";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="box-discount">
        <div className="donut-package">
          <img src={discount2} alt="" />
        </div>
        <p>
          <span>X2</span> 15% discount
        </p>
      </div>

      <div className="box-discount">
        <div className="donut-package">
          <img src={discount3} alt="" />
        </div>
        <p>
          <span>X3</span> 20% discount
        </p>
      </div>

      <div className="box-discount">
        <div className="donut-package">
          <img src={discount4} alt="" />
        </div>
        <p>
          <span>X4</span> 30% discount
        </p>
      </div>
    </div>
  );
};

export default Pricing;
