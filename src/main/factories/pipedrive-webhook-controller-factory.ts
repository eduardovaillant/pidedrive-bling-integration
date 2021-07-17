import { Controller } from '@/presentation/protocols'
import { PipedriveWebhookController } from '@/presentation/controllers'
import { AddOrderService } from '@/data/services'
import { AxiosHttpClient, BlingClient } from '@/infra/clients'
import { OrderRegistryRepository } from '@/infra/db'

export const makePipedriveWebhookController = (): Controller => {
  const axiosClient = new AxiosHttpClient()
  const blingClient = new BlingClient(axiosClient)
  const orderRegistryRepository = new OrderRegistryRepository()
  const addOrderService = new AddOrderService(blingClient, orderRegistryRepository)
  return new PipedriveWebhookController(addOrderService)
}
