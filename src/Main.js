import React, { useEffect, useState } from "react";
import "./Main.css";
import Product from "./components/Product";
import Products from "./components/Products";
import donuts from "./data";

const Main = () => {
  const [selectedDonut, setSelectedDonut] = useState(null);

  useEffect(() => {
    console.log(selectedDonut);
  }, [selectedDonut]);

  return (
    <main>
      <Products onChange={setSelectedDonut} />
      <Product selectedProduct={selectedDonut} />
    </main>
  );
};

export default Main;
