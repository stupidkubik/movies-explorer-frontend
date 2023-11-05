import { React } from 'react';

function MoviesCard(
  MovieData,
  // handleCardSave,
) {
  // const currentUser = useContext(CurrentUserContext);
  const {
    image,
    nameRU,
    duration,
    isSaved,
  } = MovieData.MovieData;

  const moveSaveButtonClassName = `movie__save ${isSaved
    ? 'movie__save_active'
    : ''}`;

  return (
    <li className="movie">
      <img
        className="movie__image"
        src={image}
        alt={nameRU}
      />

      <div className="movie__data">
        <div className="movie__container">
          <h2 className="movie__title">{nameRU}</h2>
          <div className="movie__like-box">
            <button
              className={moveSaveButtonClassName}
              type="button"
              aria-label="сохранить"
              onClick={() => {
                console.log(MovieData.MovieData);
                // handleCardSave(MovieData.MovieData);
              }}
            />
          </div>
        </div>
        <p className="movie__duration">{duration}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
