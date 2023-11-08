import { React } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';
// import Preloader from '../Preloader/Preloader.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import LoadMore from '../LoadMore/LoadMore.jsx';

function Movies(handleCardSave, onSubmitSearch) {
  return (
    <div className="movies">
      <Header type={'movies'} />
      <SearchForm onSubmitSearch={onSubmitSearch} />
      <div className="movies__border" />
      <MoviesCardList isSavedMovies={false} handleCardSave={handleCardSave} />
      <LoadMore />
      <Footer />
      {/* <Preloader /> */}
    </div>
  );
}

export default Movies;

Movies.propTypes = {
  handleCardSave: PropTypes.func,
  onSubmitSearch: PropTypes.func,
};
