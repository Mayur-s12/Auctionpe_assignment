import React, { useState } from "react";
import Text from "../../../components/Text";
import "./index.css";

const Counter = ({ isSessionStarted }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className={isSessionStarted ? "active-counter" : "inactive-counter"}>
      <button
        onClick={increment}
        disabled={!isSessionStarted}
        className='counter-button'
      >
        +
      </button>
      <Text>{count}</Text>
      <button
        onClick={decrement}
        disabled={!isSessionStarted}
        className='counter-button'
      >
        -
      </button>
    </div>
  );
};

export default Counter;
