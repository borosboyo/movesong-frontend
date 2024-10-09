import { ContactResp, UserApiFactory } from '@/swagger/user';
import { axiosConfig, baseOptions } from '@/core/config/axiosConfig.ts';

const ContactService = {
  userApi: UserApiFactory(axiosConfig),

  contact: async function(subject: string, name: string, email: string, message: string): Promise<ContactResp> {
    const response = await this.userApi.contact({
      subject,
      name,
      email,
      message
    }, baseOptions);
    return response.data;
  },
};

export default ContactService;
