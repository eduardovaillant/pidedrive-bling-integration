import { OrderModel, OrderRegistryModel } from '@/domain/models'

export const mockOrderModel = (): OrderModel => ({
  clientName: 'any_name',
  productCount: 1,
  totalValue: 100
})

export const mockOrderRegistryModel = (): OrderRegistryModel => ({
  id: 'any_id',
  date: '2021-07-18',
  totalValue: 100
})
