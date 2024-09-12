import { Navigate, RouteObject } from 'react-router-dom';
import Landing from '@/modules/landing/landing.tsx';
import AppLayout from '@/core/app/app-layout.tsx';
import { FaqPanel } from '@/modules/faq/faq-panel.tsx';
import { ContactPanel } from '@/modules/contact/contact-panel.tsx';
import { LoginEmailPanel } from '@/modules/auth/login/login-email-panel.tsx';
import { RegisterEmailPanel } from '@/modules/auth/register/register-email-panel.tsx';
import { LoginPasswordPanel } from '@/modules/auth/login/login-password-panel.tsx';
import { RegisterPasswordPanel } from '@/modules/auth/register/register-password-panel.tsx';
import { ForgotPasswordPanel } from '@/modules/auth/forgot-password/forgot-password-panel.tsx';
import { ForgotPasswordOtpPanel } from '@/modules/auth/forgot-password/forgot-password-otp-panel.tsx';
import { ForgotPasswordChangePanel } from '@/modules/auth/forgot-password/forgot-password-change-panel.tsx';
import { RegisterConfirmEmailPanel } from '@/modules/auth/register/register-confirm-email-panel.tsx';
import { ProfilePanel } from '@/modules/profile/profile-panel.tsx';

const RouterBuilder = () => {

  const generalRoutes: RouteObject[] = [
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
    {
      path: '/movesong-frontend',
      element: <Landing />,
    },
    {
      path: '/movesong-frontend/faq',
      element: <FaqPanel />,
    },
    {
      path: '/movesong-frontend/contact',
      element: <ContactPanel />,
    },
    {
      path: '/movesong-frontend/profile',
      element: <ProfilePanel />,
    },
  ];

  const loginRoutes: RouteObject[] = [
    {
      path: '/movesong-frontend/login',
      element: <LoginEmailPanel />,
    },
    {
      path: '/movesong-frontend/login/password',
      element: <LoginPasswordPanel />,
    },
  ];

  const registerRoutes: RouteObject[] = [
    {
      path: '/movesong-frontend/register',
      element: <RegisterEmailPanel />,
    },
    {
      path: '/movesong-frontend/register/password',
      element: <RegisterPasswordPanel />,
    },
    {
      path: '/movesong-frontend/regsiter/confirm',
      element: <RegisterConfirmEmailPanel />,
    },
  ];

  const forgotPasswordRoutes: RouteObject[] = [
    {
      path: '/movesong-frontend/forgot-password',
      element: <ForgotPasswordPanel />,
    },
    {
      path: 'movesong-frontend/forgot-password/otp',
      element: <ForgotPasswordOtpPanel />,
    },
    {
      path: '/movesong-frontend/forgot-password/change',
      element: <ForgotPasswordChangePanel />,
    },
  ];

  const routes: RouteObject[] = [
    {
      element: <AppLayout />,
      children: [
        ...generalRoutes,
        ...loginRoutes,
        ...forgotPasswordRoutes,
        ...registerRoutes,
      ],
    },
  ];

  return routes;
};

export default RouterBuilder;
