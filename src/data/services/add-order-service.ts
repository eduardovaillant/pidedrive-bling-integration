import { GetPipedriveDeal } from '@/data/protocols'
import { AddOrder } from '@/domain/usecases'

export class AddOrderService implements AddOrder {
  constructor (
    private readonly getPipedriveDeal: GetPipedriveDeal
  ) {}

  async add (dealId: number): Promise<void> {
    const deal = await this.getPipedriveDeal.get(dealId)
    console.log(deal)
  }
}
