import { React } from 'react';

function Input(params) {
  const { onChange, spanId, ...rest } = params;

  return (
    <>
      <input {...rest} onChange={onChange} required />
      <span id={spanId} className="popup__error"></span>
    </>
  );
}

export default Input;
