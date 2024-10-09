import { AxiosRequestConfig} from 'axios';
import { Configuration } from '@/swagger/user';

export const baseURL = 'http://localhost:8060';

export const baseOptions: AxiosRequestConfig = {
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}

export const axiosConfig: Configuration = new Configuration({
  baseOptions
})
