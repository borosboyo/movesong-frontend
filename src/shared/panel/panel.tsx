import { Button } from '@/shared//components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card';
import { Skeleton } from '@/shared/components/ui/skeleton.tsx';
import { useToast } from '@/shared/components/ui/use-toast.ts';
import DiamondIcon from '@/shared/icons/diamond-icon.tsx';
import{ useEffect, useState } from 'react';
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
