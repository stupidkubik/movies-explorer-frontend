import { React } from 'react';
// Стили для свитча
// https://www.w3schools.com/howto/howto_css_switch.asp

function FilterCheckbox() {
  return (
    <div className="search__checkbox">
      <label htmlFor="checkbox" className="checkbox__container">
        <input id="checkbox" type="checkbox" className="checkbox" />
        <span className="checkbox__custom" />
      </label>
      <h2 className="checkbox__text">Короткометражки</h2>
    </div>
  );
}

export default FilterCheckbox;
