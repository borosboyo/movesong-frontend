import { Card, CardContent, CardDescription, CardFooter } from '@/shared/components/ui/card.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { PanelContainer } from '@/shared/panel/panel-container';


export function SharePanel() {
  return (
    <PanelContainer>
      <Card className={`w-[400px]`}>
        <CardContent className="aspect-square justify-center p-6">
          <div className={`flex flex-col items-center gap-2`}>
            <img src={`/src/assets/placeholder.jpg`} alt={`placeholder`} className={`w-40 h-40 object-cover`} />
            <span className={`w scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>PLAYLIST NAME</span>
            <CardDescription>xyz shared a playlist with you</CardDescription>
            <span className={`w scroll-m-20 text-s font-extrabold tracking-tight lg:text-s`}>Open playlist on:</span>
            <Button variant={`ghost`} aria-label="Youtube Music" className={`w-15 h-15`}>
              <img className={`w-10 h-10 object-cover`} src={`/src/assets/youtube-music/youtube-music-icon.webp`} alt={`youtube-music`} />
            </Button>
          </div>
          <div className={`flex flex-col gap-4`}>
            <div className={`flex flex-row justify-content items-center gap-2`}>
              <img src={`/src/assets/placeholder.jpg`} alt={`placeholder`} className={`w-10 h-10 object-cover`} />
              <div className="flex flex-col">
                <h4 className="text-sm font-semibold">Song name</h4>
                <span className={`text-sm text-muted-foreground`}>Artist name</span>
              </div>
            </div>
            <div className={`flex flex-row justify-content items-center gap-2`}>
              <img src={`/src/assets/placeholder.jpg`} alt={`placeholder`} className={`w-10 h-10 object-cover`} />
              <div className="flex flex-col">
                <h4 className="text-sm font-semibold">Song name</h4>
                <span className={`text-sm text-muted-foreground`}>Artist name</span>
              </div>
            </div>
            <div className={`flex flex-row justify-content items-center gap-2`}>
              <img src={`/src/assets/placeholder.jpg`} alt={`placeholder`} className={`w-10 h-10 object-cover`} />
              <div className="flex flex-col">
                <h4 className="text-sm font-semibold">Song name</h4>
                <span className={`text-sm text-muted-foreground`}>Artist name</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className={`flex justify-center items-center`}>
          <Button className={`primaryButton`}>Import into my library</Button>
        </CardFooter>
      </Card>
    </PanelContainer>
  )
}
