import { useTranslation } from 'react-i18next';
import { useFadeInOnScroll } from '@/core/hooks/useFadeInOnScroll.ts';
import { MixIcon } from '@/shared/icons/mix-icon.tsx';

export function LandingIntroduction() {
  const { t } = useTranslation();
  const { isVisible, domRef } = useFadeInOnScroll();

  return (
    <div
      ref={domRef}
      className={`flex flex-col lg:flex-row gap-6 items-center ${isVisible ? 'fadeIn' : 'fadeOut'} my-5 lg:my-0`}
    >
      <MixIcon size={350} />
      <div className={`flex flex-col gap-3 w-3/4 lg:max-w-md`}>
        <h1 className={`scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl`}>
          {t('landing.landingIntroduction.header')}
        </h1>
        <p className={`text-md lg:text-lg max-w-lg text-justify`}>{t('landing.landingIntroduction.subtitle')}</p>
      </div>
    </div>
  );
}
