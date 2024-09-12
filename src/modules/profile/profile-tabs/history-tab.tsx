import { TabsContent } from '@/shared/components/ui/tabs.tsx';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/shared/components/ui/card.tsx';
import { HistoryTabPlaylist } from '@/modules/profile/profile-tabs/history-tab-playlist.tsx';
import { ScrollArea } from '@/shared/components/ui/scroll-area.tsx';

export function HistoryTab() {
  return <TabsContent value="history">
    <Card>
      <CardHeader>
        <span className={`w scroll-m-20 text-l font-extrabold tracking-tight lg:text-l`}>History</span>
      </CardHeader>
      <CardContent className="space-y-2">
        <ScrollArea className={`h-[375px]`}>
          <CardDescription>2024.03.01.</CardDescription>
          <HistoryTabPlaylist />
          <CardDescription>2024.02.15.</CardDescription>
          <HistoryTabPlaylist />
          <CardDescription>2024.01.12.</CardDescription>
          <HistoryTabPlaylist />
        </ScrollArea>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  </TabsContent>;
}
