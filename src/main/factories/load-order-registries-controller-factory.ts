import { Controller } from '@/presentation/protocols'
import { LoadOrderRegistriesController } from '@/presentation/controllers'
import { LoadOrderRegistriesService, LoadOrderRegistryByDateSevice } from '@/data/services'
import { OrderRegistryRepository } from '@/infra/db'

export const makeLoadOrderRegistriesController = (): Controller => {
  const repository = new OrderRegistryRepository()
  const loadOrderRegistriesService = new LoadOrderRegistriesService(repository)
  const loadOrderRegistryByDateService = new LoadOrderRegistryByDateSevice(repository)
  return new LoadOrderRegistriesController(loadOrderRegistriesService, loadOrderRegistryByDateService)
}
