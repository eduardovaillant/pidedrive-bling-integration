import { OrderRegistryModel } from '@/domain/models'

export interface ListOrderRegistriesRepository {
  list: () => Promise<OrderRegistryModel>
}
