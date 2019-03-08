import * as React from 'react';
import PropTypes from 'prop-types';

const styles = require('./styles.css');

const Digit = ({ value }) => (
  <div className={styles.container}>
    <div>{value}</div>
  </div>
);

Digit.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Digit;
