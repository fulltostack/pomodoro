import * as React from 'react';

const styles = require('./styles.module.css');

const Divider = () => (
  <span className={styles.divider}>
    <span className={styles.topDot} />
    <span className={styles.bottomDot} />
  </span>
);

export default Divider;
