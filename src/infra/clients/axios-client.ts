
import { HttpGet, HttpGetParams } from '@/data/protocols'

import axios from 'axios'

export class AxiosHttpClient implements HttpGet {
  async get <T = any> (args: HttpGetParams): Promise<T> {
    const result = await axios.get(args.url, { params: args.params })
    return result.data
  }
}
