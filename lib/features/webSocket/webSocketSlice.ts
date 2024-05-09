import { createAppSlice } from '@/lib/createAppSlice'

export interface WebSocketSliceState {
  isConnected: boolean
  prices: {
    btc: number
    doge: number
    eth: number
    sol: number
  }
  priceChangePercent: number
}

const initialState: WebSocketSliceState = {
  isConnected: false,
  prices: {
    btc: 0,
    doge: 0,
    eth: 0,
    sol: 0,
  },
  priceChangePercent: 0,
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
    addLastPrice: (state, action) => {
      switch (action.payload.symbol) {
        case 'BTCUSDT':
          state.prices.btc = action.payload.price
          break
        case 'ETHUSDT':
          state.prices.eth = action.payload.price
          break
        case 'SOLUSDT':
          state.prices.sol = action.payload.price
          break
        case 'DOGEUSDT':
          state.prices.doge = action.payload.price
          break
      }
    },
  }),
  selectors: {
    selectPrices: (webSocket) => webSocket.prices,
  },
})

export const { connect, disconnect, addLastPrice } = webSocketSlice.actions

export const { selectPrices } = webSocketSlice.selectors
