import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state ={
            keyword: ''
        }

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e){
        this.setState({
            keyword: e.target.value.toLowerCase()
        })
    }
    onFormSubmit(e){
        e.preventDefault();
        const result = this.props.coins.filter(coin => coin.name.toLowerCase() === this.state.keyword);
        this.setState({
            filter: result
        })
    }
        


    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <div className="input-group mb-3 my-3">
                    <input onChange={this.onInputChange} type="text" className="form-control" placeholder="search" aria-label="Recipient's username" aria-describedby="basic-addon2"/ >
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">search</button>
                    </div>
                </div>
            </form>

            
        )
    }
}


function mapStateToProps(state) {
    return {
        coins: state.coinReducer,
        filter: state.filter
    }
}


export default connect(mapStateToProps)(SearchBar);