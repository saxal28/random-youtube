import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//stylesheets
import "../public/styles/style.css";
//redux store
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";

const createStoreWithMiddleWare = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
