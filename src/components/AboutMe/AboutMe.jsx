import { React } from 'react';
import { Link } from 'react-router-dom';
import MainTitle from '../MainTitle/MainTitle.jsx';
import img from '../../images/cv_img.png';

function AboutMe() {
  return (
    <section id="student" className="aboutme main__aboutme">
      <MainTitle text={'Студент'} />
      <div className="aboutme__container">
        <div className="aboutme__text-block">
          <h3 className="aboutme__title">Виталий</h3>
          <p className="aboutme__desc">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutme__text">Я родился и живу в Саратове, закончил факультет экономики СГУ.
          У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал
          кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по
          веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <Link
          className="aboutme__button"
          type="button"
          target="_blank"
          to="https://github.com/stupidkubik/"
          >Github</Link>
        </div>
        <img className="aboutme__image" src={img} alt="Фото Виталия в профиль без фона" />
      </div>
    </section>
  );
}

export default AboutMe;
