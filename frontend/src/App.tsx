import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from './page/HomePage';
import BuilderPage from './page/BuilderPage';
import FormsListPage from './page/FormsListPage';
import SubmissionsListPage from './page/SubmissionsListPage';
import SubmitPage from './page/SubmitPage';
import Nav from './shared/Nav';
import FormsTemp from './temp/FormsListTemp';

export default class App extends React.Component {
  render = (): JSX.Element => {
    return (
      <div className="App">
        <Nav />
        <Router>
          <Switch>
            {/* App Pages */}
            <Route exact={true} path="/" component={HomePage} />
            <Route exact={true} path="/page/builder.html" component={BuilderPage} />
            <Route exact={true} path="/page/forms.html" component={FormsListPage} />
            <Route exact={true} path="/page/submissions.html" component={SubmissionsListPage} />
            <Route exact={true} path="/page/submit.html" component={SubmitPage} />

            {/* App Temp */}
            <Route exact={true} path="/temp/forms.html" component={FormsTemp}/>
          </Switch>
        </Router>
      </div>
    );
  }
};
