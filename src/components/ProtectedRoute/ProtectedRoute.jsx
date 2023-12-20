import { React, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginUserContext from '../../contexts/LoginUserContext';
import { Paths } from '../../utils/constants';

const ProtectedRoute = ({ element: Component, ...props }) => {
  const { isLoggedIn } = useContext(LoginUserContext);

  return isLoggedIn
    ? <Component {...props} />
    : <Navigate to={Paths.Login} replace />;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  element: PropTypes.func,
};
