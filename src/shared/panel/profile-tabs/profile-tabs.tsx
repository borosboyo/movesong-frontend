import { Tabs, TabsList, TabsTrigger } from '@/shared/components/ui/tabs.tsx';
import { AccountTab } from '@/shared/panel/profile-tabs/account-tab.tsx';
import { SyncTab } from '@/shared/panel/profile-tabs/sync-tab.tsx';
import { SharesTab } from '@/shared/panel/profile-tabs/shares-tab.tsx';
import { HistoryTab } from '@/shared/panel/profile-tabs/history-tab.tsx';

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
