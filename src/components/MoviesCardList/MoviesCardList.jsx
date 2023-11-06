import { React } from 'react';
import PropTypes from 'prop-types';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import { MoviesList } from '../../utils/constants';

function MoviesCardList({ isSavedMovies, handleMovieSave }) {
  return (
    <ul className="movies__list">
      {isSavedMovies
        ? MoviesList.filter((movie) => {
          const { isSaved } = movie;
          return isSaved === true;
        })
          .map((MovieData) => (
          <MoviesCard
            key={MovieData._id}
            MovieData={MovieData}
            isSavedMovies={isSavedMovies}
            handleMovieSave={handleMovieSave}
          />
          ))
        : MoviesList.map((MovieData) => (
          <MoviesCard
            key={MovieData._id}
            MovieData={MovieData}
            isSavedMovies={isSavedMovies}
            handleMovieSave={handleMovieSave}
          />
        ))
      }
    </ul>
  );
}

export default MoviesCardList;

MoviesCardList.propTypes = {
  isSavedMovies: PropTypes.boolean,
  handleMovieSave: PropTypes.func,
};
