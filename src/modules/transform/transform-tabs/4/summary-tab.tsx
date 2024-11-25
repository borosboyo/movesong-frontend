import { Card, CardContent, CardDescription } from '@/shared/components/ui/card.tsx';
import { ScrollArea } from '@/shared/components/ui/scroll-area.tsx';
import { useAuth } from '@/core/hooks/useAuth.tsx';
import transformService from '@/modules/transform/transform-service.ts';
import { useNavigate } from 'react-router-dom';
import { CollapsiblePlaylist } from '@/modules/transform/collapsible-playlist.tsx';
import { useTransform } from '@/core/hooks/useTransform';
import { useTranslation } from 'react-i18next';
import ArrowRightIcon from '@/shared/icons/arrow-right-icon.tsx';
import { LoadingButton } from '@/shared/components/util/loading-button.tsx';
import { useState } from 'react';
import { useHandleError } from '@/core/hooks/useHandleError.ts';
import { useLoading } from '@/core/hooks/useLoading.tsx';
import { iconMap } from '@/modules/transform/transform-panel.tsx';

export function SummaryTab() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const progress = useLoading(loading);
  const navigate = useNavigate();
  const { source, destination, selectedPlaylistId, selectedPlaylist, setExportedResource } = useTransform();
  const handleError = useHandleError();

  const handleConvert = () => {
    setLoading(true);
    if (user?.email) {
      if (source === 'YOUTUBE') {
        if (destination === 'TXT') {
          transformService.exportYoutubePlaylistToTXT(user?.email, selectedPlaylistId).then((resp) => {
            setExportedResource(resp);
            navigate('/movesong-frontend/transform/finish');
          }).catch((error) => handleError(error)).finally(() => setLoading(false));
        }
        if (destination === 'CSV') {
          transformService.exportYoutubePlaylistToCSV(user?.email, selectedPlaylistId).then((resp) => {
            setExportedResource(resp);
            navigate('/movesong-frontend/transform/finish');
          }).catch((error) => handleError(error)).finally(() => setLoading(false));
        }
        if (destination === 'SPOTIFY') {
          transformService.convertToSpotify(user?.email, selectedPlaylistId).then((resp) => {
            setExportedResource(undefined);
            navigate('/movesong-frontend/transform/finish', { state: { destinationPlaylistId: resp.destinationPlaylistId } });
          }).catch((error) => handleError(error)).finally(() => setLoading(false));
        }
      }
      if (source === 'SPOTIFY') {
        if (destination === 'TXT') {
          transformService.exportSpotifyPlaylistToTXT(user?.email, selectedPlaylistId).then((resp) => {
            setExportedResource(resp);
            navigate('/movesong-frontend/transform/finish', { state: { destinationResource: transformService.stringArrayToTXTBlob(resp) } });
          }).catch((error) => handleError(error)).finally(() => setLoading(false));
        }
        if (destination === 'CSV') {
          transformService.exportSpotifyPlaylistToCSV(user?.email, selectedPlaylistId).then((resp) => {
            setExportedResource(resp);
            navigate('/movesong-frontend/transform/finish', { state: { destinationResource: transformService.stringArrayToCSVBlob(resp) } });
          }).catch((error) => handleError(error)).finally(() => setLoading(false));
        }
        if (destination === 'YOUTUBE') {
          transformService.convertToYoutube(user?.email, selectedPlaylistId).then((resp) => {
            setExportedResource(undefined);
            navigate('/movesong-frontend/transform/finish', { state: { destinationPlaylistId: resp.destinationPlaylistId } });
          }).catch((error) => handleError(error)).finally(() => setLoading(false));
        }
      }
    }
  };

  return (
    <Card>
      <CardContent className="aspect-square justify-center p-6">
        <div className={`flex flex-col items-center mb-6`}>
          <span className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>{t('transform.summaryTab.header')}</span>
          <CardDescription>4/4 {t('transform.step')}</CardDescription>
        </div>
        <div className={`flex flex-row gap-4 items-center`}>
          <span className={`w scroll-m-20 text-m font-extrabold tracking-tight lg:text-m`}>{t('transform.summaryTab.text')}</span>
          {iconMap[source]}
          <ArrowRightIcon />
          {iconMap[destination]}
        </div>
        <ScrollArea className={`h-[250px]`}>
          <div className={`flex flex-col gap-2`}>
            <CollapsiblePlaylist platform={source} playlist={selectedPlaylist} />
          </div>
        </ScrollArea>
        <div className="flex justify-center mt-12">
          <LoadingButton
            onClick={handleConvert}
            loading={loading}
            progress={progress}
            buttonText={t('transform.summaryTab.convertButtonText')}
            className="w-1/2 primaryButton"
          />
        </div>
      </CardContent>
    </Card>
  );
}
