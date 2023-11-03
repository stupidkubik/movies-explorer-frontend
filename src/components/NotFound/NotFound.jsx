import { React } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notFound">
      <h2 className="notFound__title">404</h2>
      <p className="notFound__subtitle">Страница не найдена</p>
      <Link className="notFound__link" to={navigate(-1)}>Назад</Link>
    </div>
  );
}

export default NotFound;
