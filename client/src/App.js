//import React from 'react';
import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
//import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Lessons from "./pages/Lessons/index";

class App extends Component {
render() {
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This will be a login component
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Switch>
        <Route exact path="/lessons" render={() => <Lessons />}></Route>
      </Switch>
    </div>
    </Router>
  );
}
}

export default App;
