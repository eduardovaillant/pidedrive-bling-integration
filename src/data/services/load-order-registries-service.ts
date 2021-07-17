import { LoadOrderRegistriesRepository } from '@/data/protocols'
import { OrderRegistryModel } from '@/domain/models'
import { LoadOrderRegistries } from '@/domain/usecases'

export class LoadOrderRegistriesService implements LoadOrderRegistries {
  constructor (
    private readonly loadOrderRegistriesRepository: LoadOrderRegistriesRepository
  ) {}

  async load (): Promise<OrderRegistryModel[]> {
    return await this.loadOrderRegistriesRepository.load()
  }
}
