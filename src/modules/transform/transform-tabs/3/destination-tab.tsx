import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription } from '@/shared/components/ui/card.tsx';
import { useAuth } from '@/core/hooks/useAuth.tsx';
import { useHandleError } from '@/core/hooks/useHandleError.ts';
import transformService from '@/modules/transform/transform-service.ts';
import { ConnectionDto } from '@/swagger/transform';
import { ToggleGroup, ToggleGroupItem } from '@/shared/components/ui/toggle-group.tsx';
import { useTransform } from '@/core/hooks/useTransform.tsx';
import { useTranslation } from 'react-i18next';

export function DestinationTab() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const handleError = useHandleError();
  const [connections, setConnections] = useState<ConnectionDto[]>([]);
  const [availableDestinations, setAvailableDestinations] = useState<string[]>(['TXT', 'CSV']);
  const { source, setDestination } = useTransform();

  useEffect(() => {
    if (user?.email) {
      transformService.findConnectionsByMovesongEmail(user.email).then((resp) => {
        if (resp.connections) {
          setConnections(resp.connections);
        }
      }).catch((error) => handleError(error));
    }
  }, [user?.email]);

  useEffect(() => {
    const connectedTypes = connections.map(connection => connection.platformType);
    const filteredDestinations = ['TXT', 'CSV'];

    if (source === 'YOUTUBE' && connectedTypes.includes('SPOTIFY')) {
      filteredDestinations.push('SPOTIFY');
    } else if (source === 'SPOTIFY' && connectedTypes.includes('YOUTUBE')) {
      filteredDestinations.push('YOUTUBE');
    }

    setAvailableDestinations(filteredDestinations);
  }, [source, connections]);

  return (
    <Card>
      <CardContent className="aspect-square justify-center p-6">
        <div className={`flex flex-col items-center`}>
          <span className={`w scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>{t('transform.destinationTab.header')}</span>
          <CardDescription>3/4 {t('transform.step')}</CardDescription>
          <div className={`flex flex-row gap-2 mt-10`}>
            <ToggleGroup
              type={`single`}
              variant={`outline`}
              className="grid grid-cols-2 gap-4">
              <ToggleGroupItem
                disabled={!availableDestinations.includes('YOUTUBE')}
                value={`youtube`}
                onClick={() => setDestination('YOUTUBE')}
                aria-label="Youtube Music"
                className={`w-36 h-36 flex-col p-5`}>
                <img className={`w-36 h-36 object-cover`} src={`/src/assets/youtube-music/youtube-music-icon.webp`} alt={`youtube-music`} />
                <span className={`text-s font-extrabold tracking-tight lg:text-s`}>Youtube Music</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                disabled={!availableDestinations.includes('SPOTIFY')}
                value={`spotify`}
                onClick={() => setDestination('SPOTIFY')}
                aria-label="Spotify"
                className={`w-36 h-36 flex-col p-5`}>
                <img className={`w-36 h-36 object-cover`} src={`/src/assets/spotify/spotify-icon.webp`} alt={`spotify`} />
                <span className={`text-s font-extrabold tracking-tight lg:text-s`}>Spotify</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                value={`txt`}
                onClick={() => setDestination('TXT')}
                aria-label="TXT"
                className={`w-36 h-36 flex-col`}>
                <span className={`text-s font-extrabold tracking-tight lg:text-s`}>TXT</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                value={`csv`}
                onClick={() => setDestination('CSV')}
                aria-label="CSV"
                className={`w-36 h-36 flex-col`}>
                <span className={`text-s font-extrabold tracking-tight lg:text-s`}>CSV</span>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
