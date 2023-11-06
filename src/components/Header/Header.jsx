import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import LoginUserContext from '../../contexts/LoginUserContext';
import { Paths } from '../../utils/constants';
import logo from '../../images/logo.svg';

function Header() {
  const { isLoggedIn } = useContext(LoginUserContext);

  return (
    <div className={'header'}>
      {isLoggedIn
        ? <>
            <Link className="header__image" to={Paths.Home}>
              <img src={logo} alt={'logo'} />
            </Link>
            <div className='header__container'>
              <Link className='header__register' type="button" to={Paths.SignUp}>Регистрация</Link>
              <Link className="header__login" type="button" to={Paths.Login}>Войти</Link>
            </div>
          </>
        : <>
            <Link className="header__image" to={Paths.Home}>
              <img src={logo} alt={'logo'} />
            </Link>
            <div className='header__container'>
              <Link className='header__register' type="button" to={Paths.SignUp}>Регистрация</Link>
              <Link className="header__login" type="button" to={Paths.Login}>Войти</Link>
            </div>
          </>
      }
    </div>
  );
}

export default Header;
