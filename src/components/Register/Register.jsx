import { React, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppContext from '../../contexts/AppContext';
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
  // Убираем ошибку при обновлении компонента
  useEffect(() => {
    setIsError(false);
  }, [setIsError]);
  // Сбрасываем форму при обновлении компонента
  useEffect(() => {
    resetForm({ name: '', email: '', password: '' });
  }, [resetForm, handleRegistration]);
  // Функция сабмита формы
  function onSubmit(evt) {
    evt.preventDefault();
    handleRegistration(values.name, values.email, values.password);
  }

  return (
    <main className="register">
      <div className="register__container">
        <Link className="register__image" to={Paths.Home}>
          <img src={logo} alt="page logo" />
        </Link>
        <h1 className="register__title">Welcome!</h1>

        <form
          className={'form register__form'}
          name={'signup'}
          onSubmit={onSubmit}
          noValidate
        >
          <label htmlFor="signup-name" className="register__label">Name</label>
          <Input
            id={'signup-name'}
            className={'input register__input'}
            type={'text'}
            name={'name'}
            minLength={'2'}
            maxLength={'20'}
            placeholder={'Evgenii'}
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
            placeholder={'mail@google.com'}
            span={'error-signup-email'}
            value={values.email || ''}
            error={errors.email || ''}
            onChange={(evt) => {
              handleChange(evt);
              setIsError(false);
            }}
          />

          <label htmlFor="signup-password" className="register__label">Password</label>
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
              ? 'Loading'
              : 'Register'}</button>
        </form>

        <p className="register__subtitle">
          Already registered?
          <Link className="register__link" to={Paths.Login}>Enter</Link>
        </p>
      </div>
    </main>
  );
}

export default Register;

Register.propTypes = {
  handleRegistration: PropTypes.func,
};
