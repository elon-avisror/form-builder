import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './page/Home';
import Builder from './page/Builder';
import Forms from './page/Forms';
import Submissions from './page/Submissions';
import Submit from './page/Submit';
import Nav from './shared/Nav';

export default class App extends Component {

  render(): JSX.Element {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/builder.html" component={Builder} />
            <Route exact={true} path="/forms.html" component={Forms} />
            <Route exact={true} path="/submissions.html" component={Submissions} />
            <Route exact={true} path="/submit.html" component={Submit} />
          </Switch>
        </Router>
      </div>
    );
  }
};
