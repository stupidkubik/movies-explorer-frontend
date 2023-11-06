import { React } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import { Paths } from '../../utils/constants';

function Profile({ name, email, handleLogout }) {
  return (
    <div className="profile">
      <Header type={'profile'} />
      <h2 className="profile__title">Привет, {name}!</h2>
      <div className="profile__container">
        <div className="profile__type">Имя</div>
        <div className="profile__data">{name}</div>
        <div className='profile__divine'></div>
        <div className="profile__type">E-mail</div>
        <div className="profile__data">{email}</div>
      </div>
      <Link className='profile__editButton' to={''}>Редактировать</Link>
      <Link className='profile__logoutButton'
        to={Paths.Login}
        onClick={() => handleLogout()}
      >Выйти из аккаунта</Link>
    </div>
  );
}

export default Profile;

Profile.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  handleLogout: PropTypes.func,
};
