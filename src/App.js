import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { scan } from 'rxjs/operators';

const action$ = new BehaviorSubject({type: 'INIT'});
const state$ = action$.pipe(
  scan((state, action) => {
    switch (action.type) {
      case 'INC': 
        return {
          output: state.output + 1
        };
      case 'DEC': 
      return {
        output: state.output - 1
      };
      default: 
        return state;
    }
  }, {output:0})
);

class App extends Component {
  
  componentDidMount() {
    this.subscription = state$.subscribe((state) => this.setState(state))
  };

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  constructor() {
    super();
    this.state = {output:0};
  };

  increment() {
    action$.next({type:'INC'})
  }

  decrement() {
    action$.next({type:'DEC'})
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
