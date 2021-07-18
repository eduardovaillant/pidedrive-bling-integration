import { OrderModel } from '@/domain/models'

export interface BlingCreateOrder {
  create: (order: OrderModel) => Promise<any>
}
