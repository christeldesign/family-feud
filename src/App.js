import React, { Component } from 'react';
import './App.css';
import Question from './Question.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Family Feud</h1>
          <h2>BETHEL EDITION</h2>
        </header>
        <p className="App-intro">
          <Question />
        </p>
      </div>
    );
  }
}

export default App;
