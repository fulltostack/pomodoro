/* global document:true */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import store from './store';
import runRootSaga from './sagas';

runRootSaga();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root'),
);
