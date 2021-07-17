import { GetPipedriveDeal, HttpGet } from '@/data/protocols'
import env from '@/main/config/env'

export class PipedriveClient implements GetPipedriveDeal {
  constructor (
    private readonly httpGet: HttpGet
  ) {}

  async get (id: number): Promise<any> {
    const response = await this.httpGet.get({
      url: env.pipedriveBaseURL + `deals/${id}/?api_token=${env.pipedriveToken}`,
      params: {
        id
      }
    })
    return response
  }
}
