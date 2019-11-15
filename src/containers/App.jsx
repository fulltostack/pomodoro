import * as React from 'react';
import PropTypes from 'prop-types';

import style from './app.module.css'

const App = props => (
  <div className={style.mainBodyStyle} >
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
