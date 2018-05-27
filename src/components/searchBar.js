import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filteraction } from '../actions/filter';
import { bindActionCreators } from 'redux';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state ={
            keyword: ''
        }

        this.onInputChange = this.onInputChange.bind(this);
        // this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e){
        let keyword = e.target.value.toLowerCase();
        
        if(keyword){
            this.setState({
                keyword
            })
            let filterArr = this.props.coins.filter( coin => coin.name.toLowerCase().indexOf(this.state.keyword) !== -1);
            this.props.filteraction(filterArr);
        }else{
            let arr = [];
            this.props.filteraction(arr);
        }
        
    }

        

    render(){
        return(
            <form >
                <div className="input-group mb-3 my-3">
                    <input onChange={this.onInputChange} type="text" className="form-control" placeholder="search"/ >
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

function mapDispatchToProps(dispatch){
    return bindActionCreators({ filteraction }, dispatch);   
}




export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);