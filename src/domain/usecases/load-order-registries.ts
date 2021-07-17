import { OrderRegistryModel } from '@/domain/models'

export interface LoadOrderRegistries {
  load: () => Promise<OrderRegistryModel[]>
}
