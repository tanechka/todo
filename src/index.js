import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { render } from 'react-dom';
import './index.css';
import App from './app/containers/App';




let toDo =  (state = [], action) => state;
const revTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&  window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(toDo, revTools);

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
