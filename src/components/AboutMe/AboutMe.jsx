import { React } from 'react';
import { Link } from 'react-router-dom';
import MainTitle from '../MainTitle/MainTitle.jsx';
import img from '../../images/cv_img.jpeg';

function AboutMe() {
  return (
    <section id="student" className="aboutme main__aboutme">
      <MainTitle text={'Student'} />
      <div className="aboutme__container">
        <div className="aboutme__text-block">
          <h3 className="aboutme__title">Evgenii</h3>
          <p className="aboutme__desc">Frontend-developer, 36 лет</p>
          <p className="aboutme__text">{`I was born in the small town of Severodvinsk in northern Russia.
           I've been studying web development for the last two years.
           Now I work as a layout designer at Tinkoff Journal.
           My hobby is traveling around the world. I'm currently in Indonesia`}</p>
          <Link
          className="aboutme__button"
          target="_blank"
          to="https://github.com/stupidkubik/"
          >Github</Link>
        </div>
        <img className="aboutme__image" src={img} alt="student photo" />
      </div>
    </section>
  );
}

export default AboutMe;
