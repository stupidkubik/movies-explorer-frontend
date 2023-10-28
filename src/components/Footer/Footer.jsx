import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
      <div className="footer">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__container">
          <div className="footer__copyright">© 2020</div>
          <div className="footer__links">
            <Link Link className="footer__link">Яндекс.Практикум</Link>
            <Link className="footer__link">Github</Link>
          </div>
        </div>
      </div>
  );
}

export default Footer;
