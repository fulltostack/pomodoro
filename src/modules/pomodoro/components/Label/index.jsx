import * as React from 'react';
import PropTypes from 'prop-types';
import {
  TIMER_STARTED,
  TIMER_HOLD,
  SESSION_IN_PROGRESS,
} from '../../actions/constants';

const styles = require('./styles.css');

const Label = ({ timerState, pomodoroState }) => {
  let string = 'pomodoro';

  if (timerState === TIMER_HOLD || timerState === TIMER_STARTED) {
    string = pomodoroState === SESSION_IN_PROGRESS ? 'session' : 'break';
  }

  return (
    <div className={`row ${styles.statRow}`}>
      <div className={styles.stats}>
        {string}
      </div>
    </div>
  );
};

Label.propTypes = {
  timerState: PropTypes.string.isRequired,
  pomodoroState: PropTypes.string.isRequired,
};

export default Label;
