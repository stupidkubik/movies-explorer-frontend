import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
      <footer className="footer">
        <p className="footer__text">Study project of Yandex.Practicum х BeatFilm.</p>
        <div className="footer__container">
          <div className="footer__copyright">© 2020</div>
          <ul className="footer__links">
            <li className="footer__links-item">
              <Link
              className="footer__link"
              target="_blank"
              to="https://practicum.yandex.ru/"
              >Yandex.Practicum</Link>
            </li>

            <li className="footer__links-item">
              <Link
              className="footer__link"
              target="_blank"
              to="https://github.com/stupidkubik"
              >Github</Link>
            </li>
          </ul>
        </div>
      </footer>
  );
}

export default Footer;
