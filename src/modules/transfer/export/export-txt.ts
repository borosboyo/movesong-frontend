import { fetchPlaylist, getId } from '@/modules/transfer/export/export-util.js';

// Function to convert an array to a plain text format
export function arrayToTXT(arr: string[][]): string {
    // Each row on a new line
  return arr.map(row =>
    row.map(String)
      .join(' ')  // Join items with spaces
  ).join('\n');
}

// Function to convert a playlist object to a Blob of plain text format
export function playlistToTXT(playlist: { info: Record<string, string>, items: string[][] }): Blob {
  return new Blob([
    arrayToTXT(Object.entries(playlist.info)),
    '\n\n',  // Add extra newlines between sections
    arrayToTXT(playlist.items)
  ], { type: 'text/plain;charset=utf-8;' });
}

// Function to convert plain text back into a playlist object
export function txtToPlaylist(txt: string): { info: Record<string, string>, items: string[][] } {
  const arr = txt.split('\n');

  const parsedArr = arr.map(line =>
    line.split(' ').map(v => v.trim())
  );

  return {
    info: Object.fromEntries(parsedArr.slice(0, 4)),  // First 4 lines are playlist info
    items: parsedArr.slice(5),  // After the 5th line, it's the list of items
  };
}

// Function to download a playlist in plain text format
export async function downloadTXTPlaylist(playlistUrl: string): Promise<string> {
  const playlistId = getId(playlistUrl);
  const playlist = await fetchPlaylist(playlistId);
  console.log('here')
  console.log(playlistId)
  console.log(playlist)
  console.log(playlistToTXT(playlist))
  return URL.createObjectURL(playlistToTXT(playlist));
}
