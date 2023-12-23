import { React, useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../../contexts/AppContext';
import currentUser from '../../contexts/CurrentUserContext';
import Header from '../Header/Header.jsx';
import Input from '../Input/Input.jsx';
import { Paths } from '../../utils/constants';

function Profile() {
  const { handleLogout, isProfileEdited, setIsProfileEdited } = useContext(AppContext);
  const { name, email } = useContext(currentUser);

  console.log(name, email);
  console.log(currentUser);

  function handleChange(e) {
    console.log(e);
  }

  return (
    <>
      <Header type={'profile'} />
      <main className="profile">
        <section className="profile__wrapper">
          <h1 className="profile__title">Привет, {name}!</h1>
          <form className="form profile__form">
            <label
              className="profile__type"
              htmlFor="profile-name"
              >Имя
            </label>
            <Input
              className="profile__data"
              id="profile-name"
              type={'text'}
              value={name}
              minLength={'2'}
              maxLength={'20'}
              placeholder={name || 'Имя'}
              spanId={'error-profile-name'}
              onChange={handleChange}
              disabled
            />
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
              placeholder={email || 'Почта'}
              spanId={'error-profile-email'}
              onChange={handleChange}
              disabled
              />
          </form>

          {isProfileEdited
            ? <>
              <span className="profile__saveError">{'При обновлении профиля произошла ошибка.'}</span>
              <Link
                className="profile__saveButton"
                onClick={() => setIsProfileEdited(false)}
                >Сохранить
              </Link>
            </>
            : <>
              <Link
                className="profile__editButton"
                onClick={() => setIsProfileEdited(true)}
                >Редактировать
              </Link>
              <Link
                className="profile__logoutButton"
                to={Paths.Login}
                onClick={() => handleLogout()}
                >Выйти из аккаунта
              </Link>
            </>}
          </section>
      </main>
    </>
  );
}

export default Profile;
