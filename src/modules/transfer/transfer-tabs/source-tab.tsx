import { Card, CardContent, CardDescription } from '@/shared/components/ui/card.tsx';
import { Toggle } from '@/shared/components/ui/toggle.tsx';

export function SourceTab() {
  return <Card>
    <CardContent className="aspect-square justify-center p-6">
      <div className={`flex flex-col items-center`}>
        <span className={`w scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>SELECT SOURCE</span>
        <CardDescription>1/4 step</CardDescription>
        <div className={`flex flex-row gap-2 mt-10`}>
          <Toggle aria-label="Youtube Music" className={`p-6 w-25 h-25 `}>
            <img className={`w-25 h-25  object-cover`} src={`/src/assets/youtube-music/youtube-music-icon.webp`} alt={`youtube-music`} />
          </Toggle>
          <Toggle aria-label="Spotify" className={`p-6 w-25 h-25 `}>
            <img className={`w-25 h-25 object-cover`} src={`/src/assets/spotify/spotify-icon.webp`} alt={`spotify`} />
          </Toggle>
          <Toggle aria-label="SoundCloud" className={`p-6 w-25 h-25 `}>
            <img className={`w-25 h-25 object-cover`} src={`/src/assets/soundcloud/soundcloud-icon.webp`} alt={`soundcloud`} />
          </Toggle>
        </div>
      </div>
    </CardContent>
  </Card>;
}
