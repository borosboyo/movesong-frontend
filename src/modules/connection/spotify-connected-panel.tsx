import { useLocation, useNavigate, useRouteError } from 'react-router-dom';
import { PanelContainer } from '@/shared/panel/panel-container.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { CheckmarkIcon } from '@/shared/icons/checkmark-icon.tsx';
import { useEffect } from 'react';
import { useAuth } from '@/core/hooks/useAuth.tsx';
import newConnectionService from '@/modules/connection/new-connection-service.ts';
import { useToast } from '@/shared/components/ui/use-toast.ts';
import { useHandleError } from '@/core/hooks/useHandleError.ts';

export default function SpotifyConnectedPanel() {
  const error = useRouteError() as Error;
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const { toast } = useToast();
  const handleError = useHandleError();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get('code');
    const state = params.get('state');

    if (user?.email && code && state) {
      newConnectionService.connectSpotifyAccount(code, state, user.email)
        .then(() => {
          toast({
            title: 'Yay!',
            description: 'Spotify connected successfully!',
            variant: 'success',
          });
        })
        .catch((error) => {
          toast({
            title: 'Oops!',
            description: 'Something went wrong. Please try again.',
            variant: 'destructive',
          });
          handleError(error);
        });
    }
  }, [user]);


  const handleTakeToProfile = () => {
    navigate('/movesong-frontend/profile');
  };

  return (
    <PanelContainer>
      <div className={`flex flex-col items-center gap-8`}>
        <h1 className={`text-9xl font-extrabold tracking-tight lg:text-9xl`}>
          <CheckmarkIcon size={100} />
        </h1>
        <p className={`text-2xl font-light tracking-tight lg:text-2xl`}>
          Spotify connected successfully!
        </p>
        <Button className={`primaryButton text-lg py-6 px-8`} onClick={handleTakeToProfile}>Take me to my profile.</Button>
        <i>
          {(error)?.message ||
            (error as { statusText?: string })?.statusText}
        </i>
      </div>
    </PanelContainer>
  );
}
