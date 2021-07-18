import { LoadOrderRegistryByDateRepository } from '@/data/protocols'
import { OrderRegistryModel } from '@/domain/models'
import { LoadOrderRegistryByDate } from '@/domain/usecases'

export class LoadOrderRegistryByDateSevice implements LoadOrderRegistryByDate {
  constructor (
    private readonly loadOrderRegistryByDateRepository: LoadOrderRegistryByDateRepository
  ) {}

  async loadByDate (date: string): Promise<OrderRegistryModel> {
    return await this.loadOrderRegistryByDateRepository.loadByDate(date)
  }
}
