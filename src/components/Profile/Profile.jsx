import { React, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppContext from '../../contexts/AppContext';
import currentUser from '../../contexts/CurrentUserContext';
import useFormValidation from '../../hooks/useFormValidation';
import Header from '../Header/Header.jsx';
import Input from '../Input/Input.jsx';
import { Paths } from '../../utils/constants';

function Profile({ setIsProfileEdited, setIsProfileUpdated }) {
  const {
    handleUpdateProfile,
    handleLogout,
    isProfileEdited,
    isProfileUpdated,
    isLoading,
    isError,
    setIsError,
  } = useContext(AppContext);

  const { name, email } = useContext(currentUser);
  const {
    values,
    // errors,
    handleChange,
    isValid,
    resetForm,
  } = useFormValidation({
    profileName: '',
    profileEmail: '',
  });

  const spanClassName = `profile__save ${isError ? 'profile__save_error' : ''}
    ${isProfileUpdated ? 'profile__save_done' : ''}`;

  const spanInfo = `${isError ? 'При обновлении профиля произошла ошибка' : ''}
    ${isProfileUpdated ? 'Профиль обновлен' : ''}`;

  useEffect(() => {
    setIsError(false);
    setIsProfileEdited(false);
  }, [setIsError]);

  useEffect(() => {
    resetForm({ name, email });
    setIsProfileUpdated(false);
  }, [resetForm, currentUser]);

  function handleEdit() {
    if (isProfileEdited) {
      const newUser = handleUpdateProfile(values.profileName, values.profileEmail);
      resetForm({ profileName: newUser.name, profileEmail: newUser.email });
    }
    setIsProfileEdited(true);
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
              htmlFor="profileName"
              >Имя
            </label>
            <Input
              className="profile__data"
              id="profileName"
              type={'text'}
              name={'profileName'}
              minLength={'2'}
              maxLength={'20'}
              placeholder={name || 'Имя'}
              spanId={'error-profileName'}
              value={values.profileName || ''}
              onChange={(evt) => {
                handleChange(evt);
                setIsError(false);
              }}
              disabled={!isProfileEdited || isLoading}
            />
            <label
              className="profile__type"
              htmlFor="profileEmail"
              >E-mail
            </label>
            <Input
              className="profile__data"
              id="profileEmail"
              type={'email'}
              name={'profileEmail'}
              placeholder={email || 'Почта'}
              spanId={'error-profileEmail'}
              value={values.profileEmail || ''}
              onChange={(evt) => {
                handleChange(evt);
                setIsError(false);
              }}
              disabled={!isProfileEdited || isLoading}
              />
          </form>

          {isProfileEdited
            ? <>
              <span className={spanClassName}>{spanInfo}</span>
              <button
                className="profile__saveButton"
                onClick={handleEdit}
                disabled={!isValid || isLoading || isError}>
                Сохранить
              </button>
            </>
            : <>
              <button
                className="profile__editButton"
                onClick={handleEdit}
                >Редактировать
              </button>
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

Profile.propTypes = {
  setIsProfileEdited: PropTypes.func,
  setIsProfileUpdated: PropTypes.func,
};
