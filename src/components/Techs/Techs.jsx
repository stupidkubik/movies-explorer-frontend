import { React } from 'react';
import MainTitle from '../MainTitle/MainTitle.jsx';

function Techs() {
  return (
    <section id="techs" className="main__techs">
      <MainTitle text={'Технологии'} />
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs_desc">На курсе веб-разработки мы освоили технологии,
        которые применили в дипломном проекте.</p>
      <ul className="techs__list">
        <li className="techs__item">HTML</li>
        <li className="techs__item">CSS</li>
        <li className="techs__item">JS</li>
        <li className="techs__item">React</li>
        <li className="techs__item">Git</li>
        <li className="techs__item">Express.js</li>
        <li className="techs__item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
