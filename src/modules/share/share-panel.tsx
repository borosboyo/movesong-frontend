import { Card, CardContent, CardDescription, CardFooter } from '@/shared/components/ui/card.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { PanelContainer } from '@/shared/panel/panel-container';
import { EditIcon } from '@/shared/icons/edit-icon.tsx';
import { ShareIcon } from '@/shared/icons/share-icon.tsx';
import { useToast } from '@/shared/components/ui/use-toast.ts';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog.tsx';
import { Label } from '@/shared/components/ui/label.tsx';
import { Input } from '@/shared/components/ui/input.tsx';
import { Avatar } from '@/shared/components/ui/avatar.tsx';
import { SharePanelBackgrounds } from '@/modules/share/share-panel-backgrounds.tsx';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useLoading } from '@/core/hooks/useLoading.tsx';
import { LoadingButton } from '@/shared/components/util/loading-button.tsx';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/components/ui/form.tsx';
import { v4 as uuidv4 } from 'uuid';

const ShareSchema = z.object({
  playlistName: z.string(),
});

const avatars = [
  { id: uuidv4(), src: "/src/assets/placeholder.jpg", background: 0 },
  { id: uuidv4(), src: "/src/assets/placeholder.jpg", background: 1 },
  { id: uuidv4(), src: "/src/assets/placeholder.jpg", background: 2 },
  { id: uuidv4(), src: "/src/assets/placeholder.jpg", background: 3 },
  { id: uuidv4(), src: "/src/assets/placeholder.jpg", background: 4 },
  { id: uuidv4(), src: "/src/assets/placeholder.jpg", background: 5 },
];

export function SharePanel() {
  const { toast } = useToast();
  const [selectedAvatar, setSelectedAvatar] = useState<number>(0);
  const [tempSelectedAvatar, setTempSelectedAvatar] = useState<number>(selectedAvatar);
  const [loading, setLoading] = useState(false);
  const progress = useLoading(loading);

  const form = useForm<z.infer<typeof ShareSchema>>({
    resolver: zodResolver(ShareSchema),
    defaultValues: {
      playlistName: '',
    },
  });

  async function onSubmit(values: z.infer<typeof ShareSchema>) {
    console.log(values);
    setSelectedAvatar(tempSelectedAvatar);
    // save playlist name and background to database
  }

  const handleShareClick = () => {
    toast({
      title: 'Link copied to clipboard!',
      description: 'You can now share the link with your friends',
      variant: 'default',
    });
  }

  return (
    <div>
      <SharePanelBackgrounds backgroundId={selectedAvatar}/>
      <PanelContainer>
        <Card className={`w-[400px] relative`}>
          <div className={`absolute top-2 left-2`}>
            <Button onClick={handleShareClick} variant={`ghost`}>
              <ShareIcon size={20} />
            </Button>
          </div>
          <div className={`absolute top-2 right-2`}>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={`ghost`}>
                  <EditIcon size={20} />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit share</DialogTitle>
                  <DialogDescription>
                    Make changes to your shared playlist here. Click save when you are done.
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
                            <FormLabel className="text-right">Name</FormLabel>
                            <FormControl>
                              <Input id="playlistName" placeholder="Playlist name" className={`col-span-3`} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </form>
                  </Form>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Background
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
                    buttonText="Save changes"
                    className="w-full primaryButton"
                  />
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <CardContent className="aspect-square justify-center p-6">
            <div className={`flex flex-col items-center gap-2`}>
              <img src={`/src/assets/placeholder.jpg`} alt={`placeholder`} className={`w-40 h-40 object-cover`} />
              <span className={`w scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>PLAYLIST NAME</span>
              <CardDescription>xyz shared a playlist with you</CardDescription>
              <span className={`w scroll-m-20 text-s font-extrabold tracking-tight lg:text-s`}>Open playlist on:</span>
              <Button variant={`ghost`} aria-label="Youtube Music" className={`w-12 h-12 p-0`}>
                <img className={`w-12 h-12 object-cover`} src={`/src/assets/youtube-music/youtube-music-icon.webp`} alt={`youtube-music`} />
              </Button>
            </div>
            <div className={`flex flex-col gap-4`}>
              <div className={`flex flex-row justify-content items-center gap-2`}>
                <img src={`/src/assets/placeholder.jpg`} alt={`placeholder`} className={`w-10 h-10 object-cover`} />
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold">Song name</h4>
                  <span className={`text-sm text-muted-foreground`}>Artist name</span>
                </div>
              </div>
              <div className={`flex flex-row justify-content items-center gap-2`}>
                <img src={`/src/assets/placeholder.jpg`} alt={`placeholder`} className={`w-10 h-10 object-cover`} />
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold">Song name</h4>
                  <span className={`text-sm text-muted-foreground`}>Artist name</span>
                </div>
              </div>
              <div className={`flex flex-row justify-content items-center gap-2`}>
                <img src={`/src/assets/placeholder.jpg`} alt={`placeholder`} className={`w-10 h-10 object-cover`} />
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold">Song name</h4>
                  <span className={`text-sm text-muted-foreground`}>Artist name</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className={`flex justify-center items-center`}>
            <Button className={`primaryButton`}>Import into my library</Button>
          </CardFooter>
        </Card>
      </PanelContainer>
    </div>
  );
}
