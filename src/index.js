import React from 'react';
import { Provider } from 'react-redux'
import './index.css';
import App from './app/containers/App';
import { render } from 'react-dom';
import { createStore } from 'redux';

let toDo =  (state = [], action) => state;

const store = createStore(toDo);

render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
