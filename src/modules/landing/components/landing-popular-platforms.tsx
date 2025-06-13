import { useTranslation } from 'react-i18next';
import { useFadeInOnScroll } from '@/core/hooks/useFadeInOnScroll.ts';
import { useTitleTheme } from '@/core/theme/hooks/useTitleTheme.ts';
import { Glow, GlowCapture } from '@codaworks/react-glow';
import { Card } from '@/shared/components/ui/card.tsx';
import spotifyIcon from '@/assets/spotify/spotify-icon.webp';
import youtubeMusicIcon from '@/assets/youtube-music/youtube-music-icon.webp';

export function LandingPopularPlatforms() {
  const { t, i18n } = useTranslation();
  const { isVisible, domRef } = useFadeInOnScroll();
  // check which language:
  const currentLanguage = i18n.language;

  return (
    <div ref={domRef} className={`flex flex-col gap-10 my-10 lg:my-0 ${isVisible ? 'fadeIn' : 'fadeOut'} max-w-3xl`}>
      <h1 className={`scroll-m-20 text-xl text-center font-extrabold tracking-tight lg:text-6xl ${useTitleTheme()}`}>
        {t('landing.landingPopularPlatforms.header')}
      </h1>
      <div className={`flex flex-col gap-3`}>
        <GlowCapture>
          <Glow color={`#FF5003`}>
            <Card className={`flex flex-row p-2 items-center justify-between glow:border-glow/80`}>
              <img className={`w-10 h-10 lg:w-14 lg:h-14 object-cover select-none`} src={spotifyIcon} alt={`spotify`} />
              <div className="flex-1 text-sm lg:text-lg text-center select-none">
                {currentLanguage === 'en' ? (
                  <p>
                    {t('landing.landingPopularPlatforms.transfer')} {t('landing.landingPopularPlatforms.from')}
                    <strong> {t('landing.landingPopularPlatforms.spotify')} </strong>{' '}
                    {t('landing.landingPopularPlatforms.to')}
                    <strong> {t('landing.landingPopularPlatforms.youtubeMusic')} </strong>.
                  </p>
                ) : (
                  <p>
                    {t('landing.landingPopularPlatforms.transfer')}{' '}
                    <strong>{t('landing.landingPopularPlatforms.spotify')}</strong>
                    {t('landing.landingPopularPlatforms.from')}
                    <strong> {t('landing.landingPopularPlatforms.youtubeMusic')}</strong>
                    {t('landing.landingPopularPlatforms.to')}.
                  </p>
                )}
              </div>
              <img
                className={`w-10 h-10 lg:w-14 lg:h-14 object-cover select-none`}
                src={youtubeMusicIcon}
                alt={`youtube-music`}
              />
            </Card>
          </Glow>
        </GlowCapture>
        <GlowCapture>
          <Glow color={`#FF5003`}>
            <Card className={`flex flex-row p-2 items-center justify-between glow:border-glow/80`}>
              <img
                className={`w-10 h-10 lg:w-14 lg:h-14 object-cover select-none`}
                src={youtubeMusicIcon}
                alt={`youtube-music`}
              />
              <div className="flex-1 text-sm lg:text-lg text-center select-none">
                {currentLanguage === 'en' ? (
                  <p>
                    {t('landing.landingPopularPlatforms.transfer')} {t('landing.landingPopularPlatforms.from')}
                    <strong> {t('landing.landingPopularPlatforms.youtubeMusic')} </strong>{' '}
                    {t('landing.landingPopularPlatforms.to')}
                    <strong> {t('landing.landingPopularPlatforms.spotify')} </strong>.
                  </p>
                ) : (
                  <p>
                    {t('landing.landingPopularPlatforms.transfer')}{' '}
                    <strong> {t('landing.landingPopularPlatforms.youtubeMusic')}</strong>
                    {t('landing.landingPopularPlatforms.from')}
                    <strong> {t('landing.landingPopularPlatforms.spotify')}</strong>{' '}
                    {t('landing.landingPopularPlatforms.to')}.
                  </p>
                )}
              </div>
              <img className={`w-10 h-10 lg:w-14 lg:h-14 object-cover select-none`} src={spotifyIcon} alt={`spotify`} />
            </Card>
          </Glow>
        </GlowCapture>
      </div>
    </div>
  );
}
