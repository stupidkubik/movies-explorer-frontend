import { React } from 'react';
// https://www.w3schools.com/howto/howto_css_switch.asp
// https://codepen.io/AllThingsSmitty/pen/MmxxOz/

function FilterCheckbox() {
  return (
    <div className="search__checkbox">
      <input type="checkbox" className="checkbox" />
      <span className="checkbox__custom" />
      <h2 className="checkbox__text">Короткометражки</h2>
    </div>
  );
}

export default FilterCheckbox;
