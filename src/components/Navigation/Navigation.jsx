import {
  React,
  useEffect,
} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Paths } from '../../utils/constants';

function Navigation({ type, isMenuOpen, isMobileView }) {
  const logoBackgroundClassName = `header__profileIcon ${type === 'main'
    ? 'header__profile-mainRoute'
    : 'header__profile-profileRoute'}`;

  const activeMoviesRouteClassName = `header__movies ${type === 'movies'
    ? 'header__movies-active'
    : ''}`;

  const activeSavedMoviesRouteClassName = `header__savedMovies ${type === 'savedMovies'
    ? 'header__savedMovies-active'
    : ''}`;

  const openBurgerMenuClassName = `${isMenuOpen
    ? 'burger__contentBox'
    : 'burger__hiddenContentBox'}`;

  const activeMoviesRouteBurgerClassName = `burger__link ${type === 'movies'
    ? 'burger__movies-active'
    : ''}`;

  const activeSavedMoviesRouteBurgerClassName = `burger__link ${type === 'savedMovies'
    ? 'burger__savedMovies-active'
    : ''}`;

  const putOverlayClassName = `${isMenuOpen
    ? 'burger__overlay'
    : ''}`;

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = 'hidden';
    }
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      {isMobileView
        ? <>
          <div className={putOverlayClassName}></div>
          <div className={openBurgerMenuClassName}>
            <ul className="burger__navigation">
              <li className="burger__navigation-item">
                <Link className="burger__link" to={Paths.Home}>Main</Link>
              </li>
              <li className="burger__navigation-item">
                <Link className={activeMoviesRouteBurgerClassName} to={Paths.Movies}>Movies</Link>
              </li>
              <li className="burger__navigation-item">
                <Link className={activeSavedMoviesRouteBurgerClassName} to={Paths.SavedMovies}>
                  Saved movies
                </Link>
              </li>
            </ul>
              <Link className="burger__profile" to={Paths.Profile}>
                <p className="header__profileText">Profile</p>
                <div className={logoBackgroundClassName} />
              </Link>
            </div>
          </>
        : <>
          <div className="header__contentBox">
            <Link className={activeMoviesRouteClassName} to={Paths.Movies}>Movies</Link>
            <Link className={activeSavedMoviesRouteClassName} to={Paths.SavedMovies}>
              Saved movies
            </Link>
          </div>
          <Link className="header__profile" to={Paths.Profile}>
            <p className="header__profileText">Profile</p>
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
