import {
  React,
  useContext,
  useEffect,
  useState,
} from 'react';

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
    handleChange,
    isValid,
    resetForm,
  } = useFormValidation({
    profileName: name,
    profileEmail: email,
  });

  const [isMatch, setIsMatch] = useState(true);

  useEffect(() => {
    setIsMatch(true);
    if (values.profileName !== name && values.profileEmail !== email) {
      setIsMatch(false);
    }
  }, [isMatch, setIsMatch, handleChange]);

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
      setIsMatch(true);
    }
    setIsProfileEdited(true);
  }

  return (
    <>
      <Header type={'profile'} />
      <main className="profile">
        <section className="profile__wrapper">
          <h1 className="profile__title">Hi, {name}!</h1>
          <form className="form profile__form">
            <label
              className="profile__type"
              htmlFor="profileName"
              >Name
            </label>
            <Input
              className="profile__data"
              id="profileName"
              type={'text'}
              name={'profileName'}
              minLength={'2'}
              maxLength={'20'}
              placeholder={name || 'Name'}
              spanId={'error-profileName'}
              value={values.profileName || name}
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
              placeholder={email || 'E-mail'}
              spanId={'error-profileEmail'}
              value={values.profileEmail || email}
              onChange={(evt) => {
                handleChange(evt);
                setIsError(false);
              }}
              disabled={!isProfileEdited || isLoading}
              />
          </form>
          <span className='profile__serverResponse' hidden={!isProfileUpdated}>
            Update successfully
          </span>

          {isProfileEdited
            ? <>
              <button
                className="profile__saveButton"
                onClick={handleEdit}
                disabled={!isValid || isLoading || isError || isMatch}>
                Save
              </button>
            </>
            : <>
              <button
                className="profile__editButton"
                onClick={handleEdit}
                >Edit
              </button>
              <Link
                className="profile__logoutButton"
                to={Paths.Login}
                onClick={() => handleLogout()}
                >Logout
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
