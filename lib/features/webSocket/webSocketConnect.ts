import { AppDispatch } from '@/lib/store'
import {
  abortReconnect,
  addPriceInfo,
  connect,
  disconnect,
  reconnect,
} from './webSocketSlice'

export const connectWebSocket = () => (dispatch: AppDispatch) => {
  const socket = new WebSocket('wss://stream.binance.com:9443/ws')
  socket.onopen = () => {
    socket.send(
      JSON.stringify({
        method: 'SUBSCRIBE',
        params: [
          'btcusdt@ticker',
          'solusdt@ticker',
          'ethusdt@ticker',
          'dogeusdt@ticker',
        ],
        id: 1,
      }),
    )
    dispatch(connect())
    dispatch(abortReconnect())
  }

  socket.onmessage = (event) => {
    const obj = JSON.parse(event.data)
    if (obj.result !== null) {
      const payload = {
        symbol: obj.s,
        price: obj.c,
        pricePercent: obj.P,
      }
      dispatch(addPriceInfo(payload))
    }
  }

  socket.onclose = () => {
    dispatch(disconnect())
    dispatch(reconnect())
  }

  return socket
}
