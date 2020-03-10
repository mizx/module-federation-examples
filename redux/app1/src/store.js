import { combineReducers, createStore } from "redux";

import { counterReducer } from "./counterReducer";

const staticReducers = {
  counter: counterReducer
};

/**
 * This was created in reference to redux docs:
 * https://redux.js.org/recipes/code-splitting/#defining-an-injectreducer-function
 */
export default function configureStore(initialState) {
  const store = createStore(createReducer(), initialState);

  store.asyncReducers = {};

  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  return store;
}

function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers
  });
}

export const store = configureStore();
