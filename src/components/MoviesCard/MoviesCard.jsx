import {
  React,
  useEffect,
  useState,
  useContext,
} from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../contexts/AppContext';

function MoviesCard({
  MovieData,
  isSavedMovies,
  handleMovieSave,
}) {
  const { savedMovies, setSavedMovies } = useContext(AppContext);
  const [isSaved, setIsSaved] = useState(false);

  const {
    image,
    nameRU,
    duration,
    id,
  } = MovieData;

  useEffect(() => {
    setIsSaved(savedMovies.some((item) => item.id === id));
  }, [savedMovies, setSavedMovies, id, setIsSaved]);

  function handleClick() {
    if (isSaved) {
      setIsSaved(false);
    } else {
      handleMovieSave(id);
      setIsSaved(true);
    }
  }
  console.log('savedMovies', savedMovies);

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
        src={image.url}
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
              onClick={handleClick}
            />
              : <button
              className={movieSaveButtonClassName}
              type="button"
              aria-label="удалить"
              onClick={handleClick}
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
  handleMovieSave: PropTypes.func,
};
