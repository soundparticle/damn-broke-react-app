import React, { Component } from 'react';
import { BlurbComponent } from "./Blurb";
import logo from './logo.svg';
import './app.css';

class App extends Component {

  // You dont want to use this value, try using the value you passed in from your index.js file.
  render(props = {text: 'this ain\'t right'}) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div className="App-blurb">
            <h1>Oh No! Where Я meh blurbz!?</h1>
            <small>{props.text}</small>
            <BlurbComponent text={props.text}/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
