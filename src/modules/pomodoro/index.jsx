import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Counter from './components/Counter';
import Timer from './components/Timer';
import Label from './components/Label';
import BottomActionBar from './components/BottomActionBar';
import {
  updateBreakLength,
  updateSessionLength,
  startPomodoro,
  stopPomodoro,
  clearPomodoro,
  switchPomodoroState,
  updateSecondsRemaining,
} from './actions';
import { TIMER_STARTED } from './actions/constants';

const styles = require('./styles.css');

class Pomodoro extends React.Component {

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.props.timerState === TIMER_STARTED) {
        if (this.props.secondsRemaining === 0) {
          this.props.switchPomodoroState();
        } else {
          this.props.updateSeconds(this.props.secondsRemaining - 1);
        }
      }
    }, 1000);
  }

  componentWillUnMount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className={styles.pomodoro}>
        <div className={styles.counterContainer}>
          <Counter
            label="Session Length"
            value={this.props.sessionLength}
            increment={this.props.incrementSessionLength}
            decrement={this.props.decrementSessionLength}
          />
          <Counter
            label="Break Length"
            value={this.props.breakLength}
            increment={this.props.incrementBreakLength}
            decrement={this.props.decrementBreakLength}
          />
        </div>
        <Timer seconds={this.props.secondsRemaining} />
        <Label timerState={this.props.timerState} pomodoroState={this.props.pomodoroState} />
        <BottomActionBar
          onStart={this.props.start}
          onStop={this.props.stop}
          onClear={this.props.clear}
        />
      </div>
    );
  }
}

Pomodoro.propTypes = {
  sessionLength: PropTypes.number.isRequired,
  breakLength: PropTypes.number.isRequired,
  timerState: PropTypes.string.isRequired,
  pomodoroState: PropTypes.string.isRequired,
  secondsRemaining: PropTypes.number.isRequired,
  incrementSessionLength: PropTypes.func.isRequired,
  decrementSessionLength: PropTypes.func.isRequired,
  incrementBreakLength: PropTypes.func.isRequired,
  decrementBreakLength: PropTypes.func.isRequired,
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  switchPomodoroState: PropTypes.func.isRequired,
  updateSeconds: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  sessionLength: state.pomodoro.sessionLength,
  breakLength: state.pomodoro.breakLength,
  timerState: state.pomodoro.timerState,
  pomodoroState: state.pomodoro.pomodoroState,
  secondsRemaining: state.pomodoro.secondsRemaining,
});

const mapDispatchToProps = dispatch => ({
  incrementSessionLength: () => dispatch(updateSessionLength(1)),
  decrementSessionLength: () => dispatch(updateSessionLength(-1)),
  incrementBreakLength: () => dispatch(updateBreakLength(1)),
  decrementBreakLength: () => dispatch(updateBreakLength(-1)),
  start: () => dispatch(startPomodoro()),
  stop: () => dispatch(stopPomodoro()),
  clear: () => dispatch(clearPomodoro()),
  switchPomodoroState: () => dispatch(switchPomodoroState()),
  updateSeconds: seconds => dispatch(updateSecondsRemaining(seconds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pomodoro);
