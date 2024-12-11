import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { UserDetails } from '@/core/auth/user-details.ts';
import { UserApiFactory } from '@/swagger/user';
import { useHandleError } from '@/core/hooks/useHandleError.ts';
import { useToast } from '@/shared/components/ui/use-toast.ts';
import { axiosConfig, baseOptions } from '@/core/config/axiosConfig.ts';
import { useTranslation } from 'react-i18next';

type UserContextType = {
  user: UserDetails | null;
  token: string | null;
  register: (
    _email: string,
    _username: string,
    _password: string,
    _firstName: string,
    _lastName: string,
  ) => Promise<void>;
  login: (_usernameOrEmail: string, _password: string) => Promise<void>;
  logout: () => void;
  isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const AuthContext = createContext<UserContextType>({} as UserContextType);

export const AuthProvider = ({ children }: Props) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserDetails | null>(null);
  const [isReady, setIsReady] = useState(false);
  const handleError = useHandleError();
  const userApi = UserApiFactory(axiosConfig);
  const { toast } = useToast();
  const { t } = useTranslation();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
      axios.defaults.headers.common.Authorization = `Bearer ${storedToken}`;
    }
    setIsReady(true);
  }, []);

  const register = useCallback(
    async (email: string, username: string, password: string, firstName: string, lastName: string): Promise<void> => {
      try {
        const response = await userApi.register(
          {
            email,
            username,
            password,
            firstName,
            lastName,
          },
          baseOptions,
        );
        if (response?.data?.success) {
          toast({
            title: t('auth.register.passwordPanel.successToast.title'),
            description: t('auth.register.passwordPanel.successToast.description'),
            variant: 'success',
          });
        } else {
          toast({
            title: t('auth.register.passwordPanel.errorToast.title'),
            description: t('auth.register.passwordPanel.errorToast.description'),
            variant: 'destructive',
          });
        }
      } catch (error) {
        handleError(error);
      }
    },
    [handleError, toast, userApi],
  );

  const login = useCallback(
    async (
      usernameOrEmail: string, // Mark unused parameter with an underscore
      password: string,
    ): Promise<void> => {
      try {
        const response = await userApi.login(
          {
            usernameOrEmail,
            password,
          },
          baseOptions,
        );
        const { accessToken, id, username, email, firstName, lastName } = response?.data || {};

        if (accessToken) {
          const userDetails: UserDetails = {
            id,
            username,
            email,
            firstName,
            lastName,
          };

          localStorage.setItem('token', accessToken);
          localStorage.setItem('user', JSON.stringify(userDetails));

          setToken(accessToken);
          setUser(userDetails);

          axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
          toast({
            title: t('auth.login.passwordPanel.successToast.title'),
            description: t('auth.login.passwordPanel.successToast.description'),
            variant: 'success',
          });
        } else {
          toast({
            title: t('auth.login.passwordPanel.errorToast.title'),
            description: t('auth.login.passwordPanel.errorToast.description'),
            variant: 'destructive',
          });
        }
      } catch (error) {
        handleError(error);
      }
    },
    [handleError, toast, userApi],
  );

  const isLoggedIn = useCallback(() => !!user, [user]);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setToken(null);
    axios.defaults.headers.common.Authorization = '';
  }, []);

  const contextValue = useMemo(
    () => ({
      login,
      user,
      token,
      logout,
      isLoggedIn,
      register,
    }),
    [user, token, login, logout, isLoggedIn, register],
  );

  return <AuthContext.Provider value={contextValue}>{isReady ? children : null}</AuthContext.Provider>;
};

export default AuthContext;
