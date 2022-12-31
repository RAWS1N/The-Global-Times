import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";
import "./index.css";

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
