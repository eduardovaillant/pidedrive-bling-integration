import { OrderRegistryModel } from '@/domain/models'

export interface LoadOrderRegistryByDateRepository {
  loadByDate: (date: string) => Promise<OrderRegistryModel>
}
