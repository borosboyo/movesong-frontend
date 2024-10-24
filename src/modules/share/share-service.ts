import { axiosConfig, baseOptions } from '@/core/config/axiosConfig.ts';
import { TransformApiFactory } from '@/swagger/transform/api';
import { ShareApiFactory } from '@/swagger/share/apis/share-api.ts';
import { ShareDto } from '@/swagger/share/models/share-dto';
import { UpdateShareResp } from '@/swagger/share/models/update-share-resp';
import { GetShareByIdResp } from '@/swagger/share/models/get-share-by-id-resp';
import { GetItemsInYoutubePlaylistResp } from '@/swagger/transform';

const ShareService = {

  transformApi: TransformApiFactory(axiosConfig),
  shareApi: ShareApiFactory(axiosConfig),

  getShareById: async function(id: number): Promise<GetShareByIdResp> {
    const response = await this.shareApi.getShareById({
      id
    }, baseOptions);
    return response.data
  },

  updateShare: async function(share: ShareDto): Promise<UpdateShareResp> {
    const response = await this.shareApi.updateShare({
      share
    }, baseOptions);
    return response.data
  },

  getItemsInYoutubePlaylist: async function(playlistId: string, movesongEmail: string): Promise<GetItemsInYoutubePlaylistResp> {
    const response = await this.transformApi.getItemsInYoutubePlaylist({
      playlistId,
      movesongEmail,
    }, baseOptions);
    return response.data;
  },

  getItemsInSpotifyPlaylist: async function(playlistId: string, movesongEmail: string): Promise<GetItemsInYoutubePlaylistResp> {
    const response = await this.transformApi.getItemsInSpotifyPlaylist({
      playlistId,
      movesongEmail,
    }, baseOptions);
    return response.data;
  },
};

export default ShareService;
