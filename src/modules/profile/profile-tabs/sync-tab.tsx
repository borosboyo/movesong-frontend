import { TabsContent } from '@/shared/components/ui/tabs.tsx';
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/components/ui/card.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { SyncTable } from '@/modules/profile/profile-tabs/sync-table.tsx';

export function SyncTab() {
  return <TabsContent value="sync">
    <Card>
      <CardHeader>
        <div className={`grid w-full grid-cols-2`}>
          <span className={`w scroll-m-20 text-l font-extrabold tracking-tight lg:text-l`}>Synchronizations</span>
          <div className={`flex w-auto justify-end`}>
            <Button className={`primaryButton`}>New synchronization</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <SyncTable/>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  </TabsContent>;
}
