import { React } from 'react';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <section className="portfolio main__portfolio">
      <div className="link portfolio__link">
        <h3 className="link__title">Portfolio</h3>
        <div className="link__item">
          <Link
          className="link__button"
          target="_blank"
          to="https://stupidkubik.github.io/how-to-learn/"
          >
            <p className="link__decs">Static website</p>
          </Link>
        </div>
        <div className="link__item">
          <Link
          className="link__button"
          target="_blank"
          to="https://stupidkubik.github.io/russian-travel/"
          >
            <p className="link__decs">Adaptive website</p>
          </Link>
        </div>
        <div className="link__item">
          <Link
          className="link__button"
          target="_blank"
          to="https://stupid.kubik.nomoredomainsrocks.ru/"
          >
            <p className="link__decs">Single page application</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
