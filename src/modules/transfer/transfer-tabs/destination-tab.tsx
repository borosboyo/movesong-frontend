import { Card, CardContent, CardDescription } from '@/shared/components/ui/card.tsx';
import { Toggle } from '@/shared/components/ui/toggle.tsx';

export function DestinationTab() {
  return <Card>
    <CardContent className="aspect-square justify-center p-6">
      <div className={`flex flex-col items-center`}>
        <span className={`w scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>SELECT DESTINATION</span>
        <CardDescription>3/4 step</CardDescription>
        <div className={`flex flex-row gap-2 mt-10`}>
          <Toggle aria-label="Youtube Music" className={`w-25 h-25 flex-col`}>
            <img className={`w-25 h-25  object-cover`} src={`/src/assets/youtube-music/youtube-music-icon.webp`} alt={`youtube-music`} />
            <span className={`text-s font-extrabold tracking-tight lg:text-s`}>Youtube Music</span>
          </Toggle>
          <Toggle aria-label="Spotify" className={`w-25 h-25 flex-col`}>
            <img className={`w-25 h-25 object-cover`} src={`/src/assets/spotify/spotify-icon.webp`} alt={`spotify`} />
            <span className={`text-s font-extrabold tracking-tight lg:text-s`}>Spotify</span>
          </Toggle>
        </div>
      </div>
    </CardContent>
  </Card>;
}
