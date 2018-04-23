import axios from 'axios';

export const FETCH_COINS = 'FETCH_COINS'

export function fetchCoins() {
    const Request = axios.get(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
    return {
        type: FETCH_COINS,
        payload: Request

    }
}



