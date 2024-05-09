import { AppDispatch } from '@/lib/store'
import { addLastPrice, connect, disconnect } from './webSocketSlice'

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
  }
  socket.onmessage = (event) => {
    const obj = JSON.parse(event.data)
    const payload = {
      symbol: obj.s,
      price: obj.c,
    }
    dispatch(addLastPrice(payload))
  }
  socket.onclose = () => {
    dispatch(disconnect())
  }
  return socket
}
