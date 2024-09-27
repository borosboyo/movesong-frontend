import { Tabs, TabsList, TabsTrigger } from '@/shared/components/ui/tabs.tsx';
import { AccountTab } from '@/modules/profile/profile-tabs/account-tab.tsx';
import { SyncTab } from '@/modules/profile/profile-tabs/sync-tab.tsx';
import { SharesTab } from '@/modules/profile/profile-tabs/shares-tab.tsx';
import { HistoryTab } from '@/modules/profile/profile-tabs/history-tab.tsx';
import { useState } from 'react';

export function ProfileTabs() {
  const [isPremium] = useState(true);

  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className={`grid w-full ${isPremium ? 'grid-cols-4' : 'grid-cols-3'}`}>
        <TabsTrigger value="account">Account</TabsTrigger>
        {isPremium && <TabsTrigger value="sync">Synchronizations</TabsTrigger>}
        <TabsTrigger value="shares">Shares</TabsTrigger>
        <TabsTrigger value="history">History</TabsTrigger>
      </TabsList>
      <AccountTab />
      {isPremium && <SyncTab />}
      <SharesTab />
      <HistoryTab />
    </Tabs>
  );
}
