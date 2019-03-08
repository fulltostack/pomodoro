import {
  UPDATE_SESSION_LENGTH,
  UPDATE_BREAK_LENGTH,
  START_POMODORO,
  STOP_POMODORO,
  CLEAR_POMODORO,
  TIMER_NOT_STARTED,
  TIMER_CLEARED,
  SWITCH_POMODORO_STATE,
  UPDATE_SECONDS_REMAINING,
  SESSION_IN_PROGRESS,
  BREAK_IN_PROGRESS,
} from '../actions/constants';

const initialState = {
  sessionLength: 25,
  breakLength: 5,
  timerState: TIMER_NOT_STARTED,
  pomodoroState: SESSION_IN_PROGRESS,
  secondsRemaining: 0,
  hasSessionValueChanged: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SESSION_LENGTH:
      return (state.sessionLength === 1 && action.byAmount < 0) ? state : {
        ...state,
        sessionLength: state.sessionLength + action.byAmount,
        hasSessionValueChanged: true,
      };
    case UPDATE_BREAK_LENGTH:
      return (state.breakLength === 1 && action.byAmount < 0) ? state : {
        ...state,
        breakLength: state.breakLength + action.byAmount,
      };
    case START_POMODORO: {
      let secondsRemaining = state.secondsRemaining;
      let pomodoroState = state.pomodoroState;

      if (state.timerState === TIMER_CLEARED ||
        state.timerState === TIMER_NOT_STARTED ||
        state.hasSessionValueChanged) {
        secondsRemaining = state.sessionLength * 60;
        pomodoroState = SESSION_IN_PROGRESS;
      }

      return {
        ...state,
        timerState: action.state,
        hasSessionValueChanged: false,
        secondsRemaining,
        pomodoroState,
      };
    }
    case STOP_POMODORO:
      return {
        ...state,
        timerState: action.state,
      };
    case CLEAR_POMODORO:
      return {
        ...state,
        timerState: action.state,
        secondsRemaining: 0,
      };
    case SWITCH_POMODORO_STATE: {
      const pomodoroState = state.pomodoroState === SESSION_IN_PROGRESS ?
                              BREAK_IN_PROGRESS : SESSION_IN_PROGRESS;

      const secondsRemaining = (state.pomodoroState === SESSION_IN_PROGRESS ?
                                state.breakLength : state.sessionLength) * 60;

      return {
        ...state,
        pomodoroState,
        secondsRemaining,
      };
    }
    case UPDATE_SECONDS_REMAINING:
      return {
        ...state,
        secondsRemaining: action.seconds,
      };
    default:
      return state;
  }
};
