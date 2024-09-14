import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import DiamondIcon from '@/shared/icons/diamond-icon.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { PanelContainer } from '@/shared/panel/panel-container';

export default function PremiumPanel() {
  return (
    <PanelContainer>
      <Card className={`w-[350px]`}>
        <CardHeader>
          <CardTitle className={`flex scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>Switch to Premium!</CardTitle>
        </CardHeader>
        <CardContent className={`flex-col grid gap-4`}>
          <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}><DiamondIcon /> Unlimited transfer</CardTitle>
          <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}><DiamondIcon /> Unlimited transfer</CardTitle>
          <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}><DiamondIcon /> Export to TXT / CSV</CardTitle>
          <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}><DiamondIcon /> Playlist synchronization</CardTitle>
        </CardContent>
        <CardFooter className={`flex-col grid gap-2 items-start`}>
          <Button className={`primaryButton flex-row w-full gap-2`}>$ 0.00 / month</Button>
          <Button className={`primaryButton flex-row w-full gap-2`}>$ 0.00 / year</Button>
        </CardFooter>
      </Card>
    </PanelContainer>
  );
}
