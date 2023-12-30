import { React, useContext } from 'react';
import PropTypes from 'prop-types';
import Preloader from '../Preloader/Preloader.jsx';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import AppContext from '../../contexts/AppContext';

function MoviesCardList({ isSavedMovies, arrayForRender }) {
  const { isLoading } = useContext(AppContext);

  return (
    <section className="movies__wrapper">
      {isLoading ? <Preloader />
        : <ul className="movies__list">
          {isSavedMovies
            ? (arrayForRender.map((MovieData) => (
                <MoviesCard
                key={MovieData.id}
                MovieData={MovieData}
                isSavedMovies={isSavedMovies}
              />)))
            : (arrayForRender.map((MovieData) => (
              <MoviesCard
              key={MovieData.id}
              MovieData={MovieData}
              isSavedMovies={isSavedMovies}
            />)))}
        </ul>
      }
    </section>
  );
}

export default MoviesCardList;

MoviesCardList.propTypes = {
  isSavedMovies: PropTypes.bool,
  arrayForRender: PropTypes.array,
};
