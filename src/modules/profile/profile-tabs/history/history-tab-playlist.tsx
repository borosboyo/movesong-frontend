import { useEffect, useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/shared/components/ui/collapsible.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { CaretSortIcon } from '@radix-ui/react-icons';
import ArrowRightIcon from '@/shared/icons/arrow-right-icon.tsx';
import { CheckmarkIcon } from '@/shared/icons/checkmark-icon.tsx';
import { PlaylistItemDto, TransformDto } from '@/swagger/transform';
import ProfileService from '@/modules/profile/profile-service.ts';
import { useHandleError } from '@/core/hooks/useHandleError.ts';

import { useTranslation } from 'react-i18next';
import { LoadingSpinner } from '@/shared/components/util/spinner.tsx';
import { ShareIcon } from '@/shared/icons/share-icon.tsx';
import { ShareDto } from '@/swagger/share/models/share-dto.ts';
import { useToast } from '@/shared/components/ui/use-toast.ts';
import { iconMap } from '@/modules/transform/transform-panel.tsx';
import { v4 as uuidv4 } from 'uuid';
import placeholder from '@/assets/placeholder.jpg';
import transformService from '@/modules/transform/transform-service.ts';
import { useAuth } from '@/core/hooks/useAuth.tsx';

export function HistoryTabPlaylist({ transform }: { transform: TransformDto }) {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [playlistItems, setPlaylistItems] = useState<PlaylistItemDto[]>([]);
  const handleError = useHandleError();
  const { t } = useTranslation();
  const { toast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    if (isOpen && !hasOpened && user?.email) {
      setLoading(true);
      setHasOpened(!hasOpened);
      const fetchPlaylistItems = async () => {
        try {
          let resp;
          if (transform.destinationPlatform === 'YOUTUBE' && user?.email && transform.destinationPlaylistId) {
            resp = await transformService.getItemsInYoutubePlaylist(user?.email, transform.destinationPlaylistId);
          } else if (transform.destinationPlatform === 'SPOTIFY' && user?.email && transform.destinationPlaylistId) {
            resp = await transformService.getItemsInSpotifyPlaylist(user?.email, transform.destinationPlaylistId);
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
  }, [isOpen, playlistItems.length, user?.email, transform.destinationPlaylistId, handleError, transform.itemCount, transform.destinationPlatform]);

  const handleSharePlaylistClick = () => {
    const req: ShareDto = {
      id: 0,
      playlistId: transform.destinationPlaylistId,
      sharedPlaylistName: transform.playlistName,
      movesongEmail: transform.movesongEmail,
      views: 0,
      sharePlatformType: transform.destinationPlatform,
      visible: true,
      selectedBackgroundId: 0,
      thumbnailUrl: transform.thumbnailUrl,
    };
    ProfileService.createShare(req)
      .then(() => {
        toast({
          title: t('profile.historyTab.shareSuccessToast.title'),
          description: t('profile.historyTab.shareSuccessToast.description'),
          variant: 'success',
        });
      })
      .catch(error => {
        handleError(error);
      });
  };

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={`space-y-2`}>
      <div className={`flex flex-row justify-content items-center gap-10`}>
        <div className={`flex flex-row justify-content items-center gap-2`}>
          <img src={transform.thumbnailUrl || placeholder} alt={`placeholder`} className={`w-10 h-10 object-cover`} />
          <div className={`flex flex-row gap-2`}>
            <div className="flex flex-col">
              <h4 className="text-sm font-semibold">
                {transform.playlistName}
              </h4>
              <span className={`text-sm text-muted-foreground`}>{transform.itemCount || 0} {t('profile.historyTab.itemsTransformed')}</span>
            </div>
          </div>
        </div>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <CaretSortIcon className="h-6 w-6" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
        <div className={`flex flex-row items-center gap-2`}>
          {iconMap[transform.originPlatform!]}
          <ArrowRightIcon />
          {iconMap[transform.destinationPlatform!]}
          {(transform.destinationPlatform !== 'TXT' && transform.destinationPlatform !== 'CSV') ?
            <Button onClick={handleSharePlaylistClick} variant={`ghost`} className={`ml-5`}>
            <ShareIcon size={20} />
          </Button> : <></>}
        </div>
      </div>
      <CollapsibleContent className={`ml-6 flex flex-col gap-2 space-y-2`}>
        {loading
          ?
          <LoadingSpinner />
          :
          playlistItems.map((item) => (
            <div key={uuidv4()} className={`flex flex-row justify-content items-center gap-2`}>
              <img src={item.thumbnailUrl} alt={item.title} className={`w-10 h-10 object-cover`} />
              <div className={`flex flex-row items-center gap-4`}>
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold">{item.title}</h4>
                  <span className={`text-sm text-muted-foreground`}>{item.channelTitle}</span>
                </div>
                <CheckmarkIcon size={20} />
              </div>
            </div>
          ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
