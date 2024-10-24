import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { Separator } from '@/shared/components/ui/separator.tsx';
import { PanelContainer } from '@/shared/components/util/panel-container.tsx';
import { ProfileTabs } from '@/modules/profile/profile-tabs/profile-tabs.tsx';

export function ProfilePanel() {
  return (
    <PanelContainer>
      <Card className={`w-[1000px]`}>
        <CardHeader>
          <div className={`flex flex-col space-y-1.5`}>
            <CardTitle className={`flex scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>Welcome, xyz!</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className={`flex flex-col gap-2`}>
            <Separator />
            <ProfileTabs />
          </div>
        </CardContent>
        <CardFooter className={`flex-col grid gap-2 items-start`}>
        </CardFooter>
      </Card>
    </PanelContainer>
  );
}
