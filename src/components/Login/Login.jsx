import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Paths } from '../../utils/constants';
import Input from '../Input/Input.jsx';
import logo from '../../images/logo.svg';

function Login({ handleLogin }) {
  return (
    <main className="register">
      <div className="register__container">
        <Link className="register__image" to={Paths.Home}>
          <img src={logo} alt={'logo'} />
        </Link>
        <h2 className="register__title">Рады видеть!</h2>
        <form
          className={'form register__form'}
          name={'signin'}
          onSubmit={(evt) => handleLogin(evt)}
        >

          <label htmlFor="signin-email" className="register__label">E-mail</label>
          <Input
            id={'signin-email'}
            className={'input register__input'}
            type={'email'}
            name={'email'}
            placeholder={'pochta@yandex.ru'}
            span={'error-signin-email'}
            // value={values.email}
            // onChange={'handleChange'}
          />

          <label htmlFor="signin-password" className="register__label">Пароль</label>
          <Input
            id={'signin-password'}
            className={'input register__input'}
            type={'password'}
            name={'password'}
            minLength={'2'}
            maxLength={'20'}
            placeholder={'********'}
            span={'error-signin-password'}
            // value={values.password}
            // onChange={'handleChange'}
          />
          <button className="register__button register__button_login" type="submit">Войти</button>
        </form>
        <p className="register__subtitle">
        Ещё не зарегистрированы?
        <Link className="register__link" to={Paths.SignUp}>Регистрация</Link>
        </p>
      </div>
    </main>
  );
}

export default Login;

Login.propTypes = {
  handleLogin: PropTypes.func,
};
