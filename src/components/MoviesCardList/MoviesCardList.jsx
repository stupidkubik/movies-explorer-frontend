import { React } from 'react';
import PropTypes from 'prop-types';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';

function MoviesCardList({ isSavedMovies, arrayForRender }) {
  return (
    arrayForRender[0]
      ? <section className="movies__wrapper">
        <ul className="movies__list">
          {isSavedMovies
            ? (arrayForRender.map((MovieData) => (
                <MoviesCard
                key={MovieData._id}
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
      </section>
      : <span className='movies__noFind'>Nothing found</span>
  );
}

export default MoviesCardList;

MoviesCardList.propTypes = {
  isSavedMovies: PropTypes.bool,
  arrayForRender: PropTypes.array,
};
