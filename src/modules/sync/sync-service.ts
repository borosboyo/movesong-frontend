import { axiosConfig, baseOptions } from '@/core/config/axiosConfig.ts';
import { TransformApiFactory } from '@/swagger/transform/api';
import { CreateSyncResp, SyncDto } from '@/swagger/transform';


const SyncService = {

  transformApi: TransformApiFactory(axiosConfig),

  createSync: async function(sync: SyncDto): Promise<CreateSyncResp> {
    const response = await this.transformApi.createSync({
      sync
    }, baseOptions);
    return response.data
  },
};


export default SyncService;
