import { React } from 'react';
import { Header, Footer } from 'react-dom';
// import { useContext } from 'react';
// import CurrentUserContext from '../contexts/CurrentUserContext.js';
// import LoginUserContext from '../contexts/LoginUserContext';
// import Card from './Card.jsx';
// import Header from './Header';
// import Footer from './Footer.jsx';

function Main() {
  // const currentUser = useContext(CurrentUserContext);
  // const { userLogin } = useContext(LoginUserContext);

  return (
    <>
      <Header name={''} handleExit={''} />

      <main className="content App__content">
        <section className="profile">
          <div className="profile__item">
            <button
              className="profile__avatar-edit"
              type="button"
              aria-label="редактировать аватар"
              onClick={'onEditAvatar'}
            >
              <img
                className="profile__avatar"
                src={''}
                alt="Аватар профиля"
              />
            </button>

            <div className="profile__info">
              <div className="profile__name-item">
                <h1 className="profile__name">{''}</h1>

                <button
                  className="profile__edit"
                  type="button"
                  aria-label="редактировать профиль"
                  onClick={'onEditProfile'}
                />
              </div>

              <p className="profile__caption">{''}</p>
            </div>
          </div>

          <button
            className="profile__add-element"
            type="button"
            aria-label="добавить фотографию"
            onClick={'onAddPlace'}
          ></button>
        </section>

        <section className="elements">
          <ul className="elements__list">
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Main;
