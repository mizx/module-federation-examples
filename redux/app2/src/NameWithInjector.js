import NameInput from "./NameInput";
import React from "react";
import { nameReducer } from "./nameReducer";
import { useStore } from "react-redux";

// TODO: investigating better way of injecting reducer at runtime
const NameWithInjector = () => {
  const store = useStore();

  React.useEffect(() => store.injectReducer("name", nameReducer), []);

  return <NameInput />;
};

export default NameWithInjector;
