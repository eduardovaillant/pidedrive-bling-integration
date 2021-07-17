import { BlingAddOrder, GetPipedriveDeal } from '@/data/protocols'
import { AddOrder } from '@/domain/usecases'

export class AddOrderService implements AddOrder {
  constructor (
    private readonly getPipedriveDeal: GetPipedriveDeal,
    private readonly blingAddOrder: BlingAddOrder
  ) {}

  async add (dealId: number): Promise<void> {
    await this.blingAddOrder.add(null)
    await this.getPipedriveDeal.get(dealId)
  }
}
