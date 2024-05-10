/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/app/components/ui/table'
import { connectWebSocket } from '@/lib/features/webSocket/webSocketConnect'
import {
  selectDashboardData,
  selectShouldReconnect,
} from '@/lib/features/webSocket/webSocketSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { CurrencyFormatter } from '@/lib/utils'
import { useEffect } from 'react'
import DashboardSkeleton from '../ui/dashboard-skeleton'

const Dashboard = () => {
  const dispatch = useAppDispatch()
  const shouldReconnect = useAppSelector(selectShouldReconnect)
  const dashboardData = useAppSelector(selectDashboardData)

  const params = [
    'btcusdt@ticker',
    'solusdt@ticker',
    'ethusdt@ticker',
    'dogeusdt@ticker',
  ]

  useEffect(() => {
    if (shouldReconnect) {
      dispatch(connectWebSocket(params))

      // Mock de erro no webSocket
      // setTimeout(() => {
      //   console.log('desconectei')
      //   socket.close(1000, '')
      // }, 3000)
    }
  }, [dispatch, shouldReconnect])

  return (
    <div className="w-full h-screen flex justify-center flex-col items-center">
      <Table className="bg-primary rounded-md">
        <TableBody>
          {dashboardData.length === params.length ? (
            dashboardData.map((data) => (
              <TableRow key={data.symbol}>
                <TableCell className="text-left">{data.symbol}</TableCell>
                <TableCell>
                  {CurrencyFormatter({ value: data.price })}
                </TableCell>
                <TableCell
                  className={
                    data.priceChangePercent > 0 ? 'text-success' : 'text-error'
                  }
                >
                  {data.priceChangePercent}%
                </TableCell>
              </TableRow>
            ))
          ) : (
            <DashboardSkeleton />
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default Dashboard
