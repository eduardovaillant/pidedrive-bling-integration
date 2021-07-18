import { OrderModel, OrderRegistryModel } from '@/domain/models'
import { AddOrder, LoadOrderRegistries } from '@/domain/usecases'
import { mockOrderRegistryModel } from '@/tests/domain/mocks/order'

export class AddOrderSpy implements AddOrder {
  orderModel: OrderModel

  async add (order: OrderModel): Promise<void> {
    this.orderModel = order
  }
}

export class LoadOrderRegistriesSpy implements LoadOrderRegistries {
  registries: OrderRegistryModel[] = [mockOrderRegistryModel()]

  async load (): Promise<OrderRegistryModel[]> {
    return this.registries
  }
}
