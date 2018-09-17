import React, { Component } from 'react';
import './App.css';
import Creches from './Creches';
import Sobre from './Sobre';
import BrowserRouter from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Creches/>
        <Sobre/>
      </div>
    );
  }
}

export default App;
