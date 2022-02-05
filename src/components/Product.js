import { useEffect } from "react";
import "./Product.css";
import donuts from "../data";
import { useParams, Navigate } from "react-router-dom";

const Product = ({ onChange }) => {
  const { askedDonut } = useParams();
  let selectedDonut = +askedDonut;

  useEffect(() => {
    onChange(selectedDonut);
  }, [selectedDonut, onChange]);

  let currentProduct = donuts
    .filter((donut) => donut.id === selectedDonut)
    .pop();
  console.log(currentProduct);

  return (
    <section className="product">
      {currentProduct === undefined ? (
        <Navigate to="/error" replace={true} />
      ) : (
        <>
          <div className="left-side">
            <img src={currentProduct.imgPlain} alt="" />
            <p>Available for pick up or delivery</p>
          </div>

          <div className="right-side">
            <div className="intro">
              <h1>{currentProduct.name}</h1>
              <p>{currentProduct.description}</p>
            </div>
            <div className="buy">Add to cart</div>
            <div className="pricing"></div>
          </div>
        </>
      )}
    </section>
  );
};

export default Product;
