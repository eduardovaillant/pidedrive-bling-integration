import { MongoHelper, OrderRegistryRepository } from '@/infra/db'

import { Collection } from 'mongodb'

let orderRegistriesCollection: Collection

const makeSut = (): OrderRegistryRepository => {
  return new OrderRegistryRepository()
}

describe('OrderRegistryRepository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    orderRegistriesCollection = await MongoHelper.getCollection('orderRegistries')
    await orderRegistriesCollection.deleteMany({})
  })

  describe('add()', () => {
    test('should create a new registry if its a new date', async () => {
      const sut = makeSut()
      await sut.add(100)

      const orderRegistry = await orderRegistriesCollection.findOne({
        date: new Date().toISOString().split('T')[0]
      })

      expect(orderRegistry).toBeTruthy()
    })

    test('should update the registry if date already exists', async () => {
      const sut = makeSut()
      await orderRegistriesCollection.insertOne({ date: new Date().toISOString().split('T')[0], value: 100 })

      await sut.add(100)

      const orderRegistry = await orderRegistriesCollection.findOne({
        date: new Date().toISOString().split('T')[0]
      })

      expect(orderRegistry.value).toBe(200)
    })
  })

  describe('load()', () => {
    test('should return an empty array if there is no registries', async () => {
      const sut = makeSut()
      const registries = await sut.load()
      expect(registries).toEqual([])
    })

    test('should return an array of OrderRegistries on success', async () => {
      const sut = makeSut()
      await orderRegistriesCollection.insertOne({ date: new Date().toISOString().split('T')[0], value: 100 })
      const orderRegistry = await orderRegistriesCollection.findOne({ date: new Date().toISOString().split('T')[0] })
      const registries = await sut.load()
      expect(registries[0].id).toEqual(orderRegistry._id)
    })
  })

  describe('load()', () => {
    test('should return an null if no registry was found', async () => {
      const sut = makeSut()
      const registry = await sut.loadByDate('2021-07-18')
      expect(registry).toBeFalsy()
    })

    test('should return a OrderRegistry on success', async () => {
      const sut = makeSut()
      await orderRegistriesCollection.insertOne({ date: new Date().toISOString().split('T')[0], value: 100 })
      const orderRegistry = await orderRegistriesCollection.findOne({ date: new Date().toISOString().split('T')[0] })
      const registry = await sut.loadByDate('2021-07-18')
      expect(registry.id).toEqual(orderRegistry._id)
    })
  })
})
