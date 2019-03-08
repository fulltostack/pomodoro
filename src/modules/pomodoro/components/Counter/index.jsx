import * as React from 'react';
import PropTypes from 'prop-types';

const styles = require('./styles.css');

const Counter = ({ label, value, increment, decrement }) => (
  <div className={styles.container}>
    <p className={styles.label}>{label}</p>
    <div className={styles.counterContainer}>
      <div className={`col-md-4 ${styles.buttonWrapper}`}>
        <button className={`btn btn-default ${styles.button}`} onClick={decrement}>-</button>
      </div>
      <div className={`col-md-2 ${styles.valueWrapper}`}>
        <div>{value}</div>
      </div>
      <div className={`col-md-4 ${styles.buttonWrapper}`}>
        <button className={`btn btn-default ${styles.button}`} onClick={increment}>+</button>
      </div>
    </div>
  </div>
);

Counter.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default Counter;
