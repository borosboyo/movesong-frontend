import { TabsContent } from '@/shared/components/ui/tabs.tsx';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/shared/components/ui/card.tsx';
import { HistoryTabPlaylist } from '@/modules/profile/profile-tabs/history/history-tab-playlist.tsx';
import { ScrollArea } from '@/shared/components/ui/scroll-area.tsx';
import { useEffect, useState } from 'react';
import profileService from '@/modules/profile/profile-service.ts';
import { useAuth } from '@/core/hooks/useAuth.tsx';
import { useHandleError } from '@/core/hooks/useHandleError.ts';
import { TransformDto } from '@/swagger/transform';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/components/ui/button.tsx';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinner } from '@/shared/components/util/spinner.tsx';

export function HistoryTab() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const handleError = useHandleError();
  const [transforms, setTransforms] = useState<TransformDto[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    if (user?.email) {
      profileService
        .getTransformsByMovesongEmail(user.email)
        .then((resp) => {
          if (resp.transforms) {
            setTransforms(resp.transforms);
            setLoading(false);
          }
        })
        .catch(handleError);
    }
  }, [user]);

  const handleNewTransformClick = () => {
    navigate('/movesong-frontend/transform');
  };

  return (
    <TabsContent value="history">
      <Card>
        <CardHeader>
          <div className={`grid w-full grid-cols-2`}>
            <span className={`w scroll-m-20 text-l font-extrabold tracking-tight lg:text-l`}>
              {t('profile.historyTab.header')}
            </span>
            <div className={`flex w-auto justify-end`}>
              <Button className={`primaryButton`} onClick={handleNewTransformClick}>
                {t('profile.historyTab.newTransformButtonText')}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <ScrollArea className={`h-[375px]`}>
            <div className={`flex flex-col gap-2`}>
              {loading ? (
                <LoadingSpinner />
              ) : (
                transforms.map((transform) => <Transform key={transform.id} transform={transform} />)
              )}
              {transforms.length === 0 && (
                <div className={`flex justify-center items-center`}>
                  <span className={`text-xl text-muted-foreground font-bold`}>
                    {t('profile.historyTab.noTransforms')}
                  </span>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </TabsContent>
  );
}

function Transform({ transform }: { transform: TransformDto }) {
  return (
    <>
      <CardDescription>{transform.date}</CardDescription>
      <HistoryTabPlaylist transform={transform} />
    </>
  );
}
