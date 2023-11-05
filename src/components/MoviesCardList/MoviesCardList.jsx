import { React } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import { MoviesList } from '../../utils/constants';

function MoviesCardList(handleCardSave) {
  return (
    <ul className="movies__list">
      {MoviesList.map((MovieData) => (
          <MoviesCard
            key={MovieData._id}
            MovieData={MovieData}
            handleCardSave={handleCardSave}
          />
      ))}
    </ul>
  );
}

export default MoviesCardList;
