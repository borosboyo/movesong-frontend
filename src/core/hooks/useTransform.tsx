import { createContext, ReactNode, useContext, useState } from 'react';
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
}

const TransformContext = createContext<TransformContextProps | undefined>(undefined);

export const TransformProvider = ({ children }: { children: ReactNode }) => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedPlaylistId, setSelectedPlaylistId] = useState('');
  const [selectedPlaylist, setSelectedPlaylist] = useState<PlaylistDto>();
  const [exportedResource, setExportedResource] = useState<string[]>();

  return (
    <TransformContext.Provider value={{
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
    }}>
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
