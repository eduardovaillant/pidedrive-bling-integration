import { AddOrderRegistryRepository, LoadOrderRegistriesRepository, LoadOrderRegistryByDateRepository } from '@/data/protocols'
import { OrderRegistryModel } from '@/domain/models'
import { mockOrderRegistryModel } from '@/tests/domain/mocks/order'

export class AddOrderRegistryRepositorySpy implements AddOrderRegistryRepository {
  value: number

  async add (value: number): Promise<void> {
    this.value = value
  }
}

export class LoadOrderRegistriesRepositorySpy implements LoadOrderRegistriesRepository {
  registries: OrderRegistryModel[] = [mockOrderRegistryModel()]

  async load (): Promise<OrderRegistryModel[]> {
    return this.registries
  }
}

export class LoadOrderRegistryByDateRepositorySpy implements LoadOrderRegistryByDateRepository {
  registry: OrderRegistryModel = mockOrderRegistryModel()
  date: string

  async loadByDate (date: string): Promise<OrderRegistryModel> {
    this.date = date
    return this.registry
  }
}
