import React from 'react';
import './index.css';
import App from './components/APP'
import { render } from "react-dom";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers'

const store = createStore(rootReducer);

render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
