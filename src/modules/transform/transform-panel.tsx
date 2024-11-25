import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/shared/components/ui/carousel.tsx';
import { SourceTab } from '@/modules/transform/transform-tabs/1/source-tab.tsx';
import { PlaylistTab } from '@/modules/transform/transform-tabs/2/playlist-tab.tsx';
import { DestinationTab } from '@/modules/transform/transform-tabs/3/destination-tab.tsx';
import { SummaryTab } from '@/modules/transform/transform-tabs/4/summary-tab.tsx';
import { PanelContainer } from '@/shared/components/util/panel-container.tsx';
import { useTransform } from '@/core/hooks/useTransform.tsx';
import { useState } from 'react';
import { Icon } from '@radix-ui/react-select';
import { useLocation } from 'react-router-dom';
import spotifyIcon from '@/assets/spotify/spotify-icon.webp';
import youtubeMusicIcon from '@/assets/youtube-music/youtube-music-icon.webp';

export function TransformPanel() {
  const { source, selectedPlaylistId, destination} = useTransform();
  const location  = useLocation();
  const [currentTab, setCurrentTab] = useState(0);
  const [api, setApi] = useState<CarouselApi>()

  const handleNext = () => {
    setCurrentTab(currentTab + 1);
    api?.scrollNext()
  }

  const handlePrevious = () => {
    setCurrentTab(currentTab - 1);
    api?.scrollPrev()
  }

  const isNextDisabled = () => {
    if(currentTab === 0) {
      return source === '';
    } else if(currentTab === 1) {
      return selectedPlaylistId === '';
    } else if(currentTab === 2) {
      return destination === '';
    }
  }

  return (
    <PanelContainer>
      <Carousel className="w-4/5 h-3/4 lg:w-full lg:max-w-lg"
                opts={{
                  align: 'start',
                  dragFree: true,
                  watchDrag: false,
                  startIndex: location?.state?.startTab || 0,
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
      <img className="w-8 h-8 sm:w-8 md:w-8 lg:w-8 object-cover" src={youtubeMusicIcon} alt="youtube-music" />
    </Icon>
  ),
  'SPOTIFY': (
    <Icon aria-label="Spotify">
      <img className="w-8 h-8 sm:w-8 md:w-8 lg:w-8  object-cover" src={spotifyIcon} alt="spotify" />
    </Icon>
  ),
  'TXT': <p>TXT</p>,
  'CSV': <p>CSV</p>,
};
