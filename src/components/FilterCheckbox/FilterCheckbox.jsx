import { React, useCallback } from 'react';
import PropTypes from 'prop-types';

// Стили для свитча
// https://www.w3schools.com/howto/howto_css_switch.asp

function FilterCheckbox({ handleShort }) {
  const onChange = useCallback(() => {
    handleShort();
  }, []);

  return (
    <div className="checkbox movies__checkbox">
      <label htmlFor="checkbox" className="checkbox__container">
        <input
          id="checkbox"
          type="checkbox"
          className="checkbox__input"
          onChange={onChange}
        />
        <span className="checkbox__custom" />
      </label>
      <h2 className="checkbox__text">Короткометражки</h2>
    </div>
  );
}

export default FilterCheckbox;

FilterCheckbox.propTypes = {
  handleShort: PropTypes.func,
};
