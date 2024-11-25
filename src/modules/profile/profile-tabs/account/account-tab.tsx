import { TabsContent } from '@/shared/components/ui/tabs.tsx';
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/components/ui/card.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { useAuth } from '@/core/hooks/useAuth.tsx';
import { useNavigate } from 'react-router-dom';
import { FindSubscriptionResp } from '@/swagger/subscription';
import { useEffect, useState } from 'react';
import { ConnectionDto } from '@/swagger/transform/models/connection-dto.ts';
import profileService from '@/modules/profile/profile-service.ts';
import { useHandleError } from '@/core/hooks/useHandleError.ts';
import { useTranslation } from 'react-i18next';
import { Connections } from '@/modules/profile/profile-tabs/account/connections.tsx';
import { FreeHeader } from '@/modules/profile/profile-tabs/account/free-header.tsx';
import { LogoutPopover } from '@/modules/profile/profile-tabs/account/logout-popover.tsx';
import { PremiumHeader } from '@/modules/profile/profile-tabs/account/premium-header.tsx';
import { DeleteAccountPopover } from '@/modules/profile/profile-tabs/account/delete-account-popover.tsx';
import { ChangePasswordDialog } from '@/modules/profile/profile-tabs/account/change-password-dialog.tsx';

export function AccountTab({ subscription, setSubscription }: { subscription: FindSubscriptionResp | null, setSubscription: (_subscription: FindSubscriptionResp | null) => void }) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [connections, setConnections] = useState<ConnectionDto[]>([]);
  const handleError = useHandleError();
  const { t } = useTranslation();

  useEffect(() => {
    if (user?.email) {
      profileService.findConnectionsByMovesongEmail(user.email).then((resp) => {
        if (resp.connections) {
          setConnections(resp.connections);
        }
      }).catch((error) => handleError(error));
    }
  }, [user?.email]);

  const handleNewConnection = () => {
    navigate('/movesong-frontend/profile/new-connection');
  };

  return (
    <TabsContent value="account">
      <Card>
        <CardHeader>
          {subscription ? <PremiumHeader subscription={subscription} setSubscription={setSubscription} /> : <FreeHeader />}
        </CardHeader>
        <CardContent className="space-y-2">
          <div className={`grid w-full grid-cols-2`}>
            <span className={`w scroll-m-20 text-l font-extrabold tracking-tight lg:text-l`}>
              {t('profile.accountTab.connections')}
            </span>
            <div className={`flex w-auto justify-end`}>
              <Button disabled={connections.length === 2} className={`primaryButton`} onClick={handleNewConnection}>
                {t('profile.accountTab.newConnection')}
              </Button>
            </div>
          </div>
          {connections.length === 0 ? (
            <div className={`flex justify-center items-center`}>
              <span className={`text-xl text-muted-foreground font-bold`}>
                {t('profile.accountTab.noConnections')}
              </span>
            </div>
          ) : (
            <Connections connections={connections} />
          )}
        </CardContent>
        <CardFooter>
          <div className={`flex flex-col gap-3`}>
            <span className={`w scroll-m-20 text-l font-extrabold tracking-tight lg:textl`}>
              {t('profile.accountTab.account')}
            </span>
            <div className={`grid w-full grid-cols-2`} style={{ gridTemplateColumns: '2.3fr 2fr' }}>
              <span className={`w scroll-m-20 text-s font-light tracking-tight lg:text-s`}>
                {t('profile.accountTab.email')}
              </span>
              <span className={`w scroll-m-20 text-s font-bold tracking-tight lg:text-s`}>
                {user?.email}
              </span>
            </div>
            <div className={`flex-col items-center`}>
              <ChangePasswordDialog />
              {LogoutPopover()}
              {DeleteAccountPopover(subscription?.subscriptionId)}
            </div>
          </div>
        </CardFooter>
      </Card>
    </TabsContent>
  );
}

