import { axiosConfig, baseOptions } from '@/core/config/axiosConfig.ts';
import { TransformApiFactory } from '@/swagger/transform/api';
import { FindConnectionsByMovesongEmailResp } from '@/swagger/transform/models/find-connections-by-movesong-email-resp';
import {
  ConvertToSpotifyResp,
  ConvertToYoutubeResp,
  GetItemsInYoutubePlaylistResp, GetUserSpotifyPlaylistByPlaylistIdResp,
  GetUserSpotifyPlaylistsResp, GetUserYoutubePlaylistByPlaylistIdResp,
  GetUserYoutubePlaylistsResp,
} from '@/swagger/transform';

const TransformService = {

  transformApi: TransformApiFactory(axiosConfig),

  findConnectionsByMovesongEmail: async function(movesongEmail: string): Promise<FindConnectionsByMovesongEmailResp> {
    const response = await this.transformApi.findConnectionsByMovesongEmail({
      movesongEmail,
    }, baseOptions);
    return response.data;
  },

  getUserYoutubePlaylists: async function(movesongEmail: string): Promise<GetUserYoutubePlaylistsResp> {
    const response = await this.transformApi.getUserYoutubePlaylists({
      movesongEmail,
    }, baseOptions);
    return response.data;
  },

  getUserYoutubePlaylistByPlaylistId: async function(movesongEmail: string, playlistId: string): Promise<GetUserYoutubePlaylistByPlaylistIdResp> {
    const response = await this.transformApi.getUserYoutubePlaylistByPlaylistId({
      movesongEmail,
      playlistId,
    }, baseOptions);
    return response.data;
  },

  getUserSpotifyPlaylists: async function(movesongEmail: string): Promise<GetUserSpotifyPlaylistsResp> {
    const response = await this.transformApi.getUserSpotifyPlaylists({
      movesongEmail,
    }, baseOptions);
    return response.data;
  },

  getUserSpotifyPlaylistByPlaylistId: async function(movesongEmail: string, playlistId: string): Promise<GetUserSpotifyPlaylistByPlaylistIdResp> {
    const response = await this.transformApi.getUserSpotifyPlaylistByPlaylistId({
      movesongEmail,
      playlistId,
    }, baseOptions);
    return response.data;
  },

  getItemsInYoutubePlaylist: async function(movesongEmail: string, playlistId: string): Promise<GetItemsInYoutubePlaylistResp> {
    const response = await this.transformApi.getItemsInYoutubePlaylist({
      movesongEmail,
      playlistId,
    }, baseOptions);
    return response.data;
  },

  getItemsInSpotifyPlaylist: async function(movesongEmail: string, playlistId: string): Promise<GetItemsInYoutubePlaylistResp> {
    const response = await this.transformApi.getItemsInSpotifyPlaylist({
      movesongEmail,
      playlistId,
    }, baseOptions);
    return response.data;
  },

  convertToSpotify: async function(movesongEmail: string, playlistId: string): Promise<ConvertToSpotifyResp> {
    const response = await this.transformApi.convertToSpotify({
      movesongEmail,
      playlistId,
    }, baseOptions);
    return response.data
  },

  convertToYoutube: async function(movesongEmail: string, playlistId: string): Promise<ConvertToYoutubeResp> {
    const response = await this.transformApi.convertToYoutube({
      movesongEmail,
      playlistId,
    }, baseOptions);
    return response.data
  },

  exportSpotifyPlaylistToTXT: async function(movesongEmail: string, playlistId: string): Promise<string[]> {
    const response = await this.transformApi.exportSpotifyPlaylistToTXT({
      movesongEmail,
      playlistId,
    }, baseOptions);
    return response.data
  },

  exportSpotifyPlaylistToCSV: async function(movesongEmail: string, playlistId: string): Promise<string[]> {
    const response = await this.transformApi.exportSpotifyPlaylistToCSV({
      movesongEmail,
      playlistId,
    }, baseOptions);
    return response.data
  },

  exportYoutubePlaylistToTXT: async function(movesongEmail: string, playlistId: string): Promise<string[]> {
    const response = await this.transformApi.exportYoutubePlaylistToTXT({
      movesongEmail,
      playlistId,
    }, baseOptions);
    return response.data
  },

  exportYoutubePlaylistToCSV: async function(movesongEmail: string, playlistId: string): Promise<string[]> {
    const response = await this.transformApi.exportYoutubePlaylistToCSV({
      movesongEmail,
      playlistId,
    }, baseOptions);
    return response.data
  },

  stringArrayToTXTBlob,
  stringArrayToCSVBlob,
};

function stringArrayToCSVBlob(data: string[]): Blob {
  return new Blob([data.toString()], { type: 'text/csv' });
}

function stringArrayToTXTBlob(data: string[]): Blob {
  return new Blob([data.toString()], { type: 'text/plain' });
}

export default TransformService;
