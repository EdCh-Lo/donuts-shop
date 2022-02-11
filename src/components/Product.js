import { useEffect, useState } from "react";
import "./Product.css";
import donuts from "../data";
import { useParams, Navigate } from "react-router-dom";
import Input from "./Input";
import Shops from "./Shops";

const Product = ({ onChange }) => {
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

            <Input key={currentProduct.id} getCurrNumber={getCurrNumber} />

            <div className="cart">
              <div onChange={getCurrNumber}>
                {`${
                  Math.round(currentProduct.price * numberChoosen * 100) / 100
                }$`}
              </div>
              <button>Add to cart</button>
            </div>

            <Shops />
          </div>
        </>
      )}
    </section>
  );
};

export default Product;
