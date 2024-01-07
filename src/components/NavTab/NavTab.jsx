import { React } from 'react';

function NavTab() {
  return (
    <nav>
      <ul className="navtab main__navtab">
        <li className="navtab__item">
          <a
          className="navtab__button"
          href="#about"
          >About project</a>
        </li>

        <li className="navtab__item">
          <a
          className="navtab__button"
          href="#techs"
          >Tech stack</a>
        </li>

        <li className="navtab__item">
          <a
          className="navtab__button"
          href="#student"
          >Student</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
