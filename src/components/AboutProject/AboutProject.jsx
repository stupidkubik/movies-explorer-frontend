import { React } from 'react';

function AboutProject() {
  return (
    <section className="main__about">
      <p className="about__title">О проекте</p>
      <div className="about__stages">
        <p className="stages__item-title">Дипломный проект включал 5 этапов</p>
        <p className="stages__item-title">На выполнение диплома ушло 5 недель</p>
        <p className="stages__item">Составление плана, работу над бэкендом, вёрстку,
        добавление функциональности и финальные доработки.</p>
        <p className="stages__item">У каждого этапа был мягкий и жёсткий дедлайн,
        которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="about__bar">
        <div className="bar__backend">1 неделя</div>
        <div className="bar__frontend">4 недели</div>
        <div className="bar__title">Back-end</div>
        <div className="bar__title">Front-end</div>
      </div>
    </section>
  );
}

export default AboutProject;
