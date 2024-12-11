import { PanelContainer } from '@/shared/components/util/panel-container.tsx';
import { Card, CardContent, CardHeader } from '@/shared/components/ui/card.tsx';
import { Button } from '@/shared/components/ui/button';
import { useGoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import newConnectionService from '@/modules/connection/new-connection-service.ts';
import { useAuth } from '@/core/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import profileService from '@/modules/profile/profile-service.ts';
import { ConnectionDto } from '@/swagger/transform/models/connection-dto';
import { useHandleError } from '@/core/hooks/useHandleError';
import { useTranslation } from 'react-i18next';
import youtubeMusicIcon from '@/assets/youtube-music/youtube-music-icon.webp';
import spotifyIcon from '@/assets/spotify/spotify-icon.webp';

export function NewConnectionPanel() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [connections, setConnections] = useState<ConnectionDto[]>([]);
  const handleError = useHandleError();
  const allConnectionTypes = ['YOUTUBE', 'SPOTIFY'];
  const existingConnectionTypes = connections.map((connection) => connection.platformType);
  const availableConnectionTypes = allConnectionTypes.filter((type) => !existingConnectionTypes.includes(type));
  const { t } = useTranslation();

  useEffect(() => {
    if (user?.email) {
      profileService
        .findConnectionsByMovesongEmail(user.email)
        .then((resp) => {
          if (resp.connections) {
            setConnections(resp.connections);
          }
        })
        .catch((error) => handleError(error));
    }
  }, [user?.email]);

  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    scope: 'https://www.googleapis.com/auth/youtube',
    onSuccess: async (codeResponse) => {
      if (user?.email) {
        newConnectionService.connectYoutubeAccount(codeResponse.code, user?.email).then((resp) => {
          if (resp.success) {
            navigate('/movesong-frontend/profile/youtube-connected');
          }
        });
      }
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  const spotifyLogin = async () => {
    const url = new URL('https://accounts.spotify.com/authorize');
    url.searchParams.append('response_type', 'code');
    url.searchParams.append('client_id', 'd7a7ccafb6754e0d87e7f614602147db');
    url.searchParams.append('scope', 'user-read-email playlist-modify-private playlist-modify-public');
    url.searchParams.append('redirect_uri', 'http://localhost:5173/movesong-frontend/profile/spotify-connected');
    url.searchParams.append('state', user?.username ?? 'd7a7ccafb67');

    window.location.href = url.toString();
  };

  return (
    <PanelContainer>
      <Card className={`w-full max-w-lg`}>
        <CardHeader className={`flex items-center`}>
          <span className={`text-4xl font-extrabold tracking-tight lg:text-3xl`}>
            {t('connection.newConnectionPanel.header')}
          </span>
        </CardHeader>
        <CardContent className="flex justify-center items-center">
          <div className={`flex flex-row items-center`}>
            {availableConnectionTypes.includes('YOUTUBE') && (
              <Button
                onClick={() => googleLogin()}
                variant={`ghost`}
                aria-label="Youtube Music"
                className={`w-36 h-36 flex-col`}
              >
                <img className={`w-36 h-36  object-cover`} src={youtubeMusicIcon} alt={`youtube-music`} />
                <span className={`text-s font-extrabold tracking-tight lg:text-s`}>Youtube Music</span>
              </Button>
            )}
            {availableConnectionTypes.includes('SPOTIFY') && (
              <Button onClick={spotifyLogin} variant={`ghost`} aria-label="Spotify" className={`w-36 h-36  flex-col`}>
                <img className={`w-36 h-36 object-cover`} src={spotifyIcon} alt={`spotify`} />
                <span className={`text-s font-extrabold tracking-tight lg:text-s`}>Spotify</span>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </PanelContainer>
  );
}
