import React, { useState } from "react";
import Text from "../../../components/Text";
import "./index.css";
import { logAction } from "../../../config/apis";

const Counter = ({ isSessionStarted, sessionId }) => {
  const [count, setCount] = useState(0);

  const increment = async () => {
    if (isSessionStarted) {
      try {
        setCount(count + 1);
        await logAction(sessionId, "Counter Increment");
      } catch (err) {
        console.log("error logging action", err);
      }
    }
  };

  const decrement = async () => {
    if (isSessionStarted) {
      try {
        setCount(count - 1);
        await logAction(sessionId, "Counter Decrement");
      } catch (err) {
        console.log("error logging action", err);
      }
    }
  };

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
