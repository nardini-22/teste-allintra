import { createAppSlice } from '@/lib/createAppSlice'

export interface WebSocketSliceState {
  isConnected: boolean
  shouldReconnect: boolean
  dashboardData: {
    symbol: string
    price: number
    priceChangePercent: number
  }[]
}

const initialState: WebSocketSliceState = {
  isConnected: false,
  shouldReconnect: true,
  dashboardData: [],
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
    addDashboardData: (state, action) => {
      const handleFilterArray = (array, newObj) => {
        const filteredArray = array.filter(
          (item) => item.symbol !== newObj.symbol,
        )
        const newArray = [...filteredArray, newObj]

        return newArray.sort((a, b) => {
          if (a.symbol < b.symbol) {
            return -1
          } else if (a.symbol > b.symbol) {
            return 1
          } else {
            return 0
          }
        })
      }
      state.dashboardData = handleFilterArray(
        state.dashboardData,
        action.payload,
      )
    },
  }),
  selectors: {
    selectIsConnected: (webSocket) => webSocket.isConnected,
    selectShouldReconnect: (webSocket) => webSocket.shouldReconnect,
    selectDashboardData: (webSocket) => webSocket.dashboardData,
  },
})

export const {
  connect,
  disconnect,
  reconnect,
  abortReconnect,
  addDashboardData,
} = webSocketSlice.actions

export const { selectIsConnected, selectShouldReconnect, selectDashboardData } =
  webSocketSlice.selectors
