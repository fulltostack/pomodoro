/* global document:true */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router
} from 'react-router-dom'; import createHistory from 'history/createBrowserHistory'
import routes from './routes';
import store from './store';
import runRootSaga from './sagas';

runRootSaga();

ReactDOM.render(
  <Provider store={store}>
    <Router history={createHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root'),
);
