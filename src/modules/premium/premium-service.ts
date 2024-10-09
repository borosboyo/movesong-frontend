import { axiosConfig, baseOptions } from '@/core/config/axiosConfig.ts';
import { FindSubscriptionResp, SaveSubscriptionResp, SubscriptionApiFactory, SubscriptionResp } from '@/swagger/subscription';

const PremiumService = {

  subscriptionApi: SubscriptionApiFactory(axiosConfig),

  subscription: async function(email: string, username: string, interval: string, productId: string): Promise<SubscriptionResp> {
    const response = await this.subscriptionApi.subscription({
      email,
      username,
      interval,
      productId,
    }, baseOptions);
    return response.data;
  },

  saveSubscription: async function(userId: number, userEmail: string, username: string, customerId: string ): Promise<SaveSubscriptionResp> {
    const response = await this.subscriptionApi.saveSubscription({
      userId,
      userEmail,
      username,
      customerId,
    }, baseOptions);
    return response.data;
  },

  findSubscriptionByUserEmail: async function(userEmail: string): Promise<FindSubscriptionResp> {
    const response = await this.subscriptionApi.findSubscriptionByUserEmail({
      userEmail,
    }, baseOptions);
    return response.data;
  }
};

export default PremiumService;
