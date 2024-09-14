import { Card, CardContent, CardDescription } from '@/shared/components/ui/card.tsx';
import { Icon } from '@radix-ui/react-select';
import ArrowRightIcon from '@/shared/icons/arrow-right-icon.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { SummaryTabPlaylist } from '@/modules/transfer/transfer-tabs/summary-tab-playlist.tsx';
import { ScrollArea } from '@/shared/components/ui/scroll-area';

export function SummaryTab() {
  return <Card>
    <CardContent className="aspect-square justify-center p-6">
      <div className={`flex flex-col items-center`}>
        <span className={`w scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>SUMMARY</span>
        <CardDescription>4/4 step</CardDescription>
      </div>
      <div className={`flex flex-col gap-4`}>
        <div className={`flex flex-row gap-4 items-center`}>
          <span className={`w scroll-m-20 text-m font-extrabold tracking-tight lg:text-m`}>Transferring playlists (6 songs)</span>
          <Icon aria-label="Youtube Music">
            <img className={`w-6 h-6 object-cover`} src={`/src/assets/youtube-music/youtube-music-icon.webp`} alt={`youtube-music`} />
          </Icon>
          <ArrowRightIcon />
          <Icon aria-label="Spotify">
            <img className={`w-6 h-6 object-cover`} src={`/src/assets/spotify/spotify-icon.webp`} alt={`spotify`} />
          </Icon>
        </div>
        <span className={`w scroll-m-20 text-s font-bold tracking-tight lg:text-s`}>Playlists (2/2)</span>
        <ScrollArea className={``}>
          <div className={`flex flex-col gap-4`}>
            <SummaryTabPlaylist />
            <SummaryTabPlaylist />
          </div>
        </ScrollArea>
        <Button className={`m-20`}>Convert</Button>
      </div>
    </CardContent>
  </Card>;
}
