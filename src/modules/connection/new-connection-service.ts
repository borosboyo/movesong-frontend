import { axiosConfig, baseOptions } from '@/core/config/axiosConfig.ts';
import { ConnectSpotifyAccountResp, ConnectYoutubeAccountResp } from '@/swagger/transform/models';
import { UserApiFactory } from '@/swagger/user';
import { TransformApiFactory } from '@/swagger/transform/api';

const NewConnectionService = {

  userApi: UserApiFactory(axiosConfig),
  connectionApi: TransformApiFactory(axiosConfig),

  connectYoutubeAccount: async function(code: string, movesongEmail: string): Promise<ConnectYoutubeAccountResp> {
    const response = await this.connectionApi.connectYoutubeAccount({
      code,
      movesongEmail
    }, baseOptions);
    return response.data;
  },

  connectSpotifyAccount: async function(code: string, state: string, movesongEmail: string): Promise<ConnectSpotifyAccountResp> {
    const response = await this.connectionApi.connectSpotifyAccount({
      code,
      state,
      movesongEmail
    }, baseOptions);
    return response.data;
  }
};

export default NewConnectionService;
