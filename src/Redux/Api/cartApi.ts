import baseApi from "./baseApi";

const cartApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addCart: builder.mutation({
            query: (data) => {
                return {
                    url: '/cart/create-cart',
                    method: 'POST',
                    body: data
                }
            },
            invalidatesTags: ['cart']
        }),
        getCart: builder.query({
            query: () => ({
                url: '/cart/get-cart',
                method: 'GET'
            }),
            providesTags: ['cart']
        })
    })
})

export const { useAddCartMutation, useGetCartQuery } = cartApi