import { EnableResp, UserApiFactory } from '@/swagger/user';
import { axiosConfig, baseOptions } from '@/shared/config/axiosConfig.ts';

const RegisterService = {

  userApi: UserApiFactory(axiosConfig),

  enable: async function(token: string): Promise<EnableResp> {
    const response = await this.userApi.enable({
      token,
    }, baseOptions);
    return response.data;
  },

  resendEnable: async function(email: string): Promise<EnableResp> {
    const response = await this.userApi.resendEnable({
      email: usernameOrEmail,
    }, baseOptions);
    return response.data;
  }
};

export default RegisterService;
