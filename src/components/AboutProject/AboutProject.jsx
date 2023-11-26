import { React } from 'react';
import MainTitle from '../MainTitle/MainTitle.jsx';

function AboutProject() {
  return (
    <section id="about" className="about main__about">
      <MainTitle text={'О проекте'} />
      <div className="stages about__stages">
        <h3 className="stages__item-title">Дипломный проект включал 5 этапов</h3>
        <h3 className="stages__item-title">На выполнение диплома ушло 5 недель</h3>
        <p className="stages__item">Составление плана, работу над бэкендом, вёрстку,
        добавление функциональности и финальные доработки.</p>
        <p className="stages__item">У каждого этапа был мягкий и жёсткий дедлайн,
        которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="bar about__bar">
        <p className="bar__backend">1 неделя</p>
        <p className="bar__frontend">4 недели</p>
        <p className="bar__title">Back-end</p>
        <p className="bar__title">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
