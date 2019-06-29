import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ZhiReactIndex from "./react16";
class App extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.changeName.bind(this)}>change name</button>
        <Child name={this.state.name}/> */}
        <ZhiReactIndex />
      </div>
    );
  }
}

export default App;