import { React } from 'react';

function Techs() {
  return (
    <section className="main__techs">
      <p className="techs__about">Технологии</p>
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs_desc">На курсе веб-разработки мы освоили технологии,
        которые применили в дипломном проекте.</p>
      <ul className="techs__list">
        <div className="techs__item">HTML</div>
        <div className="techs__item">CSS</div>
        <div className="techs__item">JS</div>
        <div className="techs__item">React</div>
        <div className="techs__item">Git</div>
        <div className="techs__item">Express.js</div>
        <div className="techs__item">mongoDB</div>
      </ul>
    </section>
  );
}

export default Techs;
