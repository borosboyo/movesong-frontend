// src/core/auth/public-route.tsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PublicRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (isLoggedIn()) {
    return <Navigate to="/movesong-frontend/already-logged-in" state={{ from: location }} />;
  }

  return children;
};

export default PublicRoute;
