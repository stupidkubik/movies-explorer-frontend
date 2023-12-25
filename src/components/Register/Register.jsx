import { React, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppContext from '../../contexts/AppContext';
import Preloader from '../Preloader/Preloader.jsx';
import useFormValidation from '../../hooks/useFormValidation';
import { Paths } from '../../utils/constants';
import Input from '../Input/Input.jsx';
import logo from '../../images/logo.svg';

function Register() {
  const {
    isLoading,
    isError,
    setIsError,
    handleRegistration,
  } = useContext(AppContext);

  const {
    values,
    errors,
    handleChange,
    isValid,
    resetForm,
  } = useFormValidation({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    setIsError(false);
  }, [setIsError]);

  useEffect(() => {
    resetForm();
  }, [handleRegistration]);

  function onSubmit(evt) {
    evt.preventDefault();
    handleRegistration(values.name, values.email, values.password);
  }

  return (
    <main className="register">
      <div className="register__container">
        <Link className="register__image" to={Paths.Home}>
          <img src={logo} alt="логотип страницы в виде квадрата" />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>

        <form
          className={'form register__form'}
          name={'signup'}
          onSubmit={onSubmit}
          noValidate
        >
          <label htmlFor="signup-name" className="register__label">Имя</label>
          <Input
            id={'signup-name'}
            className={'input register__input'}
            type={'text'}
            name={'name'}
            minLength={'2'}
            maxLength={'20'}
            placeholder={'Виталий'}
            span={'error-signup-name'}
            value={values.name || ''}
            error={errors.name || ''}
            onChange={(evt) => {
              handleChange(evt);
              setIsError(false);
            }}
          />

          <label htmlFor="signup-email" className="register__label">E-mail</label>
          <Input
            id={'signup-email'}
            className={'input register__input'}
            type={'email'}
            name={'email'}
            placeholder={'pochta@yandex.ru'}
            span={'error-signup-email'}
            value={values.email || ''}
            error={errors.email || ''}
            onChange={(evt) => {
              handleChange(evt);
              setIsError(false);
            }}
          />

          <label htmlFor="signup-password" className="register__label">Пароль</label>
          <Input
            id={'signup-password'}
            className={'input register__input'}
            type={'password'}
            name={'password'}
            minLength={'2'}
            maxLength={'20'}
            placeholder={'********'}
            span={'error-signup-password'}
            value={values.password || ''}
            error={errors.password || ''}
            onChange={(evt) => {
              handleChange(evt);
              setIsError(false);
            }}
          />

          <button
          className={'register__button'}
          type="submit"
          disabled={!isValid || isLoading || isError}>
            {isLoading
              ? <Preloader />
              : 'Зарегистрироваться'}</button>
        </form>

        <p className="register__subtitle">
          Уже зарегистрированы?
          <Link className="register__link" to={Paths.Login}>Войти</Link>
        </p>
      </div>
    </main>
  );
}

export default Register;

Register.propTypes = {
  handleRegistration: PropTypes.func,
};
