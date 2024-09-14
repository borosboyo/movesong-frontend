import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/shared/components/ui/carousel.tsx';
import { SourceTab } from '@/modules/transfer/transfer-tabs/source-tab.tsx';
import { PlaylistTab } from '@/modules/transfer/transfer-tabs/playlist-tab.tsx';
import { DestinationTab } from '@/modules/transfer/transfer-tabs/destination-tab.tsx';
import { SummaryTab } from '@/modules/transfer/transfer-tabs/summary-tab.tsx';
import { PanelContainer } from '@/shared/panel/panel-container';

export function TransferPanel() {
  return (
    <PanelContainer>
      <Carousel className="w-full max-w-lg"
                opts={{
                  align: 'start',
                  dragFree: true,
                  watchDrag: false,
                }}>
        <CarouselContent>
          <CarouselItem>
            <div className="p-1">
              <SourceTab />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <PlaylistTab />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <DestinationTab />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <SummaryTab />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </PanelContainer>
  );
}
