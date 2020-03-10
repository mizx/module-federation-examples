import NameInput from "./NameInput";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./store";

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Redux</h1>
      <h2>App 2</h2>
      <NameInput />
    </div>
  </Provider>
);

export default App;
