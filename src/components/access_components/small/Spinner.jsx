import React, { Fragment } from 'react';
import spinner from './spinner.gif';
const Spinner = () => (
  <Fragment>
    <img src={spinner} alt='loading ...' style={spinnerStyle} />
  </Fragment>
);
const spinnerStyle = {
  width: '50px',
  margin: 'auto',
  paddingTop: '20%',
  paddingBottom: '20%',
  display: 'block'
};
export default Spinner;
