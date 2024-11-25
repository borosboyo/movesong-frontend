import { useEffect, useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/shared/components/ui/collapsible.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { PlaylistDto, PlaylistItemDto } from '@/swagger/transform';
import { useHandleError } from '@/core/hooks/useHandleError.ts';
import { useAuth } from '@/core/hooks/useAuth.tsx';
import transformService from '@/modules/transform/transform-service.ts';
import { LoadingSpinner } from '@/shared/components/util/spinner.tsx';
import { useTransform } from '@/core/hooks/useTransform.tsx';
import { Checkbox } from '@/shared/components/ui/checkbox.tsx';
import { v4 as uuidv4 } from 'uuid';
import placeholder from '@/assets/placeholder.jpg';
import { FindSubscriptionResp } from '@/swagger/subscription';

export function CollapsiblePlaylist({ playlist, platform, subscription }: { playlist: PlaylistDto | undefined, platform: string, subscription?: FindSubscriptionResp | null }) {
  const [isOpen, setIsOpen] = useState(false);
  const [playlistItems, setPlaylistItems] = useState<PlaylistItemDto[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { selectedPlaylistId, setSelectedPlaylistId, setSelectedPlaylist } = useTransform();
  const handleError = useHandleError();

  useEffect(() => {
    if (isOpen && playlistItems.length === 0 && user?.email) {
      setLoading(true);
      const fetchPlaylistItems = async () => {
        try {
          let resp;
          if (platform === 'YOUTUBE' && user?.email && playlist?.id) {
            resp = await transformService.getItemsInYoutubePlaylist(user?.email, playlist.id);
          } else if (platform === 'SPOTIFY' && user?.email && playlist?.id) {
            resp = await transformService.getItemsInSpotifyPlaylist(user?.email, playlist.id);
          }
          if (resp?.items) {
            setPlaylistItems(resp.items);
          }
        } catch (error) {
          handleError(error);
        } finally {
          setLoading(false);
        }
      };
      fetchPlaylistItems().then(r => r);
    }
  }, [isOpen, playlistItems.length, user?.email, playlist?.id, handleError]);

  const handleCheckboxChange = () => {
    if (playlist?.id) {
      setSelectedPlaylistId(playlist.id);
      setSelectedPlaylist(playlist)
    }
  };

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="space-y-2"
    >
      <div className={`flex flex-row justify-content items-center gap-2`}>
        <Checkbox
          checked={selectedPlaylistId === playlist?.id}
          onCheckedChange={handleCheckboxChange}
          disabled={playlist != null && playlist.itemCount != null && playlist.itemCount > 499 && subscription == null}
          className={`h-4 w-4`}
        />
        <img src={playlist?.thumbnailUrl || placeholder} alt={`playlist-cover`} className={`w-10 h-10 object-cover`} />
        <div className="flex flex-col">
          <h4 className="text-sm font-semibold">
            {playlist?.title}
          </h4>
        </div>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <CaretSortIcon className="h-6 w-6" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className={`ml-6 flex flex-col gap-2 space-y-2`}>
        {loading ? (
          <LoadingSpinner />
        ) : (
          playlistItems.map(song => (
            <div key={uuidv4()} className={`flex flex-row justify-content items-center gap-2`}>
              <img src={song.thumbnailUrl !== '' && song.thumbnailUrl != null ? song.thumbnailUrl : placeholder} alt={`song-cover`} className={`w-10 h-10 object-cover`} />              <div className="flex flex-col">
                <h4 className="text-sm font-semibold">{song.title}</h4>
                <span className={`text-sm text-muted-foreground`}>{song.channelTitle}</span>
              </div>
            </div>
          ))
        )}
      </CollapsibleContent>
    </Collapsible>
  );
}
