import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {inc,dec} from "./testModeule"

var result = inc(10);
var result2 = dec(15);
console.log(result);
console.log(result2);
for(var propertyName in inc) {
  // propertyName is what you want
  if (propertyName != undefined) console.log(properyName);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
