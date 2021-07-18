
import { HttpResponse } from '@/presentation/protocols'

export const ok = (data: any): HttpResponse => (
  {
    statusCode: 200,
    body: {
      data
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
