import { Controller } from '@/presentation/protocols'
import { LoadOrderRegistriesController } from '@/presentation/controllers'
import { LoadOrderRegistriesService } from '@/data/services'
import { OrderRegistryRepository } from '@/infra/db'

export const makeLoadOrderRegistriesController = (): Controller => {
  const repository = new OrderRegistryRepository()
  const service = new LoadOrderRegistriesService(repository)
  return new LoadOrderRegistriesController(service)
}
