import { Card, CardContent, CardDescription } from '@/shared/components/ui/card.tsx';
import { useAuth } from '@/core/hooks/useAuth.tsx';
import { useHandleError } from '@/core/hooks/useHandleError.ts';
import { useEffect, useState } from 'react';
import { ConnectionDto } from '@/swagger/transform';
import transformService from '@/modules/transform/transform-service.ts';
import { ToggleGroup, ToggleGroupItem } from '@/shared/components/ui/toggle-group.tsx';
import { useTranslation } from 'react-i18next';
import spotifyIcon from '@/assets/spotify/spotify-icon.webp';
import youtubeMusicIcon from '@/assets/youtube-music/youtube-music-icon.webp';
import { useSync } from '@/core/hooks/useSync.tsx';

export function SourceTab() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const handleError = useHandleError();
  const [connections, setConnections] = useState<ConnectionDto[]>([]);
  const [availableSources, setAvailableSources] = useState<string[]>([]);
  const { setSource } = useSync();

  useEffect(() => {
    if (user?.email) {
      transformService
        .findConnectionsByMovesongEmail(user.email)
        .then((resp) => {
          if (resp.connections) {
            setConnections(resp.connections);
          }
        })
        .catch((error) => handleError(error));
    }
  }, [user?.email]);

  useEffect(() => {
    const connectedTypes = connections.map((connection) => connection.platformType);
    const filteredSources = [];

    if (connectedTypes.includes('YOUTUBE')) {
      filteredSources.push('YOUTUBE');
    }

    if (connectedTypes.includes('SPOTIFY')) {
      filteredSources.push('SPOTIFY');
    }

    setAvailableSources(filteredSources);
  }, [connections]);

  return (
    <Card>
      <CardContent className="aspect-square justify-center p-6">
        <div className={`flex flex-col items-center`}>
          <span className={`w scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>
            {t('transform.sourceTab.header')}
          </span>
          <CardDescription>1/4 {t('transform.step')}</CardDescription>
          <div className={`flex flex-row items-center gap-2 mt-10`}>
            {availableSources.length === 0 ? (
              <div className={`flex justify-center items-center`}>
                <span className={`text-xl text-muted-foreground font-bold text-center`}>
                  {t('transform.sourceTab.noConnections')}
                </span>
              </div>
            ) : (
              <ToggleGroup type={`single`} variant={`outline`} className="grid grid-cols-2 gap-4">
                <ToggleGroupItem
                  disabled={!availableSources.includes('YOUTUBE')}
                  value={`youtube`}
                  onClick={() => setSource('YOUTUBE')}
                  aria-label="Youtube Music"
                  className={`w-36 h-36 flex-col p-5`}
                >
                  <img className={`w-36 h-36 object-cover`} src={youtubeMusicIcon} alt={`youtube-music`} />
                  <span className={`text-s font-extrabold tracking-tight lg:text-s`}>Youtube Music</span>
                </ToggleGroupItem>
                <ToggleGroupItem
                  disabled={!availableSources.includes('SPOTIFY')}
                  value={`spotify`}
                  onClick={() => setSource('SPOTIFY')}
                  aria-label="Spotify"
                  className={`w-36 h-36 flex-col p-5`}
                >
                  <img className={`w-36 h-36 object-cover`} src={spotifyIcon} alt={`spotify`} />
                  <span className={`text-s font-extrabold tracking-tight lg:text-s`}>Spotify</span>
                </ToggleGroupItem>
              </ToggleGroup>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
