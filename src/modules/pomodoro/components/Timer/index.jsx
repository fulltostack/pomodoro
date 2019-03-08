import * as React from 'react';
import PropTypes from 'prop-types';

import Digit from '../Digit';
import Divider from '../ClockDivider';

const styles = require('./styles.css');

const Timer = (props) => {
  let minutes = Math.floor(props.seconds / 60).toString();

  if (minutes.length === 1) {
    minutes = `0${minutes}`;
  }

  let seconds = (props.seconds % 60).toString();

  if (seconds.length === 1) {
    seconds = `0${seconds}`;
  }

  const numberOfDigitsInMinute = minutes.length;

  return (
    <div className={styles.container}>
      <div className={styles.timeContainer}>
        <p>Minutes</p>
        <div className={styles.digitContainer}>
          {
            [...Array(numberOfDigitsInMinute).keys()].map(index => (
              <Digit key={index} value={minutes[index]} />
            ))
          }
        </div>
      </div>
      <div className={styles.divider}>
        <Divider />
      </div>
      <div className={styles.timeContainer}>
        <p>Seconds</p>
        <div className={styles.digitContainer}>
          <Digit value={seconds[0]} />
          <Digit value={seconds[1]} />
        </div>
      </div>
    </div>
  );
};

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
};

export default Timer;
