import {
  React,
  useEffect,
  useState,
  useContext,
} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContext from '../../contexts/AppContext';

function MoviesCard({ MovieData, isSavedMovies }) {
  const {
    savedMovies,
    setSavedMovies,
    handleMovieSave,
    handleMovieDelete,
  } = useContext(AppContext);

  const [isSaved, setIsSaved] = useState(false);
  const {
    image,
    nameRU,
    duration,
    id,
    trailerLink,
  } = MovieData;

  const movieSaveButtonClassName = `movie__save ${isSaved
    ? 'movie__save_active'
    : ''}`;
  const movieSaveClassName = `movie ${isSavedMovies
    ? 'movie_hover'
    : ''}`;

  useEffect(() => {
    setIsSaved(savedMovies.some((item) => item.id === id));
  }, [savedMovies, setSavedMovies, id, setIsSaved]);

  function convertTime(time) {
    const minutes = time % 60;
    const hours = Math.floor(time / 60);
    if (hours === 0) {
      return `${minutes}м`;
    }
    return `${hours}ч ${minutes}м`;
  }

  function handleClick() {
    if (isSaved) {
      setIsSaved(false);
      handleMovieSave(MovieData, true);
    } else {
      handleMovieSave(MovieData, false);
      setIsSaved(true);
    }
  }

  return (
    <li className={movieSaveClassName}>
      <Link to={trailerLink} target='_blank'>
        <img
          className="movie__image"
          src={isSavedMovies ? image : `https://api.nomoreparties.co${image.url}`}
          alt={`кадр из фильма “${nameRU}“`}
        />
      </Link>

      <div className="movie__data">
        <div className="movie__container">
          <h2 className="movie__title">{nameRU}</h2>
          <div className="movie__like-box">
            {isSavedMovies
              ? <button
              className="movieDeleteButton"
              type="button"
              aria-label="сохранить"
              onClick={() => handleMovieDelete(MovieData._id)}
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
