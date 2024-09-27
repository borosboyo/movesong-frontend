import { useContext } from 'react';
import AuthContext from '@/shared/auth/auth-provider.tsx';

export const useAuth = () => {
  return useContext(AuthContext);
};
