import { BlingCreateOrder, HttpPost, HttpPostParams } from '@/data/protocols'
import { OrderModel } from '@/domain/models'

export class BlingCreateOrderSpy implements BlingCreateOrder {
  postResponse: any = { status: 201 }
  orderModel: OrderModel

  async create (order: OrderModel): Promise<any> {
    this.orderModel = order
    return this.postResponse
  }
}

export class HttpPostSpy implements HttpPost {
  params: HttpPostParams
  response: any = null

  async post (params: HttpPostParams): Promise<any> {
    this.params = params
    return this.response
  }
}
