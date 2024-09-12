import { Tabs, TabsList, TabsTrigger } from '@/shared/components/ui/tabs.tsx';
import { AccountTab } from '@/modules/profile/profile-tabs/account-tab.tsx';
import { SyncTab } from '@/modules/profile/profile-tabs/sync-tab.tsx';
import { SharesTab } from '@/modules/profile/profile-tabs/shares-tab.tsx';
import { HistoryTab } from '@/modules/profile/profile-tabs/history-tab.tsx';

export function ProfileTabs() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="synchronizations">Synchronizations</TabsTrigger>
        <TabsTrigger value="shares">Shares</TabsTrigger>
        <TabsTrigger value="history">History</TabsTrigger>
      </TabsList>
      <AccountTab />
      <SyncTab />
      <SharesTab />
      <HistoryTab />
    </Tabs>
  );
}
