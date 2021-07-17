import { OrderModel } from '@/domain/models'

export interface AddOrder {
  add: (order: OrderModel) => Promise<void>
}
