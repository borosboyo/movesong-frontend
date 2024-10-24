import { useTranslation } from 'react-i18next';
import { useFadeInOnScroll } from '@/core/hooks/useFadeInOnScroll.ts';
import { useTitleTheme } from '@/core/theme/hooks/useTitleTheme.ts';
import { Glow, GlowCapture } from '@codaworks/react-glow';
import { Card } from '@/shared/components/ui/card.tsx';

export function LandingPopularPlatforms() {
  const { t } = useTranslation();
  const { isVisible, domRef } = useFadeInOnScroll();

  return (
    <div ref={domRef} className={`flex flex-col gap-10 ${isVisible ? 'fadeIn' : 'fadeOut'} max-w-3xl`}>
      <h1 className={`scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-6xl ${useTitleTheme()}`}>{t('landing.landingPopularPlatforms.header')}</h1>
      <div className={`flex flex-col gap-3`}>
        <GlowCapture>
          <Glow color={`#FF5003`}>
            <Card className={`flex flex-row p-2 items-center justify-between glow:border-glow/80`}>
              <img className={`w-14 h-14 object-cover select-none`} src={`/src/assets/spotify/spotify-icon.webp`} alt={`spotify`} />
              <div className="flex-1 text-lg text-center select-none">
                <p>{t('landing.landingPopularPlatforms.transfer')} {t('landing.landingPopularPlatforms.from')} <strong>{t('landing.landingPopularPlatforms.spotify')} </strong> {t('landing.landingPopularPlatforms.to')} <strong>{t('landing.landingPopularPlatforms.youtubeMusic')} </strong>.</p>
              </div>
              <img className={`w-14 h-14 object-cover select-none`} src={`/src/assets/youtube-music/youtube-music-icon.webp`} alt={`youtube-music`} />
            </Card>
          </Glow>
        </GlowCapture>
        <GlowCapture>
          <Glow color={`#FF5003`}>
            <Card className={`flex flex-row p-2 items-center justify-between glow:border-glow/80`}>
              <img className={`w-14 h-14 object-cover select-none`} src={`/src/assets/youtube-music/youtube-music-icon.webp`} alt={`youtube-music`} />
              <div className="flex-1 text-lg text-center select-none">
                <p>{t('landing.landingPopularPlatforms.transfer')} {t('landing.landingPopularPlatforms.from')} <strong>{t('landing.landingPopularPlatforms.youtubeMusic')} </strong> {t('landing.landingPopularPlatforms.to')} <strong>{t('landing.landingPopularPlatforms.spotify')} </strong>.</p>
              </div>
              <img className={`w-14 h-14 object-cover select-none`} src={`/src/assets/spotify/spotify-icon.webp`} alt={`spotify`} />
            </Card>
          </Glow>
        </GlowCapture>
      </div>
    </div>
  );
}
