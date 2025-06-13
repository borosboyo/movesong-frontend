// src/shared/hooks/useLoadingProgress.tsx
import { useState, useEffect } from 'react';

export function useLoading(loading: boolean, increment: number = 0.5, interval: number = 7) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (loading) {
      timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prevProgress + increment;
        });
      }, interval);
    } else {
      setProgress(0);
    }

    return () => {
      clearInterval(timer);
    };
  }, [loading, increment, interval]);

  return progress;
}
