import { TabsContent } from '@/shared/components/ui/tabs.tsx';
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/components/ui/card.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/components/ui/popover.tsx';
import { useAuth } from '@/core/hooks/useAuth.tsx';
import { useToast } from '@/shared/components/ui/use-toast.ts';
import { useNavigate } from 'react-router-dom';
import { FindSubscriptionResp } from '@/swagger/subscription';
import { useEffect, useState } from 'react';
import { ConnectionDto } from '@/swagger/transform/models/connection-dto';
import profileService from '@/modules/profile/profile-service.ts';
import { useHandleError } from '@/core/hooks/useHandleError.ts';

export function AccountTab({ subscription }: Readonly<{ subscription: FindSubscriptionResp | null }>) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { toast } = useToast();
  const [connections, setConnections] = useState<ConnectionDto[]>([]);
  const handleError = useHandleError();

  useEffect(() => {
    if (user?.email) {
      profileService.findConnectionsByMovesongEmail(user.email).then((resp) => {
        if (resp.connections) {
          setConnections(resp.connections);
        }
      }).catch((error) => handleError(error));
    }
  }, [user?.email]);

  const handleLogout = () => {
    logout();
    toast({
      title: 'Successfully logged out.',
      description: 'See you soon!',
      variant: 'success',
    });
    navigate('/movesong-frontend');
  };

  const handleNewConnection = () => {
    navigate('/movesong-frontend/profile/new-connection');
  };

  return <TabsContent value="account">
    <Card>
      <CardHeader>
        {subscription ? PremiumHeader() : FreeHeader()}
      </CardHeader>
      <CardContent className="space-y-2">
        <div className={`grid w-full grid-cols-2`}>
          <span className={`w scroll-m-20 text-l font-extrabold tracking-tight lg:text-l`}>Connections</span>
          <div className={`flex w-auto justify-end`}>
            <Button disabled={connections.length === 2} className={`primaryButton`} onClick={handleNewConnection}>New connection</Button>
          </div>
        </div>
        {connections.length === 0 ? (
          <div className={`flex justify-center items-center`}>
            <span className={`text-xl text-muted-foreground font-bold`}>You have no connections yet.</span>
          </div>
        ) : (
          <Connections connections={connections} />
        )}
      </CardContent>
      <CardFooter>
        <div className={`flex flex-col gap-3`}>
          <span className={`w scroll-m-20 text-l font-extrabold tracking-tight lg:textl`}>Account</span>
          <div className={`grid w-full grid-cols-2`} style={{ gridTemplateColumns: '2.3fr 2fr' }}>
            <span className={`w scroll-m-20 text-s font-light tracking-tight lg:text-s`}>Email:</span>
            <span className={`w scroll-m-20 text-s font-bold tracking-tight lg:text-s`}>{user?.email}</span>
          </div>
          <div className={`flex-col`}>
            <Button variant={`ghost`}>Change password</Button>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={`ghost`}>Logout</Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className={`flex flex-col gap-3`}>
                  <span className={`w scroll-m-20 text-l font-extrabold tracking-tight lg:textl`}>Are you sure you want to log out?</span>
                  <div className={`flex justify-end gap-3`}>
                    <Button variant={`outline`} onClick={handleLogout}>Log out</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={`ghost`} className={`text-red-500`}>Delete account</Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className={`flex flex-col gap-3`}>
                  <span className={`w scroll-m-20 text-l font-extrabold tracking-tight lg:textl`}>Are you sure?</span>
                  <span className={`w scroll-m-20 text-s font-light tracking-tight lg:text-s`}>This action cannot be undone.</span>
                  <div className={`flex justify-end gap-3`}>
                    <Button variant={`destructive`}>Delete</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </CardFooter>
    </Card>
  </TabsContent>
    ;
}

export function PremiumHeader() {
  return (<>
    <div className={`grid w-full grid-cols-2`}>
      <span className={`w scroll-m-20 text-l font-extrabold tracking-tight lg:text-l`}>Premium account</span>
    </div>
    <div className={`grid w-full grid-cols-4`} style={{ gridTemplateColumns: '1.25fr 1.75fr 1fr 2fr' }}>
      <span className={`w scroll-m-20 text-s font-light tracking-tight lg:text-s`}>Premium bundle:</span>
      <span className={`w scroll-m-20 text-s font-bold tracking-tight lg:text-s`}>Monthly - $0.00</span>
    </div>
    <div className={`grid w-full grid-cols-4`} style={{ gridTemplateColumns: '1.25fr 1.75fr 1fr 2fr' }}>
      <span className={`w scroll-m-20 text-s font-light tracking-tight lg:text-s`}>Next payment:</span>
      <span className={`w scroll-m-20 text-s font-bold tracking-tight lg:text-s`}>2024. 04. 02.</span>
    </div>
    <div className={`grid w-full grid-cols-2 `} style={{ gridTemplateColumns: '1.3fr 5fr' }}>
      <span className={`w scroll-m-20 text-s font-light tracking-tight lg:text-s`}>Payment method:</span>
      <span className={`w scroll-m-20 text-s font-bold tracking-tight lg:text-s`}>Card</span>
    </div>
  </>);
}

export function FreeHeader() {
  return (
    <div className={`flex justify-center items-center`}>
      <span className={`text-xl text-muted-foreground font-bold`}>You are not a premium member.</span>
    </div>
  );
}

export function Connections({ connections }: Readonly<{ connections: ConnectionDto[] }>) {
  return (
    <div className={`grid grid-cols-1 gap-4`}>
      {connections.map((connection) => (
        <div key={connection.connectionType} className={`flex items-center gap-4`}>
          {connection.connectionType === 'YOUTUBE' &&
            <div className={`flex gap-2 items-center`}>
              <img className={`w-10 h-10 object-cover`} src={`/src/assets/youtube-music/youtube-music-icon.webp`} alt={`youtube-music`} />
              <span className={`text-md font-normal`}>Youtube</span>
            </div>
          }
          {connection.connectionType === 'SPOTIFY' &&
            <div className={`flex gap-2 items-center`}>
              <img className={`w-10 h-10 object-cover`} src={`/src/assets/spotify/spotify-icon.webp`} alt={`spotify`} />
              <span className={`text-md font-normal`}>Spotify</span>
            </div>}
        </div>
      ))}
    </div>
  );
}
