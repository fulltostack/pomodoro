import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import BASE_ROUTE from '../constants/Routes';
import App from '../containers/App';
import Pomodoro from '../modules/pomodoro';

export default (
  <App>
    <Router>
      <Route path={BASE_ROUTE} component={Pomodoro} />
      <Redirect from="/*" to={BASE_ROUTE} />
    </Router>
  </App>
);
