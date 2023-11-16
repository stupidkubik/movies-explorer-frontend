import { React } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Paths } from '../../utils/constants';

function NotFound() {
  const navigate = useNavigate();

  function goToBack() {
    if (window.history.length > 0) {
      navigate(-1);
    } else navigate(Paths.Home, { replace: true });
  }

  return (
    <main className="notFound">
      <h1 className="notFound__title">404</h1>
      <p className="notFound__subtitle">Страница не найдена</p>
      <Link className="notFound__link" onClick={() => goToBack()}>Назад</Link>
    </main>
  );
}

export default NotFound;
