import { React } from 'react';
import PropTypes from 'prop-types';

function Input({ onChange, spanId, ...rest }) {
  return (
    <>
      <input {...rest} onChange={onChange} required />
      <span id={spanId} className="popup__error"></span>
    </>
  );
}

export default Input;

Input.propTypes = {
  onChange: PropTypes.function,
  spanId: PropTypes.function,
};
