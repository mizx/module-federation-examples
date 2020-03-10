import React from "react";
import { useSelector } from "react-redux";

const StoreVisualized = () => {
  const state = useSelector(state => state);

  return (
    <div
      style={{ border: "1px solid #000", padding: 10, display: "inline-block" }}
    >
      <pre>state:</pre>
      <code>{JSON.stringify(state, null, 2)}</code>
    </div>
  );
};

export default StoreVisualized;
