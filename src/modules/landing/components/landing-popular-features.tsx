import { useTranslation } from 'react-i18next';
import { useFadeInOnScroll } from '@/shared/hooks/useFadeInOnScroll.ts';
import { useReverseTitleTheme } from '@/core/theme/hooks/useReverseTitleTheme.ts';
import { Card, CardContent, CardDescription } from '@/shared/components/ui/card.tsx';

export function LandingPopularFeatures() {
  const { t } = useTranslation();
  const { isVisible, domRef } = useFadeInOnScroll();

  return (
    <div ref={domRef} className={`flex flex-col gap-10 ${isVisible ? 'fadeIn' : 'fadeOut'} my-20`}>
      <div className={`flex flex-col items-center gap-7`}>
        <h1 className={`scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-6xl ${useReverseTitleTheme()}`}>{t('landingPopularFeatures.header')}</h1>
        <div className={`flex flex-row gap-6`}>
          <FeatureCard title={`landingPopularFeatures.transferHeader`} description={`landingPopularFeatures.transferSubtitle`} />
          <FeatureCard title={`landingPopularFeatures.syncHeader`} description={`landingPopularFeatures.syncSubtitle`} />
          <FeatureCard title={`landingPopularFeatures.shareHeader`} description={`landingPopularFeatures.shareSubtitle`} />
        </div>
      </div>
    </div>
  );
}

type FeatureCardProps = {
  title: string;
  description: string;
};

function FeatureCard(props: FeatureCardProps) {
  const { t } = useTranslation();
  return (
    <Card className={`max-w-md pb-16 px-5 hoverGrow`}>
      <CardContent className={`aspect-square justify-center p-6`}>
        <div className={`flex flex-col items-center max-w-64`}>
          <img src={`/src/assets/placeholder.jpg`} alt={`placeholder`} className={`w-40 h-40 object-cover mt-5`} />
          <span className={`w scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl mt-16`}>{t(props.title)}</span>
          <CardDescription className={`mt-3`}>{t(props.description)}</CardDescription>
        </div>
      </CardContent>
    </Card>
  );
}
