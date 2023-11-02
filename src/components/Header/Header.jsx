import React from 'react';
import { Link } from 'react-router-dom';
import { Paths } from '../../utils/constants';
import logo from '../../images/logo.svg';

function Header(params) {
  return (
      <div className={`header header__${params.type}`}>
        <img className="header__image" src={logo} alt={'logo'} />
        <div className='header__container'>
          <Link className='header__register' type="button" to={Paths.SignUp}>Регистрация</Link>
          <Link className="header__login" type="button" to={Paths.Login}>Войти</Link>
        </div>
      </div>
  );
}

export default Header;
