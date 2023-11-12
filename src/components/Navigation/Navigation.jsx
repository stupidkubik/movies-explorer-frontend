import {
  React,
} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Paths } from '../../utils/constants';

function Navigation({ type, isMenuOpen, isMobileView }) {
  const logoBackgroundClassName = `profile__icon ${type === 'main'
    ? 'profile__mainRoute'
    : 'profile__profileRoute'}`;

  const activeMoviesRouteClassName = `header__movies ${type === 'movies'
    ? 'header__movies_active'
    : ''}`;

  const activeSavedMoviesRouteClassName = `header__savedMovies ${type === 'savedMovies'
    ? 'header__savedMovies_active'
    : ''}`;

  const openBurgerMenuClassName = `${isMenuOpen
    ? 'burger__contentBox'
    : 'burger__contentBox_hidden'}`;

  return (
    <>
      {isMobileView
        ? <div className={openBurgerMenuClassName}>
          <ul className="burger__navigation">
            <Link type="button" to={Paths.Home}>Главная</Link>
            <Link className={''} type="button" to={Paths.Movies}>Фильмы</Link>
            <Link className={''} type="button" to={Paths.SavedMovies}>
              Сохранённые фильмы
            </Link>
          </ul>
            <Link className="burger__profile" type="button" to={Paths.Profile}>
              <p className="profile__text">Аккаунт</p>
              <div className={logoBackgroundClassName} />
            </Link>
          </div>
        : <>
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
        </>
      }
    </>
  );
}

export default Navigation;

Navigation.propTypes = {
  type: PropTypes.string,
  isMenuOpen: PropTypes.bool,
  isMobileView: PropTypes.bool,
};
