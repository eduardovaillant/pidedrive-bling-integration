import { MongoHelper } from './mongo-helper'
import { AddOrderRegistryRepository, LoadOrderRegistriesRepository } from '@/data/protocols'
import { OrderRegistryModel } from '@/domain/models'

export class OrderRegistryRepository implements AddOrderRegistryRepository, LoadOrderRegistriesRepository {
  async add (value: number): Promise<void> {
    const orderRegistriesCollection = await MongoHelper.getCollection('orderRegistries')
    const date = new Date().toISOString().split('T')[0]
    await orderRegistriesCollection.findOneAndUpdate(
      {
        date: date
      },
      {
        $inc: {
          value: value
        },
        $setOnInsert: {
          date: date
        }
      },
      {
        upsert: true
      }
    )
  }

  async load (): Promise<OrderRegistryModel[]> {
    const orderRegistriesCollection = await MongoHelper.getCollection('orderRegistries')
    const registries = await orderRegistriesCollection.find().toArray()
    return MongoHelper.mapCollection(registries)
  }
}
