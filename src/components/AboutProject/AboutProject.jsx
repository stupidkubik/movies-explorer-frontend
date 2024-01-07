import { React } from 'react';
import MainTitle from '../MainTitle/MainTitle.jsx';

function AboutProject() {
  return (
    <section id="about" className="about main__about">
      <MainTitle text={'About project'} />
      <div className="stages about__stages">
        <h3 className="stages__item-title">Diploma project contain five stages</h3>
        <h3 className="stages__item-title">It was completed in five weeks</h3>
        <p className="stages__item">Create disign, build back-end, make layouts,
        create functionallity, make final improvements.</p>
        <p className="stages__item">Every stage has soft and hard deadline which must be followed
         to pass successfully.</p>
      </div>
      <div className="bar about__bar">
        <p className="bar__backend">1 week</p>
        <p className="bar__frontend">4 weeks</p>
        <p className="bar__title">Back-end</p>
        <p className="bar__title">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
