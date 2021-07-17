import { OrderRegistryModel } from '@/domain/models'

export interface LoadOrderRegistriesRepository {
  load: () => Promise<OrderRegistryModel[]>
}
