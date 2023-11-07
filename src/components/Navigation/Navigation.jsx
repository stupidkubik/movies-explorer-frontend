import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginUserContext from '../../contexts/LoginUserContext';
import { Paths } from '../../utils/constants';

function Navigation({ type }) {
  const { isLoggedIn } = useContext(LoginUserContext);

  const logoBackgroundClassName = `profile__icon ${type === 'main'
    ? 'profile__mainRoute'
    : 'profile__profileRoute'}`;

  const activeMoviesRouteClassName = `header__movies ${type === 'movies'
    ? 'header__movies_active'
    : ''}`;

  const activeSavedMoviesRouteClassName = `header__savedMovies ${type === 'savedMovies'
    ? 'header__savedMovies_active'
    : ''}`;

  return (
    <>
      {isLoggedIn
        ? <div className="header__container">
        <div className="header__contentBox">
          <Link className={activeMoviesRouteClassName} type="button" to={Paths.Movies}>Фильмы</Link>
          <Link className={activeSavedMoviesRouteClassName} type="button" to={Paths.SavedMovies}>
            Сохранённые фильмы
          </Link>
        </div>
        <Link className="header__profile" type="button" to={Paths.Profile}>
          <p className="profile__text">Аккаунт</p>
          <div className={logoBackgroundClassName} />
        </Link>
        </div>
        : <div className="header__notLoggedIn">
          <Link className="header__register" type="button" to={Paths.SignUp}>Регистрация</Link>
          <Link className="header__login" type="button" to={Paths.Login}>Войти</Link>
        </div>
      }
    </>
  );
}

export default Navigation;

Navigation.propTypes = {
  type: PropTypes.string,
};
