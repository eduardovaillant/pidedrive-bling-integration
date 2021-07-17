import { MongoHelper } from './mongo-helper'
import { AddOrderRegistryRepository } from '@/data/protocols'

export class OrderRegistryRepository implements AddOrderRegistryRepository {
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
}
