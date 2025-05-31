import { MonthRevanueCard } from '@/pages/app/dashboard/month-revanue-card'
import { Helmet } from 'react-helmet-async'
import { MonthOrderAmountCard } from './month-orders-amount-card'
import { DayOrderAmountCard } from './day-orders-amount-card'
import { MonthCanceledOrderAmountCard } from './month-canceled-orders-amount-card'

export function Dashboard() {
    return (
        <>
            <Helmet title='Dashboard' />
            <div className='flex flex-col gap-4'>
                <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>

                <div className='grid grid-cols-4 gap-4'>
                    <MonthRevanueCard />
                    <MonthOrderAmountCard />
                    <DayOrderAmountCard />
                    <MonthCanceledOrderAmountCard />
                </div>
            </div>
        </>
    )
}