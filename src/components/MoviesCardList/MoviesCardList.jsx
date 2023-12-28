import { React, useContext } from 'react';
import PropTypes from 'prop-types';
import Preloader from '../Preloader/Preloader.jsx';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import AppContext from '../../contexts/AppContext';

// import { MoviesList } from '../../utils/constants';

function MoviesCardList({ isSavedMovies, handleMovieSave, arrayForRender }) {
  const { isLoading } = useContext(AppContext);
  console.log('arrayForRender', arrayForRender);

  return (
    <section className="movies__wrapper">
      {isLoading ? <Preloader />
        : <ul className="movies__list">
          {isSavedMovies
            ? (arrayForRender.filter((movie) => {
              const { isSaved } = movie;
              return isSaved === true;
            })
              .map((MovieData) => (
                <MoviesCard
                key={MovieData.id}
                MovieData={MovieData}
                isSavedMovies={isSavedMovies}
                handleMovieSave={handleMovieSave}
              />)))
            : (arrayForRender.map((MovieData) => (
              <MoviesCard
              key={MovieData.id}
              MovieData={MovieData}
              isSavedMovies={isSavedMovies}
              handleMovieSave={handleMovieSave}
            />)))}
        </ul>
      }
    </section>
  );
}

export default MoviesCardList;

MoviesCardList.propTypes = {
  isSavedMovies: PropTypes.bool,
  handleMovieSave: PropTypes.func,
  arrayForRender: PropTypes.array,
};
