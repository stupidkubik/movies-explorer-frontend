import { React, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Preloader from '../Preloader/Preloader.jsx';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import AppContext from '../../contexts/AppContext';

// import { MoviesList } from '../../utils/constants';

function MoviesCardList({ isSavedMovies, handleMovieSave, filterMovies }) {
  const [arrayLength, setArrayLength] = useState('');
  const arrayLast = filterMovies.slice(0, arrayLength);

  const { isLoading } = useContext(AppContext);
  console.log('filterMovies', filterMovies);

  return (
    <section className="movies__wrapper">
      {isLoading ? <Preloader />
        : <ul className="movies__list">
          {isSavedMovies
            ? filterMovies.filter((movie) => {
              const { isSaved } = movie;
              return isSaved === true;
            })
              .map((MovieData) => (
              <MoviesCard
                key={MovieData._id}
                MovieData={MovieData}
                isSavedMovies={isSavedMovies}
                handleMovieSave={handleMovieSave}
              />))
            : filterMovies.map((MovieData) => (
              <MoviesCard
              key={MovieData.id}
              MovieData={MovieData}
              isSavedMovies={isSavedMovies}
              handleMovieSave={handleMovieSave}
            />))
          }
        </ul>
      }
    </section>
  );
}

export default MoviesCardList;

MoviesCardList.propTypes = {
  isSavedMovies: PropTypes.bool,
  handleMovieSave: PropTypes.func,
  filterMovies: PropTypes.array,
};
