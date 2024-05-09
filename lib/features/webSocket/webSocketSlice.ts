import { createAppSlice } from '@/lib/createAppSlice'

export interface WebSocketSliceState {
  isConnected: boolean
  shouldReconnect: boolean
  pricesInfo: {
    prices: {
      btc: number
      doge: number
      eth: number
      sol: number
    }
    priceChangePercent: {
      btc: number
      doge: number
      eth: number
      sol: number
    }
  }
}

const initialState: WebSocketSliceState = {
  isConnected: false,
  shouldReconnect: true,
  pricesInfo: {
    prices: {
      btc: 0,
      doge: 0,
      eth: 0,
      sol: 0,
    },
    priceChangePercent: {
      btc: 0,
      doge: 0,
      eth: 0,
      sol: 0,
    },
  },
}

export const webSocketSlice = createAppSlice({
  name: 'websocket',
  initialState,
  reducers: (create) => ({
    connect: create.reducer((state) => {
      state.isConnected = true
    }),
    disconnect: create.reducer((state) => {
      state.isConnected = false
    }),
    reconnect: create.reducer((state) => {
      state.shouldReconnect = true
    }),
    abortReconnect: create.reducer((state) => {
      state.shouldReconnect = false
    }),
    addPriceInfo: (state, action) => {
      switch (action.payload.symbol) {
        case 'BTCUSDT':
          state.pricesInfo.prices.btc = action.payload.price
          state.pricesInfo.priceChangePercent.btc = action.payload.pricePercent
          break
        case 'ETHUSDT':
          state.pricesInfo.prices.eth = action.payload.price
          state.pricesInfo.priceChangePercent.eth = action.payload.pricePercent
          break
        case 'SOLUSDT':
          state.pricesInfo.prices.sol = action.payload.price
          state.pricesInfo.priceChangePercent.sol = action.payload.pricePercent
          break
        case 'DOGEUSDT':
          state.pricesInfo.prices.doge = action.payload.price
          state.pricesInfo.priceChangePercent.doge = action.payload.pricePercent
          break
      }
    },
  }),
  selectors: {
    selectIsConnected: (webSocket) => webSocket.isConnected,
    selectShouldReconnect: (webSocket) => webSocket.shouldReconnect,
    selectPricesInfo: (webSocket) => webSocket.pricesInfo,
  },
})

export const { connect, disconnect, reconnect, abortReconnect, addPriceInfo } =
  webSocketSlice.actions

export const { selectIsConnected, selectShouldReconnect, selectPricesInfo } =
  webSocketSlice.selectors
