import { useDispatch, useSelector } from "react-redux";

import React from "react";

const CounterButtons = () => {
  const dispatch = useDispatch();

  return (
    <div>
      Counter:
      <button onClick={() => dispatch({ type: "COUNTER_INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "COUNTER_DECREMENT" })}>-</button>
    </div>
  );
};

export default CounterButtons;
