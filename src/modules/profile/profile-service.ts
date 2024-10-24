import { axiosConfig, baseOptions } from '@/core/config/axiosConfig.ts';
import { FindSubscriptionResp, SubscriptionApiFactory } from '@/swagger/subscription';
import { TransformApiFactory } from '@/swagger/transform/api';
import { FindConnectionsByMovesongEmailResp } from '@/swagger/transform/models/find-connections-by-movesong-email-resp';
import { GetItemsInYoutubePlaylistResp, GetTransformsByMovesongEmailResp } from '@/swagger/transform/';
import { ShareApiFactory } from '@/swagger/share/apis/share-api.ts';
import { GetSharesByMovesongEmailResp } from '@/swagger/share/models/get-shares-by-movesong-email-resp';
import { ShareDto } from '@/swagger/share/models/share-dto';
import { UpdateShareResp } from '@/swagger/share/models/update-share-resp';
import { CreateShareResp } from '@/swagger/share/models/create-share-resp';
import { UpdatePasswordResp, UserApiFactory } from '@/swagger/user';
const ProfileService = {

  userApi: UserApiFactory(axiosConfig),
  subscriptionApi: SubscriptionApiFactory(axiosConfig),
  transformApi: TransformApiFactory(axiosConfig),
  shareApi: ShareApiFactory(axiosConfig),

  findSubscriptionByUserEmail: async function(userEmail: string): Promise<FindSubscriptionResp> {
    const response = await this.subscriptionApi.findSubscriptionByUserEmail({
      userEmail,
    }, baseOptions);
    return response.data;
  },

  findConnectionsByMovesongEmail: async function(movesongEmail: string): Promise<FindConnectionsByMovesongEmailResp> {
    const response = await this.transformApi.findConnectionsByMovesongEmail({
      movesongEmail,
    }, baseOptions);
    return response.data;
  },

  getTransformsByMovesongEmail: async function(movesongEmail: string): Promise<GetTransformsByMovesongEmailResp> {
    const response = await this.transformApi.getTransformsByMovesongEmail({
      movesongEmail,
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

  getSharesByMovesongEmail: async function(movesongEmail: string): Promise<GetSharesByMovesongEmailResp> {
    const response = await this.shareApi.getSharesByMovesongEmail({
      movesongEmail,
    }, baseOptions);
    return response.data;
  },

  createShare: async function(share: ShareDto): Promise<CreateShareResp> {
    const response = await this.shareApi.createShare({
      share
    }, baseOptions);
    return response.data
  },

  updateShare: async function(share: ShareDto): Promise<UpdateShareResp> {
    const response = await this.shareApi.updateShare({
      share
    }, baseOptions);
    return response.data
  },

  updatePassword: async function(email: string, oldPassword: string, newPassword: string): Promise<UpdatePasswordResp> {
    const response = await this.userApi.updatePassword({
      email,
      oldPassword,
      newPassword,
    }, baseOptions);
    return response.data
  }
};

export default ProfileService;
