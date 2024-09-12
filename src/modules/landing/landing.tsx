import { LandingTitle } from '@/modules/landing/components/landing-title.tsx';
import {
  ContactPanel,
  FinishTransferPanel,
  ForgotPasswordPanel,
  ForgotPasswordPanelWithOtp,
  LoginPanel,
  LoginPanelWithPassword,
  PremiumPanel,
  ProfilePanel,
  ProgressBar,
  RegisterPanel,
  RegisterPanelWithData,
  SharePanel,
  SkeletonComponent,
  ToastComponent,
  TransferPanel,
} from '@/shared/panel/panel.tsx';
import { LoadingSpinner } from '@/shared/components/util/spinner.tsx';
import '@/modules/landing/landing.css';
import { LandingIntroduction } from '@/modules/landing/components/landing-introduction.tsx';
import { LandingWaveContent } from '@/modules/landing/components/landing-wave-content.tsx';
import { LandingPopularPlatforms } from '@/modules/landing/components/landing-popular-platforms.tsx';
import { TopWaveSeparator } from '@/shared/components/ui/wave-separator.tsx';
import { FaqPanel } from '@/modules/faq/faq-panel.tsx';

export default function Landing() {
  return (
    <>
      <div className={`flex justify-center items-center w-full`}>
        <div className={`flex flex-col items-center justify-center w-full mx-auto`}>
          <LandingTitle />
          <LandingIntroduction />
          <LandingWaveContent />
          <LandingPopularPlatforms />
          <TopWaveSeparator flip={true} />
        </div>
      </div>
    </>
  );
}

export function Test() {
  return (
    <>
      <LoadingSpinner size={50} />
      <ToastComponent />
      <SkeletonComponent />
      <LoginPanel />
      <LoginPanelWithPassword />
      <RegisterPanel />
      <RegisterPanelWithData />
      <ForgotPasswordPanel />
      <ForgotPasswordPanelWithOtp />
      <PremiumPanel />
      <ContactPanel />
      <FaqPanel />
      <TransferPanel />
      <FinishTransferPanel />
      <ProgressBar />
      <SharePanel />
      <ProfilePanel />
    </>
  );
}
