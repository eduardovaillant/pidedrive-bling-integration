import { OrderRegistryModel } from '@/domain/models'

export interface LoadOrderRegistryByDate {
  loadByDate: (date: string) => Promise<OrderRegistryModel>
}
