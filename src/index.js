import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers } from 'redux';
import CoinReducer from './reducers/coinReducer';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const Reducers = combineReducers({
    coinReducer: CoinReducer
});
const store = createStore(Reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
