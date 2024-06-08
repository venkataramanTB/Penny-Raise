import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = sessionStorage.getItem('LoggedInUser');

  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/" />;
};

export default PrivateRoute;
