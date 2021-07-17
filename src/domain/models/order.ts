import { Product } from './product'

export interface Order {
  clientName: string
  product: Product
  productCount: number
  totalValue: number
}
