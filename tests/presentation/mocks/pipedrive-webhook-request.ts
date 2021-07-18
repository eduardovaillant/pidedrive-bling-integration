import { HttpRequest } from '@/presentation/protocols'

export const mockPipedriveWebhookRequest = (): HttpRequest => (
  {
    body: {
      v: 1,
      matches_filters: {
        current: [],
        previous: []
      },
      meta: {
        v: 1,
        action: 'added',
        object: 'deal',
        change_source: 'app',
        id: 1,
        company_id: 1,
        user_id: 1,
        host: 'company.pipedrive.com',
        timestamp: 1523440213,
        timestamp_micro: 1523440213384700,
        permitted_user_ids: [],
        trans_pending: false,
        is_bulk_update: false,
        pipedrive_service_name: false,
        matches_filters: {
          current: [],
          previous: []
        },
        webhook_id: 1
      },
      retry: 0,
      current: {
        status: 'won',
        value: 100,
        person_name: 'any_name',
        products_count: 1
      },
      previous: null,
      event: 'event name'
    }
  }
)
