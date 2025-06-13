import { useTranslation } from 'react-i18next';
import { useFadeInOnScroll } from '@/core/hooks/useFadeInOnScroll.ts';
import { useReverseTitleTheme } from '@/core/theme/hooks/useReverseTitleTheme.ts';
import { Card, CardContent, CardDescription } from '@/shared/components/ui/card.tsx';
import { ReactNode } from 'react';
import { ShareIcon } from '@/shared/icons/share-icon.tsx';
import { UpdateIcon } from '@/shared/icons/update-icon.tsx';
import { MagicIcon } from '@/shared/icons/magic-icon.tsx';

export function LandingPopularFeatures() {
  const { t } = useTranslation();
  const { isVisible, domRef } = useFadeInOnScroll();

  return (
    <div ref={domRef} className={`flex flex-col gap-10 ${isVisible ? 'fadeIn' : 'fadeOut'} py-20`}>
      <div className={`flex flex-col items-center gap-7`}>
        <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl ${useReverseTitleTheme()}`}>
          {t('landing.landingPopularFeatures.header')}
        </h1>
        <div className={`flex flex-col lg:flex-row gap-6 text-center`}>
          <FeatureCard
            title={`landing.landingPopularFeatures.transferHeader`}
            description={`landing.landingPopularFeatures.transferSubtitle`}
            icon={<MagicIcon size={100} />}
          />
          <FeatureCard
            title={`landing.landingPopularFeatures.syncHeader`}
            description={`landing.landingPopularFeatures.syncSubtitle`}
            icon={<UpdateIcon size={100} />}
          />
          <FeatureCard
            title={`landing.landingPopularFeatures.shareHeader`}
            description={`landing.landingPopularFeatures.shareSubtitle`}
            icon={<ShareIcon size={100} />}
          />
        </div>
      </div>
    </div>
  );
}

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

function FeatureCard(props: FeatureCardProps) {
  const { t } = useTranslation();
  return (
    <Card className={`max-w-md lg:pb-16 px-5 hoverGrow`}>
      <CardContent className={`aspect-square justify-center p-6`}>
        <div className={`flex flex-col items-center max-w-64`}>
          <div className={`mt-5`}>{props.icon}</div>
          <span className={`w scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl mt-4 lg:mt-16`}>
            {t(props.title)}
          </span>
          <CardDescription className={`mt-3`}>{t(props.description)}</CardDescription>
        </div>
      </CardContent>
    </Card>
  );
}
