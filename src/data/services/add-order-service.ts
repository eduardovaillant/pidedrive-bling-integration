import { BlingAddOrder } from '@/data/protocols'
import { OrderModel } from '@/domain/models'
import { AddOrder } from '@/domain/usecases'

export class AddOrderService implements AddOrder {
  constructor (
    private readonly blingAddOrder: BlingAddOrder
  ) {}

  async add (order: OrderModel): Promise<void> {
    await this.blingAddOrder.add(order)
  }
}
