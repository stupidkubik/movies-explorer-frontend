import { React } from 'react';
import { Link } from 'react-router-dom';

function NavTab() {
  return (
    <section className="main__navtab">
      <Link className='navtab__button' type="button">О проекте</Link>
      <Link className='navtab__button' type="button">Технологии</Link>
      <Link className='navtab__button' type="button">Студент</Link>
    </section>
  );
}

export default NavTab;
