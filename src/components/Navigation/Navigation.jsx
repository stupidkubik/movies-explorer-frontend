import {
  React,
  useContext,
  useState,
  useEffect,
} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginUserContext from '../../contexts/LoginUserContext';
import { Paths } from '../../utils/constants';

function Navigation({ type }) {
  const { isLoggedIn } = useContext(LoginUserContext);
  const [mobileView, setMobileView] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  // Функция открытия бургер-меню
  function toggleMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  // Определяем размер экрана и меняем бругер-меню
  function changeView() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 769) {
      setMobileView(true);
    } else setMobileView(false);
  }

  useEffect(() => {
    changeView();
    window.addEventListener('resize', changeView);

    return () => {
      window.removeEventListener('resize', changeView);
    };
  }, []);

  const logoBackgroundClassName = `profile__icon ${type === 'main'
    ? 'profile__mainRoute'
    : 'profile__profileRoute'}`;

  const activeMoviesRouteClassName = `header__movies ${type === 'movies'
    ? 'header__movies_active'
    : ''}`;

  const activeSavedMoviesRouteClassName = `header__savedMovies ${type === 'savedMovies'
    ? 'header__savedMovies_active'
    : ''}`;

  const headerOpenBurgerMenuClassName = `header__container ${menuIsOpen ? 'header_opened' : ''}`;
  const headerShowBurgerMenuClassName = `${mobileView ? 'header__menu_hidden' : ''}`;
  const burgerMenuClassName = `${menuIsOpen ? 'header__burger-menu_opened' : 'header__burger-menu'}`;

  return (
    <>
      {isLoggedIn
        ? <div className={`${headerOpenBurgerMenuClassName} ${headerShowBurgerMenuClassName}`}>
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
      { mobileView
        ? <>
          <div className="header__divider"></div>
          <button className={burgerMenuClassName} type="button" onClick={toggleMenu} />
        </>
        : ''
      }
    </>
  );
}

export default Navigation;

Navigation.propTypes = {
  type: PropTypes.string,
};
