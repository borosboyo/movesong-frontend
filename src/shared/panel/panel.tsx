import { Button } from '@/shared//components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card';
import { Skeleton } from '@/shared/components/ui/skeleton.tsx';
import { useToast } from '@/shared/components/ui/use-toast.ts';
import DiamondIcon from '@/shared/icons/diamond-icon.tsx';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/shared/components/ui/collapsible.tsx';
import { CaretSortIcon, CrossCircledIcon } from '@radix-ui/react-icons';
import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/shared/components/ui/carousel.tsx';
import { Toggle } from '@/shared/components/ui/toggle.tsx';
import { Checkbox } from '@/shared/components/ui/checkbox.tsx';
import { Icon } from '@radix-ui/react-select';
import ArrowRightIcon from '@/shared/icons/arrow-right-icon.tsx';
import { CheckmarkIcon } from '@/shared/icons/checkmark-icon.tsx';
import { Progress } from '@/shared/components/ui/progress.tsx';

export function SkeletonComponent() {
  return (
    <div className={`flex items-center space-x-4`}>
      <Skeleton className={`h-12 w-12 rounded-full`} />
      <div className={`space-y-2`}>
        <Skeleton className={`h-4 w-[250px]`} />
        <Skeleton className={`h-4 w-[200px]`} />
      </div>
    </div>
  );
}


export function ToastComponent() {
  const { toast } = useToast();

  return (
    <Button
      variant={`outline`}
      onClick={() => {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
        });
      }}
    >
      Show Toast
    </Button>
  );
}


export function PremiumPanel() {
  return (
    <Card className={`w-[350px]`}>
      <CardHeader>
        <CardTitle className={`flex scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>Switch to Premium!</CardTitle>
      </CardHeader>
      <CardContent className={`flex-col grid gap-4`}>
        <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}><DiamondIcon /> Unlimited transfer</CardTitle>
        <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}><DiamondIcon /> Unlimited transfer</CardTitle>
        <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}><DiamondIcon /> Export to TXT / CSV</CardTitle>
        <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}><DiamondIcon /> Playlist synchronization</CardTitle>
      </CardContent>
      <CardFooter className={`flex-col grid gap-2 items-start`}>
        <Button className={`flex-row w-full gap-2`}>$ 0.00 / month</Button>
        <Button className={`flex-row w-full gap-2`}>$ 0.00 / year</Button>

      </CardFooter>
    </Card>
  );
}

export function SourceCard() {
  return <Card>
    <CardContent className="aspect-square justify-center p-6">
      <div className={`flex flex-col items-center`}>
        <span className={`w scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>SELECT SOURCE</span>
        <CardDescription>1/4 step</CardDescription>
        <div className={`flex flex-row gap-2 mt-10`}>
          <Toggle aria-label="Youtube Music" className={`p-6 w-25 h-25 `}>
            <img className={`w-25 h-25  object-cover`} src={`/src/assets/youtube-music.png`} alt={`youtube-music`} />
          </Toggle>
          <Toggle aria-label="Spotify" className={`p-6 w-25 h-25 `}>
            <img className={`w-25 h-25 object-cover`} src={`/src/assets/spotify.png`} alt={`spotify`} />
          </Toggle>
          <Toggle aria-label="SoundCloud" className={`p-6 w-25 h-25 `}>
            <img className={`w-25 h-25 object-cover`} src={`/src/assets/soundcloud.png`} alt={`soundcloud`} />
          </Toggle>
        </div>
      </div>
    </CardContent>
  </Card>;
}

export function PlaylistCard() {
  return <Card>
    <CardContent className="aspect-square justify-center p-6">
      <div className={`flex flex-col items-center mb-6`}>
        <span className={`w scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>SELECT PLAYLISTS</span>
        <CardDescription>2/4 step</CardDescription>
      </div>
      <div className={`flex flex-col gap-4`}>
        <Playlist />
        <Playlist />
      </div>
    </CardContent>
  </Card>;
}

export function DestinationCard() {
  return <Card>
    <CardContent className="aspect-square justify-center p-6">
      <div className={`flex flex-col items-center`}>
        <span className={`w scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>SELECT DESTINATION</span>
        <CardDescription>3/4 step</CardDescription>
        <div className={`flex flex-row gap-2 mt-10`}>
          <Toggle aria-label="Youtube Music" className={`p-6 w-25 h-25 `}>
            <img className={`w-25 h-25  object-cover`} src={`/src/assets/youtube-music.png`} alt={`youtube-music`} />
          </Toggle>
          <Toggle aria-label="Spotify" className={`p-6 w-25 h-25`}>
            <img className={`w-25 h-25 object-cover`} src={`/src/assets/spotify.png`} alt={`spotify`} />
          </Toggle>
          <Toggle aria-label="SoundCloud" className={`p-6 w-25 h-25`}>
            <img className={`w-25 h-25 object-cover`} src={`/src/assets/soundcloud.png`} alt={`soundcloud`} />
          </Toggle>
        </div>
      </div>
    </CardContent>
  </Card>;
}

export function SummaryCard() {
  return <Card>
    <CardContent className="aspect-square justify-center p-6">
      <div className={`flex flex-col items-center`}>
        <span className={`w scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>SUMMARY</span>
        <CardDescription>4/4 step</CardDescription>
      </div>
      <div className={`flex flex-col gap-4`}>
        <div className={`flex flex-row gap-4 items-center`}>
          <span className={`w scroll-m-20 text-m font-extrabold tracking-tight lg:text-m`}>Transferring playlists (6 songs)</span>
          <Icon aria-label="Youtube Music">
            <img className={`w-6 h-6 object-cover`} src={`/src/assets/youtube-music.png`} alt={`youtube-music`} />
          </Icon>
          <ArrowRightIcon />
          <Icon aria-label="Spotify">
            <img className={`w-6 h-6 object-cover`} src={`/src/assets/spotify.png`} alt={`spotify`} />
          </Icon>
        </div>
        <span className={`w scroll-m-20 text-s font-bold tracking-tight lg:text-s`}>Playlists (2/2)</span>
        <SummaryPlaylist />
        <SummaryPlaylist />
        <Button className={`m-20`}>Convert</Button>
      </div>
    </CardContent>
  </Card>;
}

export function TransferPanel() {
  return (
    <Carousel className="w-full max-w-lg"
              opts={{
                align: 'start',
                dragFree: true,
                watchDrag: false,
              }}>
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <SourceCard />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <PlaylistCard />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <DestinationCard />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <SummaryCard />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}


export function Playlist() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="space-y-2"
    >
      <div className={`flex flex-row justify-content items-center gap-2`}>
        <Checkbox className={`h-4 w-4`} />
        <img src={`src/assets/placeholder.jpg`} alt={`placeholder`} className={`w-10 h-10 object-cover`} />
        <div className="flex flex-col">
          <h4 className="text-sm font-semibold">
            Playlist name
          </h4>
          <span className={`text-sm text-muted-foreground`}>0/20 selected</span>
        </div>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <CaretSortIcon className="h-6 w-6" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className={`ml-6 flex flex-col gap-2 space-y-2`}>
        <div className={`flex flex-row justify-content items-center gap-2`}>
          <Checkbox className={`h-4 w-4`} />
          <img src={`src/assets/placeholder.jpg`} alt={`placeholder`} className={`w-10 h-10 object-cover`} />
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold">Song name</h4>
            <span className={`text-sm text-muted-foreground`}>Artist name</span>
          </div>
        </div>
        <div className={`flex flex-row justify-content items-center gap-2`}>
          <Checkbox className={`h-4 w-4`} />
          <img src={`src/assets/placeholder.jpg`} alt={`placeholder`} className={`w-10 h-10 object-cover`} />
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold">Song name</h4>
            <span className={`text-sm text-muted-foreground`}>Artist name</span>
          </div>
        </div>
        <div className={`flex flex-row justify-content items-center gap-2`}>
          <Checkbox className={`h-4 w-4`} />
          <img src={`src/assets/placeholder.jpg`} alt={`placeholder`} className={`w-10 h-10 object-cover`} />
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold">Song name</h4>
            <span className={`text-sm text-muted-foreground`}>Artist name</span>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function SummaryPlaylist() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="space-y-2"
    >
      <div className={`flex flex-row justify-content items-center gap-2`}>
        <img src={`src/assets/placeholder.jpg`} alt={`placeholder`} className={`w-10 h-10 object-cover`} />
        <div className="flex flex-col">
          <h4 className="text-sm font-semibold">
            Playlist name
          </h4>
          <span className={`text-sm text-muted-foreground`}>0/20 selected</span>
        </div>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <CaretSortIcon className="h-6 w-6" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className={`ml-6 flex flex-col gap-2 space-y-2`}>
        <div className={`flex flex-row justify-content items-center gap-2`}>
          <img src={`src/assets/placeholder.jpg`} alt={`placeholder`} className={`w-10 h-10 object-cover`} />
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold">Song name</h4>
            <span className={`text-sm text-muted-foreground`}>Artist name</span>
          </div>
        </div>
        <div className={`flex flex-row justify-content items-center gap-2`}>
          <img src={`src/assets/placeholder.jpg`} alt={`placeholder`} className={`w-10 h-10 object-cover`} />
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold">Song name</h4>
            <span className={`text-sm text-muted-foreground`}>Artist name</span>
          </div>
        </div>
        <div className={`flex flex-row justify-content items-center gap-2`}>
          <img src={`src/assets/placeholder.jpg`} alt={`placeholder`} className={`w-10 h-10 object-cover`} />
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold">Song name</h4>
            <span className={`text-sm text-muted-foreground`}>Artist name</span>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}


export function FinishTransferPanel() {
  return (
    <Card className={`w-[500px]`}>
      <CardHeader>
        <div className={`flex flex-col space-y-1.5 items-center`}>
          <CheckmarkIcon size={40} />
          <CardTitle className={`flex justify-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>TRANSFER COMPLETE</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className={`flex flex-col space-y-1.5 items-center`}>
          <div className={`flex flex-row gap-4 justify-content items-center`}>
            <Icon aria-label="Youtube Music">
              <img className={`w-10 h-10 object-cover`} src={`/src/assets/youtube-music.png`} alt={`youtube-music`} />
            </Icon>
            <ArrowRightIcon />
            <Icon aria-label="Spotify">
              <img className={`w-10 h-10 object-cover`} src={`/src/assets/spotify.png`} alt={`spotify`} />
            </Icon>
          </div>
        </div>
      </CardContent>
      <CardFooter className={`flex-col grid gap-2 items-start`}>
        <div className={`flex flex-row gap-2 mb-5`}>
          <Button className={`w-full`}>Share my songs</Button>
          <Button className={`w-full`}>Convert again</Button>
        </div>
        <div className={`flex flex-row items-center`}>
          <SummaryPlaylist />
          <span className={`text-sm text-muted-foreground mr-2`}>19 copied</span>
          <CheckmarkIcon size={20} />
          <span className={`text-sm text-muted-foreground mr-2 ml-4`}>1 failed</span>
          <CrossCircledIcon height={`20`} width={`20`} />
        </div>
      </CardFooter>
    </Card>
  );
}

export function SharePanel() {
  return <Card className={`w-[400px]`}>
    <CardContent className="aspect-square justify-center p-6">
      <div className={`flex flex-col items-center gap-2`}>
        <img src={`src/assets/placeholder.jpg`} alt={`placeholder`} className={`w-40 h-40 object-cover`} />
        <span className={`w scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>PLAYLIST NAME</span>
        <CardDescription>xyz shared a playlist with you</CardDescription>
        <span className={`w scroll-m-20 text-s font-extrabold tracking-tight lg:text-s`}>Open playlist on:</span>
        <Button variant={`ghost`} aria-label="Youtube Music" className={`w-15 h-15`}>
          <img className={`w-10 h-10 object-cover`} src={`/src/assets/youtube-music.png`} alt={`youtube-music`} />
        </Button>
      </div>
      <div className={`flex flex-col gap-4`}>
        <div className={`flex flex-row justify-content items-center gap-2`}>
          <img src={`src/assets/placeholder.jpg`} alt={`placeholder`} className={`w-10 h-10 object-cover`} />
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold">Song name</h4>
            <span className={`text-sm text-muted-foreground`}>Artist name</span>
          </div>
        </div>
        <div className={`flex flex-row justify-content items-center gap-2`}>
          <img src={`src/assets/placeholder.jpg`} alt={`placeholder`} className={`w-10 h-10 object-cover`} />
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold">Song name</h4>
            <span className={`text-sm text-muted-foreground`}>Artist name</span>
          </div>
        </div>
        <div className={`flex flex-row justify-content items-center gap-2`}>
          <img src={`src/assets/placeholder.jpg`} alt={`placeholder`} className={`w-10 h-10 object-cover`} />
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold">Song name</h4>
            <span className={`text-sm text-muted-foreground`}>Artist name</span>
          </div>
        </div>
      </div>
    </CardContent>
    <CardFooter className={`flex justify-center items-center`}>
      <Button>Import into my library</Button>
    </CardFooter>
  </Card>;
}

export function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 0.5));
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <Progress value={progress} />;
}
