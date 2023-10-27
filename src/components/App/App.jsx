import { React } from 'react';
// import { Routes, Route, Navigate, useNavigate } from 'react-router';
// import AppContext from '../contexts/AppContext.js';
// import CurrentUserContext from '../contexts/CurrentUserContext.js';
// import LoginUserContext from '../contexts/LoginUserContext.js';
// import ProtectedRoute from './ProtectedRoute.jsx';
import { Link } from 'react-router-dom';
// import { Paths } from '../../utils/constants';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import img from '../../images/cv_img.png';

function App() {
  // const navigate = useNavigate();

  return (
    <div className="App">
      <Header />
      <div className="main__landing">
        <h2 className="landing__title">Учебный проект студента факультета Веб-разработки.</h2>
      </div>
      <div className="main__links">
        <Link className='links__button' type="button">О проекте</Link>
        <Link className='links__button' type="button">Технологии</Link>
        <Link className='links__button' type="button">Студент</Link>
      </div>
      <div className="main__promo">
        <p className="main__about">О проекте</p>
        <div className="promo__stages">
          <p className="stages__item-title">Дипломный проект включал 5 этапов</p>
          <p className="stages__item-title">На выполнение диплома ушло 5 недель</p>
          <p className="stages__item">Составление плана, работу над бэкендом, вёрстку,
           добавление функциональности и финальные доработки.</p>
          <p className="stages__item">У каждого этапа был мягкий и жёсткий дедлайн,
           которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
        <div className="promo__bar">
          <div className="bar__backend">1 неделя</div>
          <div className="bar__frontend">4 недели</div>
          <div className="bar__title">Back-end</div>
          <div className="bar__title">Front-end</div>
        </div>
      </div>
      <div className="main__stack">
        <p className="main__about">Технологии</p>
        <h3 className="stack__title">7 технологий</h3>
        <p className="stack_desc">На курсе веб-разработки мы освоили технологии,
           которые применили в дипломном проекте.</p>
        <div className="stack__container">
          <div className="stack__item">HTML</div>
          <div className="stack__item">CSS</div>
          <div className="stack__item">JS</div>
          <div className="stack__item">React</div>
          <div className="stack__item">Git</div>
          <div className="stack__item">Express.js</div>
          <div className="stack__item">mongoDB</div>
        </div>
      </div>
      <div className="main__cv">
        <p className="main__about">Студент</p>
        <div className="cv__container">
          <div className="cv__text-block">
            <h3 className="cv__title">Виталий</h3>
            <p className="cv__desc">Фронтенд-разработчик, 30 лет</p>
            <p className="cv__text">Я родился и живу в Саратове, закончил факультет экономики СГУ.
            У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал
            кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по
            веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <Link className='cv__button' type="button">Github</Link>
          </div>
          <img className="cv__image" src={img} alt="photo" />
        </div>
        <div className="cv__link">
          <h3 className="link__title">Портфолио</h3>
          <div className="link__item">
            <p className='link__decs'>Статичный сайт</p>
            <Link className='link__button' type="button"></Link>
          </div>
          <div className="link__item">
            <p className='link__decs'>Адаптивный сайт</p>
            <Link className='link__button' type="button"></Link>
          </div>
          <div className="link__item">
            <p className='link__decs'>Одностраничное приложение</p>
            <Link className='link__button' type="button"></Link>
          </div>
        </div>
      </div>
      <Footer />
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
