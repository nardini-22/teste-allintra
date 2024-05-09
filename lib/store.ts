import { webSocketSlice } from '@/lib/features/webSocket/webSocketSlice'
import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { Tuple, combineSlices, configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'

const rootReducer = combineSlices(webSocketSlice)

export type RootState = ReturnType<typeof rootReducer>

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: () => new Tuple(thunk),
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
