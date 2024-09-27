import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { UserDetails } from '@/shared/auth/user-details.ts';
import { UserApiFactory } from '@/swagger/user';
import { useHandleError } from '@/shared/hooks/useHandleError.ts';
import { useToast } from '@/shared/components/ui/use-toast.ts';
import { axiosConfig, baseOptions } from '@/shared/config/axiosConfig.ts';

type UserContextType = {
  user: UserDetails | null;
  token: string | null;
  register: (_email: string, _username: string, _password: string, _firstName: string, _lastName: string) => Promise<void>;
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
  const handleErrors = useHandleError();
  const userApi = UserApiFactory(axiosConfig);
  const { toast } = useToast();

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

  const register = useCallback(async (
    email: string,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
  ): Promise<void> => {
    try {
      const response = await userApi.register({
        email,
        username,
        password,
        firstName,
        lastName,
      }, baseOptions);
      if (response?.data?.success) {
        toast({
          title: 'Registered successfully!',
          description: 'Please check your email to verify your account.',
          variant: 'success',
        });
      }
    } catch (error) {
      handleErrors(error);
    }
  }, [handleErrors, toast, userApi]);

  const login = useCallback(async (
    usernameOrEmail: string, // Mark unused parameter with an underscore
    password: string,
  ): Promise<void> => {
    try {
      const response = await userApi.login({
        usernameOrEmail,
        password,
      }, baseOptions);
      const { accessToken, username, email, firstName, lastName } = response?.data || {};

      if (accessToken) {
        const userDetails: UserDetails = {
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
          title: 'Logged in successfully!',
          description: 'Welcome back!',
          variant: 'success',
        });
      }
    } catch (error) {
      handleErrors(error);
    }
  }, [handleErrors, toast, userApi]);

  const isLoggedIn = useCallback(() => !!user, [user]);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setToken(null);
    axios.defaults.headers.common.Authorization = '';
  }, []);

  const contextValue = useMemo(() => ({
    login,
    user,
    token,
    logout,
    isLoggedIn,
    register,
  }), [user, token, login, logout, isLoggedIn, register]);

  return (
    <AuthContext.Provider value={contextValue}>
      {isReady ? children : null}
    </AuthContext.Provider>
  );
};

export default AuthContext;
