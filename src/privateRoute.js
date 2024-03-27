import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from './components/firebase-config';

const isAuthenticated = () => {
  const currentUser = auth.currentUser;
  return !!currentUser;
};

export const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" replace />;
  };