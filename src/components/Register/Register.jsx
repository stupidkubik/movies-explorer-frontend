import { React } from 'react';
import { Link } from 'react-router-dom';
import { Paths } from '../../utils/constants';
import Input from '../Input/Input.jsx';
import logo from '../../images/logo.svg';

function Register() {
  return (
    <div className="register">
      <div className="register__container">
        <Link className="register__image" to={Paths.Home}>
          <img src={logo} alt={'logo'} />
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form
          className={'register__form'}
          name={'signup'}
          onSubmit={''}
        >
          <label htmlFor="signup-name" className="register__label">Имя</label>
          <Input
            id={'signup-name'}
            className={'register__input register__input_name'}
            type={'name'}
            name={'name'}
            placeholder={'Виталий'}
            minLength={'2'}
            maxLength={'20'}
            span={'error-signup-name'}
            // value={values.name}
            // onChange={'handleChange'}
          />

          <label htmlFor="signup-email" className="register__label">E-mail</label>
          <Input
            id={'signup-email'}
            className={'register__input register__input_email'}
            type={'email'}
            name={'email'}
            placeholder={'pochta@yandex.ru'}
            span={'error-signup-email'}
            // value={values.email}
            // onChange={'handleChange'}
          />

          <label htmlFor="signup-password" className="register__label">Пароль</label>
          <Input
            id={'signup-password'}
            className={'register__input register__input_password'}
            type={'password'}
            name={'password'}
            minLength={'2'}
            maxLength={'20'}
            span={'error-signup-password'}
            // value={values.password}
            // onChange={'handleChange'}
          />
          <button className="register__button" type="submit">Зарегистрироваться</button>
        </form>
        <p className="register___subtitle">
          Уже зарегистрированы?
          <Link className="register___link" to={Paths.Login}>Войти</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
