/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import DashboardSkeleton from '@/app/components/ui/dashboard-skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/app/components/ui/table'
import { webSocketParams } from '@/lib/constants'
import { connectWebSocket } from '@/lib/features/webSocket/webSocketConnect'
import {
  selectDashboardData,
  selectShouldReconnect,
} from '@/lib/features/webSocket/webSocketSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { currencyFormatter, percentageFormatter } from '@/lib/utils'
import { useEffect } from 'react'

const Dashboard = () => {
  const dispatch = useAppDispatch()
  const shouldReconnect = useAppSelector(selectShouldReconnect)
  const dashboardData = useAppSelector(selectDashboardData)

  useEffect(() => {
    if (shouldReconnect) {
      dispatch(connectWebSocket(webSocketParams))

      // Mock de erro no webSocket
      // setTimeout(() => {
      //   socket.close(1000, '')
      // }, 3000)
    }
  }, [dispatch, shouldReconnect])

  return (
    <div className="w-full h-screen flex justify-center flex-col items-center">
      <Table className="bg-primary rounded-md">
        <TableBody>
          {dashboardData.length === webSocketParams.length ? (
            dashboardData.map((data) => (
              <TableRow key={data.symbol}>
                <TableCell className="text-left">{data.symbol}</TableCell>
                <TableCell>
                  {currencyFormatter({ value: data.price })}
                </TableCell>
                <TableCell
                  className={
                    data.priceChangePercent > 0 ? 'text-success' : 'text-error'
                  }
                >
                  {percentageFormatter(data.priceChangePercent)}
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
