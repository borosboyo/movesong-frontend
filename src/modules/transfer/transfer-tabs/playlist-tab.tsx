import { Card, CardContent, CardDescription } from '@/shared/components/ui/card.tsx';
import { PlaylistTabPlaylist } from '@/modules/transfer/transfer-tabs/playlist-tab-playlist.tsx';
import { ScrollArea } from '@/shared/components/ui/scroll-area';

export function PlaylistTab() {
  return <Card>
    <CardContent className="aspect-square justify-center p-6">
      <div className={`flex flex-col items-center mb-6`}>
        <span className={`w scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>SELECT PLAYLISTS</span>
        <CardDescription>2/4 step</CardDescription>
      </div>
      <ScrollArea className={`h-[350px]`}>
        <div className={`flex flex-col gap-2`}>
          <PlaylistTabPlaylist />
          <PlaylistTabPlaylist />
        </div>
      </ScrollArea>
    </CardContent>
  </Card>;
}
