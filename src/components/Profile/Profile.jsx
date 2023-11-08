import { React, useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Input from '../Input/Input.jsx';
import { Paths } from '../../utils/constants';

function Profile({ name, email, handleLogout }) {
  const [isEdited, setIsEdited] = useState(false);

  return (
    <div className="profile">
      <Header type={'profile'} />
      <h2 className="profile__title">Привет, {name}!</h2>
      <form className="profile__form">
        <label
          className="profile__type"
          htmlFor="profile-name"
          >Имя
        </label>
        <Input
          className="profile__data"
          id="profile-name"
          type={'name'}
          value={name}
          minLength={'2'}
          maxLength={'20'}
          spanId={'error-profile-name'}
          // onChange={'handleChange'}
          disabled
        />
        <div className='profile__divine'></div>
        <label
          className="profile__type"
          htmlFor="profile-email"
          >E-mail
        </label>
        <Input
          className="profile__data"
          id="profile-email"
          type={'email'}
          value={email}
          spanId={'error-profile-email'}
          // onChange={'handleChange'}
          disabled
        />
      </form>

      {isEdited
        ? <>
          <span className="profile__saveError">{'При обновлении профиля произошла ошибка.'}</span>
          <Link
            className="profile__saveButton"
            type="button"
            onClick={() => setIsEdited(false)}
            >Сохранить
          </Link>
        </>
        : <>
          <Link
            className="profile__editButton"
            onClick={() => setIsEdited(true)}
            >Редактировать
          </Link>
          <Link
            className="profile__logoutButton"
            to={Paths.Login}
            onClick={() => handleLogout()}
            >Выйти из аккаунта
          </Link>
        </>}
    </div>
  );
}

export default Profile;

Profile.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  handleLogout: PropTypes.func,
};
