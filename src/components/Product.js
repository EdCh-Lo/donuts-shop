import React from "react";
import "./Product.css";
import donuts from "../data";

const Product = ({ selectedProduct }) => {
  console.log(selectedProduct);

  let currentProduct = donuts
    .filter((donut) => donut.id === selectedProduct)
    .pop();
  console.log(currentProduct);

  return (
    <section className="product">
      {currentProduct ? (
        <>
          <div className="left-side">
            <img src={currentProduct.img} alt="" />
            <p>Available for pick up or delivery</p>
          </div>

          <div className="right-side">
            <h1>{currentProduct.name}</h1>
          </div>
        </>
      ) : (
        <p>Please select a donut</p>
      )}
    </section>
  );
};

export default Product;
