import { combineReducers, createStore } from "redux";

import { nameReducer } from "./nameReducer";

const rootReducer = combineReducers({
  name: nameReducer
});

export const store = createStore(rootReducer);
