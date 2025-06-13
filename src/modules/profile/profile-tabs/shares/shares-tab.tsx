import { TabsContent } from '@/shared/components/ui/tabs.tsx';
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/components/ui/card.tsx';
import { SharesTable } from '@/modules/profile/profile-tabs/shares/shares-table.tsx';
import { useTranslation } from 'react-i18next';

export function SharesTab() {
  const { t } = useTranslation();

  return (
    <TabsContent value="shares">
      <Card>
        <CardHeader>
          <div className={`grid w-full grid-cols-2`}>
            <span className={`w scroll-m-20 text-l font-extrabold tracking-tight lg:text-l`}>
              {t('profile.sharesTab.header')}
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <SharesTable />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </TabsContent>
  );
}
