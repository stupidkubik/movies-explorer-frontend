import { React } from 'react';

function NavTab() {
  return (
    <section className="navtab main__navtab">
      <a
      className="navtab__button"
      type="button"
      href="#about"
      >О проекте</a>

      <a
      className="navtab__button"
      type="button"
      href="#techs"
      >Технологии</a>

      <a
      className="navtab__button"
      type="button"
      href="#student"
      >Студент</a>
    </section>
  );
}

export default NavTab;
