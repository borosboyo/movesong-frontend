import { RouteObject } from 'react-router-dom';
import Landing from '@/modules/landing/landing.tsx';
import AppLayout from '@/core/app/app-layout.tsx';
import { FaqPanel } from '@/modules/faq/faq-panel.tsx';
import { ContactPanel } from '@/modules/contact/contact-panel.tsx';
import { LoginEmailPanel } from '@/modules/auth/login/login-email-panel.tsx';
import { RegisterEmailPanel } from '@/modules/auth/register/register-email-panel.tsx';
import { LoginPasswordPanel } from '@/modules/auth/login/login-password-panel.tsx';
import { RegisterPasswordPanel } from '@/modules/auth/register/register-password-panel.tsx';
import { ForgotPasswordEmailPanel } from '@/modules/auth/forgot-password/forgot-password-email-panel.tsx';
import { ForgotPasswordOtpPanel } from '@/modules/auth/forgot-password/forgot-password-otp-panel.tsx';
import { ForgotPasswordChangePanel } from '@/modules/auth/forgot-password/forgot-password-change-panel.tsx';
import { RegisterConfirmEmailPanel } from '@/modules/auth/register/register-confirm-email-panel.tsx';
import { ProfilePanel } from '@/modules/profile/profile-panel.tsx';
import { TransformPanel } from '@/modules/transform/transform-panel.tsx';
import { FinishPanel } from '@/modules/transform/finish-panel.tsx';
import ErrorPanel from '@/core/error/error-page.tsx';
import PremiumPanel from '@/modules/premium/premium-panel.tsx';
import { SharePanel } from '@/modules/share/share-panel.tsx';
import PrivateRoute from '@/core/auth/private-route';
import PremiumSuccessPanel from '@/modules/premium/premium-success-panel.tsx';
import PremiumCancelPanel from '@/modules/premium/premium-cancel-panel.tsx';
import AlreadyLoggedInPage from '@/core/error/already-logged-in-page.tsx';
import PublicRoute from '@/core/auth/public-route.tsx';
import { NewConnectionPanel } from '@/modules/connection/new-connection-panel.tsx';
import SpotifyConnectedPanel from '@/modules/connection/spotify-connected-panel.tsx';
import YoutubeConnectedPanel from '@/modules/connection/youtube-connected-panel.tsx';
import { TermsOfServicePanel } from '@/modules/termsofservice/terms-of-service-panel.tsx';
import { PrivacyPolicyPanel } from '@/modules/privacypolicy/privacy-policy-panel.tsx';
import { TransformProvider } from '@/core/hooks/useTransform.tsx';
import { CustomerIdProvider } from '@/modules/premium/customer-context.tsx';

const RouterBuilder = () => {

  const errorRoute: RouteObject[] = [
    {
      path: '*', // Catch-all route for undefined paths
      element: <ErrorPanel />,
    },
  ];

  const generalRoutes: RouteObject[] = [
    {
      path: '/movesong-frontend/already-logged-in',
      element: <AlreadyLoggedInPage />,
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
      path: '/movesong-frontend/terms-of-service',
      element: <TermsOfServicePanel />,
    },
    {
      path: '/movesong-frontend/privacy-policy',
      element: <PrivacyPolicyPanel />,
    },
    {
      path: '/movesong-frontend/profile',
      element:
        <PrivateRoute>
          <ProfilePanel />
        </PrivateRoute>,
    },
    {
      path: '/movesong-frontend/profile/new-connection',
      element:
        <PrivateRoute>
          <NewConnectionPanel />
        </PrivateRoute>,
    },
    {
      path: '/movesong-frontend/profile/youtube-connected',
      element:
        <PrivateRoute>
          <YoutubeConnectedPanel />
        </PrivateRoute>,
    },
    {
      path: '/movesong-frontend/profile/spotify-connected',
      element: <PrivateRoute>
        <SpotifyConnectedPanel />
      </PrivateRoute>,
    },
    {
      path: '/movesong-frontend/transform',
      element:
        <PrivateRoute>
          <TransformProvider>
            <TransformPanel />
          </TransformProvider>
        </PrivateRoute>,
    },
    {
      path: '/movesong-frontend/transform/finish',
      element:
        <PrivateRoute>
          <TransformProvider>
            <FinishPanel />
          </TransformProvider>
        </PrivateRoute>
      ,
    },
    {
      path: '/movesong-frontend/premium',
      element:
        <CustomerIdProvider>
          <PremiumPanel />
        </CustomerIdProvider>,
    },
    {
      path: 'movesong-frontend/premium/success',
      element:
        <PrivateRoute>
          <CustomerIdProvider>
            <PremiumSuccessPanel />
          </CustomerIdProvider>
        </PrivateRoute>,
    },
    {
      path: '/movesong-frontend/premium/cancel',
      element:
        <PrivateRoute>
          <CustomerIdProvider>
            <PremiumCancelPanel />
          </CustomerIdProvider>
        </PrivateRoute>,
    },
    {
      path: '/movesong-frontend/share/:shareId',
      element: <SharePanel />,
    },
  ];

  const loginRoutes: RouteObject[] = [
    {
      path: '/movesong-frontend/login',
      element: (
        <PublicRoute>
          <LoginEmailPanel />
        </PublicRoute>
      ),
    },
    {
      path: '/movesong-frontend/login/password',
      element: (
        <PublicRoute>
          <LoginPasswordPanel />
        </PublicRoute>
      ),
    },
  ];


  const registerRoutes: RouteObject[] = [
    {
      path: '/movesong-frontend/register',
      element: (
        <PublicRoute>
          <RegisterEmailPanel />
        </PublicRoute>
      ),
    },
    {
      path: '/movesong-frontend/register/password',
      element: (
        <PublicRoute>
          <RegisterPasswordPanel />
        </PublicRoute>
      ),
    },
    {
      path: '/movesong-frontend/register/confirm',
      element: (
        <PublicRoute>
          <RegisterConfirmEmailPanel />
        </PublicRoute>
      ),
    },
  ];


  const forgotPasswordRoutes: RouteObject[] = [
    {
      path: '/movesong-frontend/forgot-password',
      element: (
        <PublicRoute>
          <ForgotPasswordEmailPanel />
        </PublicRoute>
      ),
    },
    {
      path: '/movesong-frontend/forgot-password/otp',
      element: (
        <PublicRoute>
          <ForgotPasswordOtpPanel />
        </PublicRoute>
      ),
    },
    {
      path: '/movesong-frontend/forgot-password/change',
      element: (
        <PublicRoute>
          <ForgotPasswordChangePanel />
        </PublicRoute>
      ),
    },
  ];

  const routes: RouteObject[] = [
    {
      element: <AppLayout />,
      children: [
        ...errorRoute,
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
