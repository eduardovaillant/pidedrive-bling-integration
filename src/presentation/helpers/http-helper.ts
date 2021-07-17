
import { HttpResponse } from '@/presentation/protocols'

export const ok = (data: any): HttpResponse => (
  {
    statusCode: 200,
    body: {
      data
    }
  }
)

export const notFound = (): HttpResponse => (
  {
    statusCode: 404,
    body: {
      detail: 'Not found'
    }
  }
)

export const serverError = (error: Error): HttpResponse => (
  {
    statusCode: 500,
    body: {
      error: 'InternalServerError',
      detail: error.message
    }
  }
)
