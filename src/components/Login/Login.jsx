import React from 'react';
import { Link } from 'react-router-dom';
import { Paths } from '../../utils/constants';
import Input from '../Input/Input.jsx';
import logo from '../../images/logo.svg';

function Login() {
  return (
    <div className="register">
      <div className="register__container">
        <img className="register__image" src={logo} alt={'logo'} />
        <h2 className="register__title">Рады видеть!</h2>
        <form
          className={'register__form'}
          name={'signin'}
          onSubmit={''}
        >

          <label htmlFor="signin-email" className="register__label">E-mail</label>
          <Input
            id={'signin-email'}
            className={'register__input register__input_email'}
            type={'email'}
            name={'email'}
            span={'error-signin-email'}
            // value={values.email}
            // onChange={'handleChange'}
          />

          <label htmlFor="signin-password" className="register__label">Пароль</label>
          <Input
            id={'signin-password'}
            className={'register__input register__input_password'}
            type={'password'}
            name={'password'}
            minLength={'2'}
            maxLength={'20'}
            span={'error-signin-password'}
            // value={values.password}
            // onChange={'handleChange'}
          />
          <button className="register__button" type="submit">Войти</button>
        </form>
        <p className="register___subtitle">
        Ещё не зарегистрированы?
        <Link className="register___link" to={Paths.SignUp}>Регистрация</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
