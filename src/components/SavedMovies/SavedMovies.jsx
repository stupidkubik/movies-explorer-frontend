import { React } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';

function SavedMovies({ handleMovieSave }) {
  return (
    <>
      <Header type={'savedMovies'} />
      <main className="movies savedMovies">
        <SearchForm />
        <div className="movies__border" />
        <MoviesCardList isSavedMovies={true} handleMovieSave={handleMovieSave} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;

SavedMovies.propTypes = {
  handleMovieSave: PropTypes.func,
};
