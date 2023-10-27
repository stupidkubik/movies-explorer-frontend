import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

function Header() {
  return (
      <div className="header">
        <img className="header__image" src={logo} alt={'logo'} />
        <div className='header__container'>
          <Link className='header__register' type="button">Регистрация</Link>
          <Link className="header__login" type="button">Войти</Link>
        </div>
      </div>
  );
}

export default Header;
