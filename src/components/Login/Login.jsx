import { React, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppContext from '../../contexts/AppContext';
import useFormValidation from '../../hooks/useFormValidation';
import { Paths } from '../../utils/constants';
import Input from '../Input/Input.jsx';
import logo from '../../images/logo.svg';

function Login() {
  const {
    isError,
    isLoading,
    setIsError,
    handleLogin,
  } = useContext(AppContext);

  const {
    values,
    errors,
    handleChange,
    isValid,
    resetForm,
  } = useFormValidation({
    email: '',
    password: '',
  });
  // Убираем ошибку при обновлении компонента
  useEffect(() => {
    setIsError(false);
  }, [setIsError]);
  // Сбрасываем форму при обновлении компонента
  useEffect(() => {
    resetForm({ email: '', password: '' });
  }, [resetForm, handleLogin]);
  // Функция сабмита формы
  function onSubmit(evt) {
    evt.preventDefault();
    handleLogin(values.email, values.password)
      .then(() => resetForm())
      .catch(() => {
        setIsError(true);
      });
  }

  return (
    <main className="register">
      <div className="register__container">
        <Link className="register__image" to={Paths.Home}>
          <img src={logo} alt="page logo" />
        </Link>
        <h1 className="register__title">Welcome back!</h1>
        <form
          className={'form register__form'}
          name={'signin'}
          onSubmit={onSubmit}
        >

          <label htmlFor="signin-email" className="register__label">E-mail</label>
          <Input
            id={'signin-email'}
            className={'input register__input'}
            type={'email'}
            name={'email'}
            placeholder={'mail@google.com'}
            span={'error-signin-email'}
            value={values.email || ''}
            error={errors.email || ''}
            onChange={(evt) => {
              handleChange(evt);
              setIsError(false);
            }}
          />

          <label htmlFor="signin-password" className="register__label">Password</label>
          <Input
            id={'signin-password'}
            className={'input register__input'}
            type={'password'}
            name={'password'}
            minLength={'2'}
            maxLength={'20'}
            placeholder={'********'}
            span={'error-signin-password'}
            value={values.password || ''}
            error={errors.password || ''}
            onChange={(evt) => {
              handleChange(evt);
              setIsError(false);
            }}
          />

          <button
          className="register__button register__button_login"
          type="submit"
          disabled={!isValid || isLoading || isError}>
          {isLoading
            ? 'Loading'
            : 'Enter'}</button>
        </form>

        <p className="register__subtitle">
        Not registered yet?
        <Link className="register__link" to={Paths.SignUp}>Registration</Link>
        </p>
      </div>
    </main>
  );
}

export default Login;

Login.propTypes = {
  handleLogin: PropTypes.func,
};
