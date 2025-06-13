import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { CheckmarkIcon } from '@/shared/icons/checkmark-icon.tsx';
import ArrowRightIcon from '@/shared/icons/arrow-right-icon.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { ScrollArea } from '@/shared/components/ui/scroll-area.tsx';
import { PanelContainer } from '@/shared/components/util/panel-container.tsx';
import { CollapsiblePlaylist } from '@/modules/transform/collapsible-playlist.tsx';
import { useTransform } from '@/core/hooks/useTransform.tsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import transformService from '@/modules/transform/transform-service.ts';
import { PlaylistDto } from '@/swagger/transform';
import { useAuth } from '@/core/hooks/useAuth.tsx';
import { useHandleError } from '@/core/hooks/useHandleError.ts';
import { LoadingSpinner } from '@/shared/components/util/spinner.tsx';
import { useTranslation } from 'react-i18next';
import { iconMap } from '@/modules/transform/transform-panel.tsx';
import { ShareDto } from '@/swagger/share/models/share-dto';
import ProfileService from '@/modules/profile/profile-service.ts';
import { useToast } from '@/shared/components/ui/use-toast.ts';

export function FinishPanel() {
  const { t } = useTranslation();
  const { source, destination, exportedResource, selectedPlaylist } = useTransform();
  const location = useLocation();
  const { user } = useAuth();
  const handleError = useHandleError();
  const [transformedPlaylist, setTransformedPlaylist] = useState<PlaylistDto>();
  const [loading, setLoading] = useState(false);
  const [isDestinationPlatform, setIsDestinationPlatform] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (exportedResource == null) {
      setIsDestinationPlatform(true);
    }
    if (user?.email && location.state?.destinationPlaylistId && exportedResource == null) {
      if (destination === 'SPOTIFY') {
        transformService
          .getUserSpotifyPlaylistByPlaylistId(user?.email, location.state?.destinationPlaylistId)
          .then((resp) => {
            if (resp.playlist) {
              setTransformedPlaylist(resp.playlist);
            }
          })
          .catch((error) => handleError(error))
          .finally(() => setLoading(false));
      }
      if (destination === 'YOUTUBE') {
        transformService
          .getUserYoutubePlaylistByPlaylistId(user?.email, location.state?.destinationPlaylistId)
          .then((resp) => {
            if (resp.playlist) {
              setTransformedPlaylist(resp.playlist);
            }
          })
          .catch((error) => handleError(error))
          .finally(() => setLoading(false));
      }
    }
  }, [user?.email, destination, location.state?.destinationPlaylistId]);

  const handleDownloadResourceClick = () => {
    if (exportedResource != null) {
      if (destination === 'TXT') {
        const txtBlob = transformService.stringArrayToTXTBlob(exportedResource);
        downloadTransformedResource(txtBlob, 'transformed_playlist.txt');
      } else if (destination === 'CSV') {
        const csvBlob = transformService.stringArrayToCSVBlob(exportedResource);
        downloadTransformedResource(csvBlob, 'transformed_playlist.csv');
      }
    }
  };

  const downloadTransformedResource = (blob: Blob, fileName: string) => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleConvertAgainClick = () => {
    navigate('/movesong-frontend/transform');
  };

  const handleShareMySongsClick = () => {
    const req: ShareDto = {
      id: 0,
      playlistId: location.state?.destinationPlaylistId,
      sharedPlaylistName: transformedPlaylist?.title,
      movesongEmail: user?.email,
      views: 0,
      sharePlatformType: destination,
      visible: true,
      selectedBackgroundId: 0,
      thumbnailUrl: transformedPlaylist?.thumbnailUrl,
    };
    ProfileService.createShare(req)
      .then((resp) => {
        if (resp.share != null) {
          toast({
            title: t('profile.historyTab.shareSuccessToast.title'),
            description: t('profile.historyTab.shareSuccessToast.description'),
            variant: 'success',
          });
          navigate('/movesong-frontend/share/' + resp.share.id);
        }
      })
      .catch((error) => {
        handleError(error);
      });
  };

  return (
    <PanelContainer>
      <Card className={`w-[500px]`}>
        <CardHeader>
          <div className={`flex flex-col space-y-1.5 items-center`}>
            <CheckmarkIcon size={40} />
            <CardTitle className={`flex justify-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>
              {t('transform.finish.header')}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className={`flex flex-col space-y-1.5 items-center`}>
            <div className={`flex flex-row gap-4 justify-content items-center`}>
              {iconMap[source]}
              <ArrowRightIcon />
              {iconMap[destination]}
            </div>
            <div className={`flex flex-row`}>
              {exportedResource != null ? (
                <span className={`text-sm text-muted-foreground mr-2`}>
                  {selectedPlaylist?.itemCount} {t('transform.finish.copied')}
                </span>
              ) : (
                <span className={`text-sm text-muted-foreground mr-2`}>
                  {transformedPlaylist?.itemCount} {t('transform.finish.copied')}
                </span>
              )}
              <CheckmarkIcon size={20} />
            </div>
          </div>
        </CardContent>
        <CardFooter className={`flex-col grid gap-2 items-start`}>
          {loading && <LoadingSpinner />}
          <div className={`flex flex-row gap-2 mb-5`}>
            {isDestinationPlatform ? (
              <Button onClick={handleShareMySongsClick} className={`primaryButton w-full`}>
                {t('transform.finish.shareMySongsButtonText')}
              </Button>
            ) : (
              <Button onClick={handleDownloadResourceClick} className={`primaryButton w-full`}>
                {t('transform.finish.downloadButtonText')}
              </Button>
            )}
            <Button className={`primaryButton w-full`} onClick={handleConvertAgainClick}>
              {t('transform.finish.convertAgainButtonText')}
            </Button>
          </div>
          <ScrollArea className={`h-[250px]`}>
            <div className={`flex flex-row items-center`}>
              {isDestinationPlatform ? (
                <CollapsiblePlaylist platform={destination} playlist={transformedPlaylist} />
              ) : (
                <CollapsiblePlaylist platform={source} playlist={selectedPlaylist} />
              )}
            </div>
          </ScrollArea>
        </CardFooter>
      </Card>
    </PanelContainer>
  );
}
