
import { HttpPost, HttpPostParams } from '@/data/protocols'

import axios from 'axios'

export class AxiosHttpClient implements HttpPost {
  async post (params: HttpPostParams): Promise<any> {
    const result = await axios.post(params.url)
    return result
  }
}
