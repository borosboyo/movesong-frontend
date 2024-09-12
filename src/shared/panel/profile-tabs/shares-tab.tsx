import { TabsContent } from '@/shared/components/ui/tabs.tsx';
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/components/ui/card.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { DataTableDemo } from '@/shared/panel/data-table.tsx';

export function SharesTab() {
  return <TabsContent value="shares">
    <Card>
      <CardHeader>
        <div className={`grid w-full grid-cols-2`}>
          <span className={`w scroll-m-20 text-l font-extrabold tracking-tight lg:text-l`}>My Shares</span>
          <div className={`flex w-auto justify-end`}>
            <Button>New share</Button>
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
