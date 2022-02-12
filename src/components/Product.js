import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart";

import "./Product.css";
import donuts from "../data";
import { useParams, Navigate } from "react-router-dom";
import Input from "./Input";
import Shops from "./Shops";

const Product = ({ onChange }) => {
  //redux toolkit actions
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [numberChoosen, setNumberChoosen] = useState(1);

  //using params for querying donut
  const { askedDonut } = useParams();
  let selectedDonut = +askedDonut;

  //get the selected donut from the products list to know currentProduct to display
  useEffect(() => {
    onChange(selectedDonut);
  }, [selectedDonut, onChange]);

  let currentProduct = donuts
    .filter((donut) => donut.id === selectedDonut)
    .pop();
  console.log(currentProduct);

  //get current numbers of products in input field
  const getCurrNumber = (currNumber) => {
    console.log(currNumber);

    return setNumberChoosen(currNumber);
  };

  const calcPrice = currentProduct
    ? Math.round(currentProduct.price * numberChoosen * 100) / 100
    : "";

  const addToCartHandler = (e) => {
    e.preventDefault();

    console.log(cart);
    dispatch(cartActions.increase(calcPrice));
  };

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

            <form onSubmit={addToCartHandler}>
              <Input key={currentProduct.id} getCurrNumber={getCurrNumber} />

              <div className="cart">
                <div onChange={getCurrNumber} style={{ width: "5rem" }}>
                  {`${calcPrice}$`}
                </div>
                <button type="submit">Add to cart</button>
              </div>
            </form>

            <Shops shop1={currentProduct.shop1} shop2={currentProduct.shop2} />
          </div>
        </>
      )}
    </section>
  );
};

export default Product;
