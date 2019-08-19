//import React from 'react';
// import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
//import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Lessons from "./pages/Lessons/index";
import SkillsOverview from "./pages/SkillsOverview/index";
import Quizzes from "./pages/Quizzes/index";
import ReferencesPage from "./pages/ReferencesPage/index";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/references" component={ReferencesPage}></Route>
            <Route exact path="/lessons" component={Lessons}></Route>
            <Route exact path="/lessons/:unitTitle" component={SkillsOverview}></Route>
            <Route path="/lessons/:unitTitle/:skillTitle" component={Quizzes}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
