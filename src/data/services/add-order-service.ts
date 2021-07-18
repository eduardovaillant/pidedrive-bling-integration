import { AddOrderRegistryRepository, BlingCreateOrder } from '@/data/protocols'
import { OrderModel } from '@/domain/models'
import { AddOrder } from '@/domain/usecases'

export class AddOrderService implements AddOrder {
  constructor (
    private readonly blingCreateOrder: BlingCreateOrder,
    private readonly addOrderRegistryRepository: AddOrderRegistryRepository
  ) {}

  async add (order: OrderModel): Promise<void> {
    const response = await this.blingCreateOrder.create(order)
    if (response.status !== 201) {
      throw new Error('Bling Error')
    }
    await this.addOrderRegistryRepository.add(order.totalValue)
  }
}
