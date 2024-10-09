import { CheckForgotPasswordTokenResp, ForgotPasswordResp, ResendForgotPasswordResp, SaveForgotPasswordResp, UserApiFactory } from '@/swagger/user';
import { axiosConfig, baseOptions } from '@/core/config/axiosConfig.ts';

const ForgotPasswordService = {

  userApi: UserApiFactory(axiosConfig),

  forgotPassword: async function(email: string): Promise<ForgotPasswordResp> {
    const response = await this.userApi.forgotPassword({
      email,
    }, baseOptions);
    return response.data;
  },

  resendForgotPassword: async function(email: string): Promise<ResendForgotPasswordResp> {
    const response = await this.userApi.resendForgotPassword({
      email,
    }, baseOptions);
    return response.data;
  },

  checkForgotPasswordToken: async function(email: string, token: string): Promise<CheckForgotPasswordTokenResp> {
    const response = await this.userApi.checkForgotPasswordToken({
      email,
      token,
    }, baseOptions);
    return response.data;
  },

  saveForgotPassword: async function(token: string, newPassword: string): Promise<SaveForgotPasswordResp> {
    const response = await this.userApi.saveForgotPassword({
      token,
      newPassword,
    }, baseOptions);
    return response.data;
  },
};

export default ForgotPasswordService;
