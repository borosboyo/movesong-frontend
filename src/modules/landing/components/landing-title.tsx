import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/components/ui/button.tsx';
import { useTitleTheme } from '@/core/theme/hooks/useTitleTheme.ts';
import '@/styles/animation.css';
import '@/styles/text.css';
import '@/modules/landing/landing.css';
import { BottomWaveSeparator } from '@/shared/components/ui/wave-separator.tsx';

export function LandingTitle() {
  const { t } = useTranslation();
  return (
    <>
      <div className={`darkBg w-full flex flex-col justify-center items-center pt-32 text-center `}>
        <h1
          className={`scroll-m-20 text-7xl font-extrabold tracking-tight lg:text-7xl ${useTitleTheme()}`}>{t('landingTitle.header')}
        </h1>
        <LogoRibbon />
        <span className={`text-3xl font-bold max-w-3xl text-white`}>{t('landingTitle.subtitle')}</span>
        <Button className={`hover:bg-[#FF5003] w-64 py-5 rounded-2xl  mt-10`}>
          <div className={`text-xl font-bold bigger-button-text`}>{t('landingTitle.button')}</div>
        </Button>
      </div>
      <BottomWaveSeparator/>
    </>
  );
}

function LogoRibbon() {
  return (
    <div className={`flex flex-row mt-5 mb-5 gap-5`}>
      <img className={`w-26 h-10 object-cover floatLogo floatLogo-1`} src={`/src/assets/youtube-music/youtube-music-text.png`} alt={`youtube-music`} />
      <img className={`w-30 h-10 object-cover floatLogo floatLogo-2`} src={`/src/assets/spotify/spotify-text.webp`} alt={`spotify`} />
      <img className={`w-30 h-14 object-cover floatLogo floatLogo-3`} src={`/src/assets/soundcloud/soundcloud-text.png`} alt={`soundcloud`} />
    </div>
  );
}

