import { configureStore } from '@reduxjs/toolkit'
import testReducer from './reducer/numberReducer'

export const store = configureStore({
    reducer: {
        testReducer: testReducer.reducer
    },
})