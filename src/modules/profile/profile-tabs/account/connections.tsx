import { ConnectionDto } from '@/swagger/transform';
import youtubeMusicIcon from '@/assets/youtube-music/youtube-music-icon.webp';
import spotifyIcon from '@/assets/spotify/spotify-icon.webp';

export function Connections({ connections }: Readonly<{ connections: ConnectionDto[] }>) {
  return (
    <div className={`grid grid-cols-1 gap-4`}>
      {connections.map((connection) => (
        <div key={connection.platformType} className={`flex items-center gap-4`}>
          {connection.platformType === 'YOUTUBE' && (
            <div className={`flex gap-2 items-center`}>
              <img className={`w-10 h-10 object-cover`} src={youtubeMusicIcon} alt={`youtube-music`} />
              <span className={`text-md font-normal`}>Youtube</span>
            </div>
          )}
          {connection.platformType === 'SPOTIFY' && (
            <div className={`flex gap-2 items-center`}>
              <img className={`w-10 h-10 object-cover`} src={spotifyIcon} alt={`spotify`} />
              <span className={`text-md font-normal`}>Spotify</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
