import { Route, Routes } from 'react-router-dom';
import Landing from '@/modules/landing/landing.tsx';
import AppLayout from '@/core/app/app-layout.tsx';
import AlreadyLoggedInPage from '@/core/error/already-logged-in-page.tsx';
import { ContactPanel } from '@/modules/contact/contact-panel';
import { FaqPanel } from '@/modules/faq/faq-panel.tsx';
import { PrivacyPolicyPanel } from '@/modules/privacypolicy/privacy-policy-panel.tsx';
import { TermsOfServicePanel } from '@/modules/termsofservice/terms-of-service-panel.tsx';
import { ProfilePanel } from '@/modules/profile/profile-panel.tsx';
import PrivateRoute from '../auth/private-route';
import { NewConnectionPanel } from '@/modules/connection/new-connection-panel.tsx';
import YoutubeConnectedPanel from '@/modules/connection/youtube-connected-panel';
import SpotifyConnectedPanel from '@/modules/connection/spotify-connected-panel';
import { TransformPanel } from '@/modules/transform/transform-panel';
import { TransformProvider } from '@/core/hooks/useTransform.tsx';
import PremiumPanel from '@/modules/premium/premium-panel.tsx';
import { CustomerIdProvider } from '@/modules/premium/customer-context.tsx';
import { FinishPanel } from '@/modules/transform/finish-panel.tsx';
import PremiumSuccessPanel from '@/modules/premium/premium-success-panel';
import PremiumCancelPanel from '@/modules/premium/premium-cancel-panel';
import { SharePanel } from '@/modules/share/share-panel';
import PublicRoute from '@/core/auth/public-route.tsx';
import { LoginEmailPanel } from '@/modules/auth/login/login-email-panel.tsx';
import { LoginPasswordPanel } from '@/modules/auth/login/login-password-panel';
import { RegisterEmailPanel } from '@/modules/auth/register/register-email-panel';
import { RegisterConfirmEmailPanel } from '@/modules/auth/register/register-confirm-email-panel';
import { RegisterPasswordPanel } from '@/modules/auth/register/register-password-panel';
import { ForgotPasswordEmailPanel } from '@/modules/auth/forgot-password/forgot-password-email-panel';
import { ForgotPasswordOtpPanel } from '@/modules/auth/forgot-password/forgot-password-otp-panel';
import { ForgotPasswordChangePanel } from '@/modules/auth/forgot-password/forgot-password-change-panel';
import ErrorPanel from '@/core/error/error-page.tsx';
import { SyncProvider } from '@/core/hooks/useSync.tsx';
import { SyncPanel } from '@/modules/sync/sync-panel.tsx';

export const Router = () => {
  return (<Routes>
    {/* General Routes */}
    <Route path="/movesong-frontend" element={<AppLayout />}>
      <Route index element={<Landing />} />
      <Route path="already-logged-in" element={<AlreadyLoggedInPage />} />
      <Route path="faq" element={<FaqPanel />} />
      <Route path="contact" element={<ContactPanel />} />
      <Route path="terms-of-service" element={<TermsOfServicePanel />} />
      <Route path="privacy-policy" element={<PrivacyPolicyPanel />} />

      {/* Profile Routes */}
      <Route path="profile" element={<PrivateRoute><ProfilePanel /></PrivateRoute>} />
      <Route path="profile/new-connection" element={<PrivateRoute><NewConnectionPanel /></PrivateRoute>} />
      <Route path="profile/youtube-connected" element={<PrivateRoute><YoutubeConnectedPanel /></PrivateRoute>} />
      <Route path="profile/spotify-connected" element={<PrivateRoute><SpotifyConnectedPanel /></PrivateRoute>} />

      {/* Transform Routes */}
      <Route path="transform" element={<PrivateRoute><TransformProvider><TransformPanel /></TransformProvider></PrivateRoute>} />
      <Route path="transform/finish" element={<PrivateRoute><TransformProvider><FinishPanel /></TransformProvider></PrivateRoute>} />

      {/* Transform Route */}
      <Route path="sync" element={<PrivateRoute><SyncProvider><SyncPanel /></SyncProvider></PrivateRoute>} />

      {/* Premium Routes */}
      <Route path="premium" element={<CustomerIdProvider><PremiumPanel /></CustomerIdProvider>} />
      <Route path="premium/success" element={<PrivateRoute><CustomerIdProvider><PremiumSuccessPanel /></CustomerIdProvider></PrivateRoute>} />
      <Route path="premium/cancel" element={<PrivateRoute><CustomerIdProvider><PremiumCancelPanel /></CustomerIdProvider></PrivateRoute>} />

      {/* Share Route */}
      <Route path="share/:shareId" element={<TransformProvider><SharePanel /></TransformProvider>} />

      {/* Authentication Routes */}
      <Route path="/movesong-frontend/login" element={<PublicRoute><LoginEmailPanel /></PublicRoute>} />
      <Route path="/movesong-frontend/login/password" element={<PublicRoute><LoginPasswordPanel /></PublicRoute>} />

      {/* Registration Routes */}
      <Route path="/movesong-frontend/register" element={<PublicRoute><RegisterEmailPanel /></PublicRoute>} />
      <Route path="/movesong-frontend/register/password" element={<PublicRoute><RegisterPasswordPanel /></PublicRoute>} />
      <Route path="/movesong-frontend/register/confirm" element={<PublicRoute><RegisterConfirmEmailPanel /></PublicRoute>} />

      {/* Forgot Password Routes */}
      <Route path="/movesong-frontend/forgot-password" element={<PublicRoute><ForgotPasswordEmailPanel /></PublicRoute>} />
      <Route path="/movesong-frontend/forgot-password/otp" element={<PublicRoute><ForgotPasswordOtpPanel /></PublicRoute>} />
      <Route path="/movesong-frontend/forgot-password/change" element={<PublicRoute><ForgotPasswordChangePanel /></PublicRoute>} />

      <Route index path="*" element={<ErrorPanel />} />
    </Route>
  </Routes>);
};
