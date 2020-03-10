import CounterButtons from "./CounterButtons";
import { Provider } from "react-redux";
import React from "react";
import StoreVisualized from "./StoreVisualized";
import { store } from "./store";

const RemoteName = React.lazy(() => import("app2/Name"));

const App = () => {
  const [loadRemote, setLoadRemote] = React.useState(false);

  return (
    <Provider store={store}>
      <div>
        <h1>Redux</h1>
        <h2>App 1</h2>
        <button onClick={() => setLoadRemote(true)}>
          Load remote <code>Name</code>
        </button>
        <br />
        <br />
        <StoreVisualized />
        <br />
        <br />
        <CounterButtons />
        {loadRemote && (
          <React.Suspense fallback="Loading Name Demo">
            <RemoteName />
          </React.Suspense>
        )}
      </div>
    </Provider>
  );
};

export default App;
