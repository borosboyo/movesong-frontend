import { Card, CardContent, CardDescription } from '@/shared/components/ui/card.tsx';
import { ScrollArea } from '@/shared/components/ui/scroll-area.tsx';
import { useAuth } from '@/core/hooks/useAuth.tsx';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ArrowRightIcon from '@/shared/icons/arrow-right-icon.tsx';
import { useState } from 'react';
import { useHandleError } from '@/core/hooks/useHandleError.ts';
import { iconMap } from '@/modules/sync/sync-panel.tsx';
import { useSync } from '@/core/hooks/useSync.tsx';
import { SyncDto } from '@/swagger/transform';
import { SourceCollapsiblePlaylist } from '@/modules/sync/sync-tabs/2/source-collapsible-playlist.tsx';
import { DestinationCollapsiblePlaylist } from '@/modules/sync/sync-tabs/4/destination-collapsible-playlist.tsx';
import syncService from '@/modules/sync/sync-service.ts';
import { useToast } from '@/shared/components/ui/use-toast.ts';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/components/ui/form.tsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/components/ui/select.tsx';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/shared/components/ui/button.tsx';
import { LoadingSpinner } from '@/shared/components/util/spinner.tsx';

const SyncSchema = z.object({
  interval: z.any(),
});

export function SummaryTab() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { source, destination, sourcePlaylistId, destinationPlaylistId, selectedSourcePlaylist, selectedDestinationPlaylist } = useSync();
  const handleError = useHandleError();
  const { toast } = useToast();

  async function onSubmit(values: z.infer<typeof SyncSchema>) {
    setLoading(true);
    if (user?.email) {
      if (source === 'YOUTUBE') {
        if (destination === 'SPOTIFY') {
          const req: SyncDto = {
            id: 0,
            enabled: true,
            playlistName: selectedSourcePlaylist?.title,
            youtubePlaylistId: sourcePlaylistId,
            spotifyPlaylistId: destinationPlaylistId,
            movesongEmail: user.email,
            date: new Date().toISOString(),
            lastSyncDate: new Date().toISOString(),
            // 1 week by default
            interval: values.interval ?? 168,
          };
          syncService.createSync(req).then(() => {
            setLoading(false);
            toast({
              title: t('sync.syncSuccessfulToast.title'),
              description: t('sync.syncSuccessfulToast.description'),
              variant: 'success',
            });
            navigate('/movesong-frontend/profile')
          }).catch((error) => handleError(error));
        }
      }
      if (source === 'SPOTIFY') {
        if (destination === 'YOUTUBE') {
          const req: SyncDto = {
            id: 0,
            enabled: true,
            playlistName: selectedSourcePlaylist?.title,
            youtubePlaylistId: destinationPlaylistId,
            spotifyPlaylistId: sourcePlaylistId,
            movesongEmail: user.email,
            date: new Date().toISOString(),
            lastSyncDate: new Date().toISOString(),
            // 1 week by default
            interval: values.interval ?? 168,
          };
          syncService.createSync(req).then(() => {
            setLoading(false);
            toast({
              title: t('sync.syncSuccessfulToast.title'),
              description: t('sync.syncSuccessfulToast.description'),
              variant: 'success',
            });
            navigate('/movesong-frontend/profile')
          }).catch((error) => handleError(error));
        }
      }
    }
  }


  const form = useForm<z.infer<typeof SyncSchema>>({
    resolver: zodResolver(SyncSchema),
    defaultValues: {
      interval: 168,
    },
  });

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
            <span className={`text-lg font-bold`}>{t('sync.source')}</span>
            <SourceCollapsiblePlaylist platform={source} playlist={selectedSourcePlaylist} />
            <span className={`text-lg font-bold`}>{t('sync.destination')}</span>
            <DestinationCollapsiblePlaylist platform={destination} playlist={selectedDestinationPlaylist}/>
          </div>
        </ScrollArea>
        <div className={`mt-2`}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="interval"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('sync.interval')}</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value.toString()}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder={t('sync.intervalPlaceholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">{t('sync.hourly')}</SelectItem>
                          <SelectItem value="24">{t('sync.daily')}</SelectItem>
                          <SelectItem value="168">{t('sync.weekly')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-center mt-12">
                <Button onClick={form.handleSubmit(onSubmit)} className="w-1/2 primaryButton">
                  {loading ? <LoadingSpinner/> : t('sync.syncButtonText')}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
}
