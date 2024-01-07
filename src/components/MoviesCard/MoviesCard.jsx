import {
  React,
  useEffect,
  useState,
  useContext,
  useCallback,
} from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContext from '../../contexts/AppContext';

function MoviesCard({ MovieData, isSavedMovies }) {
  const {
    savedMovies,
    handleMovieSave,
    handleMovieDelete,
  } = useContext(AppContext);

  const {
    image,
    // nameRU,
    nameEN,
    duration,
    id,
    trailerLink,
  } = MovieData;

  const [isSaved, setIsSaved] = useState(false);
  const movieSaveButtonClassName = `movie__save ${isSaved
    ? 'movie__save_active'
    : ''}`;
  const movieSaveClassName = `movie ${isSavedMovies
    ? 'movie_hover'
    : ''}`;
  // Проверяем наличие лайка
  useEffect(() => {
    setIsSaved(savedMovies.some((item) => item.movieId === id));
  }, [id, setIsSaved]);
  // Функция конвертации времени
  function convertTime(time) {
    const minutes = time % 60;
    const hours = Math.floor(time / 60);
    if (hours === 0) {
      return `${minutes}m`;
    }
    return `${hours}h ${minutes}m`;
  }
  // Коллбэк-функция логки сохранения фильма
  const handleClick = useCallback(() => {
    if (isSaved) {
      handleMovieSave(MovieData, true);
      setIsSaved(false);
    } else {
      handleMovieSave(MovieData, false);
      setIsSaved(true);
    }
  }, [isSaved, setIsSaved, handleMovieSave]);

  return (
    <li className={movieSaveClassName}>
      <Link to={trailerLink} target='_blank'>
        <img
          className="movie__image"
          src={isSavedMovies ? image : `https://api.nomoreparties.co${image.url}`}
          alt={`shot from “${nameEN}“`}
        />
      </Link>

      <div className="movie__data">
        <div className="movie__container">
          <h2 className="movie__title">{nameEN}</h2>
          <div className="movie__like-box">
            {isSavedMovies
              ? <button
              className="movieDeleteButton"
              type="button"
              aria-label="delete"
              onClick={() => handleMovieDelete(MovieData._id)}
            />
              : <button
              className={movieSaveButtonClassName}
              type="button"
              aria-label="save"
              onClick={handleClick}
            />
            }
          </div>
        </div>
        <p className="movie__duration">{convertTime(duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;

MoviesCard.propTypes = {
  isSavedMovies: PropTypes.bool,
  MovieData: PropTypes.object,
};
