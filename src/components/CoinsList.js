import React,{ Component } from 'react';
import { connect  } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchCoins} from '../actions/index';


class List extends Component {

    componentDidMount(){
        this.fetch();
        setInterval(() => {
            this.fetch();
            console.log("data Update");
            
        }, 1000000)
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
        console.log(this.props.filter);
        
        
        if(this.props.filter.length > 0){
            return(
                <tbody>
                {this.props.filter.map(coin => (
                    <tr key={coin.id}>
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
        }else {
            return (
                <tbody>
                {this.props.coins.map(coin => (
                    <tr key={coin.id}>
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
}

function mapStateToProps(state) {
    return {
        coins: state.coinReducer,
        filter: state.filter
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCoins }, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(List);