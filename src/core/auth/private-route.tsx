import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/core/hooks/useAuth.tsx';

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/movesong-frontend/login" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
