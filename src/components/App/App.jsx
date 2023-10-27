import { React } from 'react';
// import { Routes, Route, Navigate, useNavigate } from 'react-router';
// import AppContext from '../contexts/AppContext.js';
// import CurrentUserContext from '../contexts/CurrentUserContext.js';
// import LoginUserContext from '../contexts/LoginUserContext.js';
// import ProtectedRoute from './ProtectedRoute.jsx';
import { Link } from 'react-router-dom';
// import { Paths } from '../../utils/constants';
import Header from '../Header/Header.jsx';

function App() {
  // const navigate = useNavigate();

  return (
    <div className="App">
      <Header />
      <div className="main__landing">
        <p className="landing__text">Учебный проект студента факультета Веб-разработки.</p>
      </div>
      <div className="main__footer">
        <Link className='footer__button' type="button">О проекте</Link>
        <Link className='footer__button' type="button">Технологии</Link>
        <Link className='footer__button' type="button">Студент</Link>
      </div>
      <div className="main__promo">
        <p className="promo__about">О проекте</p>
        <div className="promo__stages">
          <p className="stages__item_title">Дипломный проект включал 5 этапов</p>
          <p className="stages__item_title">На выполнение диплома ушло 5 недель</p>
          <p className="stages__item">Составление плана, работу над бэкендом, вёрстку,
           добавление функциональности и финальные доработки.</p>
          <p className="stages__item">У каждого этапа был мягкий и жёсткий дедлайн,
           которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      {/* <AppContext.Provider value={{ }}>
        <LoginUserContext.Provider value={{ }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path={Paths.Login} element={<Login />} />
            <Route path={Paths.SignUp} element={<Register />} />
            <Route path={Paths.Profile} element={<Profile />} />
            <Route path={Paths.Movies} element={<Movies />} />
            <Route path={Paths.SavedMovies} element={<SavedMovies />} />
            <Route path="*" element={<Navigate to={<NotFound />} replace />} />
            <Route path="*" element={<Navigate to={Paths.NotFound} replace />} />
          </Routes>
        </LoginUserContext.Provider>
      </AppContext.Provider> */}
    </div>
  );
}

export default App;
