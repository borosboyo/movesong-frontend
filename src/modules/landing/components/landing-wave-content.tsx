import { LandingPopularFeatures } from '@/modules/landing/components/landing-popular-features.tsx';
import { BottomWaveSeparator, TopWaveSeparator } from '@/shared/components/ui/wave-separator.tsx';

export function LandingWaveContent() {
  return (
    <>
      <section className="wave-top">
        <TopWaveSeparator flip={true} />
      </section>
      <div className={`wave-content #002347`}>
        <LandingPopularFeatures />
      </div>
      <BottomWaveSeparator />
    </>
  );
}
