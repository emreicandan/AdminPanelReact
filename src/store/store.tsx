import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import productReducer from '../features/productSlice'
import categoryReducer from '../features/categorySlice'

export const store = configureStore({
  reducer: {
    user : userReducer,
    product : productReducer,
    category : categoryReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck:false
  })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch