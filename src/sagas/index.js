import { fork } from 'redux-saga/effects';
import { sagaMiddleware } from '../store';
import startup from '../modules/startup/sagas/startupSaga';

function* root() {
  yield fork(startup);
}

const runRootSaga = () => sagaMiddleware.run(root);

export default runRootSaga;
