import reducer from './index'
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
  UPDATE_SESSION_LENGTH,
  TIMER_NOT_STARTED,
  SESSION_IN_PROGRESS,
  BREAK_IN_PROGRESS
} from '../actions/constants'

const initialState = {
  sessionLength: 25,
  breakLength: 5,
  timerState: TIMER_NOT_STARTED,
  pomodoroState: SESSION_IN_PROGRESS,
  secondsRemaining: 0,
  hasSessionValueChanged: false,
};

describe('Pomodoro reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, { type: null }))
      .toEqual(
        initialState
      );
  });

  it('should handle UPDATE_SESSION_LENGTH', () => {
    const state = {
      hasSessionValueChanged: false,
      sessionLength: 9
    };
    const action = {
      type: UPDATE_SESSION_LENGTH,
      byAmount: 1,
    };
    const expectedState = {
      sessionLength: 10,
      hasSessionValueChanged: true,
    };

    expect(
      reducer(state, action))
      .toEqual(expectedState);
  });

  it('should handle UPDATE_BREAK_LENGTH', () => {
    const state = { breakLength: 2 };
    const action = {
      type: UPDATE_BREAK_LENGTH,
      byAmount: 1,
    };
    const expectedState = {
      breakLength: 3,
    };

    expect(
      reducer(state, action))
      .toEqual(expectedState);
  });

  it('should handle CLEAR_POMODORO', () => {
    const state = { secondsRemaining: 10 };
    const action = {
      type: CLEAR_POMODORO,
      state: TIMER_CLEARED,
    };
    const expectedState = {
      timerState: TIMER_CLEARED,
      secondsRemaining: 0,
    };

    expect(
      reducer(state, action))
      .toEqual(expectedState);
  });

  it('should handle START_POMODORO', () => {
    const state = { timerState: TIMER_CLEARED, sessionLength: 2 };
    const action = {
      type: START_POMODORO,
      state: TIMER_STARTED,
    };
    const expectedState = {
      timerState: TIMER_STARTED,
      hasSessionValueChanged: false,
      sessionLength: 2,
      secondsRemaining: 120,
      pomodoroState: SESSION_IN_PROGRESS,
    };

    expect(
      reducer(state, action))
      .toEqual(expectedState);
  });

  it('should handle STOP_POMODORO', () => {
    const state = { timerState: TIMER_CLEARED };
    const action = {
      type: STOP_POMODORO,
      state: TIMER_HOLD,
    };
    const expectedState = {
      timerState: TIMER_HOLD
    };

    expect(
      reducer(state, action))
      .toEqual(expectedState);
  });

  it('should handle SWITCH_POMODORO_STATE', () => {
    const state = { pomodoroState: SESSION_IN_PROGRESS, breakLength: 10 };
    const action = {
      type: SWITCH_POMODORO_STATE,
      state: TIMER_HOLD,
    };
    const expectedState = {
      pomodoroState: BREAK_IN_PROGRESS,
      secondsRemaining: 600,
      breakLength: 10,
    };

    expect(
      reducer(state, action))
      .toEqual(expectedState);
  });

  it('should handle UPDATE_SECONDS_REMAINING', () => {
    const state = {};
    const action = {
      type: UPDATE_SECONDS_REMAINING,
      seconds: 10,
    };
    const expectedState = {
      secondsRemaining: 10,
    };

    expect(
      reducer(state, action))
      .toEqual(expectedState);
  });
});