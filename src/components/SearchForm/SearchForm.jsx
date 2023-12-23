import { React, useContext } from 'react';

import AppContext from '../../contexts/AppContext';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.jsx';

function SearchForm() {
  const { onSubmitSearch } = useContext(AppContext);

  function onSubmit(evt) {
    evt.preventDefault();
    console.log(evt.target);
  }

  return (
    <section className="movies__wrapper">
      <form
        className={'movies__form'}
        name={'search'}
        onSubmit={onSubmit}
      >
        <div className="movies__container">
          <input
            id="search"
            className="movies__input"
            name="search"
            type="search"
            placeholder='Фильм'
            // value={values.search}
            // onChange={'handleChange'}
            required
          />
          <button
            id="search-submit"
            type="submit"
            name="search-btn"
            className="movies__button"
            onSubmit={(evt) => onSubmitSearch(evt)}
          />
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
