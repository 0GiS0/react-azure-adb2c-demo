import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import ClaimsComponent from './ClaimsComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        < ClaimsComponent />
      </div>
    );
  }
}

export default App;
