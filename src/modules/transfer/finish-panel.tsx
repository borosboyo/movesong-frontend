import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { CheckmarkIcon } from '@/shared/icons/checkmark-icon.tsx';
import { Icon } from '@radix-ui/react-select';
import ArrowRightIcon from '@/shared/icons/arrow-right-icon.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { CrossCircledIcon } from '@radix-ui/react-icons';
import { SummaryTabPlaylist } from '@/modules/transfer/transfer-tabs/summary-tab-playlist.tsx';
import { ScrollArea } from '@/shared/components/ui/scroll-area.tsx';
import { PanelContainer } from '@/shared/panel/panel-container.tsx';

export function FinishPanel() {
  return (
    <PanelContainer>
      <Card className={`w-[500px]`}>
        <CardHeader>
          <div className={`flex flex-col space-y-1.5 items-center`}>
            <CheckmarkIcon size={40} />
            <CardTitle className={`flex justify-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>TRANSFER COMPLETE</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className={`flex flex-col space-y-1.5 items-center`}>
            <div className={`flex flex-row gap-4 justify-content items-center`}>
              <Icon aria-label="Youtube Music">
                <img className={`w-10 h-10 object-cover`} src={`/src/assets/youtube-music/youtube-music-icon.webp`} alt={`youtube-music`} />
              </Icon>
              <ArrowRightIcon />
              <Icon aria-label="Spotify">
                <img className={`w-10 h-10 object-cover`} src={`/src/assets/spotify/spotify-icon.webp`} alt={`spotify`} />
              </Icon>
            </div>
          </div>
        </CardContent>
        <CardFooter className={`flex-col grid gap-2 items-start`}>
          <div className={`flex flex-row gap-2 mb-5`}>
            <Button className={`primaryButton w-full`}>Share my songs</Button>
            <Button className={`primaryButton w-full`}>Convert again</Button>
          </div>
          <ScrollArea className={`h-[250px]`}>
            <div className={`flex flex-row items-center`}>
              <SummaryTabPlaylist />
              <span className={`text-sm text-muted-foreground mr-2`}>19 copied</span>
              <CheckmarkIcon size={20} />
              <span className={`text-sm text-muted-foreground mr-2 ml-4`}>1 failed</span>
              <CrossCircledIcon height={`20`} width={`20`} />
            </div>
          </ScrollArea>
        </CardFooter>
      </Card>

    </PanelContainer>
  );
}
