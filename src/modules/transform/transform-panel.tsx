import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/shared/components/ui/carousel.tsx';
import { SourceTab } from '@/modules/transform/transform-tabs/1/source-tab.tsx';
import { PlaylistTab } from '@/modules/transform/transform-tabs/2/playlist-tab.tsx';
import { DestinationTab } from '@/modules/transform/transform-tabs/3/destination-tab.tsx';
import { SummaryTab } from '@/modules/transform/transform-tabs/4/summary-tab.tsx';
import { PanelContainer } from '@/shared/components/util/panel-container.tsx';
import { useTransform } from '@/core/hooks/useTransform.tsx';
import { useState } from 'react';
import { Icon } from '@radix-ui/react-select';

export function TransformPanel() {
  const { source, selectedPlaylistId, destination} = useTransform();
  const [currentTab, setCurrentTab] = useState(1);
  const [api, setApi] = useState<any>()

  const handleNext = () => {
    setCurrentTab(currentTab + 1);
    api?.scrollNext()
  }

  const handlePrevious = () => {
    setCurrentTab(currentTab - 1);
    api?.scrollPrev()
  }

  const isNextDisabled = () => {
    if(currentTab === 1) {
      return source === '';
    } else if(currentTab === 2) {
      return selectedPlaylistId === '';
    } else if(currentTab === 3) {
      return destination === '';
    }
  }

  return (
    <PanelContainer>
      <Carousel className="w-full max-w-lg"
                opts={{
                  align: 'start',
                  dragFree: true,
                  watchDrag: false,
                }}
                setApi={setApi}>
        <CarouselContent>
          <CarouselItem>
            <SourceTab />
          </CarouselItem>
          <CarouselItem>
            <PlaylistTab />
          </CarouselItem>
          <CarouselItem>
            <DestinationTab />
          </CarouselItem>
          <CarouselItem>
            <SummaryTab />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious onClick={handlePrevious} />
        <CarouselNext disabled={isNextDisabled()} onClick={handleNext} />
      </Carousel>
    </PanelContainer>
  );
}


export const iconMap: { [key: string]: JSX.Element } = {
  'YOUTUBE': (
    <Icon aria-label="Youtube Music">
      <img className="w-8 h-8 object-cover" src="/src/assets/youtube-music/youtube-music-icon.webp" alt="youtube-music" />
    </Icon>
  ),
  'SPOTIFY': (
    <Icon aria-label="Spotify">
      <img className="w-8 h-8 object-cover" src="/src/assets/spotify/spotify-icon.webp" alt="spotify" />
    </Icon>
  ),
  'TXT': <p>TXT</p>,
  'CSV': <p>CSV</p>,
};
