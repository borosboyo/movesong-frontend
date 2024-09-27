import { axiosConfig, baseOptions } from '@/shared/config/axiosConfig.ts';
import { SubscriptionApiFactory, SubscriptionResp } from '@/swagger/subscription';

const PremiumService = {

  subscriptionApi: SubscriptionApiFactory(axiosConfig),

  subscription: async function(email: string, username: string, interval: string, productId: string): Promise<SubscriptionResp> {
    const response = await this.subscriptionApi.subscription({
      email: usernameOrEmail,
      username,
      interval,
      productId,
    }, baseOptions);
    return response.data;
  },
};
