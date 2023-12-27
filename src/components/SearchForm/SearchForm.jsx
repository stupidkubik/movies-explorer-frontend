import { React, useEffect } from 'react';
import PropTypes from 'prop-types';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.jsx';
import useFormValidation from '../../hooks/useFormValidation';

function SearchForm({ handleSearch, handleShort, searchMovies }) {
  // const {
  // savedMovies,
  // isLoading,
  // } = useContext(AppContext);

  const {
    values,
    handleChange,
    resetForm,
  } = useFormValidation({
    search: '',
  });

  useEffect(() => {
    resetForm({ search: searchMovies });
  }, [resetForm]);

  function onSubmit(evt) {
    evt.preventDefault();
    if (evt.target.search.value) {
      handleSearch(evt.target.search.value);
    }
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
            value={values.search || ''}
            onChange={handleChange}
            // disabled={savedMovies ? (savedMovies.length === 0 && true) : false}
            required
          />
          <button
            id="search-submit"
            type="submit"
            name="search-btn"
            className="movies__button"
          />
        </div>
        <FilterCheckbox handleShort={handleShort} />
      </form>
    </section>
  );
}

export default SearchForm;

SearchForm.propTypes = {
  handleSearch: PropTypes.func,
  handleShort: PropTypes.func,
  searchMovies: PropTypes.string,
};
