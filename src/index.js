import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers'
import './index.css';
import App from './containers/App';

const cswm = applyMiddleware()(createStore)
ReactDOM.render(
<Provider store ={cswm(reducers)}>
    <App />
     </Provider>
    , document.getElementById('root'));


