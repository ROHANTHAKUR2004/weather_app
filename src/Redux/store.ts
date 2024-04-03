import { configureStore } from "@reduxjs/toolkit"
import ForecastReducer from './Slice/ForecastSlice'
const store  = configureStore({
    reducer :{
       forecast :  ForecastReducer
    },
    devTools: true,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})

})

export type AppDispatch = typeof store.dispatch;
export default store;