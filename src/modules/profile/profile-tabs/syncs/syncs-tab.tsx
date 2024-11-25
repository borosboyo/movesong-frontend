import { TabsContent } from '@/shared/components/ui/tabs.tsx';
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/components/ui/card.tsx';
import { useTranslation } from 'react-i18next';
import { SyncsTable } from '@/modules/profile/profile-tabs/syncs/syncs-table.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { useNavigate } from 'react-router-dom';

export function SyncsTab() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNewSyncClick = () => {
    navigate('/movesong-frontend/sync');
  }

  return (
    <TabsContent value="syncs">
      <Card>
        <CardHeader>
          <div className={`grid w-full grid-cols-2`}>
          <span className={`w scroll-m-20 text-l font-extrabold tracking-tight lg:text-l`}>
            {t('profile.syncsTab.header')}
          </span>
            <div className={`flex w-auto justify-end`}>
              <Button className={`primaryButton`} onClick={handleNewSyncClick}>{t('profile.syncsTab.newSyncButtonText')}</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <SyncsTable />
        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>
    </TabsContent>
  );
}
