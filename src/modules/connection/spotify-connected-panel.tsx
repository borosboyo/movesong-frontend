import { useLocation, useNavigate } from 'react-router-dom';
import { PanelContainer } from '@/shared/components/util/panel-container.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { CheckmarkIcon } from '@/shared/icons/checkmark-icon.tsx';
import { useEffect } from 'react';
import { useAuth } from '@/core/hooks/useAuth.tsx';
import newConnectionService from '@/modules/connection/new-connection-service.ts';
import { useToast } from '@/shared/components/ui/use-toast.ts';
import { useHandleError } from '@/core/hooks/useHandleError.ts';
import { useTranslation } from 'react-i18next';

export default function SpotifyConnectedPanel() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const { toast } = useToast();
  const handleError = useHandleError();
  const { t } = useTranslation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get('code');
    const state = params.get('state');

    if (user?.email && code && state) {
      newConnectionService
        .connectSpotifyAccount(code, state, user.email)
        .then(() => {
          toast({
            title: t('connection.spotifyConnectedPanel.successToast.title'),
            description: t('connection.spotifyConnectedPanel.successToast.description'),
            variant: 'success',
          });
        })
        .catch((error) => {
          toast({
            title: t('connection.spotifyConnectedPanel.successToast.title'),
            description: t('connection.spotifyConnectedPanel.successToast.description'),
            variant: 'success',
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
          {t('connection.spotifyConnectedPanel.successToast.description')}
        </p>
        <Button className={`primaryButton text-lg py-6 px-8`} onClick={handleTakeToProfile}>
          {t('connection.spotifyConnectedPanel.buttonText')}
        </Button>
      </div>
    </PanelContainer>
  );
}
