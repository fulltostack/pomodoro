import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import {
  clearPomodoro,
  startPomodoro,
  stopPomodoro,
  switchPomodoroState,
  updateBreakLength,
  updateSecondsRemaining,
  updateSessionLength
} from './index';
import {
  CLEAR_POMODORO,
  START_POMODORO,
  STOP_POMODORO,
  SWITCH_POMODORO_STATE,
  TIMER_CLEARED,
  TIMER_HOLD,
  TIMER_STARTED,
  UPDATE_BREAK_LENGTH,
  UPDATE_SECONDS_REMAINING,
  UPDATE_SESSION_LENGTH
} from './constants';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Create car actions', () => {

  beforeEach(() => {
    store.clearActions();
  });

  it('creates UPDATE_SESSION_LENGTH action from its action creator', (done) => {

    const expectedAction = {
      type: UPDATE_SESSION_LENGTH,
      byAmount: 1,
    };
    const createdAction = updateSessionLength(1);

    expect(createdAction).toEqual(expectedAction);
    done();
  });

  it('creates UPDATE_BREAK_LENGTH action from its action creator', (done) => {

    const expectedAction = {
      type: UPDATE_BREAK_LENGTH,
      byAmount: 1,

    };
    const createdAction = updateBreakLength(1);

    expect(createdAction).toEqual(expectedAction);
    done();
  });

  it('creates START_POMODORO action from its action creator', (done) => {

    const expectedAction = {
      type: START_POMODORO,
      state: TIMER_STARTED,
    };
    const createdAction = startPomodoro();

    expect(createdAction).toEqual(expectedAction);
    done();
  });

  it('creates STOP_POMODORO action from its action creator', (done) => {

    const expectedAction = {
      type: STOP_POMODORO,
      state: TIMER_HOLD,
    };
    const createdAction = stopPomodoro();

    expect(createdAction).toEqual(expectedAction);
    done();
  });

  it('creates CLEAR_POMODORO action from its action creator', (done) => {
    const expectedAction = {
      type: CLEAR_POMODORO,
      state: TIMER_CLEARED,
    };
    const createdAction = clearPomodoro(10);

    expect(createdAction).toEqual(expectedAction);
    done();
  });

  it('creates SWITCH_POMODORO_STATE action from its action creator', (done) => {
    const expectedAction = {
      type: SWITCH_POMODORO_STATE,
    };
    const createdAction = switchPomodoroState();

    expect(createdAction).toEqual(expectedAction);
    done();
  });

  it('creates UPDATE_SECONDS_REMAINING action from its action creator', (done) => {
    const expectedAction = {
      type: UPDATE_SECONDS_REMAINING,
      seconds: 10,
    };
    const createdAction = updateSecondsRemaining(10);

    expect(createdAction).toEqual(expectedAction);
    done();
  });

  it('dispatch UPDATE_SESSION_LENGTH', (done) => {

    const expectedAction = [{
      type: UPDATE_SESSION_LENGTH,
      byAmount: 1,
    }];

    store.dispatch(updateSessionLength(1));
    const storeActions = store.getActions();

    expect(storeActions).toEqual(expectedAction);
    done();
  });

  it('dispatch UPDATE_BREAK_LENGTH', (done) => {

    const expectedAction = [{
      type: UPDATE_BREAK_LENGTH,
      byAmount: 1,
    }];

    store.dispatch(updateBreakLength(1));
    const storeActions = store.getActions();

    expect(storeActions).toEqual(expectedAction);
    done();
  });

  it('dispatch START_POMODORO', (done) => {

    const expectedAction = [{
      type: START_POMODORO,
      state: TIMER_STARTED,
    }];

    store.dispatch(startPomodoro());
    const storeActions = store.getActions();

    expect(storeActions).toEqual(expectedAction);
    done();
  });

  it('dispatch STOP_POMODORO', (done) => {

    const expectedAction = [{
      type: STOP_POMODORO,
      state: TIMER_HOLD,
    }];

    store.dispatch(stopPomodoro());
    const storeActions = store.getActions();

    expect(storeActions).toEqual(expectedAction);
    done();
  });

  it('dispatch CLEAR_POMODORO', (done) => {

    const expectedAction = [{
      type: CLEAR_POMODORO,
      state: TIMER_CLEARED,
    }];

    store.dispatch(clearPomodoro(10));
    const storeActions = store.getActions();

    expect(storeActions).toEqual(expectedAction);
    done();
  });

  it('dispatch SWITCH_POMODORO_STATE', (done) => {
    const expectedAction = [{
      type: SWITCH_POMODORO_STATE,
    }];

    store.dispatch(switchPomodoroState());
    const storeActions = store.getActions();

    expect(storeActions).toEqual(expectedAction);

    done();
  });

  it('dispatch UPDATE_SECONDS_REMAINING', (done) => {
    const expectedAction = [{
      type: UPDATE_SECONDS_REMAINING,
      seconds: 10,
    }];

    store.dispatch(updateSecondsRemaining(10));
    const storeActions = store.getActions();

    expect(storeActions).toEqual(expectedAction);

    done();
  });
});

