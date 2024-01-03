import {
  React,
  useContext,
  useState,
  useEffect,
} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppContext from '../../contexts/AppContext';
import Navigation from '../Navigation/Navigation.jsx';
import { Paths } from '../../utils/constants';
import logo from '../../images/logo.svg';

function Header({ type }) {
  const { isLoggedIn } = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  // Переменные с классами стилей
  const headerClassName = `header__content ${isLoggedIn
    ? 'header__content_loggedIn'
    : 'header__content_notLoggedIn'}`;
  const headerBackgroundClassName = `${type === 'main'
    ? 'header__mainRoute'
    : 'header__profileRoute'}`;
  const headerShowBurgerMenuClassName = `${isMobileView ? 'burger__menu_active' : ''}`;
  const burgerMenuClassName = `burger__menu ${isMobileView && isMenuOpen
    ? 'burger__menu_opened'
    : 'burger__menu_hidden'}`;
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
  // Вешаем слушатель изменения размера окна
  useEffect(() => {
    changeView();
    window.addEventListener('resize', changeView);

    return () => {
      window.removeEventListener('resize', changeView);
    };
  }, []);

  return (
    <header className="header">
      <div className={`${headerClassName} ${headerBackgroundClassName}`}>
        <Link className="header__image" to={Paths.Home}>
          <img src={logo} alt="логотип страницы в виде квадрата" />
        </Link>

        {isLoggedIn
          ? <nav className="burger header__container">
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
            <Link className="header__register" to={Paths.SignUp}>Регистрация</Link>
            <Link className="header__login" to={Paths.Login}>Войти</Link>
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
