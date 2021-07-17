
import { HttpGet, HttpGetParams, HttpPost, HttpPostParams } from '@/data/protocols'

import axios from 'axios'

export class AxiosHttpClient implements HttpGet, HttpPost {
  async get <T = any> (args: HttpGetParams): Promise<T> {
    const result = await axios.get(args.url, { params: args.params })
    return result.data
  }

  async post (params: HttpPostParams): Promise<any> {
    const result = await axios.post(params.url)
    return result
  }
}
