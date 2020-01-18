import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./veicle";
import App from './App';
import * as serviceWorker from './serviceWorker';

const vehicle = createStore(reducer);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={vehicle}>
    <App />
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
