import { React } from 'react';
import PropTypes from 'prop-types';

// Стили для свитча
// https://www.w3schools.com/howto/howto_css_switch.asp

function FilterCheckbox({ handleShort, isShort }) {
  function onChange() {
    handleShort();
  }

  return (
    <div className="checkbox movies__checkbox">
      <label htmlFor="checkbox" className="checkbox__container">
        <input
          id="checkbox"
          type="checkbox"
          className="checkbox__input"
          onChange={onChange}
          checked={isShort}
        />
        <span className="checkbox__custom" />
      </label>
      <h2 className="checkbox__text">Short movies</h2>
    </div>
  );
}

export default FilterCheckbox;

FilterCheckbox.propTypes = {
  handleShort: PropTypes.func,
  isShort: PropTypes.bool,
};
