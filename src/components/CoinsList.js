import React,{ Component } from 'react';
import axios from 'axios';


export default class List extends Component {
    state = {
        coins: []
    }

    
    componentDidMount() {
            axios.get(`https://api.coinmarketcap.com/v1/ticker/?limit=10`)
                .then(res => {
                    console.log(res.data);
                    this.setState({
                        coins: res.data
                    })
                })
    }

    render() {
        return (
            <tbody>
            {this.state.coins.map(coin => (
                <tr key={coin.id}>
                    <td>{coin.name}</td>
                    <td>{coin.name}</td>
                    <td>{coin.market_cap_usd}</td>
                    <td>{coin.price_usd}</td>
                    <td></td>
                    <td>{coin.available_supply}</td>
                    <td>{coin.percent_change_24h}</td>

                </tr>
            ))}
            </tbody>
        );
    }
}

