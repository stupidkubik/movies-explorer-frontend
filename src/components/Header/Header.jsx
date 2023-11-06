import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginUserContext from '../../contexts/LoginUserContext';
import { Paths } from '../../utils/constants';
import logo from '../../images/logo.svg';

function Header({ type }) {
  const { isLoggedIn } = useContext(LoginUserContext);

  const headerClassName = `header__loggedIn ${type === 'main'
    ? 'header__mainRoute'
    : 'header__profileRoute'}`;

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
      ? <div className={headerClassName}>
          <Link className="header__image" to={Paths.Home}>
            <img src={logo} alt={'logo'} />
          </Link>
          <div className="header__container_loggedIn">
            <div className="header_contentBox">
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
        </div>
      : <div className={'header'}>
          <Link className="header__image" to={Paths.Home}>
            <img src={logo} alt={'logo'} />
          </Link>
          <div className="header__container">
            <Link className="header__register" type="button" to={Paths.SignUp}>Регистрация</Link>
            <Link className="header__login" type="button" to={Paths.Login}>Войти</Link>
          </div>
        </div>
    }
    </>
  );
}

export default Header;

Header.propTypes = {
  type: PropTypes.string,
};
