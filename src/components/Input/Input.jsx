import { React } from 'react';
import PropTypes from 'prop-types';

function Input({
  onChange,
  spanId,
  error,
  ...rest
}) {
  return (
    <>
      <input {...rest} onChange={onChange} required />
      <span id={spanId} className="form__error">{error}</span>
    </>
  );
}

export default Input;

Input.propTypes = {
  onChange: PropTypes.func,
  spanId: PropTypes.string,
  error: PropTypes.string,
};
