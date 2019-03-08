import { combineReducers } from 'redux';
import pomodoro from '../modules/pomodoro/reducer';

const reducers = {
  pomodoro,
};

export default combineReducers(reducers);
