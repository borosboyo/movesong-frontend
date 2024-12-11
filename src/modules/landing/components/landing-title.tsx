import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/components/ui/button.tsx';
import { useTitleTheme } from '@/core/theme/hooks/useTitleTheme.ts';
import '@/styles/animation.css';
import '@/styles/text.css';
import '@/modules/landing/landing.css';
import { BottomWaveSeparator } from '@/shared/components/ui/wave-separator.tsx';
import { useNavigate } from 'react-router-dom';
import youtubeMusicTextIcon from '@/assets/youtube-music/youtube-music-text.png';
import spotifyTextIcon from '@/assets/spotify/spotify-text.webp';

export function LandingTitle() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleStartButtonClick = () => {
    navigate('/movesong-frontend/transform');
  };

  return (
    <>
      <div
        className={`darkBg md:w-full lg:w-full flex flex-col justify-center items-center pt-16 lg:pt-32 text-center`}
      >
        <h1
          className={`scroll-m-20 w-3/4 lg:w-full text-4xl font-extrabold tracking-tight lg:text-7xl ${useTitleTheme()}`}
        >
          {t('landing.landingTitle.header')}
        </h1>
        <LogoRibbon />
        <span className={`text-xl lg:text-3xl font-bold max-w-3xl text-white mx-2`}>
          {t('landing.landingTitle.subtitle')}
        </span>
        <Button
          className={`hover:bg-[#FF5003] w-64 py-5 rounded-2xl  mt-10 primaryButton`}
          onClick={handleStartButtonClick}
        >
          <div className={`text-xl font-bold bigger-button-text`}>{t('landing.landingTitle.button')}</div>
        </Button>
      </div>
      <BottomWaveSeparator />
    </>
  );
}

function LogoRibbon() {
  return (
    <div className={`flex flex-row mt-5 mb-5 gap-5`}>
      <img
        className={`w-26 h-10 object-cover floatLogo floatLogo-1`}
        src={youtubeMusicTextIcon}
        alt={`youtube-music`}
      />
      <img className={`w-30 h-10 object-cover floatLogo floatLogo-2`} src={spotifyTextIcon} alt={`spotify`} />
    </div>
  );
}
