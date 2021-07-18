import { BlingCreateOrder, HttpPost, HttpPostParams } from '@/data/protocols'
import { OrderModel } from '@/domain/models'

export class BlingCreateOrderSpy implements BlingCreateOrder {
  orderModel: OrderModel

  async create (order: OrderModel): Promise<any> {
    this.orderModel = order
  }
}

export class HttpPostSpy implements HttpPost {
  params: HttpPostParams
  result: any = null

  async post (params: HttpPostParams): Promise<any> {
    this.params = params
    return this.result
  }
}
