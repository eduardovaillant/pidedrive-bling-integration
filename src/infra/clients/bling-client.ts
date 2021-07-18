import { blingOrderXmlHelper } from '@/infra/helpers'
import { BlingCreateOrder, HttpPost } from '@/data/protocols'
import { OrderModel } from '@/domain/models'
import env from '@/main/config/env'

export class BlingClient implements BlingCreateOrder {
  constructor (
    private readonly httpPost: HttpPost
  ) {}

  async create (order: OrderModel): Promise<any> {
    const xml = blingOrderXmlHelper(order)
    const response = await this.httpPost.post({
      url: env.blingBaseUrl + `pedido/json?apikey=${env.blingToken}&xml=${xml}`
    })
    return response
  }
}
