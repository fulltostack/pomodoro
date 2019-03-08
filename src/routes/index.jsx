import * as React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';
import BASE_ROUTE from '../constants/Routes';
import App from '../containers/App';
import Pomodoro from '../modules/pomodoro';

export default (
  <Route path={BASE_ROUTE} component={App}>
    <IndexRoute component={Pomodoro} />
    <Redirect from="/*" to={BASE_ROUTE} />
  </Route>
);
