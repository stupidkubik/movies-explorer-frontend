import { React } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import { Paths } from '../../utils/constants';

function Profile(params) {
  return (
    <div className="profile">
      <Header type={'profile'} />
      <h2 className="profile__title">Привет, {params.name}!</h2>
      <div className="profile__container">
        <div className="profile__type">Имя</div>
        <div className="profile__data">{params.name}</div>
        <div className='profile__divine'></div>
        <div className="profile__type">E-mail</div>
        <div className="profile__data">{params.email}</div>
      </div>
      <Link className='profile__editButton' to={''}>Редактировать</Link>
      <Link className='profile__logoutButton' to={Paths.Login}>Выйти из аккаунта</Link>
    </div>
  );
}

export default Profile;
