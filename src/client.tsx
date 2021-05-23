import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/rootReducer";

const preloadedState = ((window as any)).__PRELOADED_STATE__
delete ((window as any)).__PRELOADED_STATE__

const store = createStore(
  rootReducer,
  preloadedState,
  compose(
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.hydrate(
  <React.StrictMode>{app}</React.StrictMode>,
  document.getElementById("root")
);

