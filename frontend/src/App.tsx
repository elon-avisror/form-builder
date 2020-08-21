import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Nav from './shared/Nav';
import HomePage from './page/HomePage';
import FormsListPage from './page/FormsListPage';
import BuilderPage from './page/BuilderPage';
import SubmitPage from './page/SubmitPage';
import SubmissionsListPage from './page/SubmissionsListPage';

export default class App extends React.Component {
  render = (): JSX.Element => {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/page/forms" component={FormsListPage} />
          <Route exact path="/page/builder" component={BuilderPage} />
          <Route exact path="/page/submit/:form_id" component={SubmitPage} />
          <Route exact path="/page/submissions/:form_id" component={SubmissionsListPage} />
        </Router>
      </div>
    );
  }
};