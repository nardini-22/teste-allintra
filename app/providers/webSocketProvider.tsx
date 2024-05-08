'use client'
import { createContext, useContext, useMemo } from "react"

const WebSocketContext = createContext({} as any)

export const isBrowser = typeof window !== "undefined"

export const WebSocketProvider=({children}: any) => {
  const wsInstance = useMemo(() => {
    if(isBrowser){
      const ws = new WebSocket('wss://stream.binance.com:9443/ws')
      ws.onopen = () => {
        ws.send(JSON.stringify({
            "method": "SUBSCRIBE",
            "params":
            [
            "btcusdt@ticker",
            "solusdt@ticker",
            "ethusdt@ticker",
            ],
            "id": 1
        }))
      }
      return ws
    }
  },[])
  return <WebSocketContext.Provider value={{wsInstance}}>{children}</WebSocketContext.Provider>
}

export const useWebSocket= () => useContext(WebSocketContext)