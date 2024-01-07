import { React } from 'react';
import MainTitle from '../MainTitle/MainTitle.jsx';

function Techs() {
  return (
    <section id="techs" className="techs main__techs">
      <MainTitle text={'Technologies'} />
      <h3 className="techs__title">7 technologies</h3>
      <p className="techs__desc">In the web development course i mastered the technologies
          which were used in the graduation project.</p>
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
