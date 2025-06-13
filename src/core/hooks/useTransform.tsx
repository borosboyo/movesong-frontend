import { createContext, ReactNode, useContext, useState, useEffect } from 'react';
import { PlaylistDto } from '@/swagger/transform';

interface TransformContextProps {
  source: string;
  setSource: (_source: string) => void;
  destination: string;
  setDestination: (_destination: string) => void;
  selectedPlaylistId: string;
  setSelectedPlaylistId: (_id: string) => void;
  selectedPlaylist: PlaylistDto | undefined;
  setSelectedPlaylist: (_selectedPlaylist: PlaylistDto | undefined) => void;
  exportedResource: string[] | undefined;
  setExportedResource: (_exportedResource: string[] | undefined) => void;
  reset: () => void;
}

const TransformContext = createContext<TransformContextProps | undefined>(undefined);

export const TransformProvider = ({ children }: { children: ReactNode }) => {
  const [source, setSourceState] = useState<string>('');
  const [destination, setDestinationState] = useState<string>('');
  const [selectedPlaylistId, setSelectedPlaylistIdState] = useState<string>('');
  const [selectedPlaylist, setSelectedPlaylistState] = useState<PlaylistDto>();
  const [exportedResource, setExportedResourceState] = useState<string[] | undefined>();

  // Load from localStorage on mount with safe JSON parsing
  useEffect(() => {
    const safelyParseJSON = (value: string | null) => {
      try {
        return value ? JSON.parse(value) : undefined;
      } catch (error) {
        console.error('Failed to parse JSON:', error);
        return undefined;
      }
    };

    const storedSource = localStorage.getItem('source');
    const storedDestination = localStorage.getItem('destination');
    const storedSelectedPlaylistId = localStorage.getItem('selectedPlaylistId');
    const storedSelectedPlaylist = localStorage.getItem('selectedPlaylist');
    const storedExportedResource = localStorage.getItem('exportedResource');

    if (storedSource) setSourceState(storedSource);
    if (storedDestination) setDestinationState(storedDestination);
    if (storedSelectedPlaylistId) setSelectedPlaylistIdState(storedSelectedPlaylistId);
    setSelectedPlaylistState(safelyParseJSON(storedSelectedPlaylist));
    setExportedResourceState(safelyParseJSON(storedExportedResource));
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

  const setSelectedPlaylistId = (id: string) => {
    setSelectedPlaylistIdState(id);
    localStorage.setItem('selectedPlaylistId', id);
  };

  const setSelectedPlaylist = (playlist: PlaylistDto | undefined) => {
    setSelectedPlaylistState(playlist);
    localStorage.setItem('selectedPlaylist', JSON.stringify(playlist ?? null));
  };

  const setExportedResource = (resource: string[] | undefined) => {
    setExportedResourceState(resource);
    localStorage.setItem('exportedResource', JSON.stringify(resource ?? null));
  };

  const reset = () => {
    setSourceState('');
    setDestinationState('');
    setSelectedPlaylistIdState('');
    setSelectedPlaylistState(undefined);
    setExportedResourceState(undefined);
    localStorage.removeItem('source');
    localStorage.removeItem('destination');
    localStorage.removeItem('selectedPlaylistId');
    localStorage.removeItem('selectedPlaylist');
    localStorage.removeItem('exportedResource');
  };

  return (
    <TransformContext.Provider
      value={{
        source,
        setSource,
        destination,
        setDestination,
        selectedPlaylistId,
        setSelectedPlaylistId,
        selectedPlaylist,
        setSelectedPlaylist,
        exportedResource,
        setExportedResource,
        reset,
      }}
    >
      {children}
    </TransformContext.Provider>
  );
};

export const useTransform = () => {
  const context = useContext(TransformContext);
  if (!context) {
    throw new Error('useTransform must be used within a TransformProvider');
  }
  return context;
};
