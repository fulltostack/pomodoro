import * as React from 'react';
import PropTypes from 'prop-types';

const styles = require('./styles.css');

const BottomActionBar = props => (
  <div className={styles.container}>
    <div className={`row ${styles.btns}`}>
      <button className={`btn btn-default btn-lg ${styles.button}`} onClick={props.onStart}>
        start
      </button>
      <button className={`btn btn-default btn-lg ${styles.button} ${styles.stop}`} onClick={props.onStop}>
        stop
      </button>
      <button className={`btn btn-default btn-lg ${styles.button}`} onClick={props.onClear}>
        clear
      </button>
    </div>
  </div>
);

BottomActionBar.propTypes = {
  onStart: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default BottomActionBar;
