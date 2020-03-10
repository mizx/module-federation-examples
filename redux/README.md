# Redux Example

This example demos a redux application that async loads remote components that inject reducers.

- `app1` is the host application.
  - Contains `counter` reducer that increments/decrements
  - Exposes `store.injectReducer` to append reducers at runtime. More info can be found in the [redux docs](https://redux.js.org/recipes/code-splitting/#defining-an-injectreducer-function).
  - Includes serialized redux state to visualize current state.
  - Has a button to load `app2`'s Name component and reducer on demand.
- `app2` standalone application which exposes `Name` component that renders current `store.name` value and injects `nameReducer`.

# Running Demo

Run `yarn start`. This will build and serve both `app1` and `app2` on ports 3001 and 3002 respectively.

- [localhost:3001](http://localhost:3001/) (HOST)
- [localhost:3002](http://localhost:3002/) (STANDALONE REMOTE)
