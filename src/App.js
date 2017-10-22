import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {output:0};
  };

  increment() {
    const { output } = this.state;
    this.setState({output: output + 1})
  }

  decrement() {
    const { output } = this.state;
    this.setState({output: output - 1})
  }
  
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
        <button onClick={this.increment.bind(this)}>
          +
        </button>
        <button onClick={this.decrement.bind(this)}>
          -
        </button>
        <output>
          {this.state.output}          
        </output>
      </div>
    );
  }
}

export default App;
