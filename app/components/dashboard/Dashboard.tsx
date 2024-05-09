/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { connectWebSocket } from '@/lib/features/webSocket/webSocketConnect'
import {
  selectDashboardData,
  selectShouldReconnect,
} from '@/lib/features/webSocket/webSocketSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { useEffect } from 'react'

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
    <>
      {dashboardData.map((data) => {
        return (
          <div key={data.symbol}>
            {data.symbol} {data.price} {data.priceChangePercent}%
          </div>
        )
      })}
    </>
  )
}

export default Dashboard
