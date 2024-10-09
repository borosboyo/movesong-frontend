import { useContext } from 'react';
import AuthContext from '@/core/auth/auth-provider.tsx';

export const useAuth = () => {
  return useContext(AuthContext);
};
