import { useNavigate } from 'react-router-dom';
import { PanelContainer } from '@/shared/panel/panel-container.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { CheckmarkIcon } from '@/shared/icons/checkmark-icon.tsx';
import { useEffect } from 'react';
import { useToast } from '@/shared/components/ui/use-toast.ts';

export default function YoutubeConnectedPanel() {
  const navigate = useNavigate();
  const { toast } = useToast();
  useEffect(() => {
    toast({
      title: 'Yay!',
      description: 'Youtube connected successfully!',
      variant: 'success',
    });
  }, [toast]);

  const handleTakeToProfile = () => {
    navigate('/movesong-frontend/profile');
  }

  return (
    <PanelContainer>
      <div className={`flex flex-col items-center gap-8`}>
        <h1 className={`text-9xl font-extrabold tracking-tight lg:text-9xl`}>
          <CheckmarkIcon size={100} />
        </h1>
        <p className={`text-2xl font-light tracking-tight lg:text-2xl`}>
          Youtube connected successfully!
        </p>
        <Button className={`primaryButton text-lg py-6 px-8`} onClick={handleTakeToProfile}>Take me to my profile.</Button>
      </div>
    </PanelContainer>
  );
}
