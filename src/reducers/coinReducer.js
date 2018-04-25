import { FETCH_COINS } from '../actions/index';

export default function CoinReducer(state=[], action) {
    switch (action.type) {
        case FETCH_COINS:
           return action.payload;
    
        default:
            return state;
    }
}