import { FETCH_COINS } from '../actions/index';

export default function CoinReducer(state=[], action) {
    switch (action.type) {
        case FETCH_COINS:
           return state.setState({ coins: action.payload});
    
        default:
            return state;
    }
}