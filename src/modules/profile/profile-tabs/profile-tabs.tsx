import { Tabs, TabsList, TabsTrigger } from '@/shared/components/ui/tabs.tsx';
import { AccountTab } from '@/modules/profile/profile-tabs/account-tab.tsx';
import { SyncTab } from '@/modules/profile/profile-tabs/sync-tab.tsx';
import { SharesTab } from '@/modules/profile/profile-tabs/shares-tab.tsx';
import { HistoryTab } from '@/modules/profile/profile-tabs/history-tab.tsx';
import { useEffect, useState } from 'react';
import { FindSubscriptionResp } from '@/swagger/subscription';
import premiumService from '@/modules/premium/premium-service.ts';
import { useAuth } from '@/core/hooks/useAuth.tsx';
import { useTranslation } from 'react-i18next';

export function ProfileTabs() {
  const { t } = useTranslation();
  const [subscription, setSubscription] = useState<FindSubscriptionResp | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user?.email) {
      premiumService.findSubscriptionByUserEmail(user.email)
        .then((resp) => {
          setSubscription(resp);
        })
    }
  }, [user]);

  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className={`grid w-full ${subscription ? 'grid-cols-4' : 'grid-cols-3'}`}>
        <TabsTrigger value="account">{t('profile.accountHeader')}</TabsTrigger>
        {subscription && <TabsTrigger value="sync">{t('profile.syncHeader')}</TabsTrigger>}
        <TabsTrigger value="shares">{t('profile.sharesHeader')}</TabsTrigger>
        <TabsTrigger value="history">{t('profile.historyHeader')}</TabsTrigger>
      </TabsList>
      <AccountTab subscription={subscription} />
      {subscription && <SyncTab />}
      <SharesTab />
      <HistoryTab />
    </Tabs>
  );
}
