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
    <div className="notFound">
      <h2 className="notFound__title">404</h2>
      <p className="notFound__subtitle">Страница не найдена</p>
      <Link className="notFound__link" type="button" onClick={() => goToBack()}>Назад</Link>
    </div>
  );
}

export default NotFound;
