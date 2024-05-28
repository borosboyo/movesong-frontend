import Navbar from '@/shared/navbar/navbar.tsx';
import LandingBackground from '@/modules/landing/landing-background.tsx';
import {
  TransferPanel,
  ContactPanel, FAQPanel,
  ForgotPasswordPanel,
  ForgotPasswordPanelWithOtp,
  LoginPanel,
  LoginPanelWithPassword, PremiumPanel,
  RegisterPanel,
  RegisterPanelWithData,
  SkeletonComponent, ToastComponent, FinishTransferPanel, SharePanel, ProgressBar, ProfilePanel,
} from '@/shared/panel/panel.tsx';
import { LoadingSpinner } from '@/shared/components/util/spinner.tsx';
import { Footer } from '@/shared/footer/footer.tsx';

export default function Landing() {
  return (
    <>
      <Navbar />
      <LandingBackground />
      <div className={`flex justify-center  items-center`}>
        <div className={`flex-col grid gap-4 justify-center`}>
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
          <FAQPanel />
          <TransferPanel />
          <FinishTransferPanel />
          <ProgressBar />
          <SharePanel />
          <ProfilePanel />
          <Footer />
        </div>
      </div>
    </>
  );
}
