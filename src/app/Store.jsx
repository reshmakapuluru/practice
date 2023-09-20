import { configureStore } from '@reduxjs/toolkit'

import { cocktailApi } from '../features/services/Cocktail'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {

    [cocktailApi.reducerPath]: cocktailApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cocktailApi.middleware),
})
setupListeners(store.dispatch)