import React, { useEffect, useState } from "react";
import "./Products.css";
import donuts from "../data";
import scrollDown from "../img/icon-scroll.png";

const Products = ({ products, onChange }) => {
  const [selectDonut, setSelectDonut] = useState(1);

  //send state to main
  useEffect(() => {
    onChange(selectDonut);
  }, [selectDonut, onChange]);

  // donuts.map((donut) => console.log(donut.name));

  const handleClick = (e) => {
    let selectedDonut = +e.target.parentNode.id;
    setSelectDonut(selectedDonut);
  };

  return (
    <section className="products">
      <h1>Discover all flavors</h1>
      <p>Our donuts are handmade by our bakers on the premises every day.</p>

      <div className="products-list">
        {donuts.map((donut) => (
          <div
            className="object"
            key={donut.id}
            onClick={handleClick}
            id={donut.id}
          >
            <img
              key={donut.id}
              src={donut.img}
              alt=""
              id={selectDonut === +donut.id ? "selectedImg" : ""}
            />
            <div
              id={selectDonut === +donut.id ? "selected" : ""}
              className="box"
              style={{
                backgroundColor: donut.color,
              }}
            >
              <p>{donut.name}</p>
            </div>
          </div>
        ))}
      </div>
      <img
        className="scroll-down-icon"
        src={scrollDown}
        alt="scroll-down-icon"
      />
    </section>
  );
};

export default Products;
