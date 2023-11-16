import { React } from 'react';
import PropTypes from 'prop-types';

function MoviesCard({
  MovieData,
  isSavedMovies,
  handleMovieSave,
}) {
  // const currentUser = useContext(CurrentUserContext);
  const {
    image,
    nameRU,
    duration,
    isSaved,
  } = MovieData;

  const movieSaveButtonClassName = `movie__save ${isSaved
    ? 'movie__save_active'
    : ''}`;

  const movieSaveClassName = `movie ${isSavedMovies
    ? 'movie_hover'
    : ''}`;

  return (
    <li className={movieSaveClassName}>
      <img
        className="movie__image"
        src={image}
        alt={`кадр из фильма “${nameRU}“`}
      />

      <div className="movie__data">
        <div className="movie__container">
          <h2 className="movie__title">{nameRU}</h2>
          <div className="movie__like-box">
            {isSavedMovies
              ? <button
              className="movieDeleteButton"
              type="button"
              aria-label="сохранить"
              onClick={(evt) => handleMovieSave(evt)}
            />
              : <button
              className={movieSaveButtonClassName}
              type="button"
              aria-label="удалить"
              onClick={(evt) => handleMovieSave(evt)}
            />
            }
          </div>
        </div>
        <p className="movie__duration">{duration}</p>
      </div>
    </li>
  );
}

export default MoviesCard;

MoviesCard.propTypes = {
  isSavedMovies: PropTypes.bool,
  MovieData: PropTypes.object,
  handleMovieSave: PropTypes.object,
};
