import { api } from '@/lib/axios'

export interface GetMonthCanceledOrdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthCanceledOrdersAmount(): Promise<GetMonthCanceledOrdersAmountResponse> {
  const response = await api.get<GetMonthCanceledOrdersAmountResponse>(
    '/metrics/month-canceled-orders-amount'
  )

  const data = response.data ?? {}

  return {
    amount:
      typeof data.amount === 'number' && !isNaN(data.amount)
        ? data.amount
        : 0,
    diffFromLastMonth:
      typeof data.diffFromLastMonth === 'number' &&
      !isNaN(data.diffFromLastMonth)
        ? data.diffFromLastMonth
        : 0,
  }
}
