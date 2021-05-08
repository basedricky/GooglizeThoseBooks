import React, { Component } from 'react';
import { BrowserRouter as Router, Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";

export default class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </Router>

    )
  }
}