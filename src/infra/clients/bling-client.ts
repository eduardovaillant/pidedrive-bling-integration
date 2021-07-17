import { blingOrderXmlHelper } from '@/infra/helpers'
import { BlingAddOrder, HttpPost } from '@/data/protocols'
import env from '@/main/config/env'

export class BlingClient implements BlingAddOrder {
  constructor (
    private readonly httpPost: HttpPost
  ) {}

  async add (order: any): Promise<any> {
    const xml = blingOrderXmlHelper(order)
    const response = await this.httpPost.post({
      url: env.blingBaseUrl + `pedido/json?apikey=${env.blingToken}&xml=${xml}`
    })
    return response
  }
}
