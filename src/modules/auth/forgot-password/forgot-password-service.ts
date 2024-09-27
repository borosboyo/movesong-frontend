import { ForgotPasswordResp, ResendForgotPasswordResp, SaveForgotPasswordResp, UserApiFactory } from '@/swagger/user';
import { axiosConfig, baseOptions } from '@/shared/config/axiosConfig.ts';

const ForgotPasswordService = {

  userApi: UserApiFactory(axiosConfig),

  forgotPassword: async function(email: string): Promise<ForgotPasswordResp> {
    const response = await this.userApi.forgotPassword({
      email: usernameOrEmail,
    }, baseOptions);
    return response.data;
  },

  resendForgotPassword: async function(email: string): Promise<ResendForgotPasswordResp> {
    const response = await this.userApi.resendForgotPassword({
      email: usernameOrEmail,
    }, baseOptions);
    return response.data;
  },

  saveForgotPassword: async function(token: string, newPassword: string): Promise<SaveForgotPasswordResp> {
    const response = await this.userApi.saveForgotPassword({
      token,
      newPassword,
    }, baseOptions);
    return response.data;
  }
};
