import {
  React,
  useContext,
  useState,
  useEffect,
} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginUserContext from '../../contexts/LoginUserContext';
import Navigation from '../Navigation/Navigation.jsx';
import { Paths } from '../../utils/constants';
import logo from '../../images/logo.svg';

function Header({ type }) {
  const { isLoggedIn } = useContext(LoginUserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // Функция открытия бургер-меню
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  // Определяем размер экрана и меняем бругер-меню
  function changeView() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 769) {
      setIsMobileView(true);
    } else setIsMobileView(false);
  }

  useEffect(() => {
    changeView();
    window.addEventListener('resize', changeView);

    return () => {
      window.removeEventListener('resize', changeView);
    };
  }, []);

  const headerClassName = `header__content ${isLoggedIn
    ? 'header__content_loggedIn'
    : 'header__content_notLoggedIn'}`;

  const headerBackgroundClassName = `${type === 'main'
    ? 'header__mainRoute'
    : 'header__profileRoute'}`;

  const headerShowBurgerMenuClassName = `${isMobileView ? 'header__burger-menu_active' : ''}`;

  const burgerMenuClassName = `${isMobileView && isMenuOpen
    ? 'header__burger-menu_opened'
    : 'header__burger-menu'}`;

  return (
    <header className="header">
      <div className={`${headerClassName} ${headerBackgroundClassName}`}>
        <Link className="header__image" to={Paths.Home}>
          <img src={logo} alt="логотип страницы в виде квадрата" />
        </Link>
        {isLoggedIn
          ? <nav className="header__container">
            <Navigation
              type={type}
              isMenuOpen={isMenuOpen}
              isMobileView={isMobileView}
            />
            <button
              className={`${burgerMenuClassName} ${headerShowBurgerMenuClassName}`}
              type="button"
              aria-label="Меню"
              onClick={toggleMenu}
            />
          </nav>
          : <nav className="header__notLoggedIn">
            <Link className="header__register" type="button" to={Paths.SignUp}>Регистрация</Link>
            <Link className="header__login" type="button" to={Paths.Login}>Войти</Link>
          </nav>
        }
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  type: PropTypes.string,
};
