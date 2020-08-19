import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from './page/HomePage';
import BuilderPage from './page/BuilderPage';
import FormsListPage from './page/FormsListPage';
import Nav from './shared/Nav';
import SubmissionsListPage from './page/SubmissionsListPage';

export default class App extends React.Component {
  render = (): JSX.Element => {
    return (
      <div className="App">
        <Nav />
        <Router>
          <Switch>
            <Route exact={true} path="/" component={HomePage} />
            <Route exact={true} path="/page/builder.html" component={BuilderPage} />
            <Route exact={true} path="/page/forms.html" component={FormsListPage} />

            {/* Hack for now! */}
            <Route exact={true} path="/page/submissions.html" component={SubmissionsListPage} />
          </Switch>
        </Router>
      </div>
    );
  }
};