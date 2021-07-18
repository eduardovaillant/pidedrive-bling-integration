import { AddOrderRegistryRepository, BlingCreateOrder } from '@/data/protocols'
import { OrderModel } from '@/domain/models'
import { AddOrder } from '@/domain/usecases'

export class AddOrderService implements AddOrder {
  constructor (
    private readonly blingCreateOrder: BlingCreateOrder,
    private readonly addOrderRegistryRepository: AddOrderRegistryRepository
  ) {}

  async add (order: OrderModel): Promise<void> {
    await this.blingCreateOrder.create(order)
    await this.addOrderRegistryRepository.add(order.totalValue)
  }
}
