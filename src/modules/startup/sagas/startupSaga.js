import { call } from 'redux-saga/effects';

const appStarting = () => console.log('App Starting');

function* startup() {
  yield call(appStarting);
}

export default startup;
