import { React } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import { MoviesList } from '../../utils/constants';

function MoviesCardList(handleCardSave, saved) {
  return (
    <ul className="movies__list">
      {saved
        ? MoviesList.filter((movie) => {
          const { isSaved } = movie;
          return isSaved === true;
        })
          .map((MovieData) => (
          <MoviesCard
            key={MovieData._id}
            MovieData={MovieData}
            handleCardSave={handleCardSave}
          />
          ))
        : MoviesList.map((MovieData) => (
          <MoviesCard
            key={MovieData._id}
            MovieData={MovieData}
            handleCardSave={handleCardSave}
          />
        ))
      }
    </ul>
  );
}

export default MoviesCardList;
