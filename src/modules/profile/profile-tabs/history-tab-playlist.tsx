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

export function HistoryTabPlaylist({ transform }: { transform: TransformDto }) {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [playlistItems, setPlaylistItems] = useState<PlaylistItemDto[]>([]);
  const handleError = useHandleError();
  const { t } = useTranslation();
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen && !hasOpened && transform?.originPlaylistId != null && transform?.ownerMovesongEmail != null) {
      setLoading(true);
      setHasOpened(true);
      if (transform.originPlatform === 'YOUTUBE') {
        ProfileService.getItemsInYoutubePlaylist(transform.originPlaylistId, transform.ownerMovesongEmail)
          .then(data => {
            if (data.items) {
              setPlaylistItems(data.items);
            }
            setLoading(false);
          })
          .catch(error => {
            handleError(error);
            setLoading(false);
          });
      } else if (transform.originPlatform === 'SPOTIFY') {
        ProfileService.getItemsInSpotifyPlaylist(transform.originPlaylistId, transform.ownerMovesongEmail)
          .then(data => {
            if (data.items) {
              setPlaylistItems(data.items);
            }
            setLoading(false);
          })
          .catch(error => {
            handleError(error);
            setLoading(false);
          });
      }
    }
  }, [isOpen, hasOpened, transform, handleError]);

  const handleSharePlaylistClick = () => {
    const req: ShareDto = {
      id: 0,
      playlistId: transform.destinationPlaylistId,
      sharedPlaylistName: transform.playlistName,
      ownerMovesongEmail: transform.ownerMovesongEmail,
      views: 0,
      sharePlatformType: transform.destinationPlatform,
      visible: true,
      selectedBackgroundId: 0,
      thumbnailUrl: transform.thumbnailUrl
    }
    ProfileService.createShare(req)
      .then(() => {
        toast({
          title: t('profile.historyTab.shareSuccessToast.title'),
          description: t('profile.historyTab.shareSuccessToast.description'),
          variant: 'success',
        })
      })
      .catch(error => {
        handleError(error);
      });
  }

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={`space-y-2`}>
      <div className={`flex flex-row justify-content items-center gap-10`}>
        <div className={`flex flex-row justify-content items-center gap-2`}>
          <img src={transform.thumbnailUrl || `/src/assets/placeholder.jpg`} alt={`placeholder`} className={`w-10 h-10 object-cover`} />
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
          <Button onClick={handleSharePlaylistClick} variant={`ghost`} className={`ml-5`}>
            <ShareIcon size={20} />
          </Button>
        </div>
      </div>
      <CollapsibleContent className={`ml-6 flex flex-col gap-2 space-y-2`}>
        {loading
          ?
          <LoadingSpinner />
          :
          playlistItems.map((item) => (
            <div key={item.title} className={`flex flex-row justify-content items-center gap-2`}>
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
