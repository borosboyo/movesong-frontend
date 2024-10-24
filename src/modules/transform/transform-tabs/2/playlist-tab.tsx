import { Card, CardContent, CardDescription } from '@/shared/components/ui/card.tsx';
import { CollapsiblePlaylist } from '@/modules/transform/collapsible-playlist.tsx';
import { ScrollArea } from '@/shared/components/ui/scroll-area.tsx';
import { useEffect, useState } from 'react';
import { useAuth } from '@/core/hooks/useAuth.tsx';
import { useHandleError } from '@/core/hooks/useHandleError.ts';
import transformService from '@/modules/transform/transform-service.ts';
import { PlaylistDto } from '@/swagger/transform';
import { LoadingSpinner } from '@/shared/components/util/spinner.tsx';
import { useTransform } from '@/core/hooks/useTransform.tsx';
import { useTranslation } from 'react-i18next';

export function PlaylistTab() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const handleError = useHandleError();
  const [playlists, setPlaylists] = useState<PlaylistDto[]>([]);
  const [loading, setLoading] = useState(false);
  const { source } = useTransform();

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      if (source === 'YOUTUBE') {
        transformService.getUserYoutubePlaylists(user?.email).then((resp) => {
          if (resp.playlists) {
            setPlaylists(resp.playlists);
          }
        }).catch((error) => handleError(error)).finally(() => setLoading(false));
      } else if (source === 'SPOTIFY') {
        transformService.getUserSpotifyPlaylists(user?.email).then((resp) => {
          if (resp.playlists) {
            setPlaylists(resp.playlists);
          }
        }).catch((error) => handleError(error)).finally(() => setLoading(false));
      }
    }
  }, [source, user?.email]);

  return (
    <Card>
      <CardContent className="aspect-square justify-center p-6">
        <div className={`flex flex-col items-center mb-6`}>
          <span className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>{t('transform.playlistTab.header')}</span>
          <CardDescription>2/4 {t('transform.step')}</CardDescription>
        </div>
        <ScrollArea className={`h-[350px]`}>
          <div className={`flex flex-col gap-2`}>
            {loading && <LoadingSpinner />}
            {playlists.map(playlist => (
              <div key={playlist.id} className={`flex flex-row items-center gap-2`}>
                <CollapsiblePlaylist playlist={playlist} />
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
