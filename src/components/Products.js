import React from "react";
import "./Products.css";
import donuts from "../data";
import scrollDown from "../img/icon-scroll.png";

const Products = (products) => {
  console.log(donuts);

  // donuts.map((donut) => console.log(donut.name));

  return (
    <section className="products">
      <h1>Discover all flavors</h1>
      <p>Our donuts are handmade by our bakers on the premises every day.</p>

      <div className="products-list">
        {donuts.map((donut) => (
          <div className="object">
            <img key={donut.id} src={donut.img} alt="" />
            <div
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
