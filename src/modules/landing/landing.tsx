import { LandingTitle } from '@/modules/landing/components/landing-title.tsx';
import '@/modules/landing/landing.css';
import { LandingIntroduction } from '@/modules/landing/components/landing-introduction.tsx';
import { LandingWaveContent } from '@/modules/landing/components/landing-wave-content.tsx';
import { LandingPopularPlatforms } from '@/modules/landing/components/landing-popular-platforms.tsx';
import { TopWaveSeparator } from '@/shared/components/ui/wave-separator.tsx';

export default function Landing() {
  return (
    <div className={`flex justify-center items-center w-full gap-0`}>
      <div className={`flex flex-col items-center justify-center w-full mx-auto gap-0`}>
        <LandingTitle />
        <LandingIntroduction />
        <LandingWaveContent />
        <LandingPopularPlatforms />
        <TopWaveSeparator flip={true} />
      </div>
    </div>
  );
}
