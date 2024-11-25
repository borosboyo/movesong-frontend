import { Card, CardContent, CardDescription, CardFooter } from '@/shared/components/ui/card.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { EditIcon } from '@/shared/icons/edit-icon.tsx';
import { LinkIcon } from '@/shared/icons/link-icon.tsx';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/shared/components/ui/dialog.tsx';
import { Label } from '@/shared/components/ui/label.tsx';
import { Input } from '@/shared/components/ui/input.tsx';
import { Avatar } from '@/shared/components/ui/avatar.tsx';
import { SharePanelBackgrounds } from '@/modules/share/share-panel-backgrounds.tsx';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useLoading } from '@/core/hooks/useLoading.tsx';
import { LoadingButton } from '@/shared/components/util/loading-button.tsx';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/components/ui/form.tsx';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';
import { useHandleError } from '@/core/hooks/useHandleError.ts';
import { ShareDto } from '@/swagger/share/models/share-dto.ts';
import shareService from '@/modules/share/share-service.ts';
import { PlaylistItemDto } from '@/swagger/transform';
import { useTranslation } from 'react-i18next';
import { useToast } from '@/shared/components/ui/use-toast';
import { motion } from 'framer-motion';
import { useAuth } from '@/core/hooks/useAuth.tsx';
import { useTransform } from '@/core/hooks/useTransform.tsx';
import transformService from '@/modules/transform/transform-service.ts';
import spotifyIcon from '@/assets/spotify/spotify-icon.webp';
import youtubeMusicIcon from '@/assets/youtube-music/youtube-music-icon.webp';
import placeholder from '@/assets/placeholder.jpg';

const ShareSchema = z.object({
  playlistName: z.string(),
});

const avatars = [
  { id: uuidv4(), src: '/src/assets/placeholder.jpg', background: 0 },
  { id: uuidv4(), src: '/src/assets/placeholder.jpg', background: 1 },
  { id: uuidv4(), src: '/src/assets/placeholder.jpg', background: 2 },
  { id: uuidv4(), src: '/src/assets/placeholder.jpg', background: 3 },
  { id: uuidv4(), src: '/src/assets/placeholder.jpg', background: 4 },
  { id: uuidv4(), src: '/src/assets/placeholder.jpg', background: 5 },
];

export function SharePanel() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [selectedAvatar, setSelectedAvatar] = useState<number>(0);
  const [tempSelectedAvatar, setTempSelectedAvatar] = useState<number>(selectedAvatar);
  const [loading, setLoading] = useState(false);
  const progress = useLoading(loading);
  const { shareId } = useParams();
  const [share, setShare] = useState<ShareDto>();
  const [playlistItems, setPlaylistItems] = useState<PlaylistItemDto[]>([]);
  const handleError = useHandleError();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { setSource, setSelectedPlaylistId, setSelectedPlaylist } = useTransform();

  useEffect(() => {
    setLoading(true);
    if (shareId) {
      shareService.getShareById(parseInt(shareId))
        .then((resp) => {
          if (resp?.share?.playlistId && resp?.share?.movesongEmail) {
            setShare(resp.share);
            if (!resp.share.visible) {
              navigate('/movesong-frontend/404');
            }
            if (resp.share?.sharePlatformType === 'YOUTUBE') {
              shareService.getItemsInYoutubePlaylist(resp.share.playlistId, resp.share.movesongEmail).then((resp) => {
                if (resp.items) {
                  setPlaylistItems(resp.items);
                }
              }).catch((error) => {
                handleError(error);
              });
            } else if (resp.share?.sharePlatformType === 'SPOTIFY') {
              shareService.getItemsInSpotifyPlaylist(resp.share.playlistId, resp.share.movesongEmail).then((resp) => {
                if (resp.items) {
                  setPlaylistItems(resp.items);
                }
              }).catch((error) => {
                handleError(error);
              });
            }
            setLoading(false);
          }
        })
        .catch((error) => {
          handleError(error);
          setLoading(false);
        });
    }
  }, [shareId]);

  const form = useForm<z.infer<typeof ShareSchema>>({
    resolver: zodResolver(ShareSchema),
    defaultValues: {
      playlistName: '',
    },
  });

  async function onSubmit(values: z.infer<typeof ShareSchema>) {
    setLoading(true);
    setSelectedAvatar(tempSelectedAvatar);
    shareService.updateShare({
      ...share,
      sharedPlaylistName: values.playlistName,
      selectedBackgroundId: tempSelectedAvatar,
    }).then(() => {
      setShare((prevShare) => ({
        ...prevShare,
        sharedPlaylistName: values.playlistName,
        selectedBackgroundId: tempSelectedAvatar,
      }));
      toast({
        title: t('share.shareUpdatedToast.title'),
        description: t('share.shareUpdatedToast.description'),
        variant: 'success',
      });
      setLoading(false);
    }).catch((error) => {
      handleError(error);
      setLoading(false);
    });
  }

  const handleShareClick = () => {
    const shareLink = `${window.location.origin}/movesong-frontend/share/${shareId}`;
    navigator.clipboard.writeText(shareLink).then(() => {
      toast({
        title: t('share.linkCopiedToast.title'),
        description: t('share.linkCopiedToast.description'),
        variant: 'default',
      });
    }).catch((error) => {
      handleError(error);
    });
  };

  const handleOpenOnClick = () => {
    if (share?.sharePlatformType === 'YOUTUBE') {
      window.open(`https://music.youtube.com/playlist?list=${share?.playlistId}`);
    } else {
      window.open(`https://open.spotify.com/playlist/${share?.playlistId}`);
    }
  };

  const handleImportClick = () => {
    if(share?.sharePlatformType === 'YOUTUBE') {
      transformService.getUserYoutubePlaylistByPlaylistId(share!.movesongEmail!, share!.playlistId!).then((resp) => {
        setSelectedPlaylist(resp.playlist);
        setSource(share!.sharePlatformType!);
        setSelectedPlaylistId(share!.playlistId!);
        navigate('/movesong-frontend/transform', { state: { startTab: 2 } });
      }).catch((error) => handleError(error));
    } else {
      transformService.getUserSpotifyPlaylistByPlaylistId(share!.movesongEmail!, share!.playlistId!).then((resp) => {
        setSelectedPlaylist(resp.playlist);
        setSource(share!.sharePlatformType!);
        setSelectedPlaylistId(share!.playlistId!);
        navigate('/movesong-frontend/transform', { state: { startTab: 2 } });
      }).catch((error) => handleError(error));
    }
  };



  return (
    <div className={`relative w-full ${playlistItems.length < 10 ? 'h-full' : ''} `}>
      <SharePanelBackgrounds selectedBackgroundId={selectedAvatar} />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.15 }}
      >
        <div className={`flex justify-center items-start w-full my-10`}>
          <Card className={`w-[400px] relative`}>
            <div className={`absolute top-2 left-2`}>
              <Button onClick={handleShareClick} variant={`ghost`}>
                <LinkIcon size={20} />
              </Button>
            </div>
            <div className={`absolute top-2 right-2`}>
              <Dialog>
                <DialogTrigger asChild>
                  {user?.email === share?.movesongEmail
                    &&
                    <Button variant={`ghost`}>
                      <EditIcon size={20} />
                    </Button>}
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>{t('share.editShareDialog.header')}</DialogTitle>
                    <DialogDescription>
                      {t('share.editShareDialog.text')}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                        <FormField
                          control={form.control}
                          name="playlistName"
                          render={({ field }) => (
                            <FormItem className={`grid grid-cols-4 items-center gap-4`}>
                              <FormLabel className="text-right">{t('share.editShareDialog.playlistNameLabel')}</FormLabel>
                              <FormControl>
                                <Input id="playlistName" className={`col-span-3`} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </form>
                    </Form>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        {t('share.editShareDialog.backgroundLabel')}
                      </Label>
                      <div className={`flex gap-2 col-span-3`}>
                        {avatars.map((avatar) => (
                          <Button
                            key={avatar.id}
                            variant={`ghost`}
                            className={`p-0 rounded-full`}
                            onClick={() => setTempSelectedAvatar(avatar.background)}
                          >
                            <Avatar key={avatar.id} className={`${tempSelectedAvatar === avatar.background ? 'ring-4 ring-primary' : ''}`}>
                              <img src={avatar.src} alt="avatar" />
                            </Avatar>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <LoadingButton
                      onClick={form.handleSubmit(onSubmit)}
                      loading={loading}
                      progress={progress}
                      buttonText={t('share.editShareDialog.buttonText')}
                      className="w-full primaryButton"
                    />
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <CardContent className="aspect-square justify-center p-6">
              <div className={`flex flex-col items-center gap-2`}>
                {share?.thumbnailUrl != null && share?.thumbnailUrl !== ''
                  ? <img src={share?.thumbnailUrl} alt={share?.sharedPlaylistName} className={`w-40 h-40 object-cover`} />
                  : <img src={placeholder} alt={`placeholder`} className={`w-40 h-40 object-cover`} />}
                <span className={`w scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>{share?.sharedPlaylistName}</span>
                <CardDescription>{share?.movesongEmail} {t('share.sharedWithYou')}</CardDescription>
                <span className={`w scroll-m-20 text-s font-extrabold tracking-tight lg:text-s`}>{t('share.openOn')}</span>
                <Button variant={`ghost`} aria-label="import" className={`w-12 h-12 p-0`} onClick={handleOpenOnClick}>
                  {share?.sharePlatformType === 'YOUTUBE' ?
                    <img className={`w-12 h-12 object-cover`} src={youtubeMusicIcon} alt={`youtube-music`} /> :
                    <img className={`w-12 h-12 object-cover`} src={spotifyIcon} alt={`spotify`} />}
                </Button>
              </div>
              <div className={`flex flex-col gap-4`}>
                {playlistItems.map((item) => (
                  <div key={uuidv4()} className={`flex flex-row justify-content items-center gap-2`}>
                    <img src={item.thumbnailUrl || placeholder} alt={`thumbnail`} className={`w-10 h-10 object-cover`} />
                    <div className="flex flex-col">
                      <h4 className="text-sm font-semibold">{item.title}</h4>
                      <span className={`text-sm text-muted-foreground`}>{item.channelTitle}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className={`flex justify-center items-center`}>
              <Button className={`primaryButton`} onClick={handleImportClick}>{t('share.importIntoMyLibraryButtonText')}</Button>
            </CardFooter>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
