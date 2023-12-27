import { React, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContext from '../../contexts/AppContext';
import { Paths } from '../../utils/constants';

const ProtectedRoute = ({ element: Component, ...props }) => {
  const { isLoggedIn } = useContext(AppContext);
  console.log(isLoggedIn);

  return (isLoggedIn
    ? <Component {...props} />
    : <Navigate to={Paths.Login} replace />);
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  element: PropTypes.func,
};
