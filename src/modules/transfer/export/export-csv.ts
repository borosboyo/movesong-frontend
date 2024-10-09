import { fetchPlaylist, getId } from '@/modules/transfer/export/export-util.js';

// Function to convert an array to CSV format
export function arrayToCSV(arr: string[][]): string {
  return arr.map(row =>
    row
      .map(String)
      .map(v => v.replace(/"/g, '""')) // Escape quotes
      .map(v => `"${v}"`) // Enclose each field in quotes
      .join(',')
  ).join('\r\n');
}

// Function to convert a playlist object to a Blob in CSV format
export function playlistToCSV(playlist: { info: Record<string, string>, items: string[][] }): Blob {
  return new Blob([
    arrayToCSV(Object.entries(playlist.info)),
    '\r\n\r\n',  // Add extra newlines between sections
    arrayToCSV(playlist.items)
  ], { type: 'text/csv;charset=utf-8;' });
}

// Function to convert a CSV string back into a playlist object
export function csvToPlaylist(csv: string): { info: Record<string, string>, items: string[][] } {
  const arr = csv.split('\r\n');

  const parsedArr = arr.map(line =>
    line.split(',')
      .map(v => v.replace(/""/g, '"')) // Unescape quotes
      .map(v => v.replace(/^"|"$/g, '')) // Remove surrounding quotes
  );

  return {
    info: Object.fromEntries(parsedArr.slice(0, 4)), // First 4 lines are playlist info
    items: parsedArr.slice(5),  // After the 5th line, it's the list of items
  };
}

// Function to download a playlist as a CSV file
export async function downloadCSVPlaylist(playlistUrl: string): Promise<string> {
  const playlistId = getId(playlistUrl);
  const playlist = await fetchPlaylist(playlistId);

  return URL.createObjectURL(playlistToCSV(playlist));
}
