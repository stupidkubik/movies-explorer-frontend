import { React } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.jsx';

function SearchForm() {
  return (
    <form
      className={'movies__form'}
      name={'search'}
      onSubmit={''}
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
        />
        <button
          id="search-submit"
          type="submit"
          name="search-btn"
          className="movies__button"
        />
      </div>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
