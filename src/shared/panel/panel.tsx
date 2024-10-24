import { Button } from '@/shared//components/ui/button';
import { Skeleton } from '@/shared/components/ui/skeleton.tsx';
import { useToast } from '@/shared/components/ui/use-toast.ts';
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
