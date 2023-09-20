import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const cocktailApi = createApi({
  reducerPath: 'cocktailApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'www.thecocktaildb.com/api/json/v1/1/filter.php?c=' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `Cocktail`,
    }),



  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery,useLazyGetAllCocktailQuery} =cocktailApi