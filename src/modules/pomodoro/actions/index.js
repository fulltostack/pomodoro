import {
  UPDATE_SESSION_LENGTH,
  UPDATE_BREAK_LENGTH,
  START_POMODORO,
  STOP_POMODORO,
  CLEAR_POMODORO,
  TIMER_STARTED,
  TIMER_HOLD,
  TIMER_CLEARED,
  SWITCH_POMODORO_STATE,
  UPDATE_SECONDS_REMAINING,
} from './constants';

export const updateSessionLength = byAmount => ({
  type: UPDATE_SESSION_LENGTH,
  byAmount,
});

export const updateBreakLength = byAmount => ({
  type: UPDATE_BREAK_LENGTH,
  byAmount,
});

export const startPomodoro = () => ({
  type: START_POMODORO,
  state: TIMER_STARTED,
});

export const stopPomodoro = () => ({
  type: STOP_POMODORO,
  state: TIMER_HOLD,
});

export const clearPomodoro = () => ({
  type: CLEAR_POMODORO,
  state: TIMER_CLEARED,
});

export const switchPomodoroState = () => ({
  type: SWITCH_POMODORO_STATE,
});

export const updateSecondsRemaining = seconds => ({
  type: UPDATE_SECONDS_REMAINING,
  seconds,
});
