import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import store from './store/store'
import App from './App.jsx';

const root = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , root
)