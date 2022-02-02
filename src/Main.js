import React from "react";
import "./Main.css";
import Product from "./components/Product";
import Products from "./components/Products";
import donuts from "./data";

const Main = () => {
  return (
    <main>
      <Products />
      <Product />
    </main>
  );
};

export default Main;
