import { TabsContent } from '@/shared/components/ui/tabs.tsx';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/shared/components/ui/card.tsx';
import { HistoryTabPlaylist } from '@/shared/panel/profile-tabs/history-tab-playlist.tsx';

export function HistoryTab() {
  return <TabsContent value="history">
    <Card>
      <CardHeader>
        <span className={`w scroll-m-20 text-l font-extrabold tracking-tight lg:text-l`}>History</span>
      </CardHeader>
      <CardContent className="space-y-2">
        <CardDescription>2024.03.01.</CardDescription>
        <HistoryTabPlaylist />
        <CardDescription>2024.02.15.</CardDescription>
        <HistoryTabPlaylist />
        <CardDescription>2024.01.12.</CardDescription>
        <HistoryTabPlaylist />
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  </TabsContent>;
}
