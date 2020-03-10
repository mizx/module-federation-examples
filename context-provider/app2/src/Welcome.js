import { NameContextProvider } from "@context-provider/shared-library";
import React from "react";

const Welcome = () => {
  const name = React.useContext(NameContextProvider);

  return <p>Welcome, {name}</p>;
};

export default Welcome;
