import { LandingTitle } from '@/modules/landing/components/landing-title.tsx';
// import {
//  FinishTransferPanel,
//  ForgotPasswordEmailPanel,
//  ForgotPasswordPanelWithOtp,
//  LoginPanelWithPassword,
//  PremiumPanel,
//  ProfilePanel,
//  ProgressBar,
//  RegisterPanelWithData,
//  SharePanel,
//  SkeletonComponent,
//  ToastComponent,
//  TransformPanel,
// } from '@/shared/panel/panel.tsx';
// import { LoadingSpinner } from '@/shared/components/util/spinner.tsx';
import '@/modules/landing/landing.css';
import { LandingIntroduction } from '@/modules/landing/components/landing-introduction.tsx';
import { LandingWaveContent } from '@/modules/landing/components/landing-wave-content.tsx';
import { LandingPopularPlatforms } from '@/modules/landing/components/landing-popular-platforms.tsx';
import { TopWaveSeparator } from '@/shared/components/ui/wave-separator.tsx';

export default function Landing() {
  return (
      <div className={`flex justify-center items-center w-full`}>
        <div className={`flex flex-col items-center justify-center w-full mx-auto`}>
          <LandingTitle />
          <LandingIntroduction />
          <LandingWaveContent />
          <LandingPopularPlatforms />
          <TopWaveSeparator flip={true} />
        </div>
      </div>
  );
}

// export function SharePanelBackgrounds() {
//  return (
//    <>
//      <LoadingSpinner size={50} />
//      <ToastComponent />
//      <SkeletonComponent />
//      <LoginPanelWithPassword />
//      <RegisterPanelWithData />
//      <ForgotPasswordEmailPanel />
//      <ForgotPasswordPanelWithOtp />
//      <PremiumPanel />
//      <FaqPanel />
//      <TransformPanel />
//      <FinishTransferPanel />
//      <ProgressBar />
//      <SharePanel />
//      <ProfilePanel />
//    </>
//  );
// }
