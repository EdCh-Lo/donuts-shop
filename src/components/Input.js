import React, { useState, useEffect } from "react";
import "./Input.css";

const Input = ({ getCurrNumber }) => {
  const [count, setCount] = useState(1);

  //send current number to add in cart to product parent
  useEffect(() => {
    getCurrNumber(count);
  }, [count]);

  return (
    <div className="counter">
      <span
        className="minus"
        onClick={() => setCount(count === 1 ? 1 : count - 1)}
      >
        -
      </span>
      <input type="number" disabled="disabled" value={count} />
      <span
        className="plus"
        onClick={() => setCount(count === 5 ? 5 : count + 1)}
      >
        +
      </span>
    </div>
  );
};

export default Input;
