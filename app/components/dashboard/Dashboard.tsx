'use client'
import { connectWebSocket } from '@/lib/features/webSocket/webSocketConnect'
import {
  selectPricesInfo,
  selectShouldReconnect,
} from '@/lib/features/webSocket/webSocketSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { useEffect } from 'react'

const Dashboard = () => {
  const dispatch = useAppDispatch()
  const pricesInfo = useAppSelector(selectPricesInfo)
  const shouldReconnect = useAppSelector(selectShouldReconnect)

  useEffect(() => {
    if (shouldReconnect) {
      dispatch(connectWebSocket())
      // Mock de erro no webSocket
      // setTimeout(() => {
      //   console.log('desconectei')
      //   socket.close(1000, '')
      // }, 3000)
    }
  }, [dispatch, shouldReconnect])

  return (
    <>
      <div>
        BTC Bitcoin {pricesInfo.prices.btc} {pricesInfo.priceChangePercent.btc}%
      </div>
      <div>
        ETH Ethereum {pricesInfo.prices.eth} {pricesInfo.priceChangePercent.eth}
        %
      </div>
      <div>
        SOL Solana {pricesInfo.prices.sol} {pricesInfo.priceChangePercent.sol}%
      </div>
      <div>
        DOGE Dogecoin: {pricesInfo.prices.doge}{' '}
        {pricesInfo.priceChangePercent.doge}%
      </div>
    </>
  )
}

export default Dashboard
