import React,{ Component } from 'react';
import { connect  } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCoins } from '../actions/index';


class List extends Component {
    constructor(props){
        super(props);

        this.state = {
            coins: []
        }


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
                    <td>{coin['24h_volume_usd']}</td>
                    <td>{coin.available_supply}</td>
                    <td>{coin.percent_change_24h}</td>
                </tr>
            ))}
            </tbody>
           
        );
    }
}
function mapStateToProps(state) {
    coins: state.coinReducer
}
function mapDispatchToProps(dispatch) {
    bindActionCreators({fetchCoins},dispatch);
}
export default connect (mapStateToProps, mapDispatchToProps)(List);