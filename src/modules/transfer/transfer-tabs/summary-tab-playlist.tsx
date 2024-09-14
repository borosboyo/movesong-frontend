import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/shared/components/ui/collapsible.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { CaretSortIcon } from '@radix-ui/react-icons';

export function SummaryTabPlaylist() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="space-y-2"
    >
      <div className={`flex flex-row justify-content items-center gap-2`}>
        <img src={`/src/assets/placeholder.jpg`} alt={`placeholder`} className={`w-10 h-10 object-cover`} />
        <div className="flex flex-col">
          <h4 className="text-sm font-semibold">
            Playlist name
          </h4>
          <span className={`text-sm text-muted-foreground`}>0/20 selected</span>
        </div>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <CaretSortIcon className="h-6 w-6" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className={`ml-6 flex flex-col gap-2 space-y-2`}>
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
      </CollapsibleContent>
    </Collapsible>
  );
}
