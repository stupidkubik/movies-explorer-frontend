import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginUserContext from '../../contexts/LoginUserContext';
import Navigation from '../Navigation/Navigation.jsx';
import { Paths } from '../../utils/constants';
import logo from '../../images/logo.svg';

function Header({ type }) {
  const { isLoggedIn } = useContext(LoginUserContext);

  const headerClassName = `header ${isLoggedIn
    ? 'header__loggedIn'
    : 'header__notLoggedIn'}`;

  const headerBackgroundClassName = `${type === 'main'
    ? 'header__mainRoute'
    : 'header__profileRoute'}`;

  return (
    <div className={`${headerClassName} ${headerBackgroundClassName}`}>
      <Link className="header__image" to={Paths.Home}>
        <img src={logo} alt={'logo'} />
      </Link>
      <Navigation type={type} />
    </div>
  );
}

export default Header;

Header.propTypes = {
  type: PropTypes.string,
};
