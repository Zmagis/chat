import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";

import reducers from "./reducers";
// import { addUser } from "./actions";
import setupSocket from "./socket";
import handleNewMessage from "./sagas";
import username from "./utils/name";

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(reducers, applyMiddleware(sagaMiddleWare));

const socket = setupSocket(store.dispatch, username);

sagaMiddleWare.run(handleNewMessage, { socket, username });

// store.dispatch(addUser("Me"));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
