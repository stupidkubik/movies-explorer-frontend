import { React } from 'react';

function NavTab() {
  return (
    <nav>
      <ul className="navtab main__navtab">
        <li className="navtab__item">
          <a
          className="navtab__button"
          href="#about"
          >О проекте</a>
        </li>

        <li className="navtab__item">
          <a
          className="navtab__button"
          href="#techs"
          >Технологии</a>
        </li>

        <li className="navtab__item">
          <a
          className="navtab__button"
          href="#student"
          >Студент</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
