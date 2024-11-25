import { createContext, ReactNode, useContext, useState, useEffect } from 'react';
import { PlaylistDto } from '@/swagger/transform';

interface SyncContextProps {
  source: string;
  setSource: (_source: string) => void;
  destination: string;
  setDestination: (_destination: string) => void;
  // SOURCE
  sourcePlaylistId: string;
  setSourcePlaylistId: (_id: string) => void;
  selectedSourcePlaylist: PlaylistDto | undefined;
  setSelectedSourcePlaylist: (_selectedPlaylist: PlaylistDto | undefined) => void;
  // DESTINATION
  destinationPlaylistId: string;
  setDestinationPlaylistId: (_id: string) => void;
  selectedDestinationPlaylist: PlaylistDto | undefined;
  setSelectedDestinationPlaylist: (_selectedPlaylist: PlaylistDto | undefined) => void;

}

const SyncContext = createContext<SyncContextProps | undefined>(undefined);

export const SyncProvider = ({ children }: { children: ReactNode }) => {
  const [source, setSourceState] = useState<string>('');
  const [destination, setDestinationState] = useState<string>('');
  // SOURCE
  const [sourcePlaylistId, setSourcePlaylistIdState] = useState<string>('');
  const [selectedSourcePlaylist, setSelectedSourcePlaylistState] = useState<PlaylistDto>();
  // DESTINATION
  const [destinationPlaylistId, setDestinationPlaylistIdState] = useState<string>('');
  const [selectedDestinationPlaylist, setSelectedDestinationPlaylistState] = useState<PlaylistDto>();
  // Load from localStorage on mount with safe JSON parsing
  useEffect(() => {
    const safelyParseJSON = (value: string | null) => {
      try {
        return value ? JSON.parse(value) : undefined;
      } catch (error) {
        return undefined;
      }
    };

    const storedSource = localStorage.getItem('source');
    const storedDestination = localStorage.getItem('destination');
    const storedSourcePlaylistId = localStorage.getItem('sourcePlaylistId');
    const storedSelectedSourcePlaylist = localStorage.getItem('selectedSourcePlaylist');
    const storedDestinationPlaylistId = localStorage.getItem('destinationPlaylistId');
    const storedSelectedDestinationPlaylist = localStorage.getItem('selectedDestinationPlaylist');

    if (storedSource) setSourceState(storedSource);
    if (storedDestination) setDestinationState(storedDestination);
    if (storedSourcePlaylistId) setSourcePlaylistIdState(storedSourcePlaylistId);
    setSelectedSourcePlaylistState(safelyParseJSON(storedSelectedSourcePlaylist));
    if (storedDestinationPlaylistId) setDestinationPlaylistIdState(storedDestinationPlaylistId);
    setSelectedDestinationPlaylistState(safelyParseJSON(storedSelectedDestinationPlaylist));
    }, []);

  // Update localStorage when data changes
  const setSource = (value: string) => {
    setSourceState(value);
    localStorage.setItem('source', value);
  };

  const setDestination = (value: string) => {
    setDestinationState(value);
    localStorage.setItem('destination', value);
  };

  // SOURCE
  const setSourcePlaylistId = (id: string) => {
    setSourcePlaylistIdState(id);
    localStorage.setItem('sourcePlaylistId', id);
  };

  const setSelectedSourcePlaylist = (playlist: PlaylistDto | undefined) => {
    setSelectedSourcePlaylistState(playlist);
    localStorage.setItem('selectedSourcePlaylist', JSON.stringify(playlist));
  };

  // DESTINATION
  const setDestinationPlaylistId = (id: string) => {
    setDestinationPlaylistIdState(id);
    localStorage.setItem('destinationPlaylistId', id);
  };

  const setSelectedDestinationPlaylist = (playlist: PlaylistDto | undefined) => {
    setSelectedDestinationPlaylistState(playlist);
    localStorage.setItem('selectedDestinationPlaylist', JSON.stringify(playlist));
  };

  return (
    <SyncContext.Provider value={{
      source,
      setSource,
      destination,
      setDestination,
      sourcePlaylistId,
      setSourcePlaylistId,
      selectedSourcePlaylist,
      setSelectedSourcePlaylist,
      destinationPlaylistId,
      setDestinationPlaylistId,
      selectedDestinationPlaylist,
      setSelectedDestinationPlaylist,
    }}>
      {children}
    </SyncContext.Provider>
  );
};

export const useSync = () => {
  const context = useContext(SyncContext);
  if (!context) {
    throw new Error('useSync must be used within a SyncProvider');
  }
  return context;
};
