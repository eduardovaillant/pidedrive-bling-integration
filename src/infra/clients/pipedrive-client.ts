import { GetPipedriveDeal, HttpGet } from '@/data/protocols'
import env from '@/main/config/env'

export class PipeDriveClient implements GetPipedriveDeal {
  constructor (
    private readonly httpGet: HttpGet
  ) {}

  async get (id: number): Promise<any> {
    const response = await this.httpGet.get({
      url: env.pipedriveBaseURL + 'deals/1/?api_token=27ca3408e6f2fbecd49138f0413bc3b57617d060',
      params: {
        id: 1
      }
    })
    console.log(response.data)
    return response
  }
}
