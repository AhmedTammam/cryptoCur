import React,{ Component } from 'react';
import { connect  } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchCoins} from '../actions/index';
console.log(fetchCoins);


class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            coins: []
        }


    }

    componentDidMount(){
        setInterval(() => {
            this.fetch();
            console.log("data Update");
            
        }, 6000)
    }

    fetch(){
        this.props.fetchCoins()
        .then(res => {
           this.setState({
               coins: res.payload.data
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
                    <td>{coin['24h_volume_usd']}</td>
                    <td>{coin.available_supply}</td>
                    <td>{coin.percent_change_24h}</td>
                </tr>
            ))}
            </tbody>
        );
    }
}

// function mapStateToProps(state) {
    
//     return {
//         coins: state.coinReducer
//     }
// }

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCoins }, dispatch);
}

export default connect (null, mapDispatchToProps)(List);