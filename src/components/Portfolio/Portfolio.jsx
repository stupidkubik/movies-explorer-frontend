import { React } from 'react';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <section className="main__portfolio">
      <div className="portfolio__link">
        <h3 className="link__title">Портфолио</h3>
        <div className="link__item">
          <p className="link__decs">Статичный сайт</p>
          <Link
          className="link__button"
          type="button"
          target="_blank"
          to="https://stupidkubik.github.io/how-to-learn/"
          />
        </div>
        <div className="link__item">
          <p className="link__decs">Адаптивный сайт</p>
          <Link
          className="link__button"
          type="button"
          target="_blank"
          to="https://stupidkubik.github.io/russian-travel/"
          />
        </div>
        <div className="link__item">
          <p className="link__decs">Одностраничное приложение</p>
          <Link
          className="link__button"
          type="button"
          target="_blank"
          to="https://stupid.kubik.nomoredomainsrocks.ru/"
          />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
