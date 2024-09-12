import { TabsContent } from '@/shared/components/ui/tabs.tsx';
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/components/ui/card.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { DataTableDemo } from '@/shared/panel/data-table.tsx';

export function SyncTab() {
  return <TabsContent value="synchronizations">
    <Card>
      <CardHeader>
        <div className={`grid w-full grid-cols-2`}>
          <span className={`w scroll-m-20 text-l font-extrabold tracking-tight lg:text-l`}>Connections</span>
          <div className={`flex w-auto justify-end`}>
            <Button>New synchronization</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <DataTableDemo/>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  </TabsContent>;
}
