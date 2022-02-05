import React, { useEffect, useState } from "react";
import "./Products.css";
import donuts from "../data";
import scrollDown from "../img/icon-scroll.png";
import { NavLink } from "react-router-dom";

const Products = ({ products, Donut }) => {
  const [selectDonut, setSelectDonut] = useState(Donut);

  const handleClick = (e) => {
    setSelectDonut(Donut);
  };

  // //send state to main
  // useEffect(() => {
  //   onChange(selectDonut);
  // }, [selectDonut, onChange]);

  // donuts.map((donut) => console.log(donut.name));

  // const handleClick = (e) => {
  //   if (e.target.parentNode.id) {
  //     let selectedDonut = +e.target.parentNode.id;
  //     setSelectDonut(selectedDonut);
  //   } else {
  //     setSelectDonut(0);
  //   }
  // };

  return (
    <section className="products">
      <h1>Discover all flavors</h1>
      <p>Our donuts are handmade by our bakers on the premises every day.</p>

      <div className="products-list">
        {donuts.map((donut) => (
          <NavLink to={donut.id < 0 ? `/error` : `/${donut.id}`} key={donut.id}>
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
                id={Donut === +donut.id ? "selectedImg" : ""}
              />
              <div
                id={Donut === +donut.id ? "selected" : ""}
                className="box"
                style={{
                  backgroundColor: donut.color,
                }}
              >
                <p>{donut.name}</p>
              </div>
            </div>
          </NavLink>
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
