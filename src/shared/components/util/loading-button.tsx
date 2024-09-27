// src/shared/components/util/loading-button.tsx
import { Progress } from '@/shared/components/ui/progress.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import React from 'react';

type LoadingButtonProps = {
  onClick: () => void;
  loading: boolean;
  progress: number;
  buttonText: string;
  className?: string;
  icon?: React.ReactNode;
};

export const LoadingButton: React.FC<LoadingButtonProps> = ({
                                                              onClick,
                                                              loading,
                                                              progress,
                                                              buttonText,
                                                              className,
                                                              icon,
                                                            }) => {
  return (
    <Button className={className} onClick={onClick}>
      {loading ? (
        <Progress value={progress} className="w-[50%]" />
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          {buttonText}
        </>
      )}
    </Button>
  );
};
