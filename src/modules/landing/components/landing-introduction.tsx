import { useTranslation } from 'react-i18next';
import { useFadeInOnScroll } from '@/core/hooks/useFadeInOnScroll.ts';

export function LandingIntroduction() {
  const { t } = useTranslation();
  const { isVisible, domRef } = useFadeInOnScroll();

  return (
    <div ref={domRef} className={`flex flex-row gap-6 items-center ${isVisible ? 'fadeIn' : 'fadeOut'}`}>
      <img className={`w-80 h-80 object-cover hoverGrow`} src={`/src/assets/placeholder.jpg`} alt={`placeholder`} />
      <div className={`flex flex-col gap-3 max-w-md`}>
        <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl`}>{t('landing.landingIntroduction.header')}</h1>
        <p className={`text-lg max-w-lg text-justify`}>{t('landing.landingIntroduction.subtitle')}</p>
      </div>
    </div>
  );
}
