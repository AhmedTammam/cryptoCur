import React, { Component } from 'react';
import './App.css';
import List from './components/CoinsList';
import Navbar from './components/navbar';
import SearchBar from './components/searchBar';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <div className="container">
          <SearchBar />
          <table className="table table-hover">
            <thead className="thead">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Market Cap</th>
                <th scope="col">Price</th>
                <th scope="col">Volume(24h)</th>
                <th scope="col">Circulating Supply</th>
                <th scope="col">change(24h)</th>
              </tr>
            </thead>
            <List />
          </table>
        </div>
      </div>
    );
  }
}

export default App;
