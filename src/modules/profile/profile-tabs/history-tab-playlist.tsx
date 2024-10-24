import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/shared/components/ui/collapsible.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { Icon } from '@radix-ui/react-select';
import ArrowRightIcon from '@/shared/icons/arrow-right-icon.tsx';
import { CheckmarkIcon } from '@/shared/icons/checkmark-icon.tsx';

export function HistoryTabPlaylist() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={`space-y-2`}>
      <div className={`flex flex-row justify-content items-center gap-2`}>
        <img src={`/src/assets/placeholder.jpg`} alt={`placeholder`} className={`w-10 h-10 object-cover`} />
        <div className={`flex flex-row gap-2`}>
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold">
              Playlist name
            </h4>
            <span className={`text-sm text-muted-foreground`}>19/20 transferred</span>
          </div>
        </div>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <CaretSortIcon className="h-6 w-6" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
        <div className={`flex flex-row items-center`}>
          <Icon aria-label="Youtube Music">
            <img className={`w-8 h-8 object-cover`} src={`/src/assets/youtube-music/youtube-music-icon.webp`} alt={`youtube-music`} />
          </Icon>
          <ArrowRightIcon />
          <Icon aria-label="Spotify">
            <img className={`w-8 h-8 object-cover`} src={`/src/assets/spotify/spotify-icon.webp`} alt={`spotify`} />
          </Icon>
        </div>
      </div>
      <CollapsibleContent className={`ml-6 flex flex-col gap-2 space-y-2`}>
        <div className={`flex flex-row justify-content items-center gap-2`}>
          <img src={`/src/assets/placeholder.jpg`} alt={`placeholder`} className={`w-10 h-10 object-cover`} />
          <div className={`flex flex-row items-center gap-4`}>
            <div className="flex flex-col">
              <h4 className="text-sm font-semibold">Song name</h4>
              <span className={`text-sm text-muted-foreground`}>Artist name</span>
            </div>
            <CheckmarkIcon size={20} />
          </div>
        </div>
        <div className={`flex flex-row justify-content items-center gap-2`}>
          <img src={`/src/assets/placeholder.jpg`} alt={`placeholder`} className={`w-10 h-10 object-cover`} />
          <div className={`flex flex-row items-center gap-4`}>
            <div className="flex flex-col">
              <h4 className="text-sm font-semibold">Song name</h4>
              <span className={`text-sm text-muted-foreground`}>Artist name</span>
            </div>
            <CheckmarkIcon size={20} />
          </div>
        </div>
        <div className={`flex flex-row justify-content items-center gap-2`}>
          <img src={`/src/assets/placeholder.jpg`} alt={`placeholder`} className={`w-10 h-10 object-cover`} />
          <div className={`flex flex-row items-center gap-4`}>
            <div className="flex flex-col">
              <h4 className="text-sm font-semibold">Song name</h4>
              <span className={`text-sm text-muted-foreground`}>Artist name</span>
            </div>
            <CheckmarkIcon size={20} />
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
