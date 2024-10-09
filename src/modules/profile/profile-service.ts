import { axiosConfig, baseOptions } from '@/core/config/axiosConfig.ts';
import { FindSubscriptionResp, SubscriptionApiFactory } from '@/swagger/subscription';
import { TransformApiFactory } from '@/swagger/transform/api';
import { FindConnectionsByMovesongEmailResp } from '@/swagger/transform/models/find-connections-by-movesong-email-resp';
const ProfileService = {

  subscriptionApi: SubscriptionApiFactory(axiosConfig),
  transformApi: TransformApiFactory(axiosConfig),

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
  }
};

export default ProfileService;
