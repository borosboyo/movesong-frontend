import { downloadTXTPlaylist } from '@/modules/transfer/export/export-txt.ts';
import { downloadCSVPlaylist } from '@/modules/transfer/export/export-csv.ts';

export const API_KEY = "";

// Define types for YouTube API responses
interface PlaylistItem {
  snippet: {
    title: string;
    publishedAt: string;
    resourceId: {
      videoId: string;
    };
    videoOwnerChannelTitle: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
  contentDetails: {
    videoPublishedAt: string;
  };
}

interface PlaylistInfo {
  id: string;
  snippet: {
    title: string;
    channelTitle: string;
  };
}

interface PlaylistItemsResponse {
  items: PlaylistItem[];
  nextPageToken?: string;
}

interface PlaylistInfoResponse {
  items: PlaylistInfo[];
}

// Helper function to get the playlist ID from the URL
export function getId(url: string): string {
  const regex = /(https:\/\/)?(www\.)?(m.)?youtube\.com.*[?&]list=.*/;
  const result = regex.test(url);

  if (!result) {
    throw new Error('invalidUrlErr');
  }

  const idMatch = url.match(/[?&]list=([^#&?]*).*/);
  if (!idMatch || !idMatch[1]) {
    throw new Error('Invalid playlist ID');
  }
  return idMatch[1];
}

// Function to fetch playlist items from YouTube API
export async function fetchItems(id: string): Promise<PlaylistItem[]> {
  const itemsApi = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${id}&key=${API_KEY}`;

  const fetchedItems: PlaylistItem[] = [];
  let response = await fetch(itemsApi);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('notFoundErr');
    } else {
      throw new Error('fetchErr');
    }
  }

  let result: PlaylistItemsResponse = await response.json();
  fetchedItems.push(...result.items);

  while (result.nextPageToken) {
    response = await fetch(`${itemsApi}&pageToken=${result.nextPageToken}`);
    result = await response.json();
    fetchedItems.push(...result.items);
  }

  return fetchedItems;
}

// Function to fetch playlist info from YouTube API
export async function fetchInfo(id: string): Promise<PlaylistInfoResponse> {
  const playlistApi = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&id=${id}&key=${API_KEY}`;

  const response = await fetch(playlistApi);
  if (!response.ok) {
    throw new Error('fetchErr');
  }

  return await response.json();
}

// Function to fetch both playlist items and info
export async function fetchPlaylist(id: string): Promise<{ info: Record<string, string>, items: string[][] }> {
  const fetchedItems = await fetchItems(id);
  const playlistItems = saveItems(fetchedItems);

  const fetchedInfo = await fetchInfo(id);
  const playlistInfo = saveInfo(fetchedInfo);

  playlistInfo.Videos = (playlistItems.length - 1).toString(); // without private videos

  return {
    info: playlistInfo,
    items: playlistItems,
  };
}

// Function to compare two sets of items and identify added or removed items
export function compareItems(backupItems: string[][], currentItems: string[][]): { added: string[][], removed: string[][] } {
  const addedItems: string[][] = [];
  const removedItems: string[][] = [];

  for (let i = 0; i < currentItems.length; i++) {
    if (!backupItems.some(item => item.includes(currentItems[i][0]))) {
      addedItems.push(currentItems[i]);
    }
  }

  for (let i = 0; i < backupItems.length; i++) {
    if (!currentItems.some(item => item.includes(backupItems[i][0]))) {
      removedItems.push(backupItems[i]);
    }
  }

  return {
    added: addedItems,
    removed: removedItems,
  };
}

// Function to process and save items in a structured format
export function saveItems(items: PlaylistItem[]): string[][] {
  const result: string[][] = [];

  const headers = [
    'Video ID', 'Title', 'Channel', 'Added At', 'Published At', 'Thumbnail URL', 'Description'
  ];
  result.push(headers);

  for (const item of items) {
    if (!item.contentDetails.videoPublishedAt) continue;

    const line = [
      item.snippet.resourceId.videoId,
      item.snippet.title,
      item.snippet.videoOwnerChannelTitle,
      item.snippet.publishedAt.slice(0, 10),
      item.contentDetails.videoPublishedAt.slice(0, 10),
      item.snippet.thumbnails.high?.url,
    ];

    result.push(line);
  }

  return result;
}

// Function to save playlist info in a structured format
export function saveInfo(info: PlaylistInfoResponse): Record<string, string> {
  return {
    'Playlist URL': `https://www.youtube.com/playlist?list=${info.items[0].id}`,
    'Playlist title': info.items[0].snippet.title,
    'Playlist author': info.items[0].snippet.channelTitle,
  };
}

export const handleTXTDownload = async () => {
  console.log('Downloading playlist...');
  const txtBlobUrl = await downloadTXTPlaylist("https://www.youtube.com/watch?v=svJXjjyec30&list=PLt6r9ic5KeQgyBc5yS6SFXAzZiq87Q8oQ&ab_channel=LEGEND");
  const link = document.createElement('a');
  link.href = txtBlobUrl;
  link.download = 'playlist.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export const handleCSVDownload = async () => {
  console.log('Downloading playlist...');
  const txtBlobUrl = await downloadCSVPlaylist("https://www.youtube.com/watch?v=svJXjjyec30&list=PLt6r9ic5KeQgyBc5yS6SFXAzZiq87Q8oQ&ab_channel=LEGEND");
  const link = document.createElement('a');
  link.href = txtBlobUrl;
  link.download = 'playlist.csv';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
