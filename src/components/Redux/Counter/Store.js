import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './CounterCreate'

const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})

export default store