import { EnableResp, UserApiFactory } from '@/swagger/user';
import { axiosConfig, baseOptions } from '@/core/config/axiosConfig.ts';

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
      email,
    }, baseOptions);
    return response.data;
  }
};

export default RegisterService;
