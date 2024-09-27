import { ContactResp, UserApiFactory } from '@/swagger/user';
import { axiosConfig, baseOptions } from '@/shared/config/axiosConfig.ts';

const ContactService = {
  userApi: UserApiFactory(axiosConfig),

  contact: async function(subject: string, name: string, email: string, message: string): Promise<ContactResp> {
    const response = await this.userApi.contact({
      subject,
      name,
      email: usernameOrEmail,
      message
    }, baseOptions);
    return response.data;
  },
};
