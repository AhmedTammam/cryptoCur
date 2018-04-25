import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers } from 'redux';
import CoinReducer from './reducers/coinReducer';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const Reducers = combineReducers({
    coinReducer: CoinReducer
});
const storeWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={storeWithMiddleware(Reducers)}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
