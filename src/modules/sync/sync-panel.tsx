import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/components/ui/carousel.tsx';
import { PanelContainer } from '@/shared/components/util/panel-container.tsx';
import { useState } from 'react';
import { Icon } from '@radix-ui/react-select';
import { useLocation } from 'react-router-dom';
import spotifyIcon from '@/assets/spotify/spotify-icon.webp';
import youtubeMusicIcon from '@/assets/youtube-music/youtube-music-icon.webp';
import { SourceTab } from '@/modules/sync/sync-tabs/1/source-tab.tsx';
import { SourcePlaylistTab } from '@/modules/sync/sync-tabs/2/source-playlist-tab.tsx';
import { DestinationTab } from '@/modules/sync/sync-tabs/3/destination-tab.tsx';
import { DestinationPlaylistTab } from '@/modules/sync/sync-tabs/4/destination-playlist-tab.tsx';
import { SummaryTab } from '@/modules/sync/sync-tabs/5/summary-tab.tsx';
import { useSync } from '@/core/hooks/useSync.tsx';

export function SyncPanel() {
  const { source, sourcePlaylistId, destination, destinationPlaylistId } = useSync();
  const location = useLocation();
  const [currentTab, setCurrentTab] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  const handleNext = () => {
    setCurrentTab(currentTab + 1);
    api?.scrollNext();
  };

  const handlePrevious = () => {
    setCurrentTab(currentTab - 1);
    api?.scrollPrev();
  };

  const isNextDisabled = () => {
    if (currentTab === 0) {
      return source === '';
    } else if (currentTab === 1) {
      return sourcePlaylistId === '';
    } else if (currentTab === 2) {
      return destination === '';
    } else if (currentTab === 3) {
      return destinationPlaylistId === '';
    }
  };

  return (
    <PanelContainer>
      <Carousel
        className="w-full max-w-lg"
        opts={{
          align: 'start',
          dragFree: true,
          watchDrag: false,
          startIndex: location?.state?.startTab || 0,
        }}
        setApi={setApi}
      >
        <CarouselContent>
          <CarouselItem>
            <SourceTab />
          </CarouselItem>
          <CarouselItem>
            <SourcePlaylistTab />
          </CarouselItem>
          <CarouselItem>
            <DestinationTab />
          </CarouselItem>
          <CarouselItem>
            <DestinationPlaylistTab />
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
  YOUTUBE: (
    <Icon aria-label="Youtube Music">
      <img className="w-8 h-8 object-cover" src={youtubeMusicIcon} alt="youtube-music" />
    </Icon>
  ),
  SPOTIFY: (
    <Icon aria-label="Spotify">
      <img className="w-8 h-8 object-cover" src={spotifyIcon} alt="spotify" />
    </Icon>
  ),
};
