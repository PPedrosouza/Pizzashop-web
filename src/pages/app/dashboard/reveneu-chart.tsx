import { GetDailyRevenueInPeriod } from "@/api/get-daily-revenue-in-period";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DateRagePicker } from "@/components/ui/data-range-picker";
import { Label } from "@/components/ui/label";
import { useQuery } from "@tanstack/react-query";
import {
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Line
} from 'recharts'
import colors from 'tailwindcss/colors'

export function RevenueChart() {
    const { data: dailyRevenueInPeriod } = useQuery({
        queryKey: ['metrics', 'daily-revenue-in-period'],
        queryFn: GetDailyRevenueInPeriod
    })

    return (
        <Card className="col-span-6">
            <CardHeader className="flex-row items-center justify-between pb-8">
                <div className="space-y-1">
                    <CardTitle className="tex-base font-medium">Receita no período</CardTitle>
                    <CardDescription>Receita diária no período</CardDescription>
                </div>

                <div className="flex items-center gap-3">
                    <Label>Período</Label>
                    <DateRagePicker />
                </div>
            </CardHeader>

            {dailyRevenueInPeriod && (
                <CardContent>
                    <ResponsiveContainer width='100%' height={240}>
                        <LineChart data={dailyRevenueInPeriod} style={{ fontSize: 12 }}>
                            <XAxis
                                dataKey='date'
                                axisLine={false}
                                tickLine={false}
                                dy={16}
                            />
                            <YAxis
                                stroke='#888'
                                axisLine={false}
                                tickLine={false}
                                width={80}
                                tickFormatter={(value: number) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            />

                            <CartesianGrid
                                vertical={false}
                                className="stroke-muted"
                            />

                            <Line type='linear' strokeWidth={2} dataKey='receipt' stroke={colors.violet['500']} />

                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            )}
        </Card >

    )
}
