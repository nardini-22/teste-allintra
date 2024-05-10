import { AppDispatch } from '@/lib/store'
import {
  abortReconnect,
  addDashboardData,
  connect,
  disconnect,
  reconnect,
} from './webSocketSlice'

export const connectWebSocket =
  (params: string[]) => (dispatch: AppDispatch) => {
    const socket = new WebSocket(process.env.NEXT_WEBSOCKET_URL)

    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          method: 'SUBSCRIBE',
          params,
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
          priceChangePercent: obj.P,
        }
        dispatch(addDashboardData(payload))
      }
    }

    socket.onclose = () => {
      dispatch(disconnect())
      dispatch(reconnect())
    }

    return socket
  }
